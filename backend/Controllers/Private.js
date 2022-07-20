exports.getprivatedata = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You have now accessed the private data",
  });
};
