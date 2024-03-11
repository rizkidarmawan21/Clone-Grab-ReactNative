// dummyData.ts
import { ProductResto1, ProductResto2, ProductResto3, ProductResto4 } from "../Dummy";
interface rekomendationResto {
  id: number;
  image: any;
  title: string;
  distance: string;
  rating: string;
  promo: string;
}

const rekomendationResto: rekomendationResto[] = [
  {
    id: 1,
    title: "Mie Gacoan - Lempongsari",
    distance: "0,9 km",
    rating: "4.9",
    promo: "HEMAT 40rb",
    image: ProductResto4,
  },
  {
    id: 2,
    title: "Warunf Pecel Bu Sumo -Kariadi",
    distance: "1.2 km",
    rating: "4.5",
    promo: "HEMAT 50rb",
    image: ProductResto2,
  },
  {
    id: 3,
    title: "RM. Padang Murah - Pleburan",
    distance: "1.6 km",
    rating: "4.3",
    promo: "HEMAT 30rb",
    image: ProductResto3,
  },
  {
    id: 4,
    title: "Penyetan Arto Moro Lamongan - Randusari",
    distance: "0,9 km",
    rating: "4.9",
    promo: "HEMAT 40rb",
    image: ProductResto1,
  },
];

export default rekomendationResto;
