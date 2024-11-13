require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/connect");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// ------------------------------------Deployment logic-------------------------------------
const __dirname1 = path.resolve();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("App running successfully");
  });
}
// ------------------------------------Deployment logic End-------------------------------------

const startServer = async () => {
  try {
    const db = await connectDB();
    app.set("db", db);

    app.use("/api/auth", authRoutes);
    app.use("/api/todos", todoRoutes);
    app.use("/api/user/profile", userRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(`Falied to start server: ${error}`);
  }
};

startServer();
