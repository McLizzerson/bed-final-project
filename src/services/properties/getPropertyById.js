import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const getPropertyById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueProperty = await prisma.property.findUnique({
    where: {
      id: id,
    },
  });

  if (!uniqueProperty) {
    throw new NotFoundError("property", id);
  }

  return uniqueProperty;
};

export default getPropertyById;
