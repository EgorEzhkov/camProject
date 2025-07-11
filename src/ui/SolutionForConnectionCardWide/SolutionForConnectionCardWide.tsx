import { startTransition, type FC } from "react";
import styles from "./SolutionForConnectionCardWide.module.css";

interface CharacteristicsForCardWide {
  Модель: string;
  Разрешение: string;
  Чипсет: string;
  Разрешение2: string;
  "ИК подсветка": string;
  Материал: string;
  Питание: string;
  Влагозащищенность: string;
  Гарантия: string;
  Тип: string;
  Технология: string;
}

interface SolutionForConnectionCardWideProps {
  images: { mainImage: string; smallImages: string[] };
  title: string;
  characteristics: CharacteristicsForCardWide[];
  description: string;
  linkQuality: string;
}

const SolutionForConnectionCardWide: FC<SolutionForConnectionCardWideProps> = ({
  images,
  title,
  characteristics,
  description,
  linkQuality,
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
          {images.smallImages.map((el) => {
            return (
              <div className={styles.smallImagesContainer}>
                <img src={el} alt="image" className={styles.smallImage} />
              </div>
            );
          })}
          <a href="" className={styles.linkQuality}>
            {linkQuality}
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>{title}</h2>
          <div className={styles.descriptionAndCharacteristicsContainer}>
            <div className={styles.characteristics}>
              <h3 className={styles.characteristicsTitle}>Характеристики:</h3>
              <ul className={styles.characteristicsList}>
                {characteristics.map((el) => {
                  return (
                    <p>
                      <span>Влагозащищенность</span> {el.Влагозащищенность}
                    </p>
                  );
                })}
                <li className={styles.characteristicsElement}></li>
              </ul>
            </div>
            <div className={styles.description}>
              <h3 className={styles.descriptionTitle}> Описание:</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionForConnectionCardWide;
