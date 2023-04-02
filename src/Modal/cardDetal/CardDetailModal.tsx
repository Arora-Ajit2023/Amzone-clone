import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React from "react";
import "./CardDetailModal.css";

const CardDetailModal = ({
  onDismiss,
  cardImg,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
  cardImg: any;
}) => {
  return (
    <IonContent scroll-y={false}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enter card details</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(null, "cancel")}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="6" sizeXl="6">
            <h4>Amazon accepts all major credit and debit cards:</h4>
            {cardImg.map((item: string) => (
              <>
                <li className="cardList">
                  <IonThumbnail>
                    <img src={item} alt="card" />
                  </IonThumbnail>
                </li>
              </>
            ))}
          </IonCol>
          <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="6" sizeXl="6">
            <div className="ion-padding-bottom">
              <IonItem fill="outline">
                <IonLabel position="floating">Card Number</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </div>
            <div className="ion-padding-bottom">
              <IonItem fill="outline">
                <IonLabel position="floating">Name on Card</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </div>

            <div>
              <IonItem fill="outline">
                <IonLabel position="floating">Expiry date</IonLabel>
                <IonInput inputmode="numeric"></IonInput>
              </IonItem>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFooter>
        <IonRow className="ion-float-right">
          <IonCol>
            <IonButton color="light" onClick={() => onDismiss(null, "cancel")}>
              Cancle
            </IonButton>
            <IonButton color="warning" onClick={() => onDismiss(null, "cancel")}>
              Enter card Detail
            </IonButton>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonContent>
  );
};

export default CardDetailModal;
