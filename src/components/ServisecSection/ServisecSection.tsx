import Title from "../../ui/Title/Title";
import styles from "./ServisecSection.module.css";

const ServisecSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <Title color="black">Мы осуществляем следующие услуги</Title>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServisecSection;
