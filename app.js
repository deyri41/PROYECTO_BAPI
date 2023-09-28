import "dotenv/config"
import express from 'express'
import cors from'cors'
import {dbConnect}  from "./src/config/mongo.js" 
import UserRoutes from "./src/routes/user.js"


const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000

/**
 * Aqui se invoca las rutas!
 */
app.use("/api", UserRoutes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    dbConnect()
})



