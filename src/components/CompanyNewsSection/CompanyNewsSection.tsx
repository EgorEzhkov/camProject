import Title from "../../ui/Title/Title";
import styles from "./CompanyNewsSection.module.css";
import arrow from "../../assets/images/simpleArrowRight.svg";
import NewsCard, { type NewsCardProps } from "../../ui/NewsCard/NewsCard";

const date: NewsCardProps[] = [
  {
    subTitle: "Запуск мобильного приложения",
    description:
      "С сегоднешнего наш сервис стал еще удобнее благодаря приложениям для iOS и Android сегоднешнего наш сервис стал сегоднешнего наш сервис стал",
    date: "07.02.20",
  },
  {
    subTitle: "Подключение под ключ в Воронеже",
    description:
      "Монтаж и подключение системы видеонаблюдения под ключ сегоднешнего наш сервис сталсегоднешнего наш сервис стал",
    date: "07.02.20",
  },
  {
    subTitle: "Мартовская акция",
    description:
      "Подключение интернета на особых условиях. Полный безлимитный интернет сегоднешнего наш сервис сталсегоднешнего наш сервис стал",
    date: "07.02.20",
  },
];

const CompanyNewsSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <Title color="black" fontSize="1em">
            Новости компании
          </Title>
        </div>
        <div className={styles.listNews}>
          {date.map((el, index) => {
            return (
              <NewsCard
                key={index}
                subTitle={el.subTitle}
                description={el.description}
                date={el.date}
              ></NewsCard>
            );
          })}
        </div>
        <div className={styles.linkContainer}>
          <p className={styles.linkText}>Посмотреть всё</p>
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </div>
      </div>
    </>
  );
};

export default CompanyNewsSection;
