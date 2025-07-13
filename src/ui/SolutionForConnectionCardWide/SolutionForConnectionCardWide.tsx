import { useState, type FC } from "react";
import styles from "./SolutionForConnectionCardWide.module.css";
import type { SolutionForConnectionCardWideProps } from "../../utils/types";
import Button from "../Button/Button";
import { useWindowSize } from "react-use";

const SolutionForConnectionCardWide: FC<SolutionForConnectionCardWideProps> = ({
  images,
  title,
  characteristics,
  description,
  linkQualityText,
  linkQualityLink,
}) => {
  const { width } = useWindowSize();

  const [activeInfo, setActiveInfo] = useState<
    "characteristics" | "description"
  >("characteristics");

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
              {width > 803 ? (
                <h3 className={styles.characteristicsTitle}>
                  Характеристики{width <= 803 ? "" : ":"}
                </h3>
              ) : (
                <div className={styles.titlesContainer}>
                  <h3
                    className={`${styles.characteristicsTitle} ${
                      activeInfo !== "characteristics"
                        ? styles.titleDisabled
                        : ""
                    }`}
                    onClick={() => setActiveInfo("characteristics")}
                  >
                    Характеристики{width <= 803 ? "" : ":"}
                  </h3>
                  <h3
                    className={`${styles.descriptionTitle} ${
                      activeInfo !== "description" ? styles.titleDisabled : ""
                    }`}
                    onClick={() => setActiveInfo("description")}
                  >
                    Описание{width <= 803 ? "" : ":"}
                  </h3>
                </div>
              )}
              {width > 803 ? (
                <ul className={styles.characteristicsList}>
                  {characteristics.map((item) =>
                    Object.entries(item).map(([key, value], index) => {
                      return (
                        <li
                          className={styles.characteristicsElement}
                          key={index}
                        >
                          <p className={styles.characteristicsElementText}>
                            <span
                              className={styles.characteristicsElementTitle}
                            >
                              {key}:
                            </span>
                            {` ${value}`}
                          </p>
                        </li>
                      );
                    })
                  )}
                </ul>
              ) : activeInfo === "characteristics" ? (
                <ul className={styles.characteristicsList}>
                  {characteristics.map((item) =>
                    Object.entries(item).map(([key, value], index) => {
                      return (
                        <li
                          className={styles.characteristicsElement}
                          key={index}
                        >
                          <p className={styles.characteristicsElementText}>
                            <span
                              className={styles.characteristicsElementTitle}
                            >
                              {key}:
                            </span>
                            {` ${value}`}
                          </p>
                        </li>
                      );
                    })
                  )}
                </ul>
              ) : (
                <p className={styles.description}>{description}</p>
              )}
            </div>
            <div className={styles.descriptionContainer}>
              <h3 className={styles.descriptionTitle}>
                Описание{width <= 803 ? "" : ":"}
              </h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              fontFamily="Montserrat"
              fontWeight="Bold"
              fontSize={18}
              backgroundColor={true}
              maxWidth={width <= 803 ? "100%" : "148px"}
              width={width <= 803 ? "100%" : "unset"}
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
