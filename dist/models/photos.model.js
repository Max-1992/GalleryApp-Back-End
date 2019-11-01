"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const mongoose_1 = require("mongoose");
// MODEL DECLARATION
const PhotoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'El titulo de la foto es requerido']
    },
    description: {
        type: String,
        required: [true, 'La descripción de la foto es requerida']
    },
    imagePath: {
        type: String,
        required: [true, 'La URL de la foto es requerida']
    }
});
// EXPORT MODEL
const Photo = mongoose_1.model('Photo', PhotoSchema);
exports.default = Photo;
