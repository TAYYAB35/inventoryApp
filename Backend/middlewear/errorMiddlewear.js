// Description: This file contains the error handling middleware for the application. It handles errors that occur during the
//  request processing and sends appropriate responses to the client.
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}


const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // default to 500 if status code is not set
    let message = err.message;
    
    if (err.name === 'CastError' && err.kind === "ObjectId") { // Invalid ObjectId error
        message = " Resource not found";
        statusCode = 404;
    }

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? "🍔" : err.stack
    });

}

export { notFound, errorHandler };