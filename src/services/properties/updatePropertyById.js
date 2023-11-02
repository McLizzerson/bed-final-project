import { PrismaClient } from "@prisma/client";

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

  //   implement error handling
  if (!updatedProperty || updatedProperty.count === 0) {
    console.log("couldn't find this property");
  }

  return {
    message: `Property with id: ${id}, was updated succesfully!`,
  };
};

export default updatePropertyById;
