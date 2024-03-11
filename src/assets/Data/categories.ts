// dummyData.ts
import { IconCategoryCar, IconCategoryEtc, IconCategoryFood, IconCategoryJastip, IconCategoryMart, IconCategoryMotor, IconCategoryPackage, IconCategoryPhone } from "../Icon";
interface Category {
  id: number;
  title: string;
  image: any; // path to the image file, could be the URL or local path depending on the context
}

const categories: Category[] = [
  {
    id: 1,
    title: "Makanan",
    image: IconCategoryFood
  },
  {
    id: 2,
    title: "Motor",
    image: IconCategoryMotor
  },
  {
    id: 3,
    title: "Mobil",
    image: IconCategoryCar
  },
  {
    id: 4,
    title: "Express",
    image: IconCategoryPackage
  },
  {
    id: 5,
    title: "Mart",
    image: IconCategoryMart
  },
  {
    id: 6,
    title: "Pulsa/Token",
    image: IconCategoryPhone
  },
  {
    id: 7,
    title: "Jastip",
    image: IconCategoryJastip
  },
  {
    id: 8,
    title: "Lainnya",
    image: IconCategoryEtc
  },
];

export default categories;
