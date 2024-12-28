const mongoose = require('mongoose');


const EmployeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const EmployeModel=mongoose.model("employees",EmployeSchema);

module.exports=EmployeModel;