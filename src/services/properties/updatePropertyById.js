import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const updatePropertyById = async (
  id,
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  const prisma = new PrismaClient();

  const updatedProperty = await prisma.property.updateMany({
    where: {
      id: id,
    },
    data: {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    },
  });

  if (!updatedProperty || updatedProperty.count === 0) {
    throw new NotFoundError("property", id);
  }

  return {
    message: `Property with id: ${id}, was updated succesfully!`,
  };
};

export default updatePropertyById;
