const production = "production";
const development = "development";

const MODE = production;
let base_url = "";

if (MODE === production) {
  base_url = "https://abc-backend-i46y.onrender.com";
} else {
  base_url = "http://localhost:5000/api";
}

export { base_url };
