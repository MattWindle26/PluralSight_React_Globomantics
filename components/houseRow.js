import React from "react";
import currencyFormatter from "../helpers/currencyFormatter.js";

const HouseRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
        </tr>
    )
}

// const HouseRowMem = React.memo(HouseRow)

export default HouseRow;
// export { HouseRowMem };