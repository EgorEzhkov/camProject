import SolutionForConnectionCardWide from "../../ui/SolutionForConnectionCardWide/SolutionForConnectionCardWide";
import Title from "../../ui/Title/Title";
import { textForSolutionCardWide } from "../../utils/constants";
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
        {textForSolutionCardWide.map((el, index) => {
          return (
            <div className={styles.cardElement} key={index}>
              <div className={styles.border}></div>
              <SolutionForConnectionCardWide
                images={el.images}
                description={el.description}
                title={el.title}
                characteristics={el.characteristics}
                linkQualityText={el.linkQualityText}
                linkQualityLink={el.linkQualityLink}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SolutionsForConnectionPage;
