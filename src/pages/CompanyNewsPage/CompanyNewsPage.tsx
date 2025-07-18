import styles from "./CompanyNewsPage.module.css";

import Title from "../../ui/Title/Title";
import { dataForNews } from "../../utils/constants";

import { useState } from "react";

import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import NewsCard from "../../ui/NewsCard/NewsCard";

const ITEMS_PER_PAGE = 6;

const CompanyNewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataForNews.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = dataForNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const newsBlock = document.getElementById("news");

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      newsBlock?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setCurrentPage(page);
      }, 200);
    }
  };

  return (
    <main className={styles.companyNewsPage}>
      <div className={styles.titleContainer} id="news">
        <Title color="black">Новости компании</Title>
      </div>
      <div className={styles.newsContainer}>
        {currentItems.map((el, index) => {
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
      <div className={styles.buttonsContainer}>
        <img
          src={leftArrow}
          alt=""
          className={`${styles.arrowButton} ${
            currentPage === 1 ? styles.arrowButtonDisabled : ""
          }`}
          onClick={() => handleClick(currentPage - 1)}
        />
        <p className={styles.textButtonPage}>
          {currentPage}/{totalPages}
        </p>
        <img
          src={rightArrow}
          alt=""
          className={`${styles.arrowButton} ${
            currentPage === totalPages ? styles.arrowButtonDisabled : ""
          }`}
          onClick={() => handleClick(currentPage + 1)}
        />
      </div>
    </main>
  );
};

export default CompanyNewsPage;
