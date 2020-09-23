const objTypesDB = require("../objectiveTypes.model.js");

module.exports = async (req, res, next) => {
    // check to see ownership of category. must belong to user to edit
    const id = parseInt(req.params.id);
    const userId = parseInt(req.decodedToken.subject);
    const { name } = req.body;
    const nameCheck = await objTypesDB.getObjectiveTypeById(id);
    
    if(userId !== nameCheck.user_id) return res.status(400).json({errorMessage: "Users can only edit and delete information that belongs to them." })

    next()

}