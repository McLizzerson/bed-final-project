import { PrismaClient } from "@prisma/client";

const deleteReview = async (id) => {
  const prisma = new PrismaClient();

  const deletedReview = await prisma.review.deleteMany({
    where: {
      id: id,
    },
  });

  //   Implement 404 not found!
  if (!deletedReview || deletedReview.count === 0) {
    console.log("oops, this review wasn't found!");
  }

  return id;
};

export default deleteReview;
