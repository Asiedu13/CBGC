export let fetcher = async (url, body, method) => {
  let parsedBody = JSON.stringify(body);
  console.log(parsedBody);
  if (method === "POST") {
    try {
      let response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: parsedBody,
      });
      let msg = await response.json();

      return msg.msg;
    } catch (err) {
      console.log("err");
      return err;
    }
  }
  else if (method === "GET") {
    try {
      let response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        }
      });
      let data = await response.json();

      return data;
    } catch (err) {
      console.log("err");
      return err;
    }
  }
};
