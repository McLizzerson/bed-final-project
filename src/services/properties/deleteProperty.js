import { PrismaClient } from "@prisma/client";

const deleteProperty = async (id) => {
  const prisma = new PrismaClient();

  const deletedProperty = await prisma.property.deleteMany({
    where: {
      id: id,
    },
  });

  //   Implement 404 not found!
  if (!deletedProperty || deletedProperty.count === 0) {
    console.log("oops this property was not found!");
  }

  return id;
};

export default deleteProperty;
