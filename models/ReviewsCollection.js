const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, minLength: 1 },
		description: { type: String, required: true, minLength: 1 },
		light: { type: int, required: true, default: 0 },
        //temp: { type: int, required: true, default: 0},
        price: { type: int, required: true, default: 0},
        rating: { type: int, default: 0}, //will be updated with every review in array
        reviews: [Review]
	},
	{ timestamps: true }
);

// creating our model based on the schema for the resource COLLECTION from the database
// .model - "name of model", schema
const ReviewsCollection = mongoose.model("PlantsCollection", reviewSchema);
// NOTE each file can only have ONE export
module.exports = ReviewsCollection;