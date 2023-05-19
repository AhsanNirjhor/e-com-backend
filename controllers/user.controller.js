import { createUser,getAllUsers,getUserById,getUserByEmail } from "../datastores/user.datastore";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import bycrypt from "bycrypt";

dotenv.config();
export const registerUserController = async(req, res) => {
    if(!req.body.name || !req.body.email || req.body.password){
        return res.status(400).null;
    }
    const {name,email,password,address} = req.body ;
    const user = await getUserByEmail(email);
    if (user){
        return res.status(400).json({
            "message": "User already exists"
        });
    }
    const hash = await bycrypt.hash(password,10);
    const newUser = await createUser(name,email,hash,address);
    return res.status(201).json(newUser);
}

export const loginUser = async(req, res) => {
    const {email,password} = req.body;
    const user = await getUserByEmail(email);
    if(!user){
        return res.status(400).json;
    }
    const matchPassword = await bycrypt.compare(password, user.password);
    if(!matchPassword){
        return res.status(400).null;
    }
    const jwtToken = jwt.sign(
        {
            id: user.id,
        },
        process.env.SECRET ,
        {
            expiresIn : "5d"
        },
    );
    return res.status(201).json(jwtToken);

}