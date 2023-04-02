import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonSpinner,
  useIonModal,
} from "@ionic/react";
import React, { useState } from "react";
import "./Login.css";

import { useHistory } from "react-router-dom";
import {
  eyeOffOutline,
  eyeOutline,
  logInOutline,
  logoAmazon,
} from "ionicons/icons";

import { Link } from "react-router-dom";
import ForgetPasswordMoadl from "../../Modal/ForgotPassword/ForgetPasswordMoadl";
import useInput from "../../hooks/user-input";

const Login: React.FC = () => {
  const [passwordType, setPasswordType] = useState<any>("password");
  const [showSpinner, setShowSpinner] = useState(false);
  const history = useHistory();
  //for password show and hide
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  //for Open Modal
  const [present, dismiss] = useIonModal(ForgetPasswordMoadl, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  function openModal() {
    present({
      mode: "md",
      backdropDismiss: false,
      canDismiss: true,
      cssClass: "forgetModalClass",
    });
  }

  //for email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => value.includes("@"));

  //for password
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value: string) => value.length > 5);

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //form Submit

  const formSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    // console.log(enteredEmail, enteredPassword);

    const login = async () => {
      setShowSpinner(true);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBuGF8plyF9DV-t2lyFwlmUc_hEfeR4jmg",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log(data);
        history.push("/home");
        setShowSpinner(false);
        // to store login data to local strorage
        localStorage.setItem("email", data.email);
        localStorage.setItem("uid", data.localId);

        return data;
      } else {
        setShowSpinner(false);
        let errorMessage = "Authentication failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    };

    login();
    resetEmailInput();
    resetPasswordInput();
  };
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="card-center">
            <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="6" sizeXl="6">
              <IonCard>
                <IonCardHeader className="ion-text-center">
                  <IonCardSubtitle>
                    <IonIcon
                      icon={logoAmazon}
                      style={{ fontSize: "128px", color: "#0F1111" }}
                    />
                  </IonCardSubtitle>
                  <IonCardTitle>
                    <h2>Welcome To Amazon clone</h2>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <form onSubmit={formSubmitHandler}>
                    <IonRow>
                      <IonCol>
                        <IonItem
                          lines="inset"
                          className={`${emailInputHasError && "ion-invalid"} `}
                        >
                          <IonLabel position="floating">Email</IonLabel>
                          <IonInput
                            type="email"
                            placeholder="Enter Email"
                            value={enteredEmail}
                            onIonChange={emailChangeHandler}
                            onIonBlur={emailBlurHandler}
                          ></IonInput>
                          <IonNote slot="error">Invalid Email</IonNote>
                        </IonItem>
                      </IonCol>
                    </IonRow>

                    <IonRow>
                      <IonCol>
                        <IonItem
                          lines="inset"
                          className={`${
                            passwordInputHasError && "ion-invalid"
                          } `}
                        >
                          <IonLabel position="floating">Password</IonLabel>
                          <IonInput
                            type={passwordType}
                            placeholder="Password length must be greater then 5 chatrecter"
                            onIonChange={passwordChangeHandler}
                            onIonBlur={passwordBlurHandler}
                            value={enteredPassword}
                          ></IonInput>
                          {passwordType === "password" ? (
                            <IonIcon
                              icon={eyeOffOutline}
                              slot="end"
                              className="icon-center"
                              onClick={togglePassword}
                            />
                          ) : (
                            <IonIcon
                              icon={eyeOutline}
                              slot="end"
                              className="icon-center"
                              onClick={togglePassword}
                            />
                          )}
                          <IonNote slot="error">Invalid Password</IonNote>
                        </IonItem>
                      </IonCol>
                    </IonRow>

                    <div className="ion-text-end" style={{ fontSize: "1rem" }}>
                      <Link
                        to="login"
                        style={{ textDecoration: "none" }}
                        onClick={() => openModal()}
                      >
                        Forget Password?
                      </Link>
                    </div>

                    <IonButton
                      expand="block"
                      type="submit"
                      disabled={!formIsValid}
                    >
                      {showSpinner ? (
                        <IonSpinner />
                      ) : (
                        <>
                          Login <IonIcon icon={logInOutline} slot="end" />
                        </>
                      )}
                    </IonButton>
                  </form>

                  <div className="ion-text-center" style={{ fontSize: "1rem" }}>
                    <p>
                      Don't have Account?
                      <Link to="signup" style={{ textDecoration: "none" }}>
                        Ragister
                      </Link>
                    </p>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
