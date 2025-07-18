import Title from "../../ui/Title/Title";
import styles from "./CompanyNewsSection.module.css";
import arrow from "../../assets/images/simpleArrowRight.svg";
import NewsCard from "../../ui/NewsCard/NewsCard";
import { Link } from "react-router-dom";
import { dataForNews } from "../../utils/constants";

const CompanyNewsSection = () => {
  return (
    <section
      className={styles.mainCompanyNewsSectionContainer}
      id="companyNewsSection"
    >
      <div className={styles.titleContainer}>
        <Title color="black">Новости компании</Title>
      </div>
      <div className={styles.listNews}>
        {dataForNews.slice(0, 3).map((el, index) => {
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
      <Link to={"/companyNewsPage"} className={styles.linkContainer}>
        <p className={styles.linkText}>Посмотреть всё</p>
        <img src={arrow} alt="arrow" className={styles.arrow} />
      </Link>
    </section>
  );
};

export default CompanyNewsSection;
