import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const getAmenityById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueAmenity = await prisma.amenity.findUnique({
    where: {
      id: id,
    },
  });

  if (!uniqueAmenity) {
    throw new NotFoundError("amenity", id);
  }

  return uniqueAmenity;
};

export default getAmenityById;
