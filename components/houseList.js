import { useState, useEffect } from "react";
import HouseRowMem from "./houseRow";


const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
      const fetchHouses = async () => {
        const response = await fetch("./houses.json");
        const houses = await response.json();
        setHouses(houses.houses);
      };
      fetchHouses();
    }, []);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1200000,
            },
        ])
    }

    return (
        <>
       <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
            {houses.map(h => <HouseRowMem key={h.id} house={h} />)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>Add</button>
       </>
    )
}

export default HouseList