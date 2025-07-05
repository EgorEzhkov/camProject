import type { FC } from "react";
import styles from "./RateCard.module.css";
import Button from "../Button/Button";

interface RateCardProps {
  subtitle: string;
  price: string;
  description: string;
  focuse: boolean;
}

const RateCard: FC<RateCardProps> = ({
  subtitle,
  price,
  description,
  focuse,
}) => {
  return (
    <>
      <div className={`${styles.card} ${focuse && styles.fullOpacity}`}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.priceContainer}>
          <h3 className={styles.price}>{price} ₽</h3>
          <p className={styles.month}>/ месяц</p>
        </div>
        <p className={styles.description}>{description}</p>
        {focuse ? (
          <Button
            fontFamily="Montserrat"
            fontSize={18}
            fontWeight="Bold"
            backgroundColor={true}
            padding="15px 0"
            width="100%"
          >
            Оставить заявку
          </Button>
        ) : (
          <Button
            fontFamily="Montserrat"
            fontSize={18}
            fontWeight="Medium"
            backgroundColor={false}
            borderColor="blue"
            border={true}
            width="100%"
            padding="15px 0"
          >
            Оставить заявку
          </Button>
        )}
      </div>
    </>
  );
};

export default RateCard;
