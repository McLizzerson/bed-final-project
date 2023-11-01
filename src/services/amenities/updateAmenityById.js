import { PrismaClient } from "@prisma/client";

const updateAmenityById = async (id, name) => {
  const prisma = new PrismaClient();

  const updatedAmenity = prisma.amenity.updateMany({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });

  //   implement error handling
  // id not found

  return {
    message: `Amenity with id: ${id}, was updated succesfully!`,
  };
};

export default updateAmenityById;
