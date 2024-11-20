# Stock Ticker App

This project is a stock ticker application that utilizes the [Finnhub API](https://finnhub.io/) and [Twelve Data API](https://twelvedata.com/) to provide real-time stock data, historical charts, and detailed information about various stocks.

## Features

- 🔍 Search for stocks (e.g., AAPL, FB, GOOG)
- 💸 View current stock quotes (price, percent change)
- 📝 Get detailed information about stocks (name, currency, market cap, etc.)
- 📈 Visualize historical chart data for stocks (day/week/month/year)
- 🌙 Toggle between dark and light themes

## [Live Demo](https://stock-ticker-plum.vercel.app/)

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used for the application.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Recharts**: A composable charting library built on React components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Edwz208/stock-ticker.git
   cd stock-ticker
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Finnhub API key:
   ```plaintext
   REACT_APP_API_KEY=your_finnhub_api_key
   REACT_APP_TWELVE_DATA_API_KEY=your_twelve_data_api_key
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the search bar to find stocks by their ticker symbols.

4. Click on a stock to view its details, current quote, and historical data.

5. Toggle between light and dark themes using the theme icon.

## Acknowledgments

- [Finnhub API](https://finnhub.io/) for providing stock data.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Recharts](https://recharts.org/en-US/) for charting components.

