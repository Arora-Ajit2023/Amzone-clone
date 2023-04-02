import { IonBadge, IonButton, IonIcon } from "@ionic/react";
import { cartSharp } from "ionicons/icons";
import React from "react";
import "./CartButton.css";
const CartButton = () => {
  return (
    <IonButton>
      <IonIcon icon={cartSharp} style={{ fontSize: "2rem" }}></IonIcon>
      <IonBadge className="cartbadge">1</IonBadge>
    </IonButton>
  );
};

export default CartButton;
