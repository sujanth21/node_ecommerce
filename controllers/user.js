// @desc    Get a single user
// @route   GET /api/v1/users
// @access  Public
exports.getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Getting a single user details",
  });
};
