import styles from "./NoPage.module.css";
import okakImg from "../../assets/images/okak.jpg";
import Title from "../../ui/Title/Title";

const NoPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blur}></div>
      <div className={styles.imageContainer}>
        <img src={okakImg} alt="okak" className={styles.img} />
      </div>
      <div className={styles.titleContainer}>
        <Title color="white" fontSize="2em" textAlign="center">
          404NotFound
        </Title>
        <Title color="white" fontSize="1em" textAlign="center">
          Такой страницы не существует
        </Title>
      </div>
    </div>
  );
};

export default NoPage;
