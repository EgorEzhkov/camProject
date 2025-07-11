export interface CharacteristicsForCardWide {
  Модель: string;
  Разрешение: string;
  Чипсет: string;
  Разрешение2: string;
  Объектив: string;
  "ИК подсветка": string;
  Материал: string;
  Питание: string;
  Влагозащищенность: string;
  Гарантия: string;
  Тип: string;
  Технология: string;
}

export interface SolutionForConnectionCardWideProps {
  images: { mainImage: string; smallImages: string[] };
  title: string;
  characteristics: CharacteristicsForCardWide[];
  description: string;
  linkQualityText: string;
  linkQualityLink: string;
}
