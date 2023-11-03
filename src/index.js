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

const app = express();

// Sentry code
Sentry.init({
  dsn: "https://4585695cbf24560b06f56dc800b26c5a@o4505986791047168.ingest.sentry.io/4506161634607104",
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

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
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

// End
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
