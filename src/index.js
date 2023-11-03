import express from "express";
import * as Sentry from "@sentry/node";
import "dotenv/config";

import amenityRouter from "./routes/amenities.js";
import userRouter from "./routes/users.js";
import hostRouter from "./routes/hosts.js";
import reviewRouter from "./routes/reviews.js";
import propertyRouter from "./routes/properties.js";
import bookingRouter from "./routes/bookings.js";
import loginRouter from "./routes/login.js";
import errorHandler from "./middleware/errorHandler.js";
import logMiddleware from "./middleware/logMiddleware.js";

const app = express();

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});
// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// Main body of app
app.use(express.json());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/amenities", amenityRouter);
app.use("/hosts", hostRouter);
app.use("/reviews", reviewRouter);
app.use("/properties", propertyRouter);
app.use("/bookings", bookingRouter);

// Error handling below
// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
