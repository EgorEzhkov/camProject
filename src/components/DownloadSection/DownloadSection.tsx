import Title from "../../ui/Title/Title";
import styles from "./DownloadSection.module.css";
import googlePlay from "../../assets/images/googlePlay.png";
import appStore from "../../assets/images/AppStore.png";

const DownloadSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <Title color="black">
            Скачайте наше приложение в AppStore и Google Play
          </Title>
        </div>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            получите доступ к архиву в режиме онлайн
          </li>
          <li className={styles.listElement}>
            надёжно храните архив в облаке от 7 дней и выше
          </li>
          <li className={styles.listElement}>
            cмотрите онлайн-трансляцию с Ваших видеокамер
          </li>
          <li className={styles.listElement}>
            сохраняйте архив на Ваши устройства
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <a className={styles.linkImage} href="test">
            <img src={googlePlay} alt="Google Play" className={styles.image} />
          </a>
          <a className={styles.linkImage} href="test">
            <img src={appStore} alt="App Store" className={styles.image} />
          </a>
        </div>
      </div>
    </>
  );
};

export default DownloadSection;
