/**
 * We will use data from https://dummyjson.com to populate the database,
 * because the data is in JSON format, so we need to convert it to SQL insert statements.
 */

// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck

const tableMap = {
  brand: 'brand',
  category: 'category',
  product: 'product',
  image: 'product_image',
}

const dirPath = Bun.main.replace('factories.ts', '')
const productsData = await Bun.file(`${dirPath}/product.json`).json()

function escapeSqlString(str?: string) {
  // Replace single quotes with two single quotes
  return str.replace(/'/g, '\'\'')
}

function slugify(str: string) {
  // Replace special characters and spaces with hyphens and make it lowercase
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-')
}

// Generate SQL insert statements
function generateSql(products: typeof productsData) {
  let sql = ''

  // Insert Brands (if not exists)
  const brands = [...new Set(products.map(product => product.brand))]
  brands.forEach((brand) => {
    sql += `INSERT INTO "${tableMap.brand}" ("name", "slug") SELECT '${escapeSqlString(brand)}', '${slugify(brand)}' WHERE NOT EXISTS (SELECT 1 FROM "${tableMap.brand}" WHERE "name" = '${escapeSqlString(brand)}');\n`
  })

  sql += '\n'

  // Insert Categories (if not exists)
  const categories = [...new Set(products.map(product => product.category))]
  categories.forEach((category) => {
    const categoryImage = products.find(product => product.category === category)?.images?.[0]
    sql += `INSERT INTO "${tableMap.category}" ("name", "slug", "imageUrl") SELECT '${escapeSqlString(category)}', '${slugify(category)}', '${escapeSqlString(categoryImage)}' WHERE NOT EXISTS (SELECT 1 FROM "${tableMap.category}" WHERE "name" = '${escapeSqlString(category)}');\n`
  })

  // Insert Products
  products.forEach((product, index) => {
    sql += `
INSERT INTO "${tableMap.product}" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '${escapeSqlString(product.id)}',
  '${escapeSqlString(product.sku)}',
  '${escapeSqlString(product.name)}',
  '${slugify(product.name)}',
  '${escapeSqlString(product.description)}',
  ${product.price},
  (SELECT "id" FROM "${tableMap.brand}" WHERE "slug" = '${slugify(product.brand)}'),
  (SELECT "id" FROM "${tableMap.category}" WHERE "slug" = '${slugify(product.category)}'),
  ${product.discountPercentage},
  ${product.stockQuantity},
  ${product.minimumOrderQuantity},
  ${product.weight},
  '${JSON.stringify(product.dimensions)}',
  '${escapeSqlString(product.thumbnailUrl)}',
  ${index % 5 === 0 ? 'true' : 'false'}
ON CONFLICT ("slug") DO NOTHING;\n`

    // Insert Images for Product
    product.images.forEach((imageUrl) => {
      sql += `
INSERT INTO "${tableMap.image}" ("url", "productId")
SELECT
  '${escapeSqlString(imageUrl)}',
  (SELECT "id" FROM "${tableMap.product}" WHERE "slug" = '${slugify(product.name)}');`
    })
  })

  return sql
}

// Save SQL to a file
const sql = generateSql(productsData)
await Bun.write(`${dirPath}/init.sql`, sql)
