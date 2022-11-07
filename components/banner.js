import styles from "./banner.module.css"

const Banner = ({headerText}) => {
    return (

        <header className={styles.header}>
            <div>
                <img src="./logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div>
               {headerText}
            </div>
        </header>
    )
}

export default Banner;