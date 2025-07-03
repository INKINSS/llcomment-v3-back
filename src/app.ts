import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/config";
import { publicRoutes } from "./routes";

//middlewares
dotenv.config({
	path:
		process.env.NODE_ENV === "production"
			? ".env.production.local"
			: ".env.development.local",
});

const app = express();

// Connect to MongoDB
connectDB();

// Public routes
app.use("/", publicRoutes);

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

export default app;
