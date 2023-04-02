import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import {
  eyeOffOutline,
  eyeOutline,
  logInOutline,
  personCircleSharp,
} from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/user-input";
import "./Signup.css";
import { useHistory } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/init-firebase";

const SignupPage: React.FC = () => {
  const [passwordType, setPasswordType] = useState<any>("password");
  const history = useHistory();

  //for password show and hide
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  //for username
  const {
    value: enteredUserName,
    isValid: enteredUserNameIsValid,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value: string) => value.trim() !== "");

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
  } = useInput((value: string | any[]) => value.length > 5);

  let formIsValid = false;

  if (enteredUserNameIsValid && enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //form Submit
  const formSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    //for login

    console.log("Submitted");
    console.log(enteredUserName, enteredEmail, enteredPassword);

    const signup = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBuGF8plyF9DV-t2lyFwlmUc_hEfeR4jmg",
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
      if (response.ok) {
        console.log(data);
        history.push("/login");
        return data;
      } else {
        let errorMessage = "Authentication failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    };

    signup();

    //    for Adding signup data to firestore
    // const signupData = {
    //   email: enteredEmail,
    //   password: enteredPassword,
    //   username: enteredUserName,
    // };

    addDoc(collection(db, "userSignupData"), {
      email: enteredEmail,
      password: enteredPassword,
      username: enteredUserName,
    })
      .then((response) => {
        console.log("data  Added");
      })
      .catch((error) => {
        console.log(error.message);
      });
    resetUserNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <IonPage >
      <IonContent scroll-y="true">
        <IonRow className="center">
          <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" sizeXl="6">
            <IonCard>
              <IonCardHeader class="ion-text-center">
                <IonCardSubtitle>
                  <IonIcon
                    icon={personCircleSharp}
                    style={{ fontSize: "128px", color: "#0F1111" }}
                  />
                </IonCardSubtitle>
                <IonCardTitle>
                  <h2>Welcome to Amazon clone</h2>
                  <IonText>
                    Create your Account by filling the form below.
                  </IonText>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <form onSubmit={formSubmitHandler}>
                  <IonRow>
                    <IonCol>
                      <IonItem
                        lines="inset"
                        className={`${userNameInputHasError && "ion-invalid"}`}
                      >
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput
                          placeholder="Enter Username"
                          type="text"
                          value={enteredUserName}
                          onIonChange={userNameChangeHandler}
                          onIonBlur={userNameBlurHandler}
                        />
                        <IonNote slot="error">Invalid Username</IonNote>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem
                        lines="inset"
                        className={`${emailInputHasError && "ion-invalid"} `}
                      >
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                          type="email"
                          placeholder="Enter Your Emial "
                          onIonChange={emailChangeHandler}
                          onIonBlur={emailBlurHandler}
                          value={enteredEmail}
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
                        }  `}
                      >
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                          type={passwordType}
                          placeholder="Password length must be greater then 5 chatrecter"
                          onIonChange={passwordChangeHandler}
                          onIonBlur={passwordBlurHandler}
                          value={enteredPassword}
                        />
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
                        <IonNote slot="error">password invalid </IonNote>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonButton
                    expand="block"
                    disabled={!formIsValid}
                    type="submit"
                  >
                    Signup <IonIcon icon={logInOutline} slot="end" />
                  </IonButton>
                </form>
                <div className="ion-text-center" style={{ fontSize: "1rem" }}>
                  <IonText>
                    Already have Account?{" "}
                    <Link to="login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </IonText>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;
