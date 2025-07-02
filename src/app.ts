import express from "express";
import { publicRoutes } from "./routes";

const app = express();

// Public routes
app.use("/", publicRoutes);

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

export default app;
