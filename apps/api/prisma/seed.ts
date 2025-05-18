import prisma from '.';

async function main() {
  await prisma.product.createMany({
    data: [
      {
        sku: 'SMA-APP-IPH-121',
        slug: 'iphone-5s',
        name: 'iPhone 5s',
        description:
          "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        price: 199.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp',
        stockQuantity: 25,
        minimumOrderQuantity: 3,
      },
      {
        sku: 'SMA-APP-IPH-122',
        slug: 'iphone-6',
        name: 'iPhone 6',
        description:
          'The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.',
        price: 299.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp',
        stockQuantity: 60,
        minimumOrderQuantity: 5,
      },
      {
        sku: 'SMA-APP-IPH-123',
        slug: 'iphone-13-pro',
        name: 'iPhone 13 Pro',
        description:
          'The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.',
        price: 1099.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp',
        stockQuantity: 56,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-APP-IPH-124',
        slug: 'iphone-x',
        name: 'iPhone X',
        description:
          'The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.',
        price: 899.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp',
        stockQuantity: 37,
        minimumOrderQuantity: 2,
      },
      {
        sku: 'SMA-OPP-OPP-125',
        slug: 'oppo-a57',
        name: 'Oppo A57',
        description:
          'The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.',
        price: 249.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp',
        stockQuantity: 19,
        minimumOrderQuantity: 3,
      },
      {
        sku: 'SMA-OPP-OPP-126',
        slug: 'oppo-f19-pro-plus',
        name: 'Oppo F19 Pro Plus',
        description:
          'The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.',
        price: 399.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp',
        stockQuantity: 78,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-OPP-OPP-127',
        slug: 'oppo-k1',
        name: 'Oppo K1',
        description:
          'The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.',
        price: 299.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp',
        stockQuantity: 55,
        minimumOrderQuantity: 4,
      },
      {
        sku: 'SMA-REA-REA-128',
        slug: 'realme-c35',
        name: 'Realme C35',
        description:
          'The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.',
        price: 149.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp',
        stockQuantity: 48,
        minimumOrderQuantity: 3,
      },
      {
        sku: 'SMA-REA-REA-129',
        slug: 'realme-x',
        name: 'Realme X',
        description:
          'The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.',
        price: 299.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp',
        stockQuantity: 12,
        minimumOrderQuantity: 3,
      },
      {
        sku: 'SMA-REA-REA-130',
        slug: 'realme-xt',
        name: 'Realme XT',
        description:
          'The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.',
        price: 349.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp',
        stockQuantity: 80,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-REA-REA-131',
        slug: 'samsung-galaxy-s7',
        name: 'Samsung Galaxy S7',
        description:
          'The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.',
        price: 299.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp',
        stockQuantity: 67,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-REA-REA-132',
        slug: 'samsung-galaxy-s8',
        name: 'Samsung Galaxy S8',
        description:
          'The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.',
        price: 499.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp',
        stockQuantity: 0,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-REA-REA-133',
        slug: 'samsung-galaxy-s10',
        name: 'Samsung Galaxy S10',
        description:
          'The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.',
        price: 699.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp',
        stockQuantity: 19,
        minimumOrderQuantity: 2,
      },
      {
        sku: 'SMA-REA-REA-134',
        slug: 'vivo-s1',
        name: 'Vivo S1',
        description:
          'The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.',
        price: 249.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp',
        stockQuantity: 50,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-VIV-VIV-135',
        slug: 'vivo-v9',
        name: 'Vivo V9',
        description:
          'The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.',
        price: 299.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp',
        stockQuantity: 82,
        minimumOrderQuantity: 2,
      },
      {
        sku: 'SMA-VIV-VIV-136',
        slug: 'vivo-x21',
        name: 'Vivo X21',
        description:
          'The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.',
        price: 499.99,
        imageUrl: 'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp',
        stockQuantity: 7,
        minimumOrderQuantity: 2,
      },
      {
        sku: 'SMA-VIV-VIV-137',
        slug: 'selfie-stick-monopod',
        name: 'Selfie Stick Monopod',
        description:
          'The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.',
        price: 12.99,
        stockQuantity: 100,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SMA-VIV-VIV-138',
        slug: 'tv-studio-camera-pedestal',
        name: 'TV Studio Camera Pedestal',
        description:
          'The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.',
        price: 499.99,
        stockQuantity: 5,
        minimumOrderQuantity: 1,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
