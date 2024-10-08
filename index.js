// Importing Express

const express = require('express');
const UserRouter = require('./routers/userRouter');

// Initializing Express

const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json());
app.use( '/user', UserRouter );
app.use('/product', ProductRouter);

// route or endpoint 
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add')
})

//getall
//update


app.get('/getall', (req, res) => {
    res.send('Response from getall')
});
app.get('/update', (req, res) => {
    res.send('Response from update')
});


app.listen( port, () => {console.log( 'server started' )});