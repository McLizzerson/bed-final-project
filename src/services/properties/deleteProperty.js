import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const deleteProperty = async (id) => {
  const prisma = new PrismaClient();

  const deletedProperty = await prisma.property.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedProperty || deletedProperty.count === 0) {
    throw new NotFoundError("property", id);
  }

  return id;
};

export default deleteProperty;
