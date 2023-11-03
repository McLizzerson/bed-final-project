import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const deleteBooking = async (id) => {
  const prisma = new PrismaClient();

  const deletedBooking = await prisma.booking.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedBooking || deletedBooking.count === 0) {
    throw new NotFoundError("booking", id);
  }

  return id;
};

export default deleteBooking;
