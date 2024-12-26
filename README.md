# Movie Prime

This project is a web application built with React that replicates key features of Amazon Prime Video. It integrates with the [TMDB API](https://www.themoviedb.org/documentation/api) to allow users to browse movies and TV shows, view detailed information about each title, and explore a variety of content categories.
Usefull to learn React.

## Features

- **Movie and TV Show Browsing**: Discover popular, top-rated, and trending content.
- **Detailed Views**: Access detailed information for each movie or TV show, including synopsis, and ratings.

## Requirements

- **Node.js**: Version 18 or higher
- **npm** or **yarn**: For managing dependencies
- **TMDB API Key**: You will need a [TMDB account](https://developer.themoviedb.org/reference/intro/getting-started) in order to get access for an API key from TMDB to fetch movie and TV show data.

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:maustand/movieprime.git
   cd movieprime
   ```

2. **Install Dependencies**:
   Use npm or yarn to install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the environment variables listed below.

   ```env
      VITE_TMDB_API_BASE_URL=https://api.themoviedb.org/3
      VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
      VITE_TMDB_API_Key="YOUR_TMDB_API_KEY"
   ```

4. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   # or
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173/`.
