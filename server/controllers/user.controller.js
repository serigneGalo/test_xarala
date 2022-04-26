const User = require('../models/object.model');

module.exports.addUser = (req,res)=>{
    const user = new User(req.body);
    user.save((err,user)=>{
        (err)?  res.status(400).json({error: err}):
                res.status(200).json({user});
    });
}

module.exports.getUsers = (req,res)=>{
    User.find((err,user)=>{
        (err)? res.status(400).json({error:err}):
                res.status(200).json(user)
    })
}

module.exports.deleteUser = (req,res)=>{
    User.findByIdAndRemove(req.params.id, (err,user)=>{
        (err)? res.status(400).json({error:err}):
                res.status(200).json({message :"user deleted"})
    })
}

module.exports.updateUser = (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body,(err,user)=>{
        (err)? (res.status(400).json({error: err})):
                (res.status(200).json({message:"user updated"}))
    })
}

module.exports.getUser = (req, res) => {
    User.findById(req.params.id,(err, user)=>{
        if(err){
            res.status(404).json({ message: err })
        }
        else{
            res.status(200).json(user);
        }
    })
}


/* module.exports.addUser = (req,res)=>{
    const USER = JSON.parse(req.body.user);
    const user = new User({
        ...USER,
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    user.save((err,user)=>{
        (err)?  res.status(400).json({error: err}):
                res.status(200).json({user});
    });
} */
