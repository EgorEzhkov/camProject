import styles from "./Footer.module.css";
import appStore from "../../assets/images/AppStore.png";
import googlePlay from "../../assets/images/googlePlay.png";
import Button from "../../ui/Button/Button";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contactsAndApps}>
          <h4 className={styles.subTitle}>Контакты</h4>
          <a href="tel:+74732573191" className={styles.phoneNumber}>
            +7 (473) 257-31-91
          </a>
          <a href="test" className={styles.downloadLink}>
            Скачать реквизиты
          </a>
          <div className={styles.downloadImageContainer}>
            <a href="test" className={styles.linkHref}>
              <img src={googlePlay} alt="googlePlay" />
            </a>
            <a href="test" className={styles.linkHref}>
              <img src={appStore} alt="appStore" />
            </a>
          </div>
          <p className={styles.copyrightContainer}>
            <small className={styles.copyright}>
              &copy; 2013–{new Date().getFullYear()} EASYCAM — облачное
              видеонаблюдение
            </small>
          </p>
        </div>
        <div className={styles.links}>
          <h4 className={styles.subTitle}>Полезные ссылки</h4>
          <ul className={styles.list}>
            <li className={styles.listElement}>На главную</li>
            <li className={styles.listElement}>Наши услуги</li>
            <li className={styles.listElement}>Тарифы</li>
            <li className={styles.listElement}>Готовые решения</li>
            <li className={styles.listElement}>Новости компании</li>
            <li className={styles.listElement}>Личный кабинет</li>
          </ul>
        </div>
        <div className={styles.formContainer}>
          <h4 className={`${styles.subTitle} ${styles.fontBold}`}>
            Оставьте заявку на подключение
          </h4>
          <form
            action=""
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Форма отправлена");
            }}
          >
            <input
              type="tel"
              className={styles.input}
              placeholder="Ваш телефон"
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Ваше имя"
            />
            <Button
              fontFamily="Montserrat"
              fontWeight="Bold"
              fontSize={18}
              backgroundColor={true}
              padding="18px 0"
              buttonMargin="10px 0 0 0"
            >
              Оставить заявку
            </Button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
