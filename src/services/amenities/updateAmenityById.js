import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const updateAmenityById = async (id, name) => {
  const prisma = new PrismaClient();

  const updatedAmenity = await prisma.amenity.updateMany({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });

  if (!updatedAmenity || updatedAmenity.count === 0) {
    throw new NotFoundError("amenity", id);
  }

  return {
    message: `Amenity with id: ${id}, was updated succesfully!`,
  };
};

export default updateAmenityById;
