import { useEffect, useState, type FC } from "react";
import styles from "./SolutionForConnectionCardWide.module.css";
import type { SolutionForConnectionCardWideProps } from "../../utils/types";
import Button from "../Button/Button";
import { useWindowSize } from "react-use";

import simpleArrowRight from "../../assets/images/simpleArrowRight.svg";
import simpleArrowLeft from "../../assets/images/simpleArrowLeft.svg";

const SolutionForConnectionCardWide: FC<SolutionForConnectionCardWideProps> = ({
  images,
  title,
  characteristics,
  description,
  linkQualityText,
  linkQualityLink,
  currentPage,
}) => {
  const { width } = useWindowSize();

  const [activeInfo, setActiveInfo] = useState<
    "characteristics" | "description"
  >("characteristics");
  const [activePhoto, setActivePhoto] = useState<number>(0);
  const [activeCircle, setActiveCircle] = useState<number>(0);
  const isMobile = width <= 720;
  const allImages = [images.mainImage, ...images.smallImages];

  useEffect(() => {
    setActivePhoto(0);
    setActiveCircle(0);
  }, [currentPage]);

  function renderCharacteristics() {
    return (
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
    );
  }

  function handlePhoto(action: "next" | "prev") {
    if (action === "next" && activePhoto < allImages.length - 1) {
      setActivePhoto(activePhoto + 1);
      setActiveCircle(activeCircle + 1);
    }
    if (action === "prev" && activePhoto > 0) {
      setActivePhoto(activePhoto - 1);
      setActiveCircle(activeCircle - 1);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imagesContainer}>
          <div className={styles.mainImageContainter}>
            {!isMobile ? (
              <img
                src={images.mainImage}
                alt="image"
                className={styles.mainImage}
              />
            ) : (
              <img
                src={allImages[activePhoto]}
                alt="image"
                className={styles.mainImage}
                onClick={() => {}}
              />
            )}
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
          {!isMobile ? (
            <a href={linkQualityLink} className={styles.linkQuality}>
              {linkQualityText}
            </a>
          ) : (
            <div className={styles.buttonsContainer}>
              <div
                className={styles.simpleArrowContainer}
                onClick={() => handlePhoto("prev")}
              >
                <div className={styles.areaForClick}></div>
                <img
                  src={simpleArrowLeft}
                  alt="arrow"
                  className={`${styles.simpleArrow} ${
                    activePhoto === 0 ? styles.simpleArrowDisable : ""
                  }`}
                />
              </div>

              <div className={styles.circleContainer}>
                {allImages.map((_, index) => {
                  return (
                    <span
                      className={`${styles.circle} ${
                        index === activeCircle ? styles.circleActive : ""
                      }`}
                      onClick={() => {
                        return setActiveCircle(index), setActivePhoto(index);
                      }}
                      key={index}
                    ></span>
                  );
                })}
              </div>
              <div
                className={styles.simpleArrowContainer}
                onClick={() => handlePhoto("next")}
              >
                <div className={styles.areaForClick}></div>
                <img
                  src={simpleArrowRight}
                  alt="arrow"
                  className={`${styles.simpleArrow} ${
                    activePhoto === allImages.length - 1
                      ? styles.simpleArrowDisable
                      : ""
                  }`}
                />
              </div>
            </div>
          )}
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>{title}</h2>
          <div className={styles.descriptionAndCharacteristicsContainer}>
            <div className={styles.characteristics}>
              {width > 803 ? (
                <h3 className={styles.characteristicsTitle}>
                  Характеристики{isMobile ? "" : ":"}
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
                    Характеристики
                  </h3>
                  <h3
                    className={`${styles.descriptionTitle} ${
                      activeInfo !== "description" ? styles.titleDisabled : ""
                    }`}
                    onClick={() => setActiveInfo("description")}
                  >
                    Описание
                  </h3>
                </div>
              )}
              {width > 803 ? (
                renderCharacteristics()
              ) : activeInfo === "characteristics" ? (
                renderCharacteristics()
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
