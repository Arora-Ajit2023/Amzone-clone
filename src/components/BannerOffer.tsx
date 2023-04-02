import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/init-firebase";
import { useEffect, useState } from "react";
import "./BannerOffer.css";
// const BannerImg = [
//   "https://m.media-amazon.com/images/I/71gAxGlk1YL._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/7129jqrtZCL._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/718V3baMkhL._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/71Na36g-fVL._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/716ETZgnk2L._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/71kdfFPktCL._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/71IKsQbTCIL._SX3000_.jpg",
//   "https://m.media-amazon.com/images/I/71tm0xXvXXL._SX3000_.jpg",
// ];

// const BannerImg1 = [
//   {
//     localId: 0,
//     Bimg: "https://m.media-amazon.com/images/I/71gAxGlk1YL._SX3000_.jpg",
//   },
//   {
//     localId: 1,
//     Bimg: "https://m.media-amazon.com/images/I/7129jqrtZCL._SX3000_.jpg",
//   },
//   {
//     localId: 2,
//     Bimg: "https://m.media-amazon.com/images/I/718V3baMkhL._SX3000_.jpg",
//   },
//   {
//     locaId: 3,
//     Bimg: "https://m.media-amazon.com/images/I/71Na36g-fVL._SX3000_.jpg",
//   },
//   {
//     localId: 4,
//     Bimg: "https://m.media-amazon.com/images/I/716ETZgnk2L._SX3000_.jpg",
//   },
//   {
//     localId: 5,
//     Bimg: "https://m.media-amazon.com/images/I/71kdfFPktCL._SX3000_.jpg",
//   },
//   {
//     localId: 6,
//     Bimg: "https://m.media-amazon.com/images/I/71IKsQbTCIL._SX3000_.jpg",
//   },
//   {
//     localId: 7,
//     Bimg: "https://m.media-amazon.com/images/I/71tm0xXvXXL._SX3000_.jpg",
//   },
// ];

const BannerOffer: React.FC = () => {
  const [bannerData, setBannerData] = useState<any>([]);
  useEffect(() => {
    const getProducts = async () => {
      const docref = collection(db, "bannerImg");
      const snapshot = await getDocs(docref);
      const bannerImgLst = snapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      setBannerData(bannerImgLst);
    };
    getProducts();
  }, []);
  // console.log(bannerData);

  // const addBannerimg = () => {
  //   BannerImg1.forEach((element) => {
  //     console.log(element);
  //     addDoc(collection(db, "bannerImg"), element)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .then((error) => {
  //         console.log(error);
  //       });
  //   });
  // };

  return (
    <section>
      <Swiper slidesPerGroup={1} modules={[Scrollbar, Autoplay]} autoplay={true} allowTouchMove={true} loop={true}>
        {bannerData.map((item: { id: string; Bimg: string }) => (
          <SwiperSlide key={item.id} className="bannerImg">
            <img src={item.Bimg} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerOffer;
