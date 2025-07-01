import styles from "./SolutionsForConnectionSection.module.css";
import Title from "../../ui/Title/Title";
import arrow from "../../assets/images/simpleArrowRight.svg";
import SolutionForConnectionCard from "../../ui/SolutionForConnectionCard/SolutionForConnectionCard";

import cam from "../../assets/images/cam.png";

import type { SolutionForConnectionCardProps } from "../../ui/SolutionForConnectionCard/SolutionForConnectionCard";

const data: SolutionForConnectionCardProps[] = [
  {
    img: cam,
    forWhat: "Для дома",
    nameCam: "Цифровая IP камера для подключения в облачный сервис EasyCam.",
    info: [
      "Разрешение: 1920*1080@25fps",
      "Объектив: 2.8mm lens",
      "Гарантия : 1 год",
    ],
  },
  {
    img: cam,
    forWhat: "Для бизнеса",
    nameCam: "Цифровая IP камера для подключения в облачный сервис EasyCam.",
    info: [
      "Разрешение: 1920*1080@25fps",
      "Объектив: 2.8mm lens",
      "Гарантия : 1 год",
    ],
  },
  {
    img: cam,
    forWhat: "Для улицы",
    nameCam: "Цифровая IP камера для подключения в облачный сервис EasyCam.",
    info: [
      "Разрешение: 1920*1080@25fps",
      "Объектив: 2.8mm lens",
      "Гарантия : 1 год",
    ],
  },
];

const SolutionsForConnectionSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <Title color="black">Готовые решения для подключения</Title>
        </div>
        <div className={styles.cardList}>
          {data.map((el, index) => {
            return (
              <SolutionForConnectionCard
                key={index}
                img={el.img}
                forWhat={el.forWhat}
                nameCam={el.nameCam}
                info={el.info}
              ></SolutionForConnectionCard>
            );
          })}
        </div>
        <div className={styles.linkContainer}>
          <p className={styles.link}>Перейти в каталог</p>
          <img src={arrow} alt="arrow" className={styles.linkSvg} />
        </div>
      </div>
    </>
  );
};

export default SolutionsForConnectionSection;
