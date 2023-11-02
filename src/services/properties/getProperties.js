import { PrismaClient } from "@prisma/client";

const getProperties = async (location, pricePerNight) => {
  const prisma = new PrismaClient();

  const listings = await prisma.property.findMany({
    where: {
      location,
      pricePerNight,
      // amenities is in assignment but not a key within properties!!
    },
  });
  return listings;
};

export default getProperties;
