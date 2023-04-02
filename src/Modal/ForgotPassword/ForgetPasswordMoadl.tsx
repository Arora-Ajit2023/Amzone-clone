import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonPage,
  IonNote,
  IonIcon,
  IonFooter,
  IonSpinner,
} from "@ionic/react";
import { closeOutline, checkmarkCircle } from "ionicons/icons";
import React, { useState } from "react";
import useInput from "../../hooks/user-input";

function ForgetPasswordMoadl({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  //for email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => value.includes("@"));

  const formSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredEmail);
    const resetPassword = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBuGF8plyF9DV - t2lyFwlmUc_hEfeR4jmg",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            requestType: "password-reset",
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setShowSpinner(true);
      if (response.ok) {
        setShowMessage(true);
        console.log(data);
        return data;
      }
    };

    resetPassword();
    resetEmailInput();
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Reset Password</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(null, "cancel")}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {!showMessage && (
              <IonCol size="12">
                <div>
                  <form>
                    <IonItem lines="inset" className={`${emailInputHasError && "ion-invalid"}  `}>
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        type="email"
                        placeholder="Enter Email"
                        value={enteredEmail}
                        onIonChange={emailChangeHandler}
                        onIonBlur={emailBlurHandler}
                      ></IonInput>
                      <IonNote slot="error">Enter Your Email</IonNote>
                    </IonItem>
                  </form>
                </div>
              </IonCol>
            )}

            {showMessage && (
              <IonCol>
                <div>
                  <IonItem lines="none">
                    <IonLabel className="ion-text-center ion-text-wrap">
                      <IonIcon icon={checkmarkCircle} color="success" style={{ fontSize: "32px" }} />
                      <h2>Email Send Successfully</h2>
                      <h3>Please check your Email!</h3>
                    </IonLabel>
                  </IonItem>
                </div>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
      {!showMessage && (
        <IonFooter className="ion-no-border">
          <IonToolbar>
            {showSpinner ? (
              <IonSpinner />
            ) : (
              <IonButton expand="block" type="submit" onClick={formSubmitHandler}>
                Reset Password
              </IonButton>
            )}
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
}

export default ForgetPasswordMoadl;
