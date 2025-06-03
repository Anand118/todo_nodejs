import mongoose from "mongoose";


export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "backendapi2", })
    .then((c) => console.warn(`Database Connected`))
    .catch((e) => console.warn(e));
};