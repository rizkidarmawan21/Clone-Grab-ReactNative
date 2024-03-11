// dummyData.ts
import { BannerPromoFirst, BannerPromoSecond, BannerPromoThird } from "../Dummy";
interface bannerPromo {
  id: number;
  image: any;
  title: string;
  name: string;
  sponsor: string;
}

const bannerPromo: bannerPromo[] = [
  {
    id: 1,
    title: "Jajan Sekarang",
    name: "Jajan Menu Inceran Selama Liburan",
    sponsor: "Disponsori oleh Mbok Berek",
    image: BannerPromoFirst,
  },
  {
    id: 2,
    title: "Berhemat Sekarang",
    name: "Lebih hemat untuk makanan kesukaanmu",
    sponsor: "Disponsori oleh Hilya Barokah Sate Ayam Khas Madura",
    image: BannerPromoSecond,
  },
  {
    id: 3,
    title: "Yuk Jajan",
    name: "Nikmati Liburan Sekolah, Diskon s.d. Rp150rb!",
    sponsor: "Disponsori oleh Grabfood",
    image: BannerPromoThird,
  },
];

export default bannerPromo;
