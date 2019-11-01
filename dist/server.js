"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// IMPORT ROUTER
const index_routes_1 = require("./routes/index.routes");
class Server {
    constructor() {
        this.app = express_1.default();
        this.middlewares();
        this.router = new index_routes_1.Routes(this.app);
        this.staticFiles();
    }
    setting() { }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
    }
    staticFiles() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT ${process.env.PORT}`);
        });
    }
}
exports.Server = Server;
