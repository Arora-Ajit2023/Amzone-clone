import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
  IonThumbnail,
  useIonModal,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardDetailModal from "../../Modal/cardDetal/CardDetailModal";
import "./Order.css";
import { useLocation } from "react-router-dom";

interface IState {
  totalPrice?: number;
}
const Order = (props: { location: { state: any } }) => {
  const [cardMethod, setCardMethod] = useState(false);
  const [upiMethod, setUpiMethod] = useState(false);
  const location = useLocation();
  let delevery: number;
  // console.log(location.state);
  const totalPrice: any = (location.state as IState).totalPrice;
  console.log(totalPrice);
  if (totalPrice < 6000) {
    delevery = 75;
  } else {
    delevery = 175;
  }
  let totalOrderPrice = (+totalPrice + delevery).toFixed(2);

  const cardImg = [
    "https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg",
    "https://pngimg.com/uploads/mastercard/mastercard_PNG26.png ",
    "https://cdn.imgbin.com/10/8/1/imgbin-maestro-debit-card-mastercard-credit-card-payment-card-mastercard-EvBtsL2mzhQjNmLTsEi9j5Yn0.jpg",
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/rupay-logo-icon.png",
  ];
  const [present, dismiss] = useIonModal(CardDetailModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
    cardImg,
  });

  function openCardDetailModal() {
    present({
      mode: "md",
      backdropDismiss: false,
      canDismiss: true,
      cssClass: "cardDetailModalClass",
    });
  }
  return (
    <IonPage>
      <IonContent>
        <IonItem lines="full">
          <h2>Checkout</h2>
        </IonItem>
        <form>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                <IonRow>
                  <IonCol
                    sizeXs="12"
                    sizeSm="12"
                    sizeMd="12"
                    sizeLg="4"
                    sizeXl="4"
                  >
                    <div className="mobileView">
                      <IonCard>
                        <div className="ion-text-center ">
                          <IonButton disabled color="warning">
                            Use this payment method
                          </IonButton>
                          <div>
                            <IonItem lines="full">
                              <IonText className="ion-text-center ion-padding-vertical ion-padding-horizontal">
                                Choose a payment method to continue checking
                                out. You will still have a chance to review and
                                edit your order before it is final.
                              </IonText>
                            </IonItem>
                          </div>
                        </div>
                        <h4 className="ion-padding-start">Order Summary</h4>

                        <IonGrid>
                          <IonRow className="ion-justify-content-between">
                            <IonCol>Items</IonCol>
                            <IonCol>₹{totalPrice}</IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol>Delivery:</IonCol>
                            <IonCol>₹{delevery}</IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol>Total:</IonCol>
                            <IonCol>₹{totalOrderPrice}</IonCol>
                          </IonRow>
                          <IonRow className="ion-text-center orderstyle">
                            <IonCol>
                              <h2>Total Order:</h2>
                            </IonCol>
                            <IonCol className="ion-float-right">
                              <h2>₹{totalOrderPrice}</h2>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCard>
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol
                    sizeXs="12"
                    sizeSm="12"
                    sizeMd="12"
                    sizeLg="8"
                    sizeXl="8"
                  >
                    <IonCard>
                      <IonItem lines="none" mode="ios">
                        <h2> 1.Delivery address</h2>
                      </IonItem>
                      <IonCardContent>
                        <IonRow>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="4"
                            sizeLg="4"
                            sizeXl="4"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">Full Name</IonLabel>
                              <IonInput></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="4"
                            sizeLg="4"
                            sizeXl="4"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">
                                Mobile number
                              </IonLabel>
                              <IonInput
                                type="text"
                                max={10}
                                min={10}
                              ></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="4"
                            sizeLg="4"
                            sizeXl="4"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">Pincode</IonLabel>
                              <IonInput
                                type="text"
                                max={6}
                                min={6}
                                placeholder=" 6 digit [0-9] PIN code"
                              ></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="6"
                            sizeLg="6"
                            sizeXl="6"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">
                                Flat, House no.,Building, Company
                              </IonLabel>
                              <IonInput type="text" max={10} min={8}></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="6"
                            sizeLg="6"
                            sizeXl="6"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">
                                {" "}
                                Area, Street, Sector, Village
                              </IonLabel>
                              <IonInput type="text" max={10} min={8}></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="4"
                            sizeLg="4"
                            sizeXl="4"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating"> Landmark</IonLabel>
                              <IonInput
                                type="text"
                                max={10}
                                min={8}
                                placeholder="eg. Near Apollo hospital"
                              ></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="4"
                            sizeLg="4"
                            sizeXl="4"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">Town/City</IonLabel>
                              <IonInput type="text" max={10} min={8}></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonCol
                            sizeXs="12"
                            sizeSm="12"
                            sizeMd="4"
                            sizeLg="4"
                            sizeXl="4"
                          >
                            <IonItem fill="outline">
                              <IonLabel position="floating">State</IonLabel>
                              <IonInput type="text" max={10} min={8}></IonInput>
                            </IonItem>
                          </IonCol>
                          <IonButton
                            expand="block"
                            style={{ width: "100%" }}
                            color="warning"
                          >
                            submit
                          </IonButton>
                        </IonRow>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol
                    sizeXs="12"
                    sizeSm="12"
                    sizeMd="12"
                    sizeLg="4"
                    sizeXl="4"
                  >
                    <div className="desktopView">
                      <IonCard>
                        <div className="ion-text-center ">
                          <IonButton disabled color="warning">
                            Use this payment method
                          </IonButton>
                          <div>
                            <IonItem lines="full">
                              <IonText className="ion-text-center ion-padding-vertical ion-padding-horizontal">
                                Choose a payment method to continue checking
                                out. You will still have a chance to review and
                                edit your order before it is final.
                              </IonText>
                            </IonItem>
                          </div>
                        </div>
                        <h4 className="ion-padding-start">Order Summary</h4>

                        <IonGrid>
                          <IonRow className="ion-justify-content-between">
                            <IonCol>Items</IonCol>
                            <IonCol>₹{totalPrice}</IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol>Delivery:</IonCol>
                            <IonCol>₹{delevery}</IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol>Total:</IonCol>
                            <IonCol>₹{totalOrderPrice}</IonCol>
                          </IonRow>
                          <IonRow className="ion-text-center orderstyle">
                            <IonCol>
                              <h2>Total Order:</h2>
                            </IonCol>
                            <IonCol className="ion-float-right">
                              <h2>₹{totalOrderPrice}</h2>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCard>
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol
                    sizeXs="12"
                    sizeSm="12"
                    sizeMd="12"
                    sizeLg="8"
                    sizeXl="8"
                    className="ion-float-right"
                  >
                    <IonCard>
                      <IonItem lines="none">
                        <h2>2. Payment method</h2>
                      </IonItem>
                      <IonRow>
                        <IonCol>
                          <IonList mode="md">
                            <IonRadioGroup>
                              <IonItem
                                lines="none"
                                onClick={() => {
                                  setCardMethod(true);
                                  setUpiMethod(false);
                                }}
                              >
                                <IonLabel>
                                  <h2>Pay with Debit/Credit/ATM Cards</h2>
                                  <p className="ion-padding-top ">
                                    You can save your cards as per new RBI
                                    guidelines.
                                    <Link to="/login">Learn More.</Link>
                                  </p>
                                  <IonThumbnail>
                                    {cardImg.map((item) => (
                                      <div className="cardImg">
                                        <img src={item} alt="card" />
                                      </div>
                                    ))}
                                  </IonThumbnail>
                                </IonLabel>
                                <IonRadio
                                  slot="start"
                                  className="radio_align1"
                                ></IonRadio>
                              </IonItem>
                              {cardMethod && (
                                <div className="cardDetail">
                                  <div style={{ display: "inline-flex" }}>
                                    <IonButton
                                      color="light"
                                      onClick={openCardDetailModal}
                                    >
                                      <IonIcon icon={addOutline} />
                                    </IonButton>
                                    <IonThumbnail>
                                      <img
                                        src="https://images-eu.ssl-images-amazon.com/images/G/01/payments-portal/r1/add-payment-method/card-logo-compact._CB478583243_.gif"
                                        alt="card"
                                      />
                                    </IonThumbnail>
                                    <Link
                                      to="/"
                                      className="cardLink"
                                      onClick={openCardDetailModal}
                                    >
                                      Enter Card Detail
                                    </Link>
                                  </div>
                                </div>
                              )}
                              <IonItem
                                lines="none"
                                onClick={() => {
                                  setCardMethod(false);
                                  setUpiMethod(true);
                                }}
                              >
                                <IonLabel>
                                  <h2>Other UPI Apps</h2>
                                </IonLabel>
                                <IonRadio slot="start"></IonRadio>
                              </IonItem>
                              {upiMethod && (
                                <div className="ion-no-padding">
                                  <h6 className="cardDetail ">
                                    {" "}
                                    Please enter your UPI ID
                                  </h6>
                                  <div className="upiMethod ">
                                    <IonItem fill="outline">
                                      <IonInput placeholder="Ex:MobileNumber@upi"></IonInput>
                                    </IonItem>
                                    <IonButton
                                      className="ion-padding-start"
                                      color="warning"
                                    >
                                      Verify
                                    </IonButton>
                                  </div>
                                </div>
                              )}
                              <IonItem
                                lines="none"
                                onClick={() => {
                                  setUpiMethod(false);
                                  setCardMethod(false);
                                }}
                              >
                                <IonLabel>
                                  <div className="ion-text-sm-warp">
                                    <h2>Cash On Delivery/Pay On Delivery</h2>
                                    <p>
                                      Scan & Pay using Amazon app (₹25 cashback
                                      on first transaction). Cash, UPI ,Cards
                                      also accepted
                                    </p>
                                  </div>
                                </IonLabel>
                                <IonRadio
                                  slot="start"
                                  className="radio_align2"
                                ></IonRadio>
                              </IonItem>
                            </IonRadioGroup>
                          </IonList>
                          <IonButton color="warning" disabled>
                            Use this payment method
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Order;
