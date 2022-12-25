import { useEffect, useState } from "react";

const useCity = (data, state) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await data[state];
      setCities(response);
    };
    fetchdata();
  }, [state]);
  return cities;
};
export default useCity;
