import {
  IonBadge,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { cartSharp } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <IonHeader>
        <IonToolbar className="header_style">
          <IonTitle
            onClick={() => {
              history.replace("/home");
            }}
          >
            Amazon clone
          </IonTitle>
          <IonButtons slot="end">
            <div className="ion-padding-horizontal">
              <IonButton
                onClick={() => {
                  history.replace("/login");
                  localStorage.removeItem("email");
                  localStorage.removeItem("uid");
                }}
                className="buttonHover "
              >
                Logout
              </IonButton>
            </div>
            <div>
              <IonButton
                size="large"
                onClick={() => {
                  history.push("/cart");
                }}
                className="buttonHover "
              >
                <IonIcon
                  icon={cartSharp}
                  style={{ fontSize: "2rem" }}
                ></IonIcon>
                <IonBadge className="cartbadge">12</IonBadge>
              </IonButton>
            </div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default Header;
