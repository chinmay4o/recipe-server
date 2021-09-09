import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    img:{
        type: String
    },
    title: {
        type: String
    },
    ingredients: [String]
});

export const Recipes = mongoose.model("recipes1" , recipeSchema);