import { validationResult } from 'express-validator';

const validateHanler = (req, res, next) => {
    const errors = validationResult(req);
    const errorMessages = errors.array().map((error) => error.msg).join(", ");

    if(errors.isEmpty()) return next();
    else next(new Error(errorMessages));
};

export default validateHanler;