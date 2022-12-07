const fetchapirequest = async (userlist, url) => {
  //   let teamdata = [];
  let teamdata = await Promise.all(
    userlist.map(async (item) => {
      const response = await fetch(`${url}/${item}`);
      if (!response.ok) {
        // const message = `An error has occured: ${response.status}`;
        throw new Error();
      }
      const data = await response.json();
      //   teamdata.push(data);
      return data;
    })
  );
  return teamdata;
};
export default fetchapirequest;
