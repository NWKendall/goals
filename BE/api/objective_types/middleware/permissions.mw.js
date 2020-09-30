const objTypesDB = require("../objectiveTypes.model.js");

module.exports = async (req, res, next) => {
  // check to see ownership of category. must belong to user to edit
  const obj_id = parseInt(req.params.id);
  const nameCheck = await objTypesDB.getObjectiveTypeById(obj_id);
  const userId = parseInt(req.decodedToken.subject);

  if (!nameCheck)
    return res.status(404).json({
      errorMessage: "Objective-Type doesn't exist.",
      MW: "permission"
    });

  if (userId !== nameCheck.created_by)
    return res.status(403).json({
      errorMessage:
        "Users can only edit and delete information that belongs to them.",
      MW: "permission",
    });

  next();
};
