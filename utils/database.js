import mongoose from 'mongoose';

let isConneced = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConneced) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConneced = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}
