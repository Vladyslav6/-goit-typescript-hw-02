import axios from "axios";
import { GetDataImg } from "./api.types";

//myKey
const KeyAxios = "TgX6vCr7P6VbVXRztS7x-BCKsz_x8JgBvktxAHTVZPc";
//
export const fetchData = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<GetDataImg> => {
  const response = await axios.get<GetDataImg>(
    `https://api.unsplash.com/search/photos/?client_id=${KeyAxios}&per_page=5&query=${query}&page=${page}`,
    { signal }
  );
  console.log(response.data);
  return response.data;
};
