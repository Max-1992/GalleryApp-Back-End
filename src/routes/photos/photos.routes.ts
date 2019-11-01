// IMPORT MODULES
import { Router } from 'express';
import multer from '../../lib/multer/multer';

// IMPORT CONTROLLER
import  { PhotoController } from '../../controller/photos/photos.controller';


class PhotoRoutes {
    
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', PhotoController.allImage);
        this.router.get('/:id', PhotoController.getImage);
        this.router.post('/', multer.single('image'), PhotoController.addImage);
        this.router.put('/:id', PhotoController.updateImage);
        this.router.delete('/:id', PhotoController.deleteImage);
    }

}

const photoRoutes = new PhotoRoutes();

export default photoRoutes.router;