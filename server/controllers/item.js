const asyncHandler = require("express-async-handler");

exports.createNewItem = asyncHandler(async (req, res, next) => {
  res.send("Create New Item is not functionable yet!");
});
