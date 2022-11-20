import { useContext } from "react";
import navValues from "../helpers/navValues";
import { navigationContext } from "./app";
import styles from "./banner.module.css"

const Banner = ({headerText}) => {

    const { navigate } = useContext(navigationContext)
    return (

        <header className={styles.header}>
            <div>
                <img 
                src="./logo.png" 
                alt="Logo" 
                className={styles.logo} 
                onClick={() => navigate(navValues.home)}
                />
            </div>
            <div>
               {headerText}
            </div>
        </header>
    )
}

export default Banner;