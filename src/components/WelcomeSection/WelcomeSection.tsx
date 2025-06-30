import { useState, type Dispatch, type FC, type SetStateAction } from "react";

import { RemoveScrollBar } from "react-remove-scroll-bar";

import styles from "./WelcomeSection.module.css";
import Button from "../../ui/Button/Button";

import notebook from "../../assets/images/notebook.png";
import liveIcon from "../../assets/images/Live icon.png";
import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/RightArrow.svg";
import phone from "../../assets/images/phone.png";
import laptop from "../../assets/images/laptop.png";

const WelcomeSection: FC = () => {
  const [activeLine, setActiveLine] = useState<number>(1);
  const [stopScroll, setStopScroll] = useState<boolean>(false);

  function nextActiveLine(
    activeLine: number,
    setActiveLine: Dispatch<SetStateAction<number>>,
    action: "increase" | "decrease"
  ) {
    if (activeLine < 3 && action === "increase") {
      setActiveLine(activeLine + 1);
    }
    if (activeLine <= 3 && activeLine > 1 && action === "decrease") {
      setActiveLine(activeLine - 1);
    }
  }

  const text = {
    1: {
      title: "Облачное видеонаблюдение<br />под ваши цели",
      desc: "Видео - контроль на любом устройстве в прямом эфире. С возможностью хранения записи вплоть до 7 дней",
    },
    2: {
      title: "Прост в использовании<br />а трансляция всегда под рукой",
      desc: "Интуитивно понятный интерфейс. Зайдите в личный кабинет и смотри трансляции со всех камер",
    },
    3: {
      title: "Просмотр онлайнс любого устройства<br />в любое время",
      desc: "Доступ из любого места и в любое время ко всем камерам видеонаблюдени в два щелчка",
    },
  };

  return (
    <>
      <div
        className={styles.mainDivContainer}
        onWheel={(e) => {
          if (e.deltaY > 0) {
            nextActiveLine(activeLine, setActiveLine, "increase");
          }
          if (e.deltaY < 0) {
            nextActiveLine(activeLine, setActiveLine, "decrease");
          }
        }}
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className={styles.divContainer}>
          {stopScroll && <RemoveScrollBar></RemoveScrollBar>}
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html:
                    activeLine === 1
                      ? text[1].title
                      : activeLine === 2
                      ? text[2].title
                      : text[3].title,
                }}
              ></h1>
            </div>
            <div className={styles.subTextContainer}>
              <div className={styles.lineWithText}>
                <div className={styles.line}></div>
                <p className={styles.text}>Скрол</p>
              </div>
              <div className={styles.textWithButton}>
                <p className={styles.text}>
                  {activeLine === 1
                    ? text[1].desc
                    : activeLine === 2
                    ? text[2].desc
                    : text[3].desc}
                </p>
                <Button
                  fontFamily="Montserrat"
                  fontWeight="Bold"
                  fontSize={18}
                  backgroundColor={true}
                  textMargin="14px 39px"
                  buttonMargin="30px 0 0 0"
                >
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            {activeLine === 1 && (
              <div className={styles.liveIcon}>
                <img src={liveIcon} alt="" />
              </div>
            )}

            <img
              src={
                activeLine === 1 ? notebook : activeLine === 2 ? phone : laptop
              }
              draggable="false"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.arrowAndLinesContainer}>
          <div className={styles.arrowContainer}>
            <img
              src={leftArrow}
              alt=""
              draggable="false"
              onClick={() =>
                nextActiveLine(activeLine, setActiveLine, "decrease")
              }
              className={activeLine === 1 ? styles.disableArrow : ""}
            />
            <img
              src={rightArrow}
              alt=""
              draggable="false"
              onClick={() =>
                nextActiveLine(activeLine, setActiveLine, "increase")
              }
              className={activeLine === 3 ? styles.disableArrow : ""}
            />
          </div>
          {[
            [1, 2, 3].map((num) => {
              return (
                <div
                  key={num}
                  className={`${styles.lineWithNumberContainer} ${
                    activeLine === num ? styles.addOpacity : null
                  }`}
                  onClick={() => setActiveLine(num)}
                >
                  <p className={styles.numberOnLine}>{num}</p>
                  <div className={styles.lineWithNumber}></div>
                </div>
              );
            }),
          ]}
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
