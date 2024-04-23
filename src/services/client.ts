import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: 'c33677eb160d4d2f85c13379f1151748'
  }
})

