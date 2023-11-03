import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const deleteReview = async (id) => {
  const prisma = new PrismaClient();

  const deletedReview = await prisma.review.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedReview || deletedReview.count === 0) {
    throw new NotFoundError("review", id);
  }

  return id;
};

export default deleteReview;
