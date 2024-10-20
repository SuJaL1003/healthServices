const serviceModel = require("../models/userModel");
const serviceController = async (req, res) => {
  try {
    const { serviceName, description, price } = req.body;
    if (!serviceName || !description || !price) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const service = await serviceModel.create({
      serviceName,
      description,
      price,
    });
    res.status(201).send({
      success: true,
      message: "Success",
      service,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

const getServiceController = async (req, res) => {
  try {
    const service = await serviceModel.find();
    res.status(200).send({
      success: true,
      message: "Success",
      service,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

const updateServiceController = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.findById(id);
    if (!service) {
      return res.status(404).send({
        success: false,
        message: "Not Found",
      });
    }
    const { serviceName, description, price } = req.body;
    if (serviceName) {
      service.serviceName = serviceName;
    }
    if (description) {
      service.description = description;
    }
    if (price) {
      service.price = price;
    }
    await service.save();
    res.status(200).send({
      success: true,
      message: "Success",
      service,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating",
      error,
    });
  }
};

const deleteServiceController = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Deleted Succesfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};
module.exports = {
  serviceController,
  getServiceController,
  updateServiceController,
  deleteServiceController,
};
