"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const express_1 = require("express");
const multer_1 = __importDefault(require("../../lib/multer/multer"));
// IMPORT CONTROLLER
const photos_controller_1 = require("../../controller/photos/photos.controller");
class PhotoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', photos_controller_1.PhotoController.allImage);
        this.router.get('/:id', photos_controller_1.PhotoController.getImage);
        this.router.post('/', multer_1.default.single('image'), photos_controller_1.PhotoController.addImage);
        this.router.put('/:id', photos_controller_1.PhotoController.updateImage);
        this.router.delete('/:id', photos_controller_1.PhotoController.deleteImage);
    }
}
const photoRoutes = new PhotoRoutes();
exports.default = photoRoutes.router;
