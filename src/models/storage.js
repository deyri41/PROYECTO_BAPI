import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema(
    {   
        url: {
            type: String
        },

        filename: {
            type: var__filename= String
        },

     
        timestamps: true,
        versionKey: false
    }     

);
module.exports = mongoose.model('users', UserSchema)