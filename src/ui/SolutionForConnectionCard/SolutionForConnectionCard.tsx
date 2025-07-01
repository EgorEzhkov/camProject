import type { FC } from "react";
import styles from "./SolutionForConnectionCard.module.css";

export interface SolutionForConnectionCardProps {
  img: string;
  forWhat: string;
  nameCam: string;
  info: string[];
}

const SolutionForConnectionCard: FC<SolutionForConnectionCardProps> = ({
  img,
  forWhat,
  nameCam,
  info,
}) => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="cam" className={styles.img} />
        <p className={styles.forWhat}>{forWhat}</p>
        <h2 className={styles.nameCam}>{nameCam}</h2>
        <div className={styles.infoContainer}>
          {info.length <= 3
            ? info.map((el, index) => {
                return (
                  <p className={styles.info} key={index}>
                    {el}
                  </p>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default SolutionForConnectionCard;
