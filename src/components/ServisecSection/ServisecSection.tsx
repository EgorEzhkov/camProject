import ServiceCard from "../../ui/ServiceCard/ServiceCard";
import Title from "../../ui/Title/Title";
import styles from "./ServisecSection.module.css";

import serviceIconPC from "../../assets/images/servicesIconPC.svg";
import serviceIconHuman from "../../assets/images/serviceIconHuman.svg";
import serviveIconPersonalAccaunt from "../../assets/images/serviceIconPersonalAccount.svg";

const ServisecSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <Title color="black">Мы осуществляем следующие услуги</Title>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.verticalBorder}></div>
          <p className={styles.description}>
            Кроме этого техническая поддержка всегда проконсультирует Вас по
            любым вопросам, а также произведет удаленную диагностику вашей
            системы по первому запросы и в самые кротчайшие сроки
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <ServiceCard
            icon={serviceIconPC}
            subTitle="Монтаж"
            description="Произведем монтаж камер видеонаблюдения у Вас дома, на работе, даче или просто во дворе"
          ></ServiceCard>
          <ServiceCard
            icon={serviceIconHuman}
            subTitle="Обслуживание"
            description="Если у Вас возникнут трудности мы дадим консультацию, а при необходимости приедем к вам на объект"
          ></ServiceCard>
          <ServiceCard
            icon={serviveIconPersonalAccaunt}
            subTitle="Личный кабинет"
            description="Смотрите трансляцию онлайн, а если не успели мы храним записи 7 дней, просто зайдите в архив"
          ></ServiceCard>
        </div>
      </div>
    </>
  );
};

export default ServisecSection;
