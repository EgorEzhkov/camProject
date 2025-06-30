import type { FC } from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  icon: string;
  subTitle: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, subTitle, description }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.backgroudForIcon}>
          <img src={icon} alt="icon" className={styles.icon} />
        </div>
        <h2 className={styles.subtitle}>{subTitle}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
