// IMPORTS MODULES
import { Request, Response } from 'express';

// IMPORT MODEL
import { IPhoto } from '../../models/photos.model';


export class response {

    constructor(){}

    static success( req: Request, res: Response, post: IPhoto | IPhoto[], status: number = 200 ): Response {
       return res.status(status).json({
                ok: true,
                data: post
            })
    }


    static notFound( req: Request, res: Response, err: string, status: number = 404 ): Response {
        return res.status(status).json({
                ok: false,
                err
            })
    }


    static error( req: Request, res: Response, err: Error, status: number = 500 ): Response  {
        return res.status(status).json({
                ok: false,
                err
            })
    }

}