import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const getBookingById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueBooking = await prisma.booking.findUnique({
    where: {
      id: id,
    },
  });

  if (!uniqueBooking) {
    throw new NotFoundError("booking", id);
  }

  return uniqueBooking;
};

export default getBookingById;
