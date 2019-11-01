// IMPORT MODULES
import fs from 'fs-extra';
import path from 'path';

// IMPORT MODEL AND INTERFACE
import Photo, { IPhoto }  from '../../models/photos.model'



export class PhotoServices {

    constructor() {}
    
    static async add( photoData: any ): Promise<IPhoto> {
                    try {
                        // Save Database
                        const newPhoto: IPhoto = new Photo(photoData);
                        const photo: IPhoto = await newPhoto.save();
                        return photo;
                    } catch (err) {
                        console.log('[ERROR SAVE_DB]', err);
                        return Promise.reject(err);
                    }
                }

    static async all(): Promise<IPhoto[]> {
                    try {
                        // Find all Database
                        const allPhotos: IPhoto[] = await Photo.find({});
                        return allPhotos;
                    } catch (err) {
                        console.log('[ERROR ALL_DB]', err);
                        return Promise.reject(err);
                    }
                }

    static async get( id: string ): Promise<IPhoto | null> {
                    try {
                        // Find Database
                        const photo: IPhoto | null = await Photo.findById(id);
                        return photo;
                    } catch (err) {
                        console.log('[ERROR GET_DB]', err);
                        return Promise.reject(err);
                    }
                }

    static async update( id: string, photoData: any ): Promise<IPhoto | null> {
                    try {
                        // Update Database
                        const updatePhoto: IPhoto | null = await Photo.findByIdAndUpdate(id, photoData, { new: true } );
                        return updatePhoto;
                    } catch (err) {
                        console.log('[ERROR UPDATE_DB]', err);
                        return Promise.reject(err);
                    }
                }

    static async delete( id: string ): Promise<IPhoto | null> {
                    try {
                        // Delete Database
                        const deletedPhoto: IPhoto | null = await Photo.findByIdAndDelete(id);

                        // Delete Photo the system
                        if( deletedPhoto ) {
                            await fs.unlink(path.resolve(deletedPhoto.imagePath));
                        }

                        return deletedPhoto;
                    } catch (err) {
                        console.log('[ERROR DELETED_DB]', err);
                        return Promise.reject(err);
                    }
                }

}