import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

// Add Helmet middleware to manage CSP
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:"],
            connectSrc: ["'self'", "http://localhost:8080"],
        },
    })
);

app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({
        fruits: ["apple", "bananas", "tomatoes", "guava"]
    });
});

app.post('/submit-form', (req, res) => {
    try {
        const detail = req.body.detail;
        const entry = req.body.entry;
        if (!detail || !entry) {
            return res.status(400).send('Missing required fields');
        }
        console.log(`Received detail: ${detail}`);
        res.send(`Entry in category "${entry}" and detail "${detail}" received.`)
    } catch (error) {
        console.log(`Error handling post/submit-form:`, error);
        res.status(500).send('Internal server error');
    }
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});