import { PrismaClient } from "@prisma/client";

const getBookingById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueBooking = prisma.booking.findUnique({
    where: {
      id: id,
    },
  });

  //   implement error handling of not found!
  if (!uniqueBooking) {
    console.log("oops booking was not found");
  }

  return uniqueBooking;
};

export default getBookingById;
