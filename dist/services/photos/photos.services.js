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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
// IMPORT MODEL AND INTERFACE
const photos_model_1 = __importDefault(require("../../models/photos.model"));
class PhotoServices {
    constructor() { }
    static add(photoData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Save Database
                const newPhoto = new photos_model_1.default(photoData);
                const photo = yield newPhoto.save();
                return photo;
            }
            catch (err) {
                console.log('[ERROR SAVE_DB]', err);
                return Promise.reject(err);
            }
        });
    }
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find all Database
                const allPhotos = yield photos_model_1.default.find({});
                return allPhotos;
            }
            catch (err) {
                console.log('[ERROR ALL_DB]', err);
                return Promise.reject(err);
            }
        });
    }
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find Database
                const photo = yield photos_model_1.default.findById(id);
                return photo;
            }
            catch (err) {
                console.log('[ERROR GET_DB]', err);
                return Promise.reject(err);
            }
        });
    }
    static update(id, photoData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update Database
                const updatePhoto = yield photos_model_1.default.findByIdAndUpdate(id, photoData, { new: true });
                return updatePhoto;
            }
            catch (err) {
                console.log('[ERROR UPDATE_DB]', err);
                return Promise.reject(err);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Delete Database
                const deletedPhoto = yield photos_model_1.default.findByIdAndDelete(id);
                // Delete Photo the system
                if (deletedPhoto) {
                    yield fs_extra_1.default.unlink(path_1.default.resolve(deletedPhoto.imagePath));
                }
                return deletedPhoto;
            }
            catch (err) {
                console.log('[ERROR DELETED_DB]', err);
                return Promise.reject(err);
            }
        });
    }
}
exports.PhotoServices = PhotoServices;
