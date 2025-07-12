import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express();

// Connect Database
await connectDB();

// CORS Configuration
const allowedOrigins = [
  'https://luxcarrental.vercel.app',  //  Your frontend live domain
  'https://luxride-sand.vercel.app'   //  If sometimes frontend may call from here too
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,   // Important if you're using cookies or sessions
}));

app.use(express.json());

// Test Route
app.get('/', (req, res) => res.send("Server is running"));

// Routes
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
