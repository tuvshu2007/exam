const userModel = require("../userSchema")

exports.updateUser = async (req, res, next) => {
    const [id] = req.params; 
    try {
        const users = await userModel.findByIdAndUpdate(id, {...    req.body});
        res.status(201).json({
            message: `done`,
            data: users
        })
    } catch (error) {
        return res.status(401).json({
            message: error
        })
    }
};

exports.createUser = async (req, res, next) => {
   try {
    const createUser = await userModel.create({...req.body});
    res.status(201).json({
        message: `created`,
        data: createUser
    })
   } catch (error) {
      return res.status(401).json({
        message: error
      })
   }
};

exports.deleteUser = async (req, res, next) => {
   const {id} = req.params;

   try {
    const user = await userModel.findByIdAndDelete(id);
    res.status(201).json({
        message:`done2`,
        data: user
    })
   } catch (error) {
    res.status(401).json({
        message: error,
        data: null
    })
   }
}