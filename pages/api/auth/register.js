import * as Sentry from "@sentry/node";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDb } from "../../../utils/db";

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: "backend",
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const db = await connectToDb();
    const existing = await db.collection('users').findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = {
      email,
      password: hashed,
      createdAt: new Date()
    };

    const { insertedId } = await db.collection('users').insertOne(newUser);

    // Optionally create a JWT upon registration
    const token = jwt.sign({ userId: insertedId }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    return res.status(200).json({ message: 'Registration successful', token });
  } catch (error) {
    Sentry.captureException(error);
    console.error("Registration Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}