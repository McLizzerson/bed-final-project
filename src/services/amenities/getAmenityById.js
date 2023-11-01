import { PrismaClient } from "@prisma/client";

const getAmenityById = async (id) => {
  const prisma = new PrismaClient();

  return prisma.amenity.findUnique({
    where: {
      id: id,
    },
  });

  //   implement error handling of not found!
};

export default getAmenityById;
