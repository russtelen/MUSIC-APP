import { KEY, HOST, URL } from "@env";

const CONFIG = {
  params: { country: "us", type: "itunes", format: "singles" },
  headers: {
    "x-rapidapi-key": KEY,
    "x-rapidapi-host": HOST,
  },
};

export default CONFIG;
