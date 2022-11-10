baseUrl = "https://api.unsplash.com";
API_KEY = process.env.API_KEY;

export const getTrendingImages = async () => {
  try {
    const res = await fetch(`${baseUrl}/photos?per_page=30`, {
      headers: { Authorization: `Client-ID ${API_KEY}` },
    });
    if (!res.ok) {
      console.error("falied", res.status);
      return;
    }
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

/* get Search Image */
export const getSearchedImage = async (query) => {
  const url = new URL(`${baseUrl}/search/photos`);
  url.search = new URLSearchParams({
    per_page: 30,
    query: query,
  });
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Client-ID ${API_KEY}` },
    });
    if (!res.ok) {
      console.log("failed", res.status);
      return;
    }
    const json = await res.json();
    return json.results;
    // console.log(json.results);
  } catch (error) {
    console.log(error);
  }
};
