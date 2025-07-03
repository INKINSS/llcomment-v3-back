import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const response = await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@samdev.envslru.mongodb.net/llcomment-dev?retryWrites=true&w=majority&appName=samdev`,
		);
		if (!response) throw new Error("Failed to connect to MongoDB");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
};
