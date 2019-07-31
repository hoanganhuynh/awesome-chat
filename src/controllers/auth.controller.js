import {validationResult} from "express-validator/check";
import {auth} from "./../services/index";

let getLoginRegister = (req, res) => {
  return res.render("auth/master", {
    errors: req.flash("errors"),
    success: req.flash("success")
  });
};

let postRegister = async (req, res) => {
  let errorArr = [];
  let validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach(item => {
      errorArr.push(item.msg);
    });
    req.flash("errors", errorArr);
    return res.redirect("/login-register");
  }
  await auth.register(req.body.email, req.body.gender, req.body.password);
};

// try {
//   await auth.register(req.body.email, req.body.gender, req.body.password);
// } catch (error) {
  
// }


module.exports = {
  getLoginRegister: getLoginRegister,
  postRegister: postRegister
};