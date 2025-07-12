import styles from "./SolutionsForConnectionPage.module.css";
import { useState } from "react";

import SolutionForConnectionCardWide from "../../ui/SolutionForConnectionCardWide/SolutionForConnectionCardWide";
import Title from "../../ui/Title/Title";

import { cameraProducts } from "../../utils/cameraProducts";

import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

const ITEMS_PER_PAGE = 5;

const SolutionsForConnectionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cameraProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = cameraProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        setCurrentPage(page);
      }, 400);
    }
  };

  return (
    <div className={styles.mainContiner}>
      <div className={styles.titleContainer}>
        <Title fontSize="1em" color="black">
          Готовые решения для подключения
        </Title>
      </div>
      <ul className={styles.cardList}>
        {currentItems.map((el, index) => {
          return (
            <div className={styles.cardElement} key={index}>
              <div className={styles.border}></div>
              <SolutionForConnectionCardWide
                images={el.images}
                description={el.description}
                title={el.title}
                characteristics={el.characteristics}
                linkQualityText={el.linkQualityText}
                linkQualityLink={el.linkQualityLink}
              />
            </div>
          );
        })}
      </ul>
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
    </div>
  );
};

export default SolutionsForConnectionPage;
