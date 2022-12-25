const fetchapirequest = async (userlist, url) => {
  //   let teamdata = [];
  let teamdata = await Promise.all(
    userlist?.map(async (item) => {
      const response = await fetch(`${url}/${item}`, {
        headers: {
          Authorization: "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",
        },
      });
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      //   teamdata.push(data);
      return data;
    })
  );
  console.log(teamdata);
  return teamdata;
};
export default fetchapirequest;
