import express from 'express';
import dotenv from "dotenv";
import {Recipes} from "../model/recipeModel.js";

dotenv.config({path: "./config.env"});
const router = express.Router();

router.get("/all" , async(req ,res) => {
    const allRecipes = await Recipes.find();
    res.send(allRecipes);
})

router.post("/addrecipe" , async (req, res) => {
    const {img,title,ingredients} = req.body;

    if(!img || !title || !ingredients){
        res.status(401).json({message: "pls fill all the details"});
    } else {
        try{
          const newRecipe = new Recipes({img, title, ingredients});

          await newRecipe.save();
          res.json({message: "success"});
        } catch(e){
          console.log(e);
          res.status(422).json({error: e});
        }
    }
});

router.patch("/editrecipe" , async (req , res) => {
    const {img,title,ingredients} = req.body;

    res.send("sucess");
})

export const recipeRouter = router;