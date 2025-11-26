# Travel Planner - 旅遊紀錄系統

A RESTful API for managing travel records using Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete travel records
- Store travel information including destination, dates, budget, participants, and activities
- Track travel status (planned, ongoing, completed, cancelled)
- MongoDB database for persistent storage

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/itmckira/travelplanner_v1126a.git
cd travelplanner_v1126a
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/travelplanner
PORT=3000
```

## Usage

### Start the server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Get all travel records
```
GET /api/travel-records
```

### Get a single travel record
```
GET /api/travel-records/:id
```

### Create a new travel record
```
POST /api/travel-records
Content-Type: application/json

{
  "title": "Tokyo Adventure",
  "destination": "Tokyo, Japan",
  "startDate": "2024-03-01",
  "endDate": "2024-03-10",
  "description": "Exploring Tokyo and surrounding areas",
  "budget": 150000,
  "participants": ["John", "Jane"],
  "activities": ["Visit temples", "Try local cuisine", "Shopping"],
  "status": "planned"
}
```

### Update a travel record
```
PUT /api/travel-records/:id
Content-Type: application/json

{
  "status": "completed",
  "notes": "Amazing trip! Would visit again."
}
```

### Delete a travel record
```
DELETE /api/travel-records/:id
```

## Travel Record Schema

- **title** (String, required): Title of the travel
- **destination** (String, required): Destination location
- **startDate** (Date, required): Start date of travel
- **endDate** (Date, required): End date of travel
- **description** (String): Detailed description
- **budget** (Number): Travel budget
- **participants** (Array of Strings): List of participants
- **activities** (Array of Strings): Planned activities
- **notes** (String): Additional notes
- **status** (String): Travel status - 'planned', 'ongoing', 'completed', or 'cancelled'

## Example Usage

Using cURL:

```bash
# Create a new travel record
curl -X POST http://localhost:3000/api/travel-records \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Paris Vacation",
    "destination": "Paris, France",
    "startDate": "2024-06-15",
    "endDate": "2024-06-22",
    "budget": 200000,
    "status": "planned"
  }'

# Get all travel records
curl http://localhost:3000/api/travel-records

# Update a travel record
curl -X PUT http://localhost:3000/api/travel-records/YOUR_RECORD_ID \
  -H "Content-Type: application/json" \
  -d '{"status": "ongoing"}'

# Delete a travel record
curl -X DELETE http://localhost:3000/api/travel-records/YOUR_RECORD_ID
```

## License

ISC