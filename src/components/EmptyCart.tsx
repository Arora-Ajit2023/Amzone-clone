import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import "./EmptyCart.css";
const EmptyCart = () => {
  const history = useHistory();
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="7" sizeXl="7">
            <div className="cartIcon">
              <img
                src={
                  "https://img.freepik.com/premium-vector/mom-child-store-they-make-purchases-go-with-large-empty-cart-vector-illustration-white-background_422344-543.jpg"
                }
                alt=""
              />
            </div>
          </IonCol>
          <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="5" sizeXl="5" className="ion-padding-top">
            <div className="ion-text-center  emptyCartText">
              <IonText>
                <h3>Your cart is Empty!</h3>
                <IonButton
                  color="warning"
                  onClick={() => {
                    history.push("/home");
                  }}
                >
                  Start Shopping
                </IonButton>
              </IonText>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default EmptyCart;
