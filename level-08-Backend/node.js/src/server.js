require("express-async-errors");
const express = require("express");
const app = express();
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const routes = require("./routes");

app.use(express.json());
app.use(routes);
migrationsRun();

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
