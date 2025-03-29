import { loginSchema, registrationSchema } from "./validationSchema.js";

export const validateRegistration = (req, res, next) => {
  try {
    registrationSchema.parse(req.body); 
    next(); 
  } catch (error) {
    return res.status(400).json({
      success:false,
      message: error.errors[0]?.message || "Regitration Validation Error" ,
    });
  }
};

export const validateLogin = (req, res, next) => {
  try {
    loginSchema.parse(req.body); 
    next(); 
  } catch (error) {
    return res.status(400).json({
      success:false,
      message: error.errors[0]?.message || "Login Validation Error" ,
    });
  }
};
