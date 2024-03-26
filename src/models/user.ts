import bcryptjs from 'bcryptjs';
import { Schema } from 'mongoose';

const usersSchema = new Schema({
    name:{
        type: String,
        unique:true,
        required: [true, "El campo nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El campo Email es obligatorio"],   
    },
    password:{
        type: String,
        required: [true, "El campo Password es obligatorio"],   
    }
    });

//Encriptar contraseña
usersSchema.pre("save", function(next) {
    this.password = bcryptjs.hashSync(this.password, 10);
    next();
})

