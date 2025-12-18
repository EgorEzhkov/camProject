import { type FC } from "react";
import styles from "./RateCard.module.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setRateModal } from "../../feauters/rateModal/rateModalSlice";
import type { RootState } from "../../store";

interface RateCardProps {
  subtitle: string;
  price: string;
  description: string;
  focuse: boolean;
  refCard?: HTMLDivElement | null;
}

const RateCard: FC<RateCardProps> = ({
  subtitle,
  price,
  description,
  focuse,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const handleClick = () => {
    if (!isAuth) alert("Вам нужно авторизоваться"); // временное решение

    if (isAuth) {
      // без этой условной конструкции при !isAuth всё равно отправляется dispatch
      dispatch(
        setRateModal({
          subtitle,
          price,
          description,
          isOpenModal: true,
        })
      );
    }
  };

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
          <div className={styles.button} onClick={handleClick}>
            <Button
              fontFamily="Montserrat"
              fontSize="1em"
              fontWeight="Bold"
              backgroundColor={true}
              padding="15px 0"
              width="100%"
            >
              Оставить заявку
            </Button>
          </div>
        ) : (
          <div className={styles.button}>
            <Button
              fontFamily="Montserrat"
              fontSize="1em"
              fontWeight="Medium"
              backgroundColor={false}
              borderColor="blue"
              border={true}
              width="100%"
              padding="15px 0"
            >
              Оставить заявку
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default RateCard;
