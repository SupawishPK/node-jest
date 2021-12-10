const mongoose = require("mongoose");

async function connect() {
  try {
    const username = "user01";
    const password = "8oo34BWS8bMzGSUk";
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@todo-tdd.y1sa8.mongodb.net/todo-tdd?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.error("Error connection to mongodb");
    console.error(error);
  }
}

module.exports = { connect };
