# Ridekaro Project

## Project Overview

This project is a ride-sharing application similar to Uber, allowing users to request rides, track drivers, and complete payments. It features a mobile application for riders and drivers, supported by a robust backend API.

Technologies Used

- Frontend: React 
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Maps & Geolocation: Google - Maps API
- Real-time Communication: Socket.IO
- Payment Processing: Stripe API

## Project Structure

```
d:\Projects\Uber\
├── backend/
│   ├── controllers/     - Request handlers
│   ├── models/          - Database schemas
│   ├── routes/          - API endpoints
│   ├── middlewares/     - Custom middleware functions
│   ├── utils/           - Helper functions
│   ├── config/          - Configuration files
│   ├── server.js        - Main server file
│   └── package.json     - Backend dependencies
├─   frontend/
│   ├── src/
│   │   ├── components/  - Reusable UI components
│   │   ├── screens/     - Application screens
│   │   ├── navigation/  - Navigation configuration
│   │   ├── services/    - API services
│   │   ├── utils/       - Helper functions
│   │   ├── redux/       - State management
│   │   └── assets/      - Images, fonts, etc.
│   ├── App.js           - Main application file
│   └── package.json     - Mobile dependencies
└── README.md            -
```

## Setup and Installation

Prerequisites

- Node.js (v14+)
- MongoDB
- React setup
- Google Maps API key
- Backend Setup

1. Navigate to the backend directory:

```
cd d:\Projects\Uber\backend
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the mobile directory with:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Start the server:

```
npm start
```

## Features

- User authentication (signup, login)
- Rider & Driver profiles
- Ride request and tracking
- Real-time location sharing
- In-app messaging
- Payment processing
- Ride history and receipts
- Driver earnings dashboard

## API Endpoints

Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

Rides

- `POST /api/rides` - Create new ride request
- `GET /api/rides` - Get all rides
- `GET /api/rides/:id` - Get specific ride
- `PUT /api/rides/:id` - Update ride status
- `DELETE /api/rides/:id` - Cancel ride

Users

- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

## Testing

Run the test suites with:

```
npm test
```

## Deployment

- Backend: Deploy to AWS, Heroku, or similar cloud platform

## Contributing

1. Fork the repository
2. Create your feature branch `(git checkout -b feature/amazing-feature)`
3. Commit your changes `(git commit -m 'Add some amazing feature')`
4. Push to the branch `(git push origin feature/amazing-feature)`
5. Open a Pull Request

# License

This project is licensed under the MIT License - see the LICENSE file for details.
