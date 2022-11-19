module.exports = (mongoose) => {
  const Todo = mongoose.model(
    "Todo",
    mongoose.Schema({
      title: String,
      description: String,
      completed: Boolean,
    })
  );

  return Todo;
};
