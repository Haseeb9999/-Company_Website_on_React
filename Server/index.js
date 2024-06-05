const express = require('express')
const {Authentication} = require("./Routes");
const { ConnectDB } = require('./Config/db');
const morgan = require('morgan');
const { errorConverter, errorHandler } = require('./Middleware/error');
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const port = 3000
ConnectDB();

app.get('/', (req, res) => {
  res.send('Hello World! I am here')
})

app.use("/api/v1",Authentication)

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})