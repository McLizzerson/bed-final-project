import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const getReviewById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueReview = await prisma.review.findUnique({
    where: {
      id: id,
    },
  });

  if (!uniqueReview) {
    throw new NotFoundError("review", id);
  }
  return uniqueReview;
};

export default getReviewById;
