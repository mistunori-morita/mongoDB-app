// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})


const config = {
  views: "views", // Set views directory
  static: "public", // Set static assets directory
  db: {
    url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
    // url: process.env.MONGODBx_URL,
    type: "mongo",
    onError: err => {
      console.log("DB erro!! Failed!");
    },
    onSuccess: () => {
      console.log("DB Successfully Connected!");
    }
  }
};

const app = vertex.app(config) // initialize app with config options




// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app