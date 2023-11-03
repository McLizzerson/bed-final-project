const errorHandler = (err, req, res, next) => {
  if (err.name !== "NotFoundError") {
    console.error(err);
    res.status(500).json({
      message:
        "An error occurred on the server, please double-check your request!",
    });
  }
};

export default errorHandler;
