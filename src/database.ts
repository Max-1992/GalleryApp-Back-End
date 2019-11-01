// IMPORT MODULES
import db from 'mongoose';

const connect = async () => {
    try {
        db.connect(process.env.URL_DB || 'mongodb://localhost:27017/upload-images', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Database is connected`)
    } catch (err) {
        console.log(`[ERROR MONGODB]`, err);
    }
}

export default connect;