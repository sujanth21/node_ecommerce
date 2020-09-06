const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

//Import routes
const userRoutes = require("./routes/user");

require("./config/db");

const app = express();

//Routes
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
