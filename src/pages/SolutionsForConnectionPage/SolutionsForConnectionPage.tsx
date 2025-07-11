import Title from "../../ui/Title/Title";
import styles from "./SolutionsForConnectionPage.module.css";

const testArray = [""];

const SolutionsForConnectionPage = () => {
  return (
    <div className={styles.mainContiner}>
      <div className={styles.titleContainer}>
        <Title fontSize="1em" color="black">
          Готовые решения для подключения
        </Title>
      </div>
      <ul className={styles.cardList}>
        {testArray.map((el) => {
          return el;
        })}
      </ul>
    </div>
  );
};

export default SolutionsForConnectionPage;
