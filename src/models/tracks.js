import mongoose  from 'mongoose'

const TracksSchema = new mongoose.Schema(
    {   
        name: {
            type: String,
        },

        album: { 
            type: String,
        },

        cover: {
           type: String,
           validate: {
            validator: (req) => {
                return true;
    
            },
            message: "ERROR_URL",
           },
        },
        artist: {
            name:{
                type: string,
                nickname: {
                    type: string,
                }
            },
            nationality: {
                type: String,
            },
        },
        duration: {
            start: {
            type: Number,
            }
        },
        mediaId: {
            type: mongoose.Types.ObjetctId,
        },
    },
     {
        versionKey: false, 
        timestamps: true,
        
        }

);
export const Usermodel = model('tracks', TracksSchema);