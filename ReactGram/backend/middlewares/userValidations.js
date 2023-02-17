const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome do usuário é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome deve ter no minimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 6 })
      .withMessage("A senha deve ter no minimo 6 caracteres."),
    body("confirmpassword")
      .isString()
      .withMessage("Digite a confirmação da senha.")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Digite um e-mail válido."),
    body("password").isString().withMessage("A senha é obrigatória."),
  ];
};

module.exports = { userCreateValidation, loginValidation };
