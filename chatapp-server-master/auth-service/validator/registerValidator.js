import { body } from "express-validator";

const registerValidator = () => {
    return [
        body("name", "Please Enter Name").notEmpty(),
        body("username", "Please Enter Username").notEmpty(),
        body("bio", "Please Enter Bio").notEmpty(),
        body("password", "Please Enter Password").notEmpty(),
    ];
};

export default registerValidator;