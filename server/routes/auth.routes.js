const express = require("express")
const bcrypt = require("bcrypt")
const Admin = require("../models/admin.model")

const router = express.Router();

router
.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    if(!email){
        return res.status(400).json({err: "Email is required"});
    }
    if(!password){
        return res.status(400).json({err: "Password is required"});
    }

    try {
        const existingAdmin = await Admin.findOne({email: email})
        if(!existingAdmin){
            return res.status(400).json({err:"Admin not found"})
        }

        const checked = await bcrypt.compare(password, existingAdmin.hashedPassword);
        if(!checked){
            return res.status(401).json({err: "Incorrect Password"});
        }

        return res.status(200).json({msg: "Login Successfully"})

    } catch (error) {
        return res.status(500).json({err: "Something went wrong"})
    }

}).post('/register', async(req,res)=>{
    const {name, email, password} = req.body;
    if(!name){
        return res.status(400).json({err: "Name is required"});
    }
    if(!email){
        return res.status(400).json({err: "Email is required"});
    }
    if(!password){
        return res.status(400).json({err: "Password is required"});
    }

    const salt = bcrypt.genSalt(6);
    const hashedPassword = bcrypt.hash(password, salt)

    try {
        const newAdmin = await Admin.create({
            name, 
            email,
            hashedPassword
        })
        return res.status(200).json({msg: "Admin Created Successfully"})
    } catch (error) {
        return res.status(500).json({err: "Something went wrong"})
    }

})

module.exports = router
