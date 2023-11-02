import { PrismaClient } from "@prisma/client";

const getReviewById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueReview = prisma.review.findUnique({
    where: {
      id: id,
    },
  });

  //   implement error handling of not found!
  if (!uniqueReview) {
    console.log("oops something went wrong");
  }
  return uniqueReview;
};

export default getReviewById;
