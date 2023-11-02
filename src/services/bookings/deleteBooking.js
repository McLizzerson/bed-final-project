import { PrismaClient } from "@prisma/client";

const deleteBooking = async (id) => {
  const prisma = new PrismaClient();

  const deletedBooking = await prisma.booking.deleteMany({
    where: {
      id: id,
    },
  });

  //   Implement 404 not found!
  if (!deletedBooking || deletedBooking.count === 0) {
    console.log("oops this booking was not found!");
  }

  return id;
};

export default deleteBooking;
