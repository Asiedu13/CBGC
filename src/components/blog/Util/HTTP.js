export let fetcher = async (url, body, method) => {
  if (method === "POST") {
    let parsedBody = JSON.stringify(body);
    let response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        parsedBody,
      },
    });
    return response;
  }
};
