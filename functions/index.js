const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HCdUiJp2mpcbsqk4rqaLFbZEalwPY7b3XRVVEcIhZ6b1jaPIfUiY97jOVGF9bXj28gpFtMuC9rtY51Dw2Rx0NDs00uxM7wGAx'
);

// API

// - App config
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://clone-edb04.web.app/');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// - Middlewares
app.use(cors({ origin: true }));

app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
