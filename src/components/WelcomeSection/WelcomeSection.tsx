import styles from "./WelcomeSection.module.css";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";

import Button from "../../ui/Button/Button";
import { textForWelcomeSection } from "../../utils/constants";

import notebook from "../../assets/images/notebook.png";
import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/RightArrow.svg";
import phone from "../../assets/images/phone.png";
import laptop from "../../assets/images/laptop.png";

import { useWindowSize } from "react-use";

const WelcomeSection: FC = () => {
  const [activeLine, setActiveLine] = useState<number>(1);

  const { width } = useWindowSize();

  const text = textForWelcomeSection;

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    img.classList.remove(styles.imageAnimation);

    // заставляем браузер «перечитать» элемент (перезапуск анимации)
    void img.offsetWidth;

    img.classList.add(styles.imageAnimation);
  }, [activeLine]);

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
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveLine((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);

    return () => clearTimeout(timeout); // очищаем старый таймер
  }, [activeLine]);

  const handleManualChange = (line: number) => {
    setActiveLine(line);
  };

  return (
    <section className={styles.mainWelcomeSectionContainer}>
      <div className={styles.divContainer}>
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
          {/* // ПОКАЗЫВАЕТ ФОТО ТОЛЬКО НА МОБИЛКАХ */}
          {width <= 720 && (
            <div className={styles.imageContainer}>
              <img
                src={
                  activeLine === 1
                    ? notebook
                    : activeLine === 2
                    ? phone
                    : laptop
                }
                draggable="false"
                ref={imgRef}
                alt=""
                className={styles.image}
              />
            </div>
          )}
          {/* ПОКАЗЫВАЕТ ФОТО ТОЛЬКО НА МОБИЛКАХ */}
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
              <div className={styles.buttonContainer}>
                <Button
                  fontFamily="Montserrat"
                  fontWeight="Bold"
                  fontSize={18}
                  backgroundColor={true}
                  textMargin="14px 39px"
                  buttonMargin="2vw 0 0 0"
                  width="100%"
                >
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* ПОКАЗЫВАЕТ НА ВСЕХ УСТРОЙСТВАХ, КРОМЕ МОБИЛОК */}
        {width > 720 && (
          <div className={styles.imageContainer}>
            <img
              src={
                activeLine === 1 ? notebook : activeLine === 2 ? phone : laptop
              }
              ref={imgRef}
              draggable="false"
              alt=""
              key={activeLine}
              // добавил key чтобы при смене картинки происходил полный ререндер картинки и
              // не было бага с мерцанием картинки из-за анимаций
              className={styles.image}
            />
          </div>
        )}
        {/* ПОКАЗЫВАЕТ НА ВСЕХ УСТРОЙСТВАХ, КРОМЕ МОБИЛОК */}
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
        <div className={styles.lines}>
          {[
            [1, 2, 3].map((num) => {
              return (
                <div
                  key={num}
                  className={`${styles.lineWithNumberContainer} ${
                    activeLine === num ? styles.addOpacity : null
                  }`}
                  onClick={() => handleManualChange(num)}
                >
                  <p className={styles.numberOnLine}>{num}</p>
                  <div className={styles.lineWithNumber}></div>
                </div>
              );
            }),
          ]}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
