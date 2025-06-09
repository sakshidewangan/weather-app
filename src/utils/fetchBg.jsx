// src/utils/fetchBackgroundImage.js

const PEXELS_API_KEY =
  "Z4fa2mv5FSduQDciMVvRZWfeggRNHU8kHA5UBtzJuxJ4wv8tVw2OKAZl";
// Replace with your actual key
const FALLBACK_IMAGE_URL =
  "/assests/WhatsApp Image 2025-02-01 at 14.43.09_92763263.jpg"; // Path in /public folder

export const fetchBg = async (city, weather) => {
  const query = `${city} ${weather} weather`;
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=1`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.landscape;
    } else {
      return FALLBACK_IMAGE_URL;
    }
  } catch (error) {
    console.error("Pexels API error:", error);
    return FALLBACK_IMAGE_URL;
  }
};

// const NASA_API_KEY = "jGgnMz0xNKWSup6Xn8tfzHNvC4QTI4aXdrWY9ola";
// const GEO_API_KEY = "ac292fb000dad3733be375a06701cb59";

// export const fetchBg = async (cityName, weatherType) => {
//   try {
//     // Get city coordinates from OpenWeather Geo API
//     const geoRes = await fetch(
//       `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${GEO_API_KEY}`
//     );
//     const geoData = await geoRes.json();

//     if (!geoData || geoData.length === 0) {
//       console.warn("City not found for background image");
//       return null;
//     }

//     const { lat, lon } = geoData[0];

//     // Fetch image from NASA API using coordinates
//     const nasaRes = await fetch(
//       `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2023-08-01&dim=0.1&api_key=${NASA_API_KEY}`
//     );

//     if (!nasaRes.ok) {
//       console.warn("No NASA imagery available for the location");
//       return null;
//     }

//     const imageBlob = await nasaRes.blob();
//     return URL.createObjectURL(imageBlob);
//   } catch (error) {
//     console.error("Error fetching background image:", error);
//     return null;
//   }
// };
