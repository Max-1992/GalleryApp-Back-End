// IMPORT MODULES
import { Schema, model, Document } from 'mongoose';

// INTERFACE DECLARATION 
export interface IPhoto extends Document {
    title: string,
    description: string,
    imagePath: string
}

// MODEL DECLARATION
const PhotoSchema = new Schema({
    title: {
        type: String,
        required: [ true, 'El titulo de la foto es requerido' ]
    },
    description: {
        type: String,
        required: [ true, 'La descripción de la foto es requerida' ]
    },
    imagePath: {
        type: String,
        required: [ true, 'La URL de la foto es requerida' ]
    }
})


// EXPORT MODEL
const Photo = model<IPhoto>('Photo', PhotoSchema);

export default Photo;