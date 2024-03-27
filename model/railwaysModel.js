const mongoose = require("mongoose");

const railwaysSchema = new mongoose.Schema({
    incidentType: { type: String, required: true },
    gender: { type: String },
    animalDescription: { type: String },
    location: { type: String },
    stolenItems: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model("railwaysData", railwaysSchema);
