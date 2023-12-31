import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

import getReviews from "../services/reviews/getReviews.js";
import createReview from "../services/reviews/createReview.js";
import getReviewById from "../services/reviews/getReviewById.js";
import updateReviewById from "../services/reviews/updateReviewById.js";
import deleteReview from "../services/reviews/deleteReview.js";

const reviewRouter = express.Router();

reviewRouter.get("/", async (req, res, next) => {
  try {
    const reviews = await getReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
});

reviewRouter.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { userId, propertyId, rating, comment } = req.body;
    const newReview = await createReview(userId, propertyId, rating, comment);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

reviewRouter.get(
  "/:id",
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const review = await getReviewById(id);
      res.status(200).json(review);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

reviewRouter.put(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { userId, propertyId, rating, comment } = req.body;
      const updatedReview = await updateReviewById(
        id,
        userId,
        propertyId,
        rating,
        comment
      );
      res.status(200).json(updatedReview);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

reviewRouter.delete(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedReview = await deleteReview(id);
      res.status(200).json({
        message: `review with id:${deletedReview}, has been deleted succesfully!`,
      });
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

export default reviewRouter;
