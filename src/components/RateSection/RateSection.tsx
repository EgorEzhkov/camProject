import { useState } from "react";
import RateCard from "../../ui/RateCard/RateCard";
import Title from "../../ui/Title/Title";
import styles from "./RateSection.module.css";

const RateSection = () => {
  const [focusCard, setFocusCard] = useState<number>(2);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <Title color="white" fontSize="1em">
            Выберите тариф
          </Title>
        </div>
        <div className={styles.cardList}>
          <div onClick={() => setFocusCard(1)} className={styles.card}>
            <RateCard
              subtitle="Стандарт"
              price="250"
              description="Запись архива и хранение 7 дней. Подключение 1 камеры. Онлайн доступ к камере"
              focuse={focusCard === 1 ? true : false}
            ></RateCard>
          </div>
          <div onClick={() => setFocusCard(2)} className={styles.card}>
            <RateCard
              subtitle="Оптимальный"
              price="650"
              description="Запись архива и хранение в 30 дней. Подключение 1 камеры. Онлайн доступ к камере"
              focuse={focusCard === 2 ? true : false}
            ></RateCard>
          </div>
          <div onClick={() => setFocusCard(3)} className={styles.card}>
            <RateCard
              subtitle="Бизнес"
              price="950"
              description="Запись архива и хранение 60 дней. Подключение 1 камеры. Онлайн доступ к камере"
              focuse={focusCard === 3 ? true : false}
            ></RateCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateSection;
