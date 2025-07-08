import type { FC } from "react";
import styles from "./NewsCard.module.css";

export interface NewsCardProps {
  subTitle: string;
  date: string;
  description: string;
}

const NewsCard: FC<NewsCardProps> = ({ subTitle, date, description }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.border}></div>

        <h3 className={styles.subTitle}>{subTitle}</h3>
        <div>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>
            {description.length > 65
              ? description.slice(0, 65) + "..."
              : description}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
