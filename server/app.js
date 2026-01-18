import express from 'express';
import cors from 'cors';
const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

// app.get("/", (req, res) => res.send('Hello'));
// const PORT = 8080;

// app.listen(PORT, err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`Express app listening on port ${PORT}`);
// });

app.get("/api", (req, res) => {
    res.json({
        fruits: [ "apple", "bananas", "tomatoes"]
    });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});