import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const deleteAmenity = async (id) => {
  const prisma = new PrismaClient();

  const deletedAmenity = await prisma.amenity.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedAmenity || deletedAmenity.count === 0) {
    throw new NotFoundError("amenity", id);
  }

  return id;
};

export default deleteAmenity;
