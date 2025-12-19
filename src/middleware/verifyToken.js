import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    console.log("authHeader", authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401);
        throw new Error('No token provided');
    }
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401);
        throw new Error('No token provided');
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403);
            throw new Error('Invalid token');
        }
        req.user = user;
        next();
    });
};

export default verifyToken;         