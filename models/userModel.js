const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "Service Name is Reuqired"],
  },
  description: {
    type: String,
    required: [true, " Descriptionis Reuqired"],
  },
  price: {
    type: String,
    required: [true, "Price is Reuqired"],
  },
});

module.exports = mongoose.model("Service", serviceSchema);
