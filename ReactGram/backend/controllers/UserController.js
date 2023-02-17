const User = require("../models/User");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

// Register user and sign in

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor utilize outro e-mail."] });
    return;
  }

  // Generate password hash

  const salt = await bcrypt.genSalt();

  const passwordHash = await bcrypt.hash(password, salt);

  // Create user

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  // if user was created successfully, return the token

  if (!newUser) {
    res.status(422).json({
      errors: ["Houve um erro, Por favor tente mais tarde."],
    });

    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

// sign user in
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // check if user not exists

  if (!user) {
    res.status(422).json({ errors: ["E-mail ou senha inválidos."] });
    return;
  }

  // check if password matches

  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["E-mail ou senha inválidos."] });
    return;
  }

  // return user with token

  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

module.exports = {
  register,
  login,
};
