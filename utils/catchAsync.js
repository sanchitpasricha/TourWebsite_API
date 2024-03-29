module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
    //this will check the error in promise and redicrects to global error handler
  };
};
