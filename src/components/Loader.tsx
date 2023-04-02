import { IonLoading } from "@ionic/react";
import React, { useState } from "react";

const Loader = () => {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <div>
      <IonLoading isOpen={showLoading} onDidDismiss={() => setShowLoading(false)} message={"loading..."} />
    </div>
  );
};

export default Loader;
