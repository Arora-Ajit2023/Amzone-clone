import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SwiperCard.css";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonLabel } from "@ionic/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/init-firebase";
const SwiperCard = () => {
  const [productSlides, setProductSlides] = useState<any>([]);

  // let SwiperData = [
  //   {
  //     swipId: 0,
  //     heading: "Blockbuster Deals",
  //     subHeading: "See all deals",
  //     swipData: [
  //       {
  //         swipdataId: 0,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/41op1vdp-UL._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "Samsung Galaxy M13",
  //       },
  //       {
  //         swipdataId: 1,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/41VcqwZ-O8L._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "Redmi 10A",
  //       },
  //       {
  //         swipdataId: 2,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/41CB1rnC5tL._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "Redmi A1",
  //       },
  //       {
  //         swipdataId: 3,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/31smn8fDvrL._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "iPhone 13 Pro",
  //       },
  //       {
  //         swipdataId: 4,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/31smn8fDvrL._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "iPhone 13 Pro",
  //       },
  //       {
  //         swipdataId: 5,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/31smn8fDvrL._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "iPhone 13 Pro",
  //       },
  //       {
  //         swipdataId: 6,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/31smn8fDvrL._AC_SY200_.jpg",
  //         // swipSubHeading: "Great Indian Festival",
  //         // swipHeading: "iPhone 13 Pro",
  //       },
  //     ],
  //   },
  //   {
  //     swipId: 1,
  //     heading: "Decors & Planters for your garden",
  //     subHeading: "See all offers",
  //     swipData: [
  //       {
  //         swipdataId: 0,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/81EHWcYXDgL._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 1,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/610mhVNIM9L._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 2,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/81WMxVkQ6dL._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 3,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/61pzNRNMDuS._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 4,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/61pzNRNMDuS._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 5,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/61pzNRNMDuS._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 6,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/61pzNRNMDuS._AC_SY200_.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     swipId: 2,
  //     heading: "Home décor picks from local shops",
  //     subHeading: "See all offers",
  //     swipData: [
  //       {
  //         swipdataId: 0,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/71UgkuLr+hS._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 1,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/71pIiAizmES._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 2,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/61gdyUSoXCS._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 3,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/71bPPaJ0m6S._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 4,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/71bPPaJ0m6S._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 5,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/71bPPaJ0m6S._AC_SY200_.jpg",
  //       },
  //       {
  //         swipdataId: 6,
  //         swipImg:
  //           "https://m.media-amazon.com/images/I/71bPPaJ0m6S._AC_SY200_.jpg",
  //       },
  //     ],
  //   },
  // ];
  useEffect(() => {
    const getProductsSlides = async () => {
      const docref = collection(db, "productSlider");
      const snapshot = await getDocs(docref);
      const productSlide = snapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));

      setProductSlides(productSlide);
    };
    getProductsSlides();
  }, []);
  // const addData = () => {
  //   SwiperData.forEach((element) => {
  //     console.log(element);
  //     addDoc(collection(db, "productSlider"), element)
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
      {/* <IonButton onClick={addData}>Add Data</IonButton> */}
      {productSlides.map(
        (item: {
          swipId: string;
          heading: string;
          swipData: [{ swipdataId: string; swipImg: string; swipSubHeading: string }];
        }) => (
          <IonCard className="ion-margin-horizontal" key={item.swipId}>
            <IonCardHeader>
              <IonCardTitle>
                <h2>{item.heading}</h2>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="ion-item-center">
              <Swiper
                // slidesPerView={3}
                slidesPerGroup={2}
                modules={[Navigation, Scrollbar, Autoplay]}
                navigation={true}
                autoplay={false}
                scrollbar={{ draggable: false, dragSize: 300 }}
                allowTouchMove={false}
                loop={true}
                breakpoints={{
                  // when window width is >= 640px
                  576: {
                    width: 576,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                  992: {
                    width: 992,
                    slidesPerView: 4,
                  },
                  1200: {
                    width: 1200,
                    slidesPerView: 4,
                  },
                }}
              >
                {item.swipData.map((swip) => (
                  <SwiperSlide key={swip.swipdataId}>
                    {/* <IonCard button>
                      <IonCardContent>
                        <img
                          src={swip.swipImg}
                          alt="demo"
                          className="cardView"
                        />
                      </IonCardContent>
                      <IonLabel color="dark">{swip.swipSubHeading}</IonLabel>
                    </IonCard> */}
                    <div>
                      <img src={swip.swipImg} alt="demo" className="cardView" />
                    </div>
                    <div>
                      <IonLabel color="dark">{swip.swipSubHeading}</IonLabel>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonCardContent>
          </IonCard>
        )
      )}
    </section>
  );
};
export default SwiperCard;
