const mongoose = require('mongoose');

const pcSchema = {
    _id: String,
    System: String,
    Version: String,
    Device_Name: String,
    Release_Details: String,
    Processor: String,
    System_Detail: String,
    Model: String,
    Number_of_Processors: String,
    Software_Installed: String,
    Storage_Information: String,
    Memory_Details: String
    
}

const Stats = mongoose.model("Stats", pcSchema); 

module.exports = Stats;