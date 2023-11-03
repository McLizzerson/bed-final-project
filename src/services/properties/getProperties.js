import { PrismaClient } from "@prisma/client";

const getProperties = async (location, pricePerNight, amenities) => {
  const prisma = new PrismaClient();

  const listings = await prisma.property.findMany({
    where: {
      location,
      pricePerNight,
      amenities,
      // amenities is in assignment but not a key within property data!
    },
  });
  return listings;
};

export default getProperties;
