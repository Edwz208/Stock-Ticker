const finnhubBasePath = "https://finnhub.io/api/v1";
const twelveDataBasePath = "https://api.twelvedata.com";

/**
 * Searches best stock matches based on a user's query
 * @param {string} query - The user's query, e.g. 'fb'
 * @returns {Promise<Object[]>} Response array of best stock matches
 */
export const searchSymbol = async (query) => {
  const url = `${finnhubBasePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the details of a given company from Finnhub
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchStockDetails = async (stockSymbol) => {
  const url = `${finnhubBasePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the latest quote of a given stock from Finnhub
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchQuote = async (stockSymbol) => {
  const url = `${finnhubBasePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches historical data of a stock (to be displayed on a chart) from Twelve Data
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @param {string} interval - Interval for historical data (e.g., '1min', '5min', '1day', etc.)
 * @param {string} start - Start date in ISO format (e.g., '2023-01-01')
 * @param {string} end - End date in ISO format (e.g., '2023-01-31')
 * @returns {Promise<Object>} Response object
 */
export const fetchHistoricalData = async (stockSymbol, interval, start, end) => {
  const url = `${twelveDataBasePath}/time_series?symbol=${stockSymbol}&interval=${interval}&start_date=${start}&end_date=${end}&apikey=${process.env.REACT_APP_TWELVE_DATA_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

