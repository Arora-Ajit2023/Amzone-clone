import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLoading,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonThumbnail,
  useIonModal,
} from "@ionic/react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { db } from "../../firebase/init-firebase";
import ZoomImageModal from "../../Modal/Zoommodal/ZoomImageModal";
import "./ProductDetail.css";

const ProductDetail = () => {
  const images = useRef<any>([]);
  // images.current = [];
  const [productData, setProductData] = useState<any>([]);
  const [isHoverOnImage, setIsHoverOnImage] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [img, setImg] = useState(`${images.current[0]}`[0]);
  const params: any = useParams();
  const { id } = params;
  // console.log(!!params.id);
  useEffect(() => {
    const getProductDataById = async () => {
      setShowLoading(true);
      const productDetailCollectionRef = doc(db, "products", id);
      const snapshot = await getDoc(productDetailCollectionRef);
      let productInfo: any = [];
      productInfo.push(snapshot.data());
      setProductData(productInfo);
      setShowLoading(false);

      console.log(productInfo);
      // console.log(productInfo[0].variants[0].img);
      images.current = `${productInfo[0].variants[0].img[0]}`;
      setImg(images.current);
    };

    getProductDataById();
  }, [id]);
  console.log(productData);

  const AddProductDataTOCart = async () => {
    const cartRef = collection(db, "cart");
    const q = query(cartRef, where("productId", "==", id));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot.empty);
    if (!querySnapshot.empty) {
      querySnapshot.forEach((item) => {
        // let cartItem = item.data();
        let cartProductId = item.id;
        const cartData = {
          name: productData[0].name,
          price: productData[0].variants[0].price,
          productId: id,
          productImg: productData[0].productImg,
          quntity: increment(1),
          totalPric: "",
          uid: localStorage.getItem("uid"),
        };
        // console.log(cartItem, cartProductId);
        let cartDocREf = doc(db, "cart", cartProductId);
        updateDoc(cartDocREf, cartData);
      });
    } else {
      const cartData = {
        name: productData[0].name,
        price: productData[0].variants[0].price,
        productId: id,
        productImg: productData[0].productImg,
        quntity: 1,
        totalPric: "",
        uid: localStorage.getItem("uid"),
      };
      addDoc(collection(db, "cart"), cartData)
        .then((response) => console.log("product Added to cart"))
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const hoverHander = (image: React.SetStateAction<string>, i: React.Key) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (let j = 0; j < image.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };

  const refs = useRef<any>([]);
  refs.current = [];
  const addRefs = (el: any) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  // for open zoomModal
  const [present, dismiss] = useIonModal(ZoomImageModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
    productData,
  });

  const openZoomModal = async () => {
    present({
      mode: "md",
      backdropDismiss: true,
      canDismiss: true,
      cssClass: "zoomImageClass",
    });
  };
  return (
    <IonPage>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
      <Header />
      <IonContent>
        {productData.map(
          (productDetail: {
            productdetails: any;
            imagePath: string;
            overview: any;
            productDisc: any;
            importantInformation: any;
            specification: any;
            productDescription: any;
            variants: any;
            category: string;
            localid: string;
            name: string;
          }) => (
            <>
              <IonGrid>
                <IonRow
                  style={{ borderBottom: "1px solid #e7e7e7" }}
                  className="ion-no-padding"
                >
                  {productDetail.variants.map(
                    (variantdetail: {
                      img: any;
                      qtyUnit: string;
                      price: number;
                    }) => (
                      <>
                        <IonCol
                          sizeXs="12"
                          sizeSm="12"
                          sizeMd="12"
                          sizeLg="6"
                          sizeXl="6"
                        >
                          <IonRow className="image_slide lgDevice">
                            <IonCol
                              sizeXs="2"
                              sizeSm="2"
                              sizeMd="2"
                              sizeLg="2"
                              sizeXl="2"
                            >
                              {variantdetail.img.map(
                                (itemImg: any, i: React.Key) => (
                                  <>
                                    <div className="left_img1">
                                      <div
                                        className={
                                          i === 0
                                            ? "img_warp active"
                                            : "img_warp"
                                        }
                                        key={i}
                                        onMouseOver={() => {
                                          hoverHander(itemImg, i);
                                        }}
                                        ref={addRefs}
                                      >
                                        <img
                                          src={`${productDetail.imagePath}${itemImg}`}
                                          alt="product_img"
                                        />
                                      </div>
                                    </div>
                                  </>
                                )
                              )}
                            </IonCol>
                            <IonCol
                              sizeXs="10"
                              sizeSm="10"
                              sizeMd="10"
                              sizeLg="10"
                              sizeXl="10"
                            >
                              <Swiper
                                zoom={{
                                  maxRatio: 3,
                                  minRatio: 1,
                                }}
                                modules={[Zoom]}
                                onSlideChange={(swiper) => swiper.zoom.out()}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <div
                                    className="swiper-zoom-container left_img2 "
                                    onMouseEnter={() => {
                                      setIsHoverOnImage(true);
                                    }}
                                    onMouseLeave={() => {
                                      setIsHoverOnImage(false);
                                    }}
                                  >
                                    <img
                                      src={`${productDetail.imagePath}${img}`}
                                      alt="selected_image"
                                      onClick={() => {
                                        openZoomModal();
                                      }}
                                    />
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              {/* <div
                              className="left_img2 "
                              onMouseEnter={() => {
                                setIsHoverOnImage(true);
                              }}
                              onMouseLeave={() => {
                                setIsHoverOnImage(false);
                              }}
                            >
                              <img
                                src={`${productDetail.imagePath}${img}`}
                                alt="selected_image"
                                onClick={() => {
                                  openZoomModal();
                                }}
                              />
                            </div> */}

                              <div className="ion-text-center ">
                                {isHoverOnImage ? (
                                  <p>Roll over image to zoom in</p>
                                ) : (
                                  <p>Click to open expanded view</p>
                                )}
                              </div>
                            </IonCol>
                          </IonRow>
                          <IonRow className="smDevice">
                            <IonCol sizeXs="12" sizeSm="12">
                              <Swiper
                                zoom={{
                                  maxRatio: 3,
                                  minRatio: 1,
                                }}
                                modules={[Zoom]}
                                onSlideChange={(swiper) => swiper.zoom.out()}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <div
                                    className="swiper-zoom-container left_img2 "
                                    onMouseEnter={() => {
                                      setIsHoverOnImage(true);
                                    }}
                                    onMouseLeave={() => {
                                      setIsHoverOnImage(false);
                                    }}
                                  >
                                    <img
                                      src={`${productDetail.imagePath}${img}`}
                                      alt="selected_image"
                                      onClick={() => {
                                        openZoomModal();
                                      }}
                                    />
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div className="ion-text-center ">
                                {isHoverOnImage ? (
                                  <p>Roll over image to zoom in</p>
                                ) : (
                                  <p>Click to open expanded view</p>
                                )}
                              </div>
                            </IonCol>
                            <IonCol sizeXs="12" sizeSm="12">
                              {productData[0].variants[0].img.map(
                                (productImg: any, i: any) => (
                                  <div className="right_img">
                                    <IonThumbnail>
                                      <img
                                        src={`${productData[0].imagePath}${productImg}`}
                                        alt="product-img"
                                        onMouseOver={() => {
                                          hoverHander(productImg, i);
                                        }}
                                        ref={addRefs}
                                      />
                                    </IonThumbnail>
                                  </div>
                                )
                              )}
                            </IonCol>
                          </IonRow>
                        </IonCol>
                        <IonCol
                          sizeXs="12"
                          sizeSm="12"
                          sizeMd="12"
                          sizeLg="6"
                          sizeXl="6"
                        >
                          <IonItem lines="full">
                            <h2>
                              {productDetail.name},{variantdetail.qtyUnit}
                            </h2>
                          </IonItem>
                          <div className="ion-padding-start">
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <IonText>
                                      <IonNote>Price:</IonNote>
                                    </IonText>
                                  </td>

                                  <td
                                    className="price-tag"
                                    style={{
                                      fontSize: "1.6rem",
                                      color: "#B12704",
                                    }}
                                  >
                                    ₹{variantdetail.price}.00
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    <IonNote>Inclusive of all taxes</IonNote>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {!!productData[0].return && (
                            <div
                              className="ion-text-center ion-padding-top"
                              style={{ borderBottom: "2px solid #e7e7e7 " }}
                            >
                              <IonRow>
                                {Object.entries(
                                  productData[0].return[0].retrunpolicy
                                ).map(([key]) => {
                                  return (
                                    <IonCol
                                      sizeXs="3"
                                      sizeSm="3"
                                      sizeMd="3"
                                      sizeLg="3"
                                      sizeXl="3"
                                    >
                                      <div className="ion-padding-end">
                                        <IonThumbnail className="returnpolicy">
                                          <img
                                            src={
                                              productData[0].return[0]
                                                .retrunpolicy[key]
                                            }
                                            alt=""
                                          />
                                        </IonThumbnail>
                                      </div>
                                      <p className="ion-no-margin return_policy ">
                                        {key}
                                      </p>
                                    </IonCol>
                                  );
                                })}
                              </IonRow>
                            </div>
                          )}
                          <div className="ion-padding-top buybutton">
                            <IonButton
                              className="buybutton"
                              expand="block"
                              onClick={AddProductDataTOCart}
                            >
                              Add to Cart
                            </IonButton>
                          </div>
                          {!!productDetail.productDescription && (
                            <div>
                              <h4>About this item</h4>
                              <ul
                                style={{
                                  paddingLeft: "10px",
                                  fontSize: "1rem",
                                }}
                              >
                                {productDetail.productDescription.map(
                                  (prodDis: string) => (
                                    <li
                                      style={{
                                        lineHeight: "1.5rem",
                                      }}
                                    >
                                      {prodDis}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </IonCol>
                      </>
                    )
                  )}
                </IonRow>
                <hr />
                {!!productDetail.specification && (
                  <>
                    <div className="ion-padding-start ">
                      <h4 style={{ color: "#C60", fontWeight: "bold" }}>
                        Product information
                      </h4>
                    </div>
                    <IonRow className=" ion-padding-bottom ">
                      {productDetail.specification?.map((specs: any) => (
                        <>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="12"
                            sizeLg="6"
                            sizeXl="6"
                            className="ion-padding-horizontal"
                          >
                            <IonItem lines="full" className="ion-no-padding">
                              <h4>Technical Details</h4>
                            </IonItem>
                            <div className="ion-padding-top ion-text-start">
                              {Object.keys(specs?.technicalDetails).map(
                                (key, i) => (
                                  <div className="ion-padding-start">
                                    <div className="test" key={i}>
                                      <IonRow>
                                        <IonCol
                                          style={{
                                            backgroundColor: "#f3f3f3",
                                            padding: "10px",
                                          }}
                                        >
                                          <IonText className="ion-padding-start  ">
                                            {key}
                                          </IonText>
                                        </IonCol>
                                        <IonCol
                                          style={{
                                            padding: "10px",
                                          }}
                                        >
                                          <IonText>
                                            {specs?.technicalDetails[key]}
                                          </IonText>
                                        </IonCol>
                                      </IonRow>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="12"
                            sizeLg="6"
                            sizeXl="6"
                            className="ion-padding-horizontal"
                          >
                            <IonItem lines="full" className="ion-no-padding">
                              <h4> Additional Information</h4>
                            </IonItem>
                            <div className="ion-padding-top ion-text-start">
                              {Object.entries(specs?.additionalInformation).map(
                                ([key]) => {
                                  return (
                                    <div className="ion-padding-start">
                                      <div className="test">
                                        <IonRow>
                                          <IonCol
                                            style={{
                                              backgroundColor: "#f3f3f3",
                                              padding: "10px",
                                            }}
                                          >
                                            <IonText className="ion-padding-start">
                                              {key}
                                            </IonText>
                                          </IonCol>
                                          <IonCol
                                            style={{
                                              padding: "10px",
                                            }}
                                          >
                                            <IonText>
                                              {
                                                specs?.additionalInformation[
                                                  key
                                                ]
                                              }
                                            </IonText>
                                          </IonCol>
                                        </IonRow>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                            <IonRow>
                              <IonCol>
                                <IonItem
                                  lines="full"
                                  className="ion-no-padding"
                                >
                                  <h4>Feedback</h4>
                                </IonItem>
                                <div className="low-price">
                                  <IonText className="ion-padding-start">
                                    Would you like to
                                    <span>
                                      <a href="/">
                                        tell us about a lower price?
                                      </a>
                                    </span>
                                  </IonText>
                                </div>
                              </IonCol>
                            </IonRow>
                          </IonCol>
                        </>
                      ))}
                    </IonRow>
                  </>
                )}
                {!!productDetail.productdetails && (
                  <div>
                    <h3 className="heading">Product details</h3>
                    {Object.entries(productDetail.productdetails).map(
                      ([key]) => (
                        <div
                          style={{
                            paddingInlineStart: "4rem",
                            lineHeight: "1.6rem",
                          }}
                        >
                          <span>
                            <span
                              className="ion-padding-end"
                              style={{ color: "black", fontWeight: "bold" }}
                            >
                              {key}
                            </span>
                            :
                            <span className="ion-padding-start">
                              {productDetail.productdetails[key]}{" "}
                            </span>
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </IonGrid>
              <div>
                {!!productDetail.importantInformation && (
                  <>
                    <h3 className="heading">Important information</h3>
                    {Object.entries(productDetail.importantInformation).map(
                      ([key]) => (
                        <div>
                          <div style={{ paddingInlineStart: "4rem" }}>
                            <h4>{key}</h4>
                            <p>{productDetail.importantInformation[key]}</p>
                          </div>
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
              <div className="ion-padding-horizontal">
                {!!productDetail.productDisc && (
                  <>
                    {Object.entries(productDetail.productDisc).map(([key]) => (
                      <div className="product-disc">
                        <h4>{key}</h4>
                        <p>{productDetail.productDisc[key]}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div className="img-center">
                {!!productDetail.overview && (
                  <>
                    <h3 className="heading">From the manufacturer</h3>
                    {/* {productDetail.overview.map((item: { img: any[] }) => (
                  <>
                    {item.img.map((overviewImg) => (
                      <>
                        <div className="overviewImg">
                          <img src={overviewImg} alt="overview img" />
                        </div>
                      </>
                    ))}
                  </>
                ))} */}
                    {productDetail.overview[0].img.map(
                      (item: string | undefined) => (
                        <>
                          <div className="overviewImg">
                            <img src={item} alt="overview img" />
                          </div>
                        </>
                      )
                    )}
                  </>
                )}
              </div>
            </>
          )
        )}
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
