import { PrismaClient } from "@prisma/client";

const deleteAmenity = async (id) => {
  const prisma = new PrismaClient();

  const deletedAmenity = await prisma.amenity.deleteMany({
    where: {
      id: id,
    },
  });

  //   Implement 404 not found!
  //   if (!deleteBook || deleteBook.count === 0) {
  //     throw new NotFoundError("Category", id);
  //   }

  return id;
};

export default deleteAmenity;
