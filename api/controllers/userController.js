import User from "../models/User.js";


export const updateUser = async (req, res, next)=>{
    try{
        const updetedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updetedUser)
    }catch(error){
        next(error)
    }
}

export const deleteUser = async (req, res, next)=>{
    try{
        const deletedUser = await Flight.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted")
    }catch(error){
        next(error)
    }
}

export const getUser =  async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json
    }
}


export const getUsers = async (req, res, next)=>{
        try{
            const users = await User.find()
            res.status(200).json(users)
        }catch(error){
            next(error)
        }
}
