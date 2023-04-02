import {
  IonCol,
  IonFooter,
  IonGrid,
  IonNote,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";

const Fotter = () => {
  const footer = [
    {
      id: 0,
      heading: "Get to Know Us",
      list: ["About Us", "Careers", "Press Releases", "Amazon Science"],
    },
    {
      id: 1,
      heading: "Connect with Us",
      list: ["Facebook", "Twitter", "Instagram"],
    },
    {
      id: 2,
      heading: "Make Money with Us",
      list: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Amazon Global Selling",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants",
      ],
    },
    {
      id: 3,
      heading: "Let Us Help You",
      list: [
        "COVID-19 and Amazon",
        "Your Account",
        "Returns Centre",
        "100% Purchase Protection",
        "Amazon App Download",
        "Amazon Assistant Downloads",
        "Help",
      ],
    },
  ];

  const footer2 = [
    {
      id: 0,
      heading: "AbeBooks",
      subCat: "Books, art & collectibles",
    },
    {
      id: 1,
      heading: "Amazon Web Services",
      subCat: "Scalable Cloud Computing Services",
    },
    {
      id: 2,
      heading: "udible",
      subCat: "Download Audio Books",
    },
    {
      id: 3,
      heading: "DPReview",
      subCat: "Digital Photography",
    },
    {
      id: 4,
      heading: "IMDb",
      subCat: "Movies, TV & Celebrities",
    },
    {
      id: 5,
      heading: "Shopbop",
      subCat: "Designer Fashion Brands",
    },
    {
      id: 6,
      heading: "Amazon Business",
      subCat: "Everything For Your Business",
    },
    {
      id: 7,
      heading: "Prime Now",
      subCat: "2-Hour Delivery on Everyday Items",
    },
    {
      id: 8,
      heading: "	Amazon Prime Music",
      subCat: "90 million songs, ad-free Over 15 million podcast episodes",
    },
  ];
  return (
    <IonFooter>
      <IonGrid className="navBackground">
        <IonRow className="ion-justify-content-evenly ion-text-center">
          {footer.map((footerItem) => (
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="6"
              sizeLg="3"
              sizeXl="3"
              key={footerItem.id}
            >
              <h3>{footerItem.heading}</h3>
              {footerItem.list.map((listItem) => (
                <ul className="list">
                  <li>{listItem}</li>
                </ul>
              ))}
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
      <div className=" ftColor ion-no-padding">
        <IonRow>
          {footer2.map((item) => (
            <IonCol
              sizeXs="6"
              sizeSm="6"
              sizeMd="4"
              sizeLg="3"
              sizeXl="2.2"
              className="ion-text-start"
              key={item.id}
            >
              <ul className="list">
                <li>
                  <div>
                    <IonText color="light">{item.heading}</IonText>
                  </div>
                  <IonNote>{item.subCat}</IonNote>
                </li>
              </ul>
            </IonCol>
          ))}
        </IonRow>
      </div>
    </IonFooter>
  );
};

export default Fotter;
