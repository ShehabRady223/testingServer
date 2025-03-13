import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
// require('dotenv').config();


const app = express();
const port = process.env.PORT || 3001;


function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


// Middleware
app.use(express.json());

// Routes
app.post('/testing', (req, res) => {
    const { id } = req.body
    const token = createToken(id)
    res.json({ id, token })
});

app.get('/', (req, res) => {
    res.send('API Working')
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app