import { IonButton, IonIcon } from "@ionic/react";
import { deleteDoc, doc, increment, updateDoc } from "firebase/firestore";
import { addOutline, removeOutline, trashOutline } from "ionicons/icons";
import { db } from "../firebase/init-firebase";
import "./CartInputForm.css";
type cartPorps = {
  quntity: number;
  id: any;
};
const CartInputForm = ({ quntity, id }: cartPorps) => {
  let cartref = doc(db, "cart", id);
  const increaseQuntity = () => {
    updateDoc(cartref, {
      quntity: increment(1),
    });
  };
  const decreaseQuntity = () => {
    updateDoc(cartref, {
      quntity: increment(-1),
    });
  };

  const deleteCartProduct = (id: any) => {
    deleteDoc(doc(db, "cart", id))
      .then((response) => {
        console.log("Item Deleted");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  console.log(quntity);
  return (
    <div className="buttons">
      <div className="ion-padding-left">
        {quntity === 1 ? (
          <IonButton
            color="light"
            onClick={() => {
              deleteCartProduct(id);
            }}
          >
            <IonIcon icon={trashOutline} style={{ fontSize: "1.5rem" }} />
          </IonButton>
        ) : (
          <IonButton color="light" onClick={decreaseQuntity}>
            <IonIcon icon={removeOutline} style={{ fontSize: "1.5rem" }} />
          </IonButton>
        )}
      </div>
      <div className="ion-text-center inputField">{quntity}</div>

      <div>
        <IonButton color="light" onClick={increaseQuntity}>
          <IonIcon icon={addOutline} style={{ fontSize: "1.5rem" }} />
        </IonButton>
      </div>
    </div>
  );
};

export default CartInputForm;
