import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { db } from "../../firebase/init-firebase";
import { useHistory } from "react-router";
import "./Cart.css";
// import { addOutline, removeOutline } from "ionicons/icons";
import CartInputForm from "../../components/CartInputForm";
import EmptyCart from "../../components/EmptyCart";
const Cart = () => {
  const [cartData, setCartData] = useState<any>(null);
  const userUid = localStorage.getItem("uid");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const getCartData = async () => {
      setShowLoading(true);
      const q = query(collection(db, "cart"), where("uid", "==", userUid));
      onSnapshot(q, (snapshot) => {
        const productCartData: { cartProductId: string }[] = [];
        snapshot.docs.forEach((doc) => {
          productCartData.push({ ...doc.data(), cartProductId: doc.id });
        });

        setCartData(productCartData);
      });
    };
    getCartData();
  }, [setCartData, userUid]);
  console.log(cartData);

  //for delete product
  const deleteProdct = (id: string) => {
    const deleteProductRef = doc(db, "cart", id);
    deleteDoc(deleteProductRef)
      .then((response) => {
        console.log("product Deleted!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const totalamount = cartData.reduce(
    (
      prevProduct: any,
      currentPorduct: {
        quntity: any;
        price: any;
      }
    ) => {
      return prevProduct + currentPorduct.price * currentPorduct.quntity;
    },
    0
  );
  let totalPrice = totalamount.toFixed(2);

  const totalQuentity = cartData.reduce(
    (prevQnt: number, cartData: { quntity: number }) => {
      return prevQnt + cartData.quntity;
    },
    0
  );

  return (
    <IonPage>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
        duration={2000}
      />

      <IonContent>
        <Header />
        {cartData.length <= 0 ? (
          <EmptyCart />
        ) : (
          <>
            <IonItem lines="full">
              <h1>Shooping Cart</h1>
            </IonItem>
            <IonGrid>
              <IonRow className="ion-justify-content-center">
                <IonCol
                  sizeXl="10"
                  sizeLg="10"
                  sizeMd="12"
                  sizeSm="12"
                  sizeXs="12"
                >
                  <IonRow>
                    <IonCol
                      sizeXs="12"
                      sizeSm="12"
                      sizeMd="9"
                      sizeLg="9"
                      sizeXl="9"
                    >
                      {cartData.map(
                        (cartItem: {
                          cartProductId: string;
                          quntity: number;
                          price: number;
                          name: string;
                          productImg: string;
                          id: string;
                          productID: string;
                        }) => (
                          <div
                            className="ion-margin-top"
                            key={cartItem.productID}
                          >
                            <IonCard>
                              <IonCardContent>
                                <IonRow>
                                  <IonCol
                                    sizeXs="12"
                                    sizeSm="12"
                                    sizeMd="12"
                                    sizeLg="4"
                                    sizeXl="4"
                                  >
                                    <div className="cartImg">
                                      <img
                                        src={cartItem.productImg}
                                        alt="cartImg"
                                        className="cartImg"
                                      />
                                    </div>
                                  </IonCol>
                                  <IonCol
                                    sizeXs="12"
                                    sizeSm="12"
                                    sizeMd="12"
                                    sizeLg="6"
                                    sizeXl="6"
                                  >
                                    <h1 style={{ color: "black" }}>
                                      {cartItem.name}
                                    </h1>

                                    <div className="buttons">
                                      <CartInputForm
                                        quntity={cartItem.quntity}
                                        id={cartItem.cartProductId}
                                      />
                                      <IonButton
                                        color="light"
                                        size="default"
                                        onClick={() => {
                                          deleteProdct(cartItem.cartProductId);
                                        }}
                                      >
                                        Delete
                                      </IonButton>
                                    </div>
                                  </IonCol>
                                  <IonCol
                                    sizeXs="12"
                                    sizeSm="12"
                                    sizeMd="12"
                                    sizeLg="2"
                                    sizeXl="2"
                                  >
                                    <div>
                                      <h1
                                        className="ion-float-lg-right"
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ₹{cartItem.price}.00
                                      </h1>
                                    </div>
                                  </IonCol>
                                </IonRow>
                              </IonCardContent>
                            </IonCard>
                          </div>
                        )
                      )}
                    </IonCol>
                    <IonCol
                      sizeXs="12"
                      sizeSm="12"
                      sizeMd="3"
                      sizeLg="3"
                      sizeXl="3"
                    >
                      <div className="ion-margin-top orderSection">
                        <IonCard>
                          <IonCardContent className="centerOrder">
                            <h2 style={{ color: "black", fontSize: "1.2rem" }}>
                              Subtotal ( {totalQuentity} item) : ₹{totalPrice}
                            </h2>
                            <IonButton
                              className="orderBtn"
                              onClick={(totalamount) => {
                                history.push({
                                  pathname: "/order",
                                  state: { totalPrice },
                                });
                              }}
                            >
                              Proceed to Buy
                            </IonButton>
                          </IonCardContent>
                        </IonCard>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Cart;
