import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();

app.listen(process.env.PORT, () => {
    console.warn(`Server is Working on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});