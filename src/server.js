import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web.route";
import bodyParser from "body-parser";

// Init app
let app = express();

// Connect to MongoDB
ConnectDB();

// Config View engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Init all Routes
initRoutes(app);


app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Server listenning at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
