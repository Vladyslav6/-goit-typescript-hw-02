export interface Results {
  id: string | number;
  urls: {
    regular: string;
    small: string;
  };
}
export interface GetDataImg {
  total_pages: number;
  results: Results[];
}
