const fetchapirequest = async (userlist, url) => {
  let teamdata = [];
  await Promise.all(
    userlist.map(async (item) => {
      const response = await fetch(`${url}/${item}`);
      const data = await response.json();
      teamdata.push(data);
    })
  );
  return teamdata;
};
export default fetchapirequest;
