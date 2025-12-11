import express from 'express';

import dotenv from 'dotenv/config';

const app = express();

app.get('/api/check', (req, res) => {
    res.status(200).json({ message: "API is running..." });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('\x1b[31m%s\x1b[0m',`Server running on port ${PORT}`);
});
