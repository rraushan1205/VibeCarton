import express from "express";
import admin from "firebase-admin";
import { PORT } from "./config.js";

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com"
});

const db = admin.firestore(); // Firestore as the database
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Root route: Simply return a hello message
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to my site');
});

// Route to get all products
app.get('/product', async (request, response) => {
    try {
        const productsSnapshot = await db.collection('products').get();
        const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return response.status(200).json({
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error("Error fetching products: ", error);
        return response.status(500).send("Error fetching products");
    }
});

// Route to get a product by ID
app.get('/product/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const productDoc = await db.collection('products').doc(id).get();

        if (!productDoc.exists) {
            return response.status(404).send('Product not found');
        }

        return response.status(200).json(productDoc.data());
    } catch (error) {
        console.error("Error fetching product: ", error);
        return response.status(500).send("Error fetching product");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});
