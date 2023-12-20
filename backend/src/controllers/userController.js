const client = require("../db/database");

const user = async (req, res) => {
  const id = req.params.id;
  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    const result = await client.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  user
};