import { app } from "./app.js";
import dotenv from "dotenv";
import connectDb from "./db/index.js"
dotenv.config({
    path: './.env'
})


connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Database Connected & ⚙️ Server running on Port: ${process.env.PORT} `);
    })
}).catch((error) => { console.log(`DB connection error server.js: ${error} `); });


