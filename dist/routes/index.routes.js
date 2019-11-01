"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT ROUTES
const photos_routes_1 = __importDefault(require("../routes/photos/photos.routes"));
// ROUTER
class Routes {
    constructor(server) {
        server.use('/api/photos', photos_routes_1.default);
    }
}
exports.Routes = Routes;
