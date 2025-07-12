import { type FC } from "react";
import styles from "./SolutionForConnectionCardWide.module.css";
import type { SolutionForConnectionCardWideProps } from "../../utils/types";
import Button from "../Button/Button";

const SolutionForConnectionCardWide: FC<SolutionForConnectionCardWideProps> = ({
  images,
  title,
  characteristics,
  description,
  linkQualityText,
  linkQualityLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imagesContainer}>
          <div className={styles.mainImageContainter}>
            <img
              src={images.mainImage}
              alt="image"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.smallImagesContainer}>
            {images.smallImages.map((el, index) => {
              return (
                <img
                  src={el}
                  alt="image"
                  className={styles.smallImage}
                  key={index}
                />
              );
            })}
          </div>
          <a href={linkQualityLink} className={styles.linkQuality}>
            {linkQualityText}
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>{title}</h2>
          <div className={styles.descriptionAndCharacteristicsContainer}>
            <div className={styles.characteristics}>
              <h3 className={styles.characteristicsTitle}>Характеристики:</h3>
              <ul className={styles.characteristicsList}>
                {characteristics.map((item) =>
                  Object.entries(item).map(([key, value], index) => {
                    return (
                      <li className={styles.characteristicsElement} key={index}>
                        <p className={styles.characteristicsElementText}>
                          <span className={styles.characteristicsElementTitle}>
                            {key}:
                          </span>
                          {` ${value}`}
                        </p>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
            <div className={styles.descriptionContainer}>
              <h3 className={styles.descriptionTitle}>Описание:</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              fontFamily="Montserrat"
              fontWeight="Bold"
              fontSize={18}
              backgroundColor={true}
              maxWidth="148px"
              padding="15px 40px"
            >
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionForConnectionCardWide;
