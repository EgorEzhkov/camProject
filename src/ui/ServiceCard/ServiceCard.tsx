import { type FC } from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  icon: string;
  subTitle: string;
  description: string;
}

interface ServiceCardStyles extends ServiceCardProps {
  flexGrow?: string;
  longCard?: boolean;
}

const ServiceCard: FC<ServiceCardStyles> = ({
  icon,
  subTitle,
  description,
  flexGrow,
  longCard,
}) => {
  return (
    <>
      <div
        className={styles.card}
        style={{
          flexGrow: flexGrow,
          flexDirection: longCard ? "row" : "column",
          minHeight: longCard ? "200px" : "434px",
        }}
      >
        <div className={styles.backgroudForIcon}>
          <img src={icon} alt="icon" className={styles.icon} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>{subTitle}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
