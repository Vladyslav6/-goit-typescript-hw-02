import axios from "axios";
const KeyAxios = "TgX6vCr7P6VbVXRztS7x-BCKsz_x8JgBvktxAHTVZPc";
export const fetchData = async (query, page, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${KeyAxios}&per_page=5&query=${query}&page=${page}`,
    { signal }
  );
  return response.data;
};
