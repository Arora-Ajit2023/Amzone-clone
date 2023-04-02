import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonLoading,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/init-firebase";
import "./Product.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Product: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);
  const params: any = useParams();
  const history = useHistory();
  const [catData, setCatData] = useState<any>([]);
  const { category } = params;
  console.log(params.category);
  //   console.log(params);
  useEffect(() => {
    const getCategoryData = async () => {
      setShowLoading(true);
      const q = query(
        collection(db, "products"),
        where("category", "==", `${category}`)
      );
      onSnapshot(q, (snapshot) => {
        let productData: { id: string }[] = [];
        snapshot.docs.forEach((doc) => {
          productData.push({ ...doc.data(), id: doc.id });
        });
        setShowLoading(false);

        setCatData(productData);
        console.log(productData);
      });
    };
    getCategoryData();
  }, [category]);

  return (
    <IonPage>
      <Header />
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
              <IonRow>
                {catData.map(
                  (product: {
                    category: string;
                    id: string;
                    price: string;
                    imagePath: string;
                    variants: any;
                    localid: string;
                    name: string;
                    productImg: string;
                    qtyUnit: string;
                  }) => (
                    <>
                      <IonCol
                        key={product.localid}
                        sizeXs="12"
                        sizeSm="6"
                        sizeMd="6"
                        sizeLg="3"
                        sizeXl="3"
                      >
                        <div className="product-card">
                          <IonCard>
                            <img
                              alt="product-img"
                              src={product.productImg}
                              onClick={() => {
                                history.push(
                                  `/product/${product.category}/${product.id}`
                                );
                              }}
                            />
                            <IonCardContent>
                              {product.variants.map(
                                (productDetail: {
                                  qtyUnit: string;
                                  price: string;
                                }) => (
                                  <>
                                    <IonCardTitle className="ion-text-warp">
                                      {product.name.slice(0, 30) +
                                        (product.name.length > 50 ? "..." : "")}
                                    </IonCardTitle>
                                    <div className="price">
                                      <IonRow>
                                        <IonCol
                                          size="5"
                                          className="ion-align-self-center"
                                        >
                                          <IonText>
                                            ₹{productDetail.price}
                                          </IonText>
                                        </IonCol>
                                      </IonRow>
                                    </div>
                                  </>
                                )
                              )}
                            </IonCardContent>
                          </IonCard>
                        </div>
                      </IonCol>
                    </>
                  )
                )}
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Product;
