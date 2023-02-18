const { body } = require("express-validator");

const photoValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório.")
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 4 })
      .withMessage("O título precisa ter no minimo 4 caracteres."),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória.");
      }
      return true;
    }),
  ];
};

const photoUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 4 })
      .withMessage("O título precisa ter no minimo 4 caracteres."),
  ];
};

const commentValidation = () => {
  return [
    body("comment").isString().withMessage("O comentário é obrigatório."),
  ];
};

module.exports = {
  photoValidation,
  photoUpdateValidation,
  commentValidation,
};
