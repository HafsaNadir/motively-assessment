# Podcast App
This application is built using **Next.js** for the frontend and **Node.js** with **Express.js** for the backend.

## Features

### 1. Podcast Card Display
- A visually appealing card layout showcasing podcasts, featuring key details like title, description, and category.

### 2. Search Functionality
- Easily find your podcasts with a search feature that enables users to filter results by title or keywords.

### 3. Pagination
- Easily navigate through podcast lists with pagination.

### 4. Debounce and Rate Limiting
- Improved performance and reduced server load by implementing debounce functionality during searches and rate limiting for API requests.

### 5. Backend Input Validation
- Added input validation for query parameters on the backend.

### 6. Mock Data and API Integration
- The application comes with a well-organized mock dataset and an API that allows the frontend to interact with the podcast data.

## Demo
https://www.loom.com/share/d261f51f55a54fa78afa491ba4169295?sid=116546cd-a9e6-433f-a60b-9f20b6b80ac7

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
 ```bash
 git clone https://github.com/your-username/motively-assessment.git
```

2. Install dependencies for both frontend and backend:
```bash
cd podcast-app
npm install
cd podcast-gateway
npm install
```

3. Start the development servers:
```bash
# In the podcast-app directory
npm run dev

# In the podcast-gateway directory
npm start
```

4. Open your browser and navigate to http://localhost:3000 to access the app.
