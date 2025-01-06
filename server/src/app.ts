import express, { Express } from 'express';
import cors from 'cors'; // Import the cors package
import plansRoutes from './routes/plans';
import addonsRoutes from './routes/addons';
import userSubmissionsRoutes from './routes/userSubmissions';

const app: Express = express();
const port = 8081;

app.use(express.json());


const corsOptions = {
  origin: '*', //for dev mode
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));


app.options('*', cors(corsOptions));

app.use('/plans', plansRoutes);
app.use('/addons', addonsRoutes);
app.use('/user-submissions', userSubmissionsRoutes);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server has stopped listening');
    process.exit(0);
  });
});

