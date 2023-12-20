const client = require("../db/database");

const addTask = async (req, res) => {
  try {
    console.log(req.body);
    const query = 'insert into tasks (task_name,task_description,user_id) values ($1, $2, $3);';
    const values = [req.body.task_name, req.body.task_description, req.body.id];
    const result = await client.query(query, values);
    const task = result.rows[0];
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTasks = async (req, res) => {
  try {
    const query = 'select * from tasks where user_id = $1;';
    const values = [req.params.id];
    const result = await client.query(query, values);
    const tasks = result.rows;
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  addTask,
  getTasks,
};