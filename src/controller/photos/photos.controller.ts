// IMPORT MODULES
import { Request, Response } from 'express';

// IMPORT SERVICES
import { PhotoServices } from '../../services/photos/photos.services';


// IMPORT RESPONSE
import { response } from '../../lib/response/photos';

// IMPORT INTERFACE
import Photo, { IPhoto } from '../../models/photos.model';


export class PhotoController {

    constructor() {}
    
    static async addImage( req: Request, res: Response ): Promise<Response> {
                            try {
                                // Capture Data and Execute Store Methods.
                                const { title, description } = req.body;
                                const imagePath: string = req.file.path;
    
                                const newPhoto = {
                                    title,
                                    description,
                                    imagePath
                                }
                                
                                const photo: IPhoto = await PhotoServices.add(newPhoto);
    
                                // Response Success.
                                return response.success(req, res, photo, 201);

                            } catch (err) {
                                // Response Error.
                                return response.error(req, res, err, 500);
                            }
                        }

    static async allImage( req: Request, res: Response ): Promise<Response> {
                            try {
                                // Execute Store Methods for Data Search.
                                const allPhotos: IPhoto[] = await PhotoServices.all();
    
                                // Response Success.
                                return response.success(req, res, allPhotos, 200);

                            } catch (err) {
                                // Response Error.
                                return response.error(req, res, err, 500);
                            }
                        }

    static async getImage( req: Request, res: Response ): Promise<Response> {
                            try {
                                // Capture Parameters and Execute Data Search Methods.
                                const { id } = req.params;
                                const photo: IPhoto | null = await PhotoServices.get(id);
    
                                // Validate if there is a Found Data.
                                if( !photo ) {
                                    let err = `No existe un recurso con el ID ${id}`;
                                    return response.notFound(req, res, err, 404);
                                }
    
                                // Response Success.
                                return response.success(req, res, photo, 200);

                            } catch (err) {
                                // Response Error.
                                return response.error(req, res, err, 500);
                            }
                        }

    static async updateImage( req: Request, res: Response ): Promise<Response> {
                            try {
                                // Capture data and execute update methods.
                                const { id } = req.params;
                                const { title, description } = req.body;
    
                                const photo = {
                                    title,
                                    description,
                                }
    
                                const updatePhoto: IPhoto | null = await PhotoServices.update(id, photo);
    
                                // Validate if there is a Found Data.
                                if( !updatePhoto ) {
                                    let err = `No existe un recurso con el ID ${id}`;
                                    return response.notFound(req, res, err, 404);
                                }
    
                                // Response Success.
                                return response.success(req, res, updatePhoto, 200);

                            } catch (err) {
                                // Response Error.
                                return response.error(req, res, err, 500);
                            }
                        }

    static async deleteImage( req: Request, res: Response ): Promise<Response> {
                            try {
                                // Capture data and execute delete methods.
                                const { id } = req.params;
                                const deletedPhoto: IPhoto | null = await PhotoServices.delete(id);
    
                                // Validate if there is a Found Data.
                                if( !deletedPhoto ) {
                                    let err = `No existe un recurso con el ID ${id}`;
                                    return response.notFound(req, res, err, 404);
                                }
    
                                // Response Success.
                                return response.success(req, res, deletedPhoto, 200);

                            } catch (err) {
                                // Response Error.
                                return response.error(req, res, err, 500);
                            }
                        }

}