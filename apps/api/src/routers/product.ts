import prisma from '../../prisma';
import { publicProcedure, router } from '../lib/trpc';

export const productRouter = router({
  getProducts: publicProcedure.query(async () => {
    // TODO: implement filter

    const result = await prisma.product.findMany({
      select: {
        slug: true,
        name: true,
        price: true,
        imageUrl: true,
        stockQuantity: true,
        minimumOrderQuantity: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      items: result,

      // TODO: implement cursor pagination
      meta: {
        totalItems: result.length,
        nextCursor: '',
        prevCursor: '',
      },
    };
  }),
});
