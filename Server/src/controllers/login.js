require("dotenv").config();

const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const login = (req, res) => {
  try {
    const { email, password } = req.query;
    
    // /login?password=1234&email=www
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    if (password === DB_PASSWORD && email === DB_EMAIL) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(404).json({ access: false });
    }
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

module.exports = login;
