import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web.route";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
import passport from "passport";

//Init app
let app = express();

// Connect to MongoDB
ConnectDB();

// Config Session
configSession(app);

// Config View engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Enable Flash messages
app.use(connectFlash());

// Config PassportJS
app.use(passport.initialize());
app.use(passport.session());


// Init all Routes
initRoutes(app);


app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Server listenning at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});

// import pem from "pem";
// import https from "https";
// pem.createCertificate({ day: 1, selfSigned: true }, function (err, keys) {
//   if (err) {
//     throw err;
//   }
//       // Init app
//     let app = express();

//     // Connect to MongoDB
//     ConnectDB();

//     // Config Session
//     configSession(app);

//     // Config View engine
//     configViewEngine(app);

//     // Enable post data for request
//     app.use(bodyParser.urlencoded({extended: true}));

//     // Enable Flash messages
//     app.use(connectFlash());

//     // Config PassportJS
//     app.use(passport.initialize());
//     app.use(passport.session());


//     // Init all Routes
//     initRoutes(app);

//     https.createServer( {key: keys.serviceKey, cert: keys.certificate}, app).listen(process.env.APP_PORT, process.env.APP_HOST, () => {
//       console.log(`Server listenning at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
//     });
//   });
  
