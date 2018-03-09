module.exports = {
  register(req, res) {
    res.send({
      message: `You are registered! ${req.body.email}`
    });
  }
};
