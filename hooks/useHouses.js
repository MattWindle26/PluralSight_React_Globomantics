import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const { get, loadingState } = useGetRequest("https://raw.githubusercontent.com/MattWindle26/PluralSight_React_Globomantics/43c1b9ce0e4e3b090138544011bd158371ebbda6/public/houses.json");

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses.houses);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
};

export default useHouses;
