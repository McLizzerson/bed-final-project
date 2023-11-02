import { PrismaClient } from "@prisma/client";

const getPropertyById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueProperty = prisma.property.findUnique({
    where: {
      id: id,
    },
  });

  //   implement error handling of not found!
  if (!uniqueProperty) {
    console.log("oops property was not found");
  }

  return uniqueProperty;
};

export default getPropertyById;
