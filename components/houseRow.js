import React, { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter.js";
import navValues from "../helpers/navValues.js";
import { navigationContext } from "./app.js";

const HouseRow = ({house}) => {

    const { navigate } = useContext(navigationContext)

    return (
        <tr onClick={() => navigate(navValues.house, house) } >
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
        </tr>
    )
}

// const HouseRowMem = React.memo(HouseRow)

export default HouseRow;
// export { HouseRowMem };