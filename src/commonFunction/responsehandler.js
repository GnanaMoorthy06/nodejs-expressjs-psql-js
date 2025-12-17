// standard response function

export const responseHandler = (res , statusCode , message , data = null)=>{

    res.status(statusCode).json({
        statusCode,
        message,
        data
    })
}