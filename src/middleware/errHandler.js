import statusCodes from "../../constant.js";
const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case statusCodes.BAD_REQUEST:
            res.json({ 
                error: "Bad Request", 
                message: err.message });
            break;
        case statusCodes.UNAUTHORIZED:
            res.json({ 
                error: "Unauthorized",
                message: err.message });            
            break;
        case statusCodes.FORBIDDEN:
            res.json({ 
                error: "Forbidden", 
                message: err.message });
            break;
        case statusCodes.NOT_FOUND:
            res.json({
                error: "Not Found", 
                message: err.message });
            break;
        case statusCodes.INTERNAL_SERVER_ERROR:
            res.json({ 
                error: "Internal Server Error", 
                message: err.message });
            break;
                
    
        default:
            console.log("No Error, All Good!");
            
            break;
    }
   
}

export default errHandler;
