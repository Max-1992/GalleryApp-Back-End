"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT SERVICES
const photos_services_1 = require("../../services/photos/photos.services");
// IMPORT RESPONSE
const photos_1 = require("../../lib/response/photos");
class PhotoController {
    constructor() { }
    static addImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture Data and Execute Store Methods.
                const { title, description } = req.body;
                const imagePath = req.file.path;
                const newPhoto = {
                    title,
                    description,
                    imagePath
                };
                const photo = yield photos_services_1.PhotoServices.add(newPhoto);
                // Response Success.
                return photos_1.response.success(req, res, photo, 201);
            }
            catch (err) {
                // Response Error.
                return photos_1.response.error(req, res, err, 500);
            }
        });
    }
    static allImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Execute Store Methods for Data Search.
                const allPhotos = yield photos_services_1.PhotoServices.all();
                // Response Success.
                return photos_1.response.success(req, res, allPhotos, 200);
            }
            catch (err) {
                // Response Error.
                return photos_1.response.error(req, res, err, 500);
            }
        });
    }
    static getImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture Parameters and Execute Data Search Methods.
                const { id } = req.params;
                const photo = yield photos_services_1.PhotoServices.get(id);
                // Validate if there is a Found Data.
                if (!photo) {
                    let err = `No existe un recurso con el ID ${id}`;
                    return photos_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return photos_1.response.success(req, res, photo, 200);
            }
            catch (err) {
                // Response Error.
                return photos_1.response.error(req, res, err, 500);
            }
        });
    }
    static updateImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture data and execute update methods.
                const { id } = req.params;
                const { title, description } = req.body;
                const photo = {
                    title,
                    description,
                };
                const updatePhoto = yield photos_services_1.PhotoServices.update(id, photo);
                // Validate if there is a Found Data.
                if (!updatePhoto) {
                    let err = `No existe un recurso con el ID ${id}`;
                    return photos_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return photos_1.response.success(req, res, updatePhoto, 200);
            }
            catch (err) {
                // Response Error.
                return photos_1.response.error(req, res, err, 500);
            }
        });
    }
    static deleteImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture data and execute delete methods.
                const { id } = req.params;
                const deletedPhoto = yield photos_services_1.PhotoServices.delete(id);
                // Validate if there is a Found Data.
                if (!deletedPhoto) {
                    let err = `No existe un recurso con el ID ${id}`;
                    return photos_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return photos_1.response.success(req, res, deletedPhoto, 200);
            }
            catch (err) {
                // Response Error.
                return photos_1.response.error(req, res, err, 500);
            }
        });
    }
}
exports.PhotoController = PhotoController;
