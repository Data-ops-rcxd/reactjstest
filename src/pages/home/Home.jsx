//import styles
import styles from "./Home.module.css";

//import react libraries
import { useState } from "react";

const Home = () => {
  const [lechugas, setlechugas] = useState(0);

  function aumentarlechugas() {
    setlechugas(lechugas + 1);
  }

  return (
    <>
      <div className={styles.maincont}>
        <div className={styles.header}>
          <div className={styles.title}>Lechuga en moto</div>
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
            <div className={styles.imgcont}>
              <img
                className={styles.lechugaclick}
                onClick={aumentarlechugas}
                src="/src/assets/lechuga-batavia-x-1-unidad.jpg"
                alt="lechugapequeña"
              />
            </div>
            <div className={styles.lefttext}>Cantidad lechugas:</div>
            <div className={styles.lefttext}>{lechugas}</div>
          </div>
          <div className={styles.right}>
            <img
              src="/src/assets/lechuga-batavia-x-1-unidad.jpg"
              alt="lechugagrande"
              className="lechugaprincipal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
