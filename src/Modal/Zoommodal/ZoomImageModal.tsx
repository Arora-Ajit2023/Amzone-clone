import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonThumbnail,
  IonToolbar,
} from "@ionic/react";
import { Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import { closeOutline } from "ionicons/icons";
import React, { useState } from "react";
import "./ZoomImageModal.css";
const ZoomImageModal = ({
  onDismiss,
  productData,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
  productData: any;
}) => {
  const [img, setImg] = useState(productData[0].variants[0].img[0]);
  console.log(img);
  const hoverHander = (image: any, i: any) => {
    setImg(image);
    // refs.current[i].classList.add("activeImg");
    // for (let j = 0; j < image.length; j++) {
    //   if (i !== j) {
    //     refs.current[j].classList.remove("activeImg");
    //   }
    // }
  };

  // const refs = useRef<any>([]);
  // refs.current = [];
  // const addRefs = (el: any) => {
  //   if (el && !refs.current.includes(el)) {
  //     refs.current.push(el);
  //   }
  // };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(null, "cancel")}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY-y={false}>
        <IonGrid>
          <IonRow>
            <IonCol sizeXs="12" sizeSm="12" sizeMd="9" sizeLg="9" sizeXl="9">
              {/* <div className="left_img">
                <img src={`${productData[0].imagePath}${img}`} alt="singal product" />
              </div> */}
              <Swiper
                zoom={{ maxRatio: 3, minRatio: 1 }}
                modules={[Zoom]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-zoom-container left_img  ">
                    <img
                      src={`${productData[0].imagePath}${img}`}
                      alt="selected_image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </IonCol>
            <IonCol sizeXs="12" sizeSm="12" sizeMd="3" sizeLg="3" sizeXl="3">
              <h3>
                {productData[0].name},{productData[0].variants[0].qtyUnit}
              </h3>

              {productData[0].variants[0].img.map((productImg: any, i: any) => (
                <div className="right_img">
                  <IonThumbnail>
                    <img
                      src={`${productData[0].imagePath}${productImg}`}
                      alt="product-img"
                      onMouseOver={() => {
                        hoverHander(productImg, i);
                      }}
                    />
                  </IonThumbnail>
                </div>
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ZoomImageModal;
