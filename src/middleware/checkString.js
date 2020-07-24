const checkString = (req, res, next) => {
  const { words } = req.body;
  const regex = /^[a-zA-Z\s]*$/;

  if (regex.test(words)) {
    return next();
  }

  return res.status(400).json({
    error: 'Only letters and spaces are allowed',
  });
};

export default checkString;
