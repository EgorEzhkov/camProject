import styles from "./SolutionsForConnectionSection.module.css";
import stylesMobile from "./SolutionsForConnectionSectionMobile.module.css";
import Title from "../../ui/Title/Title";
import arrow from "../../assets/images/simpleArrowRight.svg";
import SolutionForConnectionCard from "../../ui/SolutionForConnectionCard/SolutionForConnectionCard";

import cam from "../../assets/images/cam.png";

import type { SolutionForConnectionCardProps } from "../../ui/SolutionForConnectionCard/SolutionForConnectionCard";
import { useState } from "react";
import { getDeviceType } from "../../utils/utils";

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
    id: 1,
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
    id: 2,
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
    id: 3,
  },
];

const SolutionsForConnectionSection = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const device = getDeviceType();
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <Title color="black" fontSize="1em">
            Готовые решения для подключения
          </Title>
        </div>
        <div
          className={`${
            device === "mobile" ? stylesMobile.cardList : styles.cardList
          } ${
            activeCard === 1
              ? styles.firstCard
              : activeCard === 2
              ? styles.secondCard
              : styles.thirdCard
          }`}
        >
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className={`${
                  device === "mobile" ? stylesMobile.card : styles.card
                } ${
                  activeCard === index + 1
                    ? styles.active
                    : activeCard > index + 1
                    ? styles.right
                    : styles.left
                }`}
                onClick={() => {
                  setActiveCard(index + 1);
                }}
              >
                <SolutionForConnectionCard
                  img={el.img}
                  forWhat={el.forWhat}
                  nameCam={el.nameCam}
                  info={el.info}
                ></SolutionForConnectionCard>
              </div>
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
