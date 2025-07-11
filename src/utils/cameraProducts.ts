import type { SolutionForConnectionCardWideProps } from "./types";

import camOne from "../assets/images/CamOne.jpg";
import camTwo from "../assets/images/CamTwo.jpg";
import CamPhotoExample1 from "../assets/images/CamPhotoExample1.jpg";
import CamPhotoExample2 from "../assets/images/CamPhotoExample2.jpg";
import CamPhotoExample3 from "../assets/images/CamPhotoExample3.jpg";
import CamPhotoExample4 from "../assets/images/CamPhotoExample4.jpg";
import CamPhotoExample5 from "../assets/images/CamPhotoExample5.jpg";

const sharedImages1 = {
  mainImage: camOne,
  smallImages: [
    CamPhotoExample1,
    CamPhotoExample2,
    CamPhotoExample3,
    CamPhotoExample4,
    CamPhotoExample5,
  ],
};

const sharedImages2 = {
  mainImage: camTwo,
  smallImages: [
    CamPhotoExample1,
    CamPhotoExample2,
    CamPhotoExample3,
    CamPhotoExample4,
    CamPhotoExample5,
  ],
};

export const cameraProducts: SolutionForConnectionCardWideProps[] = [
  {
    images: sharedImages1,
    title: "IP камера с ночным видением и облачным подключением EasyCam",
    characteristics: [
      {
        Модель: "Ecam401",
        Разрешение: "4MP 2560*1440P",
        Чипсет: "HiSilicon3516EV300+IMX335",
        Разрешение2: "2560*1440@20fps",
        Объектив: "3.6mm lens",
        "ИК подсветка": "18pcs/30M",
        Материал: "Металл + пластик",
        Питание: "DC12V/1.5A, PoE",
        Влагозащищенность: "IP67",
        Гарантия: "2 года",
        Тип: "Цифровая камера",
        Технология: "Сетевая IP",
      },
    ],
    description:
      "Надёжная уличная камера с высоким разрешением и поддержкой PoE. Идеально подходит для охраны периметра и круглосуточного наблюдения.",
    linkQualityText: "Связь стабильна",
    linkQualityLink: "quality-401",
  },
  {
    images: sharedImages2,
    title: "Компактная внутренняя IP-камера для домашнего наблюдения",
    characteristics: [
      {
        Модель: "Ecam101",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "XM530+GC2063",
        Разрешение2: "1920*1080@30fps",
        Объектив: "2.1mm lens (широкий угол)",
        "ИК подсветка": "6pcs/10M",
        Материал: "Пластик",
        Питание: "DC5V/1A (microUSB)",
        Влагозащищенность: "IP20",
        Гарантия: "6 месяцев",
        Тип: "Мини-камера",
        Технология: "Wi-Fi",
      },
    ],
    description:
      "Миниатюрная Wi-Fi камера для квартиры или офиса. Обеспечивает хорошую картинку и звук, имеет мобильное приложение.",
    linkQualityText: "Трансляция активна",
    linkQualityLink: "quality-101",
  },
  {
    images: sharedImages1,
    title:
      "Уличная камера с функцией распознавания движения и записью на карту",
    characteristics: [
      {
        Модель: "Ecam302",
        Разрешение: "3MP 2048*1536P",
        Чипсет: "T21L+SC2232",
        Разрешение2: "2048*1536@20fps",
        Объектив: "4mm lens",
        "ИК подсветка": "12pcs/25M",
        Материал: "Металл",
        Питание: "DC12V/1A",
        Влагозащищенность: "IP66",
        Гарантия: "1 год",
        Тип: "Цифровая камера",
        Технология: "Сетевая IP",
      },
    ],
    description:
      "Поддерживает детекцию движения и запись на карту памяти. Отличный выбор для дачи или частного дома.",
    linkQualityText: "Подключено к облаку",
    linkQualityLink: "quality-302",
  },
  {
    images: sharedImages2,
    title: "Wi-Fi камера с поворотным механизмом и зумом",
    characteristics: [
      {
        Модель: "EcamPTZ01",
        Разрешение: "5MP 2592*1944P",
        Чипсет: "Hi3519V101",
        Разрешение2: "2592*1944@25fps",
        Объектив: "2.8-12mm моторизированный",
        "ИК подсветка": "24pcs/50M",
        Материал: "Металл",
        Питание: "DC12V/2A",
        Влагозащищенность: "IP66",
        Гарантия: "2 года",
        Тип: "PTZ камера",
        Технология: "Wi-Fi + LAN",
      },
    ],
    description:
      "Панорамная камера с возможностью дистанционного поворота и приближения изображения.",
    linkQualityText: "Камера активна",
    linkQualityLink: "quality-ptz01",
  },
  {
    images: sharedImages1,
    title: "IP-камера с записью в облако и двусторонней связью",
    characteristics: [
      {
        Модель: "EcamTalk",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "T30+SC2235",
        Разрешение2: "1920*1080@25fps",
        Объектив: "2.8mm lens",
        "ИК подсветка": "10pcs/15M",
        Материал: "Пластик",
        Питание: "DC5V/1A",
        Влагозащищенность: "IP44",
        Гарантия: "1 год",
        Тип: "Видеоняня",
        Технология: "Wi-Fi",
      },
    ],
    description:
      "Позволяет общаться с посетителями благодаря встроенному динамику и микрофону. Поддержка записи в облако.",
    linkQualityText: "Подключение активно",
    linkQualityLink: "quality-talk",
  },
  {
    images: sharedImages2,
    title: "Умная камера с AI-аналитикой и распознаванием лиц",
    characteristics: [
      {
        Модель: "EcamAI",
        Разрешение: "4MP 2560*1440P",
        Чипсет: "RK3566",
        Разрешение2: "2560*1440@30fps",
        Объектив: "3.6mm lens",
        "ИК подсветка": "16pcs/30M",
        Материал: "Металл",
        Питание: "DC12V/1.5A",
        Влагозащищенность: "IP66",
        Гарантия: "2 года",
        Тип: "AI-камера",
        Технология: "IP + AI",
      },
    ],
    description:
      "Поддерживает интеллектуальный анализ: распознавание лиц, подсчет людей, обнаружение движения по зонам.",
    linkQualityText: "AI активен",
    linkQualityLink: "quality-ai",
  },
  {
    images: sharedImages1,
    title: "Камера с широким углом обзора 180° и ночной съёмкой",
    characteristics: [
      {
        Модель: "EcamWide",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "Anyka+OV2710",
        Разрешение2: "1920*1080@25fps",
        Объектив: "1.8mm fisheye lens",
        "ИК подсветка": "8pcs/20M",
        Материал: "Металл",
        Питание: "DC12V/1A",
        Влагозащищенность: "IP66",
        Гарантия: "1 год",
        Тип: "Fisheye камера",
        Технология: "IP",
      },
    ],
    description:
      "Камера с рыбий глаз для обзора целого помещения без поворота. Отличный вариант для офисов и складов.",
    linkQualityText: "Поток стабилен",
    linkQualityLink: "quality-wide",
  },
  {
    images: sharedImages2,
    title: "Мини Wi-Fi камера с аккумулятором",
    characteristics: [
      {
        Модель: "EcamMiniBatt",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "T20L+GC2053",
        Разрешение2: "1920*1080@15fps",
        Объектив: "2.4mm lens",
        "ИК подсветка": "4pcs/10M",
        Материал: "Пластик",
        Питание: "Аккумулятор 5000mAh",
        Влагозащищенность: "IP54",
        Гарантия: "1 год",
        Тип: "Аккумуляторная камера",
        Технология: "Wi-Fi",
      },
    ],
    description:
      "Работает автономно до 2-х недель. Идеальна для временного наблюдения или мест без электропитания.",
    linkQualityText: "Подключено по Wi-Fi",
    linkQualityLink: "quality-minibatt",
  },
  {
    images: sharedImages1,
    title: "4K IP-камера для профессионального наблюдения",
    characteristics: [
      {
        Модель: "Ecam4K",
        Разрешение: "8MP 3840*2160P",
        Чипсет: "HiSilicon3519+IMX274",
        Разрешение2: "3840*2160@15fps",
        Объектив: "4mm lens",
        "ИК подсветка": "30pcs/40M",
        Материал: "Металл",
        Питание: "DC12V/2A, PoE",
        Влагозащищенность: "IP67",
        Гарантия: "3 года",
        Тип: "Профессиональная камера",
        Технология: "Сетевая IP",
      },
    ],
    description:
      "Максимально чёткое изображение в 4K разрешении. Предназначена для охраны важных объектов.",
    linkQualityText: "Трансляция в 4K",
    linkQualityLink: "quality-4k",
  },
  {
    images: sharedImages2,
    title: "IP камера с ночным видением и облачным подключением EasyCam",
    characteristics: [
      {
        Модель: "Ecam401",
        Разрешение: "4MP 2560*1440P",
        Чипсет: "HiSilicon3516EV300+IMX335",
        Разрешение2: "2560*1440@20fps",
        Объектив: "3.6mm lens",
        "ИК подсветка": "18pcs/30M",
        Материал: "Металл + пластик",
        Питание: "DC12V/1.5A, PoE",
        Влагозащищенность: "IP67",
        Гарантия: "2 года",
        Тип: "Цифровая камера",
        Технология: "Сетевая IP",
      },
    ],
    description:
      "Надёжная уличная камера с высоким разрешением и поддержкой PoE. Идеально подходит для охраны периметра и круглосуточного наблюдения.",
    linkQualityText: "Связь стабильна",
    linkQualityLink: "quality-401",
  },
  {
    images: sharedImages1,
    title: "Компактная внутренняя IP-камера для домашнего наблюдения",
    characteristics: [
      {
        Модель: "Ecam101",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "XM530+GC2063",
        Разрешение2: "1920*1080@30fps",
        Объектив: "2.1mm lens (широкий угол)",
        "ИК подсветка": "6pcs/10M",
        Материал: "Пластик",
        Питание: "DC5V/1A (microUSB)",
        Влагозащищенность: "IP20",
        Гарантия: "6 месяцев",
        Тип: "Мини-камера",
        Технология: "Wi-Fi",
      },
    ],
    description:
      "Миниатюрная Wi-Fi камера для квартиры или офиса. Обеспечивает хорошую картинку и звук, имеет мобильное приложение.",
    linkQualityText: "Трансляция активна",
    linkQualityLink: "quality-101",
  },
  {
    images: sharedImages2,
    title:
      "Уличная камера с функцией распознавания движения и записью на карту",
    characteristics: [
      {
        Модель: "Ecam302",
        Разрешение: "3MP 2048*1536P",
        Чипсет: "T21L+SC2232",
        Разрешение2: "2048*1536@20fps",
        Объектив: "4mm lens",
        "ИК подсветка": "12pcs/25M",
        Материал: "Металл",
        Питание: "DC12V/1A",
        Влагозащищенность: "IP66",
        Гарантия: "1 год",
        Тип: "Цифровая камера",
        Технология: "Сетевая IP",
      },
    ],
    description:
      "Поддерживает детекцию движения и запись на карту памяти. Отличный выбор для дачи или частного дома.",
    linkQualityText: "Подключено к облаку",
    linkQualityLink: "quality-302",
  },
  {
    images: sharedImages1,
    title: "Wi-Fi камера с поворотным механизмом и зумом",
    characteristics: [
      {
        Модель: "EcamPTZ01",
        Разрешение: "5MP 2592*1944P",
        Чипсет: "Hi3519V101",
        Разрешение2: "2592*1944@25fps",
        Объектив: "2.8-12mm моторизированный",
        "ИК подсветка": "24pcs/50M",
        Материал: "Металл",
        Питание: "DC12V/2A",
        Влагозащищенность: "IP66",
        Гарантия: "2 года",
        Тип: "PTZ камера",
        Технология: "Wi-Fi + LAN",
      },
    ],
    description:
      "Панорамная камера с возможностью дистанционного поворота и приближения изображения.",
    linkQualityText: "Камера активна",
    linkQualityLink: "quality-ptz01",
  },
  {
    images: sharedImages2,
    title: "IP-камера с записью в облако и двусторонней связью",
    characteristics: [
      {
        Модель: "EcamTalk",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "T30+SC2235",
        Разрешение2: "1920*1080@25fps",
        Объектив: "2.8mm lens",
        "ИК подсветка": "10pcs/15M",
        Материал: "Пластик",
        Питание: "DC5V/1A",
        Влагозащищенность: "IP44",
        Гарантия: "1 год",
        Тип: "Видеоняня",
        Технология: "Wi-Fi",
      },
    ],
    description:
      "Позволяет общаться с посетителями благодаря встроенному динамику и микрофону. Поддержка записи в облако.",
    linkQualityText: "Подключение активно",
    linkQualityLink: "quality-talk",
  },
  {
    images: sharedImages1,
    title: "Умная камера с AI-аналитикой и распознаванием лиц",
    characteristics: [
      {
        Модель: "EcamAI",
        Разрешение: "4MP 2560*1440P",
        Чипсет: "RK3566",
        Разрешение2: "2560*1440@30fps",
        Объектив: "3.6mm lens",
        "ИК подсветка": "16pcs/30M",
        Материал: "Металл",
        Питание: "DC12V/1.5A",
        Влагозащищенность: "IP66",
        Гарантия: "2 года",
        Тип: "AI-камера",
        Технология: "IP + AI",
      },
    ],
    description:
      "Поддерживает интеллектуальный анализ: распознавание лиц, подсчет людей, обнаружение движения по зонам.",
    linkQualityText: "AI активен",
    linkQualityLink: "quality-ai",
  },
  {
    images: sharedImages2,
    title: "Камера с широким углом обзора 180° и ночной съёмкой",
    characteristics: [
      {
        Модель: "EcamWide",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "Anyka+OV2710",
        Разрешение2: "1920*1080@25fps",
        Объектив: "1.8mm fisheye lens",
        "ИК подсветка": "8pcs/20M",
        Материал: "Металл",
        Питание: "DC12V/1A",
        Влагозащищенность: "IP66",
        Гарантия: "1 год",
        Тип: "Fisheye камера",
        Технология: "IP",
      },
    ],
    description:
      "Камера с рыбий глаз для обзора целого помещения без поворота. Отличный вариант для офисов и складов.",
    linkQualityText: "Поток стабилен",
    linkQualityLink: "quality-wide",
  },
  {
    images: sharedImages1,
    title: "Мини Wi-Fi камера с аккумулятором",
    characteristics: [
      {
        Модель: "EcamMiniBatt",
        Разрешение: "2MP 1920*1080P",
        Чипсет: "T20L+GC2053",
        Разрешение2: "1920*1080@15fps",
        Объектив: "2.4mm lens",
        "ИК подсветка": "4pcs/10M",
        Материал: "Пластик",
        Питание: "Аккумулятор 5000mAh",
        Влагозащищенность: "IP54",
        Гарантия: "1 год",
        Тип: "Аккумуляторная камера",
        Технология: "Wi-Fi",
      },
    ],
    description:
      "Работает автономно до 2-х недель. Идеальна для временного наблюдения или мест без электропитания.",
    linkQualityText: "Подключено по Wi-Fi",
    linkQualityLink: "quality-minibatt",
  },
  {
    images: sharedImages2,
    title: "4K IP-камера для профессионального наблюдения",
    characteristics: [
      {
        Модель: "Ecam4K",
        Разрешение: "8MP 3840*2160P",
        Чипсет: "HiSilicon3519+IMX274",
        Разрешение2: "3840*2160@15fps",
        Объектив: "4mm lens",
        "ИК подсветка": "30pcs/40M",
        Материал: "Металл",
        Питание: "DC12V/2A, PoE",
        Влагозащищенность: "IP67",
        Гарантия: "3 года",
        Тип: "Профессиональная камера",
        Технология: "Сетевая IP",
      },
    ],
    description:
      "Максимально чёткое изображение в 4K разрешении. Предназначена для охраны важных объектов.",
    linkQualityText: "Трансляция в 4K",
    linkQualityLink: "quality-4k",
  },
];
