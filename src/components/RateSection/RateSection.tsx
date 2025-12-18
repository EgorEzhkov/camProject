import { useEffect, useState } from "react";
import RateCard from "../../ui/RateCard/RateCard";
import Title from "../../ui/Title/Title";
import styles from "./RateSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../store";
import ModalWindow from "../../ui/ModalWindow/ModalWindow";
import { clearRateModal } from "../../feauters/rateModal/rateModalSlice";
import Button from "../../ui/Button/Button";

const RateSection = () => {
  const [focusCard, setFocusCard] = useState<
    "Бизнес" | "Оптимальный" | "Стандарт"
  >("Оптимальный");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const rateModal = useSelector((state: RootState) => state.rateModal);
  const dispatch = useDispatch();

  // Почему-то если на прямую задавать props IsOpen={rateModal.isOpenMenu} у ModalWindow,
  // то плавное появление отстутсвует. Но если через вот эту конструкцию, то всё нормально
  useEffect(() => {
    if (rateModal.isOpenModal) setIsOpenModal(true);
    if (!rateModal.isOpenModal) setIsOpenModal(false);
  }, [rateModal]);
  return (
    <>
      <section className={styles.mainRateSectionContainer} id="rateSection">
        <div className={styles.titleContainer}>
          <Title color="white">Выберите тариф</Title>
        </div>
        <div className={styles.cardList}>
          <div onClick={() => setFocusCard("Стандарт")} className={styles.card}>
            <RateCard
              subtitle="Стандарт"
              price="250"
              description="Запись архива и хранение 7 дней. Подключение 1 камеры. Онлайн доступ к камере"
              focuse={focusCard === "Стандарт" ? true : false}
            ></RateCard>
          </div>
          <div
            onClick={() => setFocusCard("Оптимальный")}
            className={styles.card}
          >
            <RateCard
              subtitle="Оптимальный"
              price="650"
              description="Запись архива и хранение в 30 дней. Подключение 2 камеры. Онлайн доступ к камере"
              focuse={focusCard === "Оптимальный" ? true : false}
            ></RateCard>
          </div>
          <div onClick={() => setFocusCard("Бизнес")} className={styles.card}>
            <RateCard
              subtitle="Бизнес"
              price="950"
              description="Запись архива и хранение 60 дней. Подключение 3 камеры. Онлайн доступ к камере"
              focuse={focusCard === "Бизнес" ? true : false}
            ></RateCard>
          </div>
        </div>
      </section>
      <ModalWindow
        key={rateModal.subtitle}
        isOpen={isOpenModal}
        onClose={() => {
          dispatch(clearRateModal()), setIsOpenModal(rateModal.isOpenModal);
        }}
      >
        <h3 className={styles.modalSubtitle}>
          Вы выбрали {rateModal.subtitle} вариант
        </h3>
        <Button
          backgroundColor={true}
          fontFamily="Montserrat"
          fontSize={15}
          fontWeight="Medium"
          padding="10px 5px"
        >
          Подтвердить
        </Button>
      </ModalWindow>
    </>
  );
};

export default RateSection;
