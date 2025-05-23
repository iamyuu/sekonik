INSERT INTO "brand" ("name", "slug") SELECT 'Apple', 'apple' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Apple');
INSERT INTO "brand" ("name", "slug") SELECT 'Oppo', 'oppo' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Oppo');
INSERT INTO "brand" ("name", "slug") SELECT 'Realme', 'realme' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Realme');
INSERT INTO "brand" ("name", "slug") SELECT 'Samsung', 'samsung' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Samsung');
INSERT INTO "brand" ("name", "slug") SELECT 'Vivo', 'vivo' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Vivo');
INSERT INTO "brand" ("name", "slug") SELECT 'Asus', 'asus' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Asus');
INSERT INTO "brand" ("name", "slug") SELECT 'Huawei', 'huawei' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Huawei');
INSERT INTO "brand" ("name", "slug") SELECT 'Lenovo', 'lenovo' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Lenovo');
INSERT INTO "brand" ("name", "slug") SELECT 'Dell', 'dell' WHERE NOT EXISTS (SELECT 1 FROM "brand" WHERE "name" = 'Dell');

INSERT INTO "category" ("name", "slug", "imageUrl") SELECT 'Smartphone', 'smartphone', 'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp' WHERE NOT EXISTS (SELECT 1 FROM "category" WHERE "name" = 'Smartphone');
INSERT INTO "category" ("name", "slug", "imageUrl") SELECT 'Laptop', 'laptop', 'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp' WHERE NOT EXISTS (SELECT 1 FROM "category" WHERE "name" = 'Laptop');
INSERT INTO "category" ("name", "slug", "imageUrl") SELECT 'Tablet', 'tablet', 'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp' WHERE NOT EXISTS (SELECT 1 FROM "category" WHERE "name" = 'Tablet');

INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMDR6Y1XTSQ5QHBWFQ',
  'SMA-APP-IPH-121',
  'iPhone 5s',
  'iphone-5s',
  'The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it''s an older model, it still provides a reliable user experience.',
  199.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'apple'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  12.91,
  25,
  3,
  2,
  '{"width":5.29,"height":18.38,"depth":17.72}',
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp',
  true
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-5s');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-5s');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-5s');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMQMM68YD21JFRRJFR',
  'SMA-APP-IPH-122',
  'iPhone 6',
  'iphone-6',
  'The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.',
  299.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'apple'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  6.69,
  60,
  5,
  7,
  '{"width":11,"height":9.1,"depth":9.67}',
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-6');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-6');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-6');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMNS7YHD8TSXBW1V01',
  'SMA-APP-IPH-123',
  'iPhone 13 Pro',
  'iphone-13-pro',
  'The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.',
  1099.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'apple'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  9.37,
  56,
  1,
  8,
  '{"width":12.63,"height":5.28,"depth":14.29}',
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-13-pro');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-13-pro');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-13-pro');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMV593X8MFN2V8RKTD',
  'SMA-APP-IPH-124',
  'iPhone X',
  'iphone-x',
  'The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.',
  899.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'apple'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  19.59,
  37,
  2,
  1,
  '{"width":21.88,"height":24.19,"depth":14.19}',
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-x');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-x');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'iphone-x');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGM9D1ATZ2Q8E1VNMKK',
  'SMA-OPP-OPP-125',
  'Oppo A57',
  'oppo-a57',
  'The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.',
  249.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'oppo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  2.43,
  19,
  3,
  5,
  '{"width":7.2,"height":10.74,"depth":23.68}',
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-a57');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-a57');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-a57');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMK82QHH9MBC4KY98Y',
  'SMA-OPP-OPP-126',
  'Oppo F19 Pro Plus',
  'oppo-f19-pro-plus',
  'The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.',
  399.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'oppo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  18.64,
  78,
  1,
  6,
  '{"width":6.78,"height":25.17,"depth":8.4}',
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp',
  true
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-f19-pro-plus');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-f19-pro-plus');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-f19-pro-plus');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMGKZ4YSSSD309HW5B',
  'SMA-OPP-OPP-127',
  'Oppo K1',
  'oppo-k1',
  'The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.',
  299.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'oppo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  18.29,
  55,
  5,
  5,
  '{"width":13.89,"height":10.63,"depth":16.6}',
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-k1');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-k1');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-k1');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'oppo-k1');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMK8SGR4JMBKNTXZA6',
  'SMA-REA-REA-128',
  'Realme C35',
  'realme-c35',
  'The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.',
  149.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'realme'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  15.3,
  48,
  3,
  2,
  '{"width":25.28,"height":8.14,"depth":29.53}',
  'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-c35');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-c35');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-c35');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGMDF4VFNSRA5KXQF6F',
  'SMA-REA-REA-129',
  'Realme X',
  'realme-x',
  'The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.',
  299.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'realme'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  6.95,
  12,
  3,
  4,
  '{"width":25.59,"height":21.42,"depth":12.75}',
  'https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-x');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-x');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-x');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNTR87ZQYBZX254F7P',
  'SMA-REA-REA-130',
  'Realme XT',
  'realme-xt',
  'The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.',
  349.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'realme'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  11.51,
  80,
  3,
  3,
  '{"width":24.98,"height":26.73,"depth":6.5}',
  'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-xt');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-xt');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'realme-xt');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGN3JEJTB48ZP4NJSAT',
  'SMA-SAM-SAM-131',
  'Samsung Galaxy S7',
  'samsung-galaxy-s7',
  'The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.',
  299.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'samsung'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  19.55,
  67,
  1,
  10,
  '{"width":13.55,"height":24.24,"depth":5.63}',
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp',
  true
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s7');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s7');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s7');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNJQ8T8PH1WSMTQ828',
  'SMA-SAM-SAM-132',
  'Samsung Galaxy S8',
  'samsung-galaxy-s8',
  'The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.',
  499.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'samsung'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  19.45,
  0,
  4,
  6,
  '{"width":23.05,"height":26.88,"depth":15.73}',
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s8');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s8');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s8');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGN7P3CHBPC63VYMP7K',
  'SMA-SAM-SAM-133',
  'Samsung Galaxy S10',
  'samsung-galaxy-s10',
  'The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.',
  699.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'samsung'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  5.59,
  19,
  2,
  9,
  '{"width":27.41,"height":15.26,"depth":27.02}',
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s10');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s10');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-s10');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNFN2NYEN69BME1VRV',
  'SMA-VIV-VIV-134',
  'Vivo S1',
  'vivo-s1',
  'The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.',
  249.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'vivo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  10.17,
  50,
  1,
  4,
  '{"width":14.06,"height":11.79,"depth":6.78}',
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-s1');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-s1');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-s1');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNNDK7E0K9Y5JRJXN8',
  'SMA-VIV-VIV-135',
  'Vivo V9',
  'vivo-v9',
  'The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.',
  299.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'vivo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  17.67,
  82,
  2,
  4,
  '{"width":19.85,"height":21.83,"depth":13.04}',
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-v9');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-v9');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-v9');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNQ5QTWR0BED4098NW',
  'SMA-VIV-VIV-136',
  'Vivo X21',
  'vivo-x21',
  'The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.',
  499.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'vivo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'smartphone'),
  17.41,
  7,
  3,
  10,
  '{"width":22.49,"height":21.62,"depth":27.88}',
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp',
  true
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-x21');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-x21');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'vivo-x21');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNX9F7E55KYQBE75WD',
  'LAP-APP-APP-078',
  'Apple MacBook Pro 14 Inch Space Grey',
  'apple-macbook-pro-14-inch-space-grey',
  'The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple''s M1 Pro chip for exceptional performance and a stunning Retina display.',
  1999.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'apple'),
  (SELECT "id" FROM "category" WHERE "slug" = 'laptop'),
  4.69,
  24,
  1,
  9,
  '{"width":20.03,"height":9.54,"depth":14.82}',
  'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'apple-macbook-pro-14-inch-space-grey');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'apple-macbook-pro-14-inch-space-grey');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'apple-macbook-pro-14-inch-space-grey');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGN5JHAQVC3J6H58YE4',
  'LAP-ASU-ASU-079',
  'Asus Zenbook Pro Dual Screen Laptop',
  'asus-zenbook-pro-dual-screen-laptop',
  'The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.',
  1799.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'asus'),
  (SELECT "id" FROM "category" WHERE "slug" = 'laptop'),
  11.14,
  45,
  1,
  9,
  '{"width":16.6,"height":11.49,"depth":10.89}',
  'https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'asus-zenbook-pro-dual-screen-laptop');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'asus-zenbook-pro-dual-screen-laptop');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'asus-zenbook-pro-dual-screen-laptop');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNEXTG2SE61EGMRGFG',
  'LAP-HUA-HUA-080',
  'Huawei Matebook X Pro',
  'huawei-matebook-x-pro',
  'The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.',
  1399.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'huawei'),
  (SELECT "id" FROM "category" WHERE "slug" = 'laptop'),
  9.38,
  75,
  1,
  9,
  '{"width":18.21,"height":22.83,"depth":17.26}',
  'https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'huawei-matebook-x-pro');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'huawei-matebook-x-pro');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'huawei-matebook-x-pro');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNAYBBBC64MXPDJXBV',
  'LAP-LEN-LEN-081',
  'Lenovo Yoga 920',
  'lenovo-yoga-920',
  'The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.',
  1099.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'lenovo'),
  (SELECT "id" FROM "category" WHERE "slug" = 'laptop'),
  6.55,
  40,
  1,
  9,
  '{"width":20.84,"height":22.68,"depth":17.39}',
  'https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'lenovo-yoga-920');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'lenovo-yoga-920');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'lenovo-yoga-920');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNDP47CK53EYFR0E4W',
  'LAP-DEL-DEL-082',
  'New DELL XPS 13 9300 Laptop',
  'new-dell-xps-13-9300-laptop',
  'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
  1499.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'dell'),
  (SELECT "id" FROM "category" WHERE "slug" = 'laptop'),
  11.89,
  74,
  1,
  2,
  '{"width":13.76,"height":29,"depth":21.42}',
  'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
  true
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'new-dell-xps-13-9300-laptop');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'new-dell-xps-13-9300-laptop');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'new-dell-xps-13-9300-laptop');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNPJRPGXBXA8DY6MQF',
  'TAB-APP-IPA-159',
  'iPad Mini 2021 Starlight',
  'ipad-mini-2021-starlight',
  'The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.',
  499.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'apple'),
  (SELECT "id" FROM "category" WHERE "slug" = 'tablet'),
  3.64,
  47,
  3,
  5,
  '{"width":17.03,"height":5.34,"depth":29.62}',
  'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'ipad-mini-2021-starlight');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'ipad-mini-2021-starlight');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'ipad-mini-2021-starlight');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'ipad-mini-2021-starlight');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNVP9W1QFWEHB50D6W',
  'TAB-SAM-SAM-160',
  'Samsung Galaxy Tab S8 Plus Grey',
  'samsung-galaxy-tab-s8-plus-grey',
  'The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it''s ideal for productivity and entertainment.',
  599.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'samsung'),
  (SELECT "id" FROM "category" WHERE "slug" = 'tablet'),
  13.31,
  62,
  1,
  1,
  '{"width":6.11,"height":25.85,"depth":26.85}',
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-s8-plus-grey');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-s8-plus-grey');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-s8-plus-grey');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-s8-plus-grey');
INSERT INTO "product" ("id", "sku", "name", "slug", "description", "price", "brandId", "categoryId", "discountPercentage", "stockQuantity", "minimumOrderQuantity", "weight", "dimensions", "thumbnailUrl", "featured")
SELECT
  '01JVW2HFGNV904ARMJSH819XXQ',
  'TAB-SAM-SAM-161',
  'Samsung Galaxy Tab White',
  'samsung-galaxy-tab-white',
  'The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.',
  349.99,
  (SELECT "id" FROM "brand" WHERE "slug" = 'samsung'),
  (SELECT "id" FROM "category" WHERE "slug" = 'tablet'),
  18.2,
  92,
  5,
  5,
  '{"width":15.05,"height":5.37,"depth":11.82}',
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp',
  false
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-white');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-white');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-white');
INSERT INTO "product_image" ("url", "productId")
SELECT
  'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp',
  (SELECT "id" FROM "product" WHERE "slug" = 'samsung-galaxy-tab-white');