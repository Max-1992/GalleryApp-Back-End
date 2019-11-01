// IMPORT MODULES
import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

// IMPORT ROUTER
import { Routes } from './routes/index.routes'


export class Server {
    
    app: Application;
    router: Routes

    constructor() {
        this.app = express();
        this.middlewares();
        this.router = new Routes(this.app);
        this.staticFiles();
    }

    setting() {}

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(cors());
    }

    staticFiles() {
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use( '/uploads', express.static(path.resolve( 'uploads' )));

    }

    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT ${process.env.PORT}`);
        })
    }

}