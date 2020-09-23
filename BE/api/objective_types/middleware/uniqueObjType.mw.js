const objTypesDB = require("../objectiveTypes.model.js");

module.exports = async (req, res, next) => {
    // check to see if objTYpe with name already exists
    const { name  } = req.body;
    const nameCheck = await objTypesDB.getObjectiveTypeByName(name);
    const errorMessages = [];
    
    if(!name) errorMessages.push("Please provide a name for this new objective-type.");
    if(nameCheck) errorMessages.push("This objective type already exists. Objective-types must be unique.");

    if(errorMessages.length) return res.status(400).json({ errorMessages })

    next()

}