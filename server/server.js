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


const allowedOrigins = [
  'https://luxcarrental.vercel.app',   // ✅ Your official frontend (deployed)
  'http://localhost:5173'              // ✅ For local development (Vite default)
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Blocked Origin:", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
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
