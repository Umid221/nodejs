const whiteList = [
  "https://www.google.com",
  "http://127.0.0.1:3000",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
  optionsSuccess: 200,
};

module.exports = corsOptions;
