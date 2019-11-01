// IMPORT MODULES
import { Application } from 'express';

// IMPORT ROUTES
import PhotosRoutes from '../routes/photos/photos.routes'


// ROUTER
export class Routes {

    constructor( server: Application ) {
        server.use('/api/photos', PhotosRoutes);
    }

}