import type { FC } from "react";
import styles from "./WelcomeSection.module.css";
import Button from "../../ui/Button/Button";

import notebook from "../../assets/images/notebook.png";
import liveIcon from "../../assets/images/Live icon.png";
import arrow from "../../assets/images/Arrow.svg";

const WelcomeSection: FC = () => {
  return (
    <>
      <div className={styles.mainDivContainer}>
        <div className={styles.divContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              Облачное видеонаблюдение под ваши цели
            </h1>
            <div className={styles.subTextContainer}>
              <div className={styles.lineWithText}>
                <div className={styles.line}></div>
                <p className={styles.text}>Скрол</p>
              </div>
              <div className={styles.textWithButton}>
                <p className={styles.text}>
                  Видео - контроль на любом устройстве в прямом эфире. С
                  возможностью хранения записи вплоть до 7 дней
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
          <div className={styles.image}>
            <div className={styles.liveIcon}>
              <img src={liveIcon} alt="" />
            </div>
            <img src={notebook} alt="" />
          </div>
        </div>
        <div className={styles.arrowAndLinesContainer}>
          <div className={styles.arrowContainer}>
            <img src={arrow} alt="" />
            <img src={arrow} alt="" />
          </div>
          <div className={styles.lineWithNumberContainer}>
            <p className={styles.numberOnLine}>01</p>
            <div className={styles.lineWithNumber}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
