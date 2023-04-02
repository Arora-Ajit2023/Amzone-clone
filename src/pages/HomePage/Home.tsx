import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonText,
  IonPage,
  IonRow,
  IonLoading,
} from "@ionic/react";
import BannerOffer from "../../components/BannerOffer";
import "./Home.css";
import { useHistory } from "react-router-dom";
import SwiperCard from "../../components/swiper/SwiperCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/init-firebase";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  const history = useHistory();
  const contentRef = useRef<any>(null);
  const [showLoading, setShowLoading] = useState(false);
  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop();
  };
  const [catData, setCatData] = useState<any>([]);
  useEffect(() => {
    const getCategoryData = async () => {
      setShowLoading(true);
      const docref = collection(db, "category");
      const snapshot = await getDocs(docref);
      const catsnap = snapshot.docs.map((cat) => ({
        ...cat.data(),
        id: cat.id,
      }));
      setShowLoading(false);
      setCatData(catsnap);
    };
    getCategoryData();
  }, []);

  // let category = [
  //    {
  //     id: 0,
  //     heading: "Starting ₹199",
  //     subheading: "Men's fashion",
  //     subCategory: [
  //       {
  //         catId: 1,
  //         catName: "Clothing",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase-1/QC/PC/MF-186-116-1._SY116_CB609357628_.jpg",
  //       },
  //       {
  //         catId: 2,
  //         catName: "Footware",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase-1/QC/PC/MF-186-116-4._SY116_CB609357628_.jpg",
  //       },
  //       {
  //         catId: 3,
  //         catName: "Watches",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase-1/QC/PC/MF-186-116-2._SY116_CB609357628_.jpg",
  //       },
  //       {
  //         catId: 4,
  //         catName: "Bags and luggage",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase-1/QC/PC/MF-186-116-3._SY116_CB609357628_.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     heading: "Starting ₹49",
  //     subheading: " Home, Kitchen & more",
  //     subCategory: [
  //       {
  //         catId: 1,
  //         catName: "Home and Decor",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Jupiter/OHL/GW/Hero/Phase1/PCQC/1_PC_QuadCard_186X116._SY116_CB609932656_.jpg",
  //       },
  //       {
  //         catId: 2,
  //         catName: "Cookware and Dining",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/Jupiter22/GW/PC/PC_QuadCard_186x116._SY116_CB610141897_.jpg",
  //       },
  //       {
  //         catId: 3,
  //         catName: "Sports and Fitness",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/OHL/Jupiter/GW/Hero/QC/Updated/Unrec/PC_QuadCard_186x116._SY116_CB610053735_.jpg",
  //       },
  //       {
  //         catId: 4,
  //         catName: "Home Improvment",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Jupiter/OHL/GW/Hero/Phase1/PCQC/4_PC_QuadCard_186X116._SY116_CB609932656_.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "a",
  //     heading: "Up to 70% off",
  //     subheading: "Amazon Brands & more",
  //     subCategory: [
  //       {
  //         catId: 1,
  //         catName: " Tv/s Refrigeratore and more",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_pc-qc-tile1_372x232_in-en._SY116_CB609792797_.jpg",
  //       },
  //       {
  //         catId: 2,
  //         catName: "Home and Kitchen",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_pc-qc-tile2_372x232_in-en._SY116_CB609792798_.jpg",
  //       },
  //       {
  //         catId: 3,
  //         catName: "Daily Essentials",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_pc-qc-tile3-76vp1-nc8xk_372x232_in-en._SY116_CB609792789_.jpg",
  //       },
  //       {
  //         catId: 4,
  //         catName: "Clothing,Shoes and More.",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2022/Jupiter_Phase1_GW/Desktop_QC/5._SY116_CB609484620_.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "a",
  //     heading: "Starting ₹49",
  //     subheading: "Amazon Brands & more",
  //     subCategory: [
  //       {
  //         catId: 1,
  //         catName: "Grocery and  household supplies",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/Jupiter/p1/tile1_Grocery_PB_PC_QuadCard_186x116._SY116_CB608368936_.jpg",
  //       },
  //       {
  //         catId: 2,
  //         catName: "Baby Products",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/Jupiter/p1/Tile2_baby_PB_PC_QuadCard_186x116._SY116_CB608368937_.jpg",
  //       },
  //       {
  //         catId: 3,
  //         catName: "Beauty and Grooming",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/Jupiter/p1/Tile3_BeautyPB_PC_QuadCard_186x116._SY116_CB608368936_.jpg",
  //       },
  //       {
  //         catId: 4,
  //         catName: "Toys and more",
  //         catThumnail:
  //           "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/Jupiter/p1/Tile4_TopDeals_PB_PC_QuadCard_186x116._SY116_CB608368936_.jpg",
  //       },
  //     ],
  //   },
  // ];

  // let newPxxroduct = [
  //   {
  //     name: "Apple iPhone 13 (256 GB) - Green",
  //     localid: "1",
  //     category: "electronics",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg",
  //     productDescription: [
  //       "15 cm (6.1-inch) Super Retina XDR display",
  //       "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
  //       "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
  //       "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
  //       "A15 Bionic chip for lightning-fast performance",
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "79,900",
  //         img: [
  //           "61-r9zOKBCL._SX679_.jpg",
  //           "61J9KUops4L._SX679_.jpg",
  //           "71e6luY333L._SX679_.jpg",
  //           "1AormTzRHL._SX679_.jpg",
  //           "81Yzptxk8IL._SX679_.jpg",
  //           "61W4nsX-yZL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_01._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_02._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_03._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_04._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_05._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_06._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_07._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_08._CB624147061_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_13/Green/updated/r1434_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_09._CB624147061_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "Apple Computer",
  //           "Country of Origin": "China",
  //           "Item model number": "MNGL3HN/A",
  //           "Product Dimensions": "0.77 x 7.15 x 14.67 cm; 174 Grams",
  //           ASIN: "B09V4MXBSN",
  //         },
  //         additionalInformation: {
  //           Manufacturer:
  //             "	Apple Computer, Apple Inc, One Apple Park Way, Cupertino, CA 95014, USA. or Apple India Private Limited No.24, 19th floor, Concorde Tower C, UB City, Vittal Mallya Road, Bangalore - 560 001",
  //           Importer:
  //             "(If applicable) Apple India Private Limited No.24, 19th floor, Concorde Tower C, UB City, Vittal Mallya Road, Bangalore - 560 001",
  //           "Item Weight": "174 g",
  //           "Item Dimensions LxWxH": "	8 x 71 x 147 Millimeters",
  //           "Net Quantity": "1 Unit",
  //           "Included Components": "USB-C to Lightning Cable",
  //           "Generic Name": "	iPhone",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "2",
  //     category: "mobile",
  //     name: "Apple iPhone  ",
  //     imagePath: "https://images-na.ssl-images-amazon.com/images/I/",
  //     productDescription: [
  //       "6.1-inch Liquid Retina display (LCD)",
  //       "IP67 water and dust resistant (maximum depth of 1 meter up to 30 minutes)",
  //       "12MP camera with OIS and 7MP TrueDepth front camera—Portrait mode, Portrait Lighting, Depth Control, and Smart HDR",
  //       "Face ID for secure authentication",
  //       "A12 Bionic with next-generation Neural Engine",
  //       "Wireless charging—works with Qi chargers",
  //       "iOS 12 with Memoji, Screen Time, Siri Shortcuts, and Group FaceTime",
  //     ],
  //     variants: [
  //       {
  //         memory: ["32GB", "64GB", "128GB"],
  //         colour: "Black",
  //         img: [
  //           "51qBzX0pGYL._SL1000_.jpg",
  //           "51Qlt4RF0cL._SL1000_.jpg",
  //           "41D0zIqtpPL._SL1000_.jpg",
  //           "41Tr6-Hh1KL._SL1000_.jpg",
  //           "51zt1uvpaTL._SL1000_.jpg",
  //         ],
  //         price: [45000, 49000, 55000],
  //         qtyUnit: "Each",
  //         taxes: [
  //           { SGST: 120, CGST: 120 },
  //           { SGST: 135, CGST: 135 },
  //           { SGST: 145, CGST: 145 },
  //         ],
  //         discounts: [
  //           { Type: "Regular Customer", value: 150 },
  //           {
  //             Type: "Credit Card",
  //             card: "HDFC",
  //             condition: ">1000",
  //             percentage: 5,
  //           },
  //         ],
  //       },
  //       {
  //         memory: ["32GB", "64GB", "128GB"],
  //         colour: "White",
  //         img: [
  //           "51PuFBgBK4L._SY606_.jpg",
  //           "51gdkUuU26L._SL1024_.jpg",
  //           "41svnYkwUwL._SL1024_.jpg",
  //           "41UGBBFxXtL._SL1024_.jpg",
  //           "51W40Z3SaXL._SL1024_.jpg",
  //         ],
  //         price: [42999, 49542, 55000],
  //         qtyUnit: "Set of 2",
  //         taxes: [
  //           { SGST: 120, CGST: 120 },
  //           { SGST: 135, CGST: 135 },
  //           { SGST: 145, CGST: 145 },
  //         ],
  //         discounts: [
  //           { Type: "Regular Customer", value: 150 },
  //           {
  //             Type: "Credit Card",
  //             card: "HDFC",
  //             condition: ">1000",
  //             percentage: 5,
  //           },
  //         ],
  //       },
  //       {
  //         memory: ["32GB", "64GB", "128GB"],
  //         colour: "Blue",
  //         img: [
  //           "51FcaVcLEwL._SL1024_.jpg",
  //           "51FcaVcLEwL._SL1024_.jpg",
  //           "41qXfV8dbNL._SL1024_.jpg",
  //           "41S1r3rI1CL._SL1024_.jpg",
  //           "51b6FAI4xSL._SL1024_.jpg",
  //         ],
  //         price: [42399, 49564, "52134"],
  //         qtyUnit: "Kg",
  //         taxes: [
  //           { SGST: 120, CGST: 120 },
  //           { SGST: 135, CGST: 135 },
  //           { SGST: 145, CGST: 145 },
  //         ],
  //         discounts: [
  //           { Type: "Regular Customer", value: 150 },
  //           {
  //             Type: "Credit Card",
  //             card: "HDFC",
  //             condition: ">1000",
  //             percentage: 5,
  //           },
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           // This should also be the same path and uload images to google and not Amazon
  //           "IN_ProdA19_OVERVIEW-PAGE-L_PRE-AVAIL_Web_Product_Page_RGB_FA_wBtn-amazon1_01._CB461811322_.jpg",
  //           "IN_ProdA19_OVERVIEW-PAGE-L_PRE-AVAIL_Web_Product_Page_RGB_FA_wBtn-amazon1_02._CB461811322_.jpg",
  //           "IN_ProdA19_OVERVIEW-PAGE-L_PRE-AVAIL_Web_Product_Page_RGB_FA_wBtn-amazon1_03._CB461811322_.jpg",
  //           "IN_ProdA19_OVERVIEW-PAGE-L_PRE-AVAIL_Web_Product_Page_RGB_FA_wBtn-amazon1_04._CB461811317_.jpg",
  //           "IN_ProdA19_OVERVIEW-PAGE-L_PRE-AVAIL_Web_Product_Page_RGB_FA_wBtn-amazon1_05._CB461811323_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Width: "75.7 mm (2.98 inches)",
  //           Display: "6.1-inch Liquid Retina HD display with True Tone",
  //           "Splash, Water, and Dust Resistant": "All-glass and aluminum design, water and dust resistant (rated IP67)",
  //           Depth: "8.3 mm (0.33 inches)",
  //           Capacity: "64GB, 128GB, 256GB",
  //           Weight: "194 grams (6.84 ounces)",
  //           "Camera & Video":
  //             "12MP camera with Portrait mode, Depth Control, Portrait Lighting, Smart HDR, and 4K video up to 60 fps",
  //           "Front Camera":
  //             "7MP TrueDepth front camera with Portrait mode, Depth Control, Portrait Lighting, and Smart HDR",
  //           "Power and Battery":
  //             "Talk time (wireless): Up to 25 hours; Internet use: Up to 15 hours; Video playback (wireless): Up to 16 hours",
  //           "In the Box":
  //             "iPhone with iOS 12, EarPods with Lightning Connector, Lightning to USB Cable, USB Power Adapter, Documentation",
  //           Height: "150.9 mm (5.94 inches)",
  //         },
  //         additionalInformation: {
  //           "Product Warranty": "3 months manufacturer warranty & 1 year seller warranty",
  //           "Customer Reviews": "4.0 out of 5 stars\n58 ratings",
  //           "Stock Availability": "24 available",
  //         },
  //       },
  //     ],
  //     likes: [],
  //     keywords: [
  //       "all keywords from product sepcification, variants, technical details, additional information, ideally should split and allow the admin to set it up first time",
  //     ],
  //   },
  //   {
  //     name: "OnePlus Nord 2T 5G ",
  //     category: "mobile",

  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productDescription: [
  //       "Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615",
  //       "Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters.",
  //       "Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified",
  //       "Display Features: Ambient Display, AI colour enhancement and Dark mode",
  //       " Operating System: OxygenOS based on Android 12",
  //       "Processor: Mediatek Dimensity 1300",
  //       "Battery & Charging: 4500 mAh with 80W SuperVOOC",
  //       "In-Display Fingerprint Sensor",
  //       "Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go",
  //       "Cellular Technology: 5g, 4g Lte; Form Factor: Smartphone",
  //     ],
  //     variants: [
  //       {
  //         memory: ["8GB RAM,128GB Storage", "12GB RAM,256GB Storage"],
  //         colour: " Gray Shadow",
  //         img: [
  //           "617MPEZB5mL._SX679_.jpg",
  //           "51lD8Zpsq4L._SX679_.jpg",
  //           "51sG6HLf5ZL._SX679_.jpg",
  //           "51IZfSmXUSL._SX679_.jpg",
  //           "5132n5h46BL._SX679_.jpg",
  //           "71LW61uCQxL._SX679_.jpg",
  //         ],
  //         price: [29999, 33999],
  //         qtyUnit: "Each",
  //         taxes: [
  //           { SGST: 120, CGST: 120 },
  //           { SGST: 135, CGST: 135 },
  //         ],
  //         discounts: [
  //           { Type: "Regular Customer", value: 150 },
  //           {
  //             Type: "Credit Card",
  //             card: "HDFC",
  //             condition: ">1000",
  //             percentage: 5,
  //           },
  //         ],
  //       },
  //       {
  //         memory: ["8GB RAM,128GB Storage", "12GB RAM,256GB Storage"],
  //         colour: "Jade Fog",
  //         img: [
  //           "61ahn9N38zL._SX679_.jpg",
  //           "51-rpg9llBL._SX679_.jpg",
  //           "51ntzob1a3L._SX679_.jpg",
  //           "51ntzob1a3L._SX679_.jpg",
  //           "51pGMKMvJbL._SX679_.jpg",
  //           "71LW61uCQxL._SX679_.jpg",
  //         ],
  //         price: [29999, 33999],
  //         qtyUnit: "Each",
  //         taxes: [
  //           { SGST: 120, CGST: 120 },
  //           { SGST: 135, CGST: 135 },
  //         ],
  //         discounts: [
  //           { Type: "Regular Customer", value: 150 },
  //           {
  //             Type: "Credit Card",
  //             card: "HDFC",
  //             condition: ">1000",
  //             percentage: 5,
  //           },
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ca9c387f-1694-48ab-a7dc-7dbaac159285.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/766b17a5-151c-4233-9e37-082b73ed2c42.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1fc9fcae-5e57-475d-9421-14f853d63451.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d7ba6813-b2c3-4fe5-b7e4-7b227e708d32.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/28b20b2a-4c8d-4391-a604-5d6413bf63e1.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/400b5364-c039-4d5b-a8f8-c00a6b395b19.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/67d8be34-39ad-4253-b809-91eea3b40a86.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c591ca21-b40a-43c1-ac49-060e292f1bf7.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c27944f5-cb02-4857-bbb0-34b70695fa77.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0614d584-29c9-489d-bce8-d1daae5b0659.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           OS: "OxygenOS",
  //           "Product Dimensions": "7.3 x 0.8 x 15.9 cm; 190 Grams",
  //           Batteries: "1 Lithium Polymer batteries required. (included)",
  //           "Wireless communication technologies": "Cellular",
  //           GPS: "AGPS",
  //           "Special features": "Fingerprint Scanner, Gorilla Glass, LED Flash, Camera",
  //           "Other display features": "Wireless",
  //           "Other camera features": "Front",
  //           "Form factor": "Bar",
  //           "Battery Power Rating": "4500",
  //           "Whats in the box": "SIM Tray Ejector, Adapter, Phone Case, USB Cable",
  //           Manufacturer: "Oppo Mobiles India Private Limited",
  //           "Country of Origin": "India",
  //           "Item Weight": "190 g",
  //         },
  //         additionalInformation: {
  //           ASIN: "B0B3CPQ5PF",
  //           "Date First Available": "5 July 2022",
  //           Manufacturer:
  //             "Oppo Mobiles India Private Limited, OPPO Mobiles India Private Limited PLOT-NO.1, SECTOR ECOTECH-VII, GREATER, NOIDA, UTTAR PRADESH, India-201306 OnePlus Customer Service: 1800 102 8411 (toll Free)",
  //           Packer: "Oppo Mobiles India Private Limited",
  //           Importer: "Oppo Mobiles India Private Limited",
  //           "Item Dimensions LxWxH": "7.3 x 0.8 x 15.9 Centimeters",
  //           "Net Quantity": "	1 Piece",
  //           "Generic Name": "Smartphone",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: "Fortune Sunlite Refined Sunflower Oil",
  //     localid: "3",
  //     category: "grocery",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/412TbDp8+mL.jpg",
  //     productDescription: [
  //       "SCCA",
  //       "Light and healthy that is easy to digest",
  //       "Rich in vitamins, which keeps skin healthy",
  //       "Strengthens the immune system",
  //       "Good for the heart",
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "5 lt",
  //         price: "955",
  //         img: [
  //           "412TbDp8+mL.jpg",
  //           "51B9YFCkZrS.jpg",
  //           "7177UMOZG8S._SX679_.jpg",
  //           "810bFfXtiZS._SX679_.jpg",
  //           "81eEuCaVDLS._SX679_.jpg",
  //           "81sxhDjBPyS._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3dc0e113-d094-4bf6-ac32-19cee10da37e.__CR0,0,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0acdfd39-ddfb-4b04-a1f1-88d299221207.__CR0,0,970,600_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1610b573-f5dc-43b7-ac9a-13d41591bdf0.__CR0,0,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/458e6cf5-4dc7-4e2b-86cd-14b0d2b6a017.__CR0,0,970,300_PT0_SX970_V1___.png",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           products: "high_in_vitamin",
  //           Weight: "4550 Grams",
  //           Volume: "5 Litres",
  //           "Ingredient Type": "Vegetarian",
  //           Brand: "FORTUNE",
  //           "Item Package Quantity": "1",
  //           "Package Information": "Can",
  //           Manufacturer: "Adani Wilmar",
  //           "Item model number": "8906007280280 FBA",
  //           "Net Quantity": "5000.0 millilitre",
  //           "Product Dimensions": "25.4 x 19.3 x 10.2 cm; 4.55 Kilograms",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B075757RF2",
  //           Manufacturer: "Adani Wilmar",
  //           "Item Weight": "4 kg 550 g",
  //           "Item Dimensions LxWxH": "25.4 x 19.3 x 10.2 Centimeters",
  //           "Generic Name": "Oils",
  //         },
  //       },
  //     ],
  //     importantInformation: {
  //       "Legal Disclaimer":
  //         "Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Fortune Sunflower Oil is a light, healthy and nutritious cooking oil. Being rich in vitamins and consisting mainly of polyunsaturated fatty acids, it makes food easy to digest.",
  //     },
  //   },
  //   {
  //     localid: "4",
  //     name: "Daawat Rozana Super, Naturally Aged, Rich Aroma,Perfect Fit for Everyday Consumption Basmati Rice",
  //     category: "grocery",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/810jp1zceeL._AC_UL480_FMwebp_QL65_.jpg",
  //     productDescription: [
  //       "Rozana is above medium length product",
  //       "Original basmati nourished by snow fed rivers of great Himalayas",
  //       "Country of Origin: India",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "5kg",
  //         price: "353",
  //         img: [
  //           "810jp1zceeL._SY741_.jpg",
  //           "61zTKV-HHaL._SX679_.jpg",
  //           "61fEeBr2NKL._SX679_.jpg",
  //           "61gnhJq7kPL._SX679_.jpg",
  //           "61qE9TKatmL._SX679_.jpg",
  //           "616ASTHeUUL._SX679_.jpg",
  //           "31XrqQdSO2L.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Specialty: "suitable for vegetarians",
  //           Weight: "5000 Grams",
  //           "Ingredient Type": "Vegetarian",
  //           Volume: "5000 Millilitres",
  //           Brand: "DAAWAT",
  //           "Item Package Quantity": "1",
  //           Form: "grain",
  //           "Item model number": "8901537006010",
  //           "Net Quantity": "1000.0 gram",
  //           "Product Dimensions": "17.8 x 14.6 x 5 cm; 1 Kilograms",
  //           "Serving Size": "10",
  //           "Energy (kcal)": "348.00 Kilocalories",
  //           Protein: "8.2 Gram",
  //           Fat: "0.5 Gram",
  //           Carbohydrate: "78 Grams",
  //           "Package Information": "Bag",
  //           Manufacturer: "LT foods Ltd",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B075754F89",
  //           "Item Weight": "5 kg",
  //           "Item Dimensions LxWxH": "7.1 x 24.9 x 35.3 Centimeters",
  //           Manufacturer: "LT foods Ltd",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/59a7b19d-326b-4b69-9c6a-37e1e6af4cf1.__CR0,5,970,291_PT0_SX600_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4be4408d-b40d-4358-84ba-b51b97ab4f3a.__CR0,0,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/9670675c-bb49-41de-b007-901690344236.__CR0,0,970,300_PT0_SX970_V1___.png",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       "Legal Disclaimer":
  //         "Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Daawat rozana super is the finest basmati rice in the mid-price segment. It is specially processed for daily cooking across a multitude of regular dishes, a perfect fit for every day consumption. Rozana super promises a sweet taste and rich aroma as each grain is naturally aged.",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: 5,
  //     name: "Horlicks Health & Nutrition Drink 500 g (Combo Pack of 2), For immunity and 5 signs of growth - With Free Container Offer (Classic Malt)",
  //     category: "grocery",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61vOsTrcvQL._SX679_.jpg",
  //     productDescription: [
  //       "Health Drink that has nutrients to support immunity.",
  //       "Clinically proven to improve 5 signs of growth",
  //       "Clinically proven to make kids Taller, Stronger & Sharper",
  //       "Scientifically proven to improve Power of Milk",
  //       "It helps in holistic development of Children",
  //       "Horlicks has Bio-Available Nutrients which get absorbed in the blood and are carried to all parts of the body.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: " 500 g (Combo Pack of 2)",
  //         price: "524",
  //         img: [
  //           "61vOsTrcvQL._SX679_.jpg",
  //           "61oYp5+2GsL._SX679_.jpg",
  //           "61TeXm8pbbL._SX679_.jpg",
  //           "61z5lU9m2mL._SX679_.jpg",
  //           "61aWJ-yngOL._SX679_.jpg",
  //           "61nLQgCr3bL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Specialty: "suitable for vegetarians",
  //           Weight: "5000 Grams",
  //           "Ingredient Type": "Vegetarian",
  //           Brand: "Horlicks",
  //           Form: "Powder",
  //           "Appropriate Age Range": "kid",
  //           "Package Information": "Tub",
  //           Manufacturer: "Hindustan Unilever Limited",
  //           "Item model number": "8901571008490 - For ARIPL Pantry",
  //           "Net Quantity": "300.0 gram",
  //           "Serving Size": "1",
  //           "Energy (kcal)": "377.00 Kilocalories",
  //           Protein: "11 Grams",
  //           Fat: "2 Grams",
  //           Carbohydrate: "79 Grams",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B01HXZ2NHC",
  //           "Item Weight": "500 g",
  //           "Item Dimensions LxWxH": "9.3 x 17.4 x 22.3 Centimeters",
  //           Manufacturer:
  //             "Hindustan Unilever Limited, Hindustan Unilever Ltd, Unilever House, B D Sawant Marg, Chakala Andheri East - 400099 TOLL FREE: 1800-10-22-221 PO BOX 14760, MUMBAI 400 099 LEVER.CARE@UNILEVER.COM",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/5f95f12d-f63e-4869-a1b2-5d9f235871ca.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/898fa470-10ea-4791-ac7e-627da3e20808.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/40b6ada0-9ade-41e7-a8a5-4ce119b0a0b0.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/c0482e54-8c8c-4467-9501-ded8730ac28a.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       "Legal Disclaimer":
  //         "Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Horlicks is a Health Drink that has nutrients to support immunity Horlicks is clinically proven to improve 5 signs of growth and is clinically proven to make kids taller, stronger and sharper. Horlicks is scientifically proven to improve power of milk Horlicks is now available in 4 exciting and yummy flavors - Classic malt, Chocolate, Elaichi, Kesar Badam Enjoy with a cup of hot milk or a glass of cold milk Horlicks is a leading force in the ‘Science of Food’ Horlicks has Bio-Available Nutrients* meaning – Nutrients* More Available for Growth. These get absorbed in the blood and are carried to all parts of the body Horlicks contains 9 nutrients (Vit B6, B12, C, D, Copper, Folic Acid, Iron, Selenium and Zinc) which are scientifically proven to support immunity Increases the density of minerals such as^ calcium in bones to give children bigger and stronger bones Horlicks is clinically proven to increase^ lean tissue, making children “stronger” Helps improve attention and concentration^ to make your child sharper Horlicks is clinically proven for more^  haemopoietic nutrients in the blood “Healthier Blood” refers to improvement in the levels of blood health related nutrients (Vitamin A & Folate) in circulation Horlicks is clinically proven to increase^ fat-free mass, making child stronger",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "6",
  //     name: "MuscleBlaze High Protein Oats with Added Probiotics, 17 g Protein, Rolled Oats, Breakfast Cereals, Gluten Free, Trans Fat Free, for Weight Management, Dark Chocolate, 400 g",
  //     category: "grocery",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71NQlL4Q36L._SX679_.jpg",
  //     productDescription: [
  //       "17 g PROTEIN PER SERVING: MuscleBlaze High Protein Oats with Probiotics provides 17 g protein per serving with 250 ml of skimmed milk. Feel satiated for longer with satisfying protein in each spoonful",
  //       "HIGH FIBRE: Oats are the wonder grain that are incredibly rich in high fibre. High fibre helps to maintain bowel movement, benefits heart health, and is fulfilling which helps in weight management",
  //       "GOODNESS OF FATS & ANTIOXIDANTS: These rolled oats are fortified with superseeds like chia and pumpkin seeds that contain good fats and antioxidants. They help improve the cholesterol profile and reduce triglycerides & free radical damage",
  //       "CHOCOLATEY & NUTRITIOUS OATMEAL: Start your day right with convenient and nutritious breakfast oats. MuscleBlaze High Protein Oats are high in fibre, low in sugar and enriched with fruits, seeds, cocoa, and antioxidants to upgrade your nutrition with chocolatey oats",
  //       "PROBIOTICS FOR GOOD GUT HEALTH: MuscleBlaze High Protein Oats are loaded with probiotics to enhance gut health and restore the natural balance of gut bacteria to keep you healthy. Probiotics also help in better nutrient digestion and absorptions",
  //       "NOTE FROM AMAZON: This product is protected by Transparency, which verifies a unit’s authenticity and enables you to view rich information about the product you purchased. When you receive your product, please look for the Transparency logo and code, which is printed on the product’s cover. You can scan it to verify its authenticity with the Transparency app or Amazon shopping app. To download the Transparency app or Amazon shopping app, get it on the App Store or Google Play.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: " 400 g",
  //         price: "315",
  //         img: [
  //           "71NQlL4Q36L._SX679_.jpg",
  //           "71X-R6rIqCL._SX679_.jpg",
  //           "71ybLQmvdmL._SX679_.jpg",
  //           "71tvyExiJwL._SX679_.jpg",
  //           "71-yyVZvNLL._SX679_.jpg",
  //           "71Ksj0ksgpL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Specialty: "suitable for vegetarians",
  //           "Ingredient Type": "Protein Oats with Added Probiotics",
  //           Brand: "MuscleBlaze",
  //           Form: "Flakes",
  //           "Appropriate Age Range": "Adult",
  //           "Serving Recommendation": "8g/ per serving per day",
  //           "Package Information": "Box",
  //           Manufacturer: "VLS Food Pvt. Ltd.",
  //           "Allergen Information": "Oat",
  //           "Item part number": "8906116956816",
  //           "Net Quantity": "400 Gram",
  //           "Product Dimensions": "20.9 x 14.5 x 10.7 cm; 1 Kilograms",
  //           Ingredients:
  //             "Rolled Oats (47.4%), Texturised Soy Protein (20%), Fruit & Seeds (13.5%) {Raisins, Chia Seeds, Pumpkin Seeds}, Raw Sugar (11%), Cocoa Solids (7%), Artificial (Chocolate) Flavouring substance, Pink Salt, Probiotic ( Bacillus Coagulans MTCC 5856 ) & Antioxidant (INS 320)",
  //           "Serving Size": "8 Gram",
  //           Protein: "17.21 Grams",
  //           Fat: "4.32 g Grams",
  //           Carbohydrate: "39.53 g Grams",
  //           Sugars: "3.20 g Grams",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "	B09T6LZNJT",
  //           "Item Weight": "1 kg",
  //           "Item Dimensions LxWxH": "20.9 x 14.5 x 10.7 Centimeters",
  //           Manufacturer:
  //             "VLS Food Pvt. Ltd., VLS Food Pvt. Ltd., H-550, 551, 716, Phase-1 industrial Area, Bhiwadi (Rajasthan)-301019 India",
  //           Packer: "	VLS Food Pvt. Ltd., H-550, 551, 716, Phase-1 industrial Area, Bhiwadi (Rajasthan)-301019 India",
  //           "Generic Name": "Protein Oats",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/37f0a0ae-eee7-4744-849d-3a9f13380ffa.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6a99e2c5-27a7-486e-a0fc-da2fb88d3007.__CR0,0,4042,1250_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/73637210-412b-4057-ba08-7167fba87754.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/22e5af05-10b8-43e3-879d-0fdae38ed59b.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/bc1ec0ad-2795-413f-8650-b413e0181eae.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       "Legal Disclaimer":
  //         "Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.",
  //       Directions:
  //         "For every cup of Oats (50g), add 1 1/2 cups (250m1) of water/milk in a pan. Cook for 3 minutes on a medium flame or microwave for 3 minutes on fullpower.",
  //       Ingredients:
  //         "Rolled Oats (47.4%), Texturised Soy Protein (20%), Fruit & Seeds (13.5%) {Raisins, Chia Seeds, Pumpkin Seeds}, Raw Sugar (11%), Cocoa Solids (7%), Artificial (Chocolate) Flavouring substance, Pink Salt, Probiotic ( Bacillus Coagulans MTCC 5856 ) & Antioxidant (INS 320)",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Horlicks is a Health Drink that has nutrients to support immunity Horlicks is clinically proven to improve 5 signs of growth and is clinically proven to make kids taller, stronger and sharper. Horlicks is scientifically proven to improve power of milk Horlicks is now available in 4 exciting and yummy flavors - Classic malt, Chocolate, Elaichi, Kesar Badam Enjoy with a cup of hot milk or a glass of cold milk Horlicks is a leading force in the ‘Science of Food’ Horlicks has Bio-Available Nutrients* meaning – Nutrients* More Available for Growth. These get absorbed in the blood and are carried to all parts of the body Horlicks contains 9 nutrients (Vit B6, B12, C, D, Copper, Folic Acid, Iron, Selenium and Zinc) which are scientifically proven to support immunity Increases the density of minerals such as^ calcium in bones to give children bigger and stronger bones Horlicks is clinically proven to increase^ lean tissue, making children “stronger” Helps improve attention and concentration^ to make your child sharper Horlicks is clinically proven for more^  haemopoietic nutrients in the blood “Healthier Blood” refers to improvement in the levels of blood health related nutrients (Vitamin A & Folate) in circulation Horlicks is clinically proven to increase^ fat-free mass, making child stronger",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "7",
  //     name: `Baby Dove Rich Moisture Nourishing Baby Lotion 200 ml, With Moisturising Cream, Gentle Care for Baby's Soft Skin`,
  //     category: "baby products",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51J33h4xHcL._SX679_.jpg",
  //     productDescription: [
  //       "Safe for Baby's skin from Day 1",
  //       "Soothes your babyâ€s dry skin from the first use",
  //       "Gentle, hypoallergenic and pH neutral formula,",
  //       "Baby Dove Baby Lotion Rich Moisture gently moisturizes skin for up to 24 hours",
  //       "Dermatologist and pediatrician tested",
  //       "Fragrance specially developed for your babyâ€s delicate skin. All skin types. Maximum Shelf life: 24 Months. Dermatological tested. Professional care.",
  //       "item form: lotion, target gender: Babies, skin tone: All, sun protection: no, ingredients: Glycerin,Petrolatum, Silicone, specific uses for product: dryness",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: " 200 ml",
  //         price: "175",
  //         img: [
  //           "41d7+iuWD8L._SX679_.jpg",
  //           "51-BnIjeM+L._SX679_.jpg",
  //           "41d7+iuWD8L._SX679_.jpg",
  //           "5154RPNleAL._SX679_.jpg",
  //           "61u3d8NCHJL._SX679_.jpg",
  //           "61TksyhuNxL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Model Number": "12839",
  //           "Target gender": "Unisex",
  //           "Material free": "Paraben Free",
  //           "Number Of Items": "1",
  //           Style: "Baby lotion",
  //           "Best uses": "Dryness",
  //           "Batteries required": "No",
  //           "Product Dimensions": "4.1 x 12 x 9.9 cm; 200 Grams",
  //           "Item model number": "12839",
  //           Manufacturer: "Hindustan Unilever Limited",
  //           "Item Weight": "200 g",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B01LNRIJI8",
  //           "Net Quantity": "1 count",
  //           "Item Dimensions LxWxH": "41 x 120 x 99 Millimeters",
  //           "Included Components": "Body Lotion",
  //           Manufacturer:
  //             "Hindustan Unilever Limited, Hindustan Unilever Limited Unit-4, I.IND Estate, Haridwar 249403 Toll Free no: 18001022221",
  //           Packer:
  //             "Hindustan Unilever Ltd, Unilever House, B D Sawant Marg, Chakala Andheri East - 400099 Toll Free no: 18001022221",
  //           "Generic Name": "Protein Oats",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/036b89d3-1385-47f8-9473-b4308fa1fe97.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/5b8718f8-8375-4168-a53e-fab4546b952e.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/4e07d1cb-e195-40d9-a919-b8600c84a4dd.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/42f093cf-d253-4acf-b171-f687de28eec4.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       " What is in the box?": "Body Lotion",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "The best lotion for babies should give the gentle, nourishing care their delicate skin needs. Bathing can lead to skin dryness, so use Baby Dove Rich Moisture Baby Lotion to help replenish the essential moisture in your baby’s skin. For upto 24 hours it moisturizes and replenishes your baby’s precious skin barrier. The product is made with 100% skin-natural nutrients for delicate baby skin (contains nutrients that are 100% identical to those naturally found in skin) From the very first use, this lotion for baby soothes and hydrates to provide moisture for your baby’s skin – and it’s dermatologist and pediatrician tested so you can feel safe in the knowledge that your baby’s skin is getting the extra special care it deserves. Plus, the gentle, hypoallergenic and pH neutral formula of this Baby Dove baby body lotion is suitable to use even on your newborn. Baby Dove Rich Moisture lotion formulation is free from added Parabens, Dyes and Phthalates and completely safe to be used on Baby’s delicate skin. Buy now! Use Baby Dove Rich Moisture Baby Lotion after bath time to moisturize your little one’s delicate skin while leaving it super soft and ready for snuggles, when used with Baby Dove Tip to Toe Rich Moisture Baby Wash, followed by Baby Dove Body lotion.",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "8",
  //     name: "Tec Tavakkal Baby Kids Water Play Mat Toys Inflatable Tummy Time Leakproof Water Play Mat, Fun Activity Play Center Indoor and Outdoor Water Play Mat for Baby Random Design",
  //     category: "baby products",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51ZlEo78gvL._SX300_SY300_QL70_FMwebp_.jpg",
  //     productDescription: [
  //       "【Baby Safety Design & Leak Proof】- Our baby toys tummy time water mat are made of eco-friendly 100% BPA-free & non-toxic heavy duty PVC materials. Each of our inflatable belly time water mat has been strictly tested for NO LEAK and durability. Just let your baby enjoy the fun of tummy time!",
  //       "",
  //       "【Fun Tummy Time Toys for Babies】- Your little baby attention will be attracted by the vivid sea world and bright coloured cute floating animals, even try to grab the fish inside the water mat. Just let your baby have hours fun play time to improve their hand-eye coordination.",
  //       "【Stimulates Baby Development】- This infant water playmate toys can be well promoted the motor development for your baby. It helps strengthen baby’s neck, leg and arm muscles to prepare to crawl. Aside from preventing a flat head, this baby early development toys can also stimulate brain development.",
  //       "【Easy To Use & Pack】- Just fill water into the middle of tummy time water mat and inflate the edge of the water mat with air. Except cold water, it can also inject warm water (20-40℃) for cold weather. After use it, Dry and folds into your bag to bring along anywhere you go.",
  //       "【Perfect Gift for Babies】- Give your baby a happy tummy time. This inflatable tummy time water mat is a perfect infant baby gift for 3 6 9 12 months and up new-born baby boys or girls.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "248.",
  //         img: [
  //           "51ZlEo78gvL._SX300_SY300_QL70_FMwebp_.jpg",
  //           "71az2g2MuuL._SX679_.jpg",
  //           "71JxlmFUU+L._SX679_.jpg",
  //           "71CnvlCvBAL._SX679_.jpg",
  //           "71sL3w55PzL._SX679_.jpg",
  //           "61e2c9vMgML._SX679_.jpg",
  //           "71uQbTyPuiL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Product Dimensions": "14.3 x 14.1 x 5.9 cm; 240 Grams",
  //           Manufacturer: "Tavakkal E Commerce",
  //           "Item Weight": "240 g",
  //           "Country of Origin": "China",
  //           "Manufacturer recommended age": "1 month and up",
  //         },
  //         additionalInformation: {
  //           ASIN: "B09TXVK4VL",
  //           "Net Quantity": "1.00 Count",
  //           Manufacturer: "Tavakkal E Commerce",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fe3394dd-f68d-4467-92c4-09a1e2684f20.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/66ec4123-36c7-417f-aac7-2f61b7d3ea8b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/974d0bb9-1bbb-4523-aa64-4b451c4cf476.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/add1acc7-ab2a-46c8-a981-1ba1b8e598a3.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/654d8e0f-5a39-4844-9786-4d774bedc41e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       "Legal Disclaimer:":
  //         "Tec Tavakkal® Brand is Owned by Tavakkal E Commerce with Trademark Registrations Number and we are the only Authorized seller for Tec Tavakkal® Branding Products. Make sure the seller is Tec Tavakkal® and NOT Any other SELLERS before you place an Order.",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Bright colorful plants and floating sea animals will attract baby’s attention to catch. Not only stimulate your baby's hand eye coordination and color cognition. But also well strengthen baby muscle to prepare crawling. Great educational development toy gifts for new-born infant or baby girls and boys at 3 months 4 months 5 months 6 months 7 months 8 months 9 months 10 months 11 months 12 months years old and up. Both suitable for indoor & outdoor tummy time activity. The infant toys baby water mat are newly produced and packaged. Please leave it in a ventilated place for 1-2 days. Then the smell would disappear.",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "9",
  //     name: "Huggies Wonder Pants Extra Small / New Born (XS / NB) Size Diaper Pants, 24 Count, With Bubble Bed Technology For Comfort for Kids",
  //     category: "baby products",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61id0d+adnL._SX522_.jpg",
  //     productDescription: [
  //       "Diaper pants with 3-D Bubble-Bed provides ultimate cottony softness to your baby’s skin",
  //       "A flexible waistband means baby has the freedom to move in a snug and comfortable fit",
  //       "Bubble Wala Huggies absorbs wetness up to 12 hours, so your baby stays dry overnight with no irritation or rashes",
  //       "Triple Leak-guard adds extra padding on the sides of the diaper, ideal for reducing leakage from thighs and legs, while the 3-D layer keeps the diaper surface unbelievably dry",
  //       "Choosing the ideal diaper size based on baby weight and size is important. The diaper capacity may vary among babies from newborn to large, depending on the volume of waste. Available online in sizes - Newborn, Small, Medium, Large, XL, XXL",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "163",
  //         img: [
  //           "61id0d+adnL._SX522_.jpg",
  //           "61iR32+vRlL._SX522_.jpg",
  //           "81NdiRt5AgL._SX522_.jpg",
  //           "81YWfxNNfeL._SX522_.jpg",
  //           "81H39YDevXL._SX522_.jpg",
  //           "81gD6BClrYL._SX522_.jpg",
  //           "71nNnje3pmL._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Model Number": "HPXV1",
  //           "Target gender": "Unisex",
  //           "Maximum Weight Recommendation": "5 Kilograms",
  //           Material: "Cellulose fiber , polyester , polyacrylate , synthetic rubber",
  //           "Material free": "Chlorine Free",
  //           "Number Of Items": "1",
  //           Style: "24",
  //           "Batteries required": "No",
  //           "Is portable": "Yes",
  //           "Product Dimensions": "Product Dimensions",
  //           "Item model number": "	HPXV1",
  //           "Manufacturer recommended age": "0 - 3 months",
  //           Manufacturer: "Kimberly Clark India Private Limited",
  //           "Item Weight": "540 g",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B07JVTFGVV",
  //           "Net Quantity": "	24 count",
  //           Manufacturer:
  //             "Kimberly Clark India Private Limited, Kimberly Clark India Private Limited, Art Guild House, A-09, 3rd Floor, Phoenix Market City, LBS Marg, Kurla (West), Mumbai - 400 070. Toll Free No : 18002104040",
  //           "Included Components": "	Baby Daipers 24 Count",
  //           "Item Dimensions LxWxH": "26 x 18.5 x 13 Centimeters",
  //           "Generic Name": "Baby Diapers",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/d1db9adb-3300-4b93-a43f-6bbd7b64ad77.__CR0,55,5000,3093_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/da7d303f-6db2-45be-8c19-7aa9e9bb9330.__CR0,55,5000,3093_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/ee192bed-68c8-4c23-98df-89733910108c.__CR0,55,5000,3093_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/fe2e81f2-1d1d-440c-9965-c5808f04b303.__CR0,55,5000,3093_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       " What is in the box?": "Baby Daipers 24 Count",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Huggies Wonder Pants Extra Small / New Born (XS / NB) Size Diaper Pants, 24 Count, With Bubble Bed Technology For Comfort for Kids",
  //     },

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "10",
  //     name: "Himalaya Baby Gift Pack Series,Pack of 1 set,white",
  //     category: "baby products",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71kwVZ-3zML._SX679_.jpg",
  //     productDescription: [
  //       "100 percent safe for newborns",
  //       "Clinically proven",
  //       "Baby Gift Pack : Gentle baby shampoo (100 milliliter), Nourishing baby oil (100 milliliter), Diaper rash cream (20 grams), Moisturizing baby soap (70 grams), Baby lotion (100 milliliter), Baby powder (100 grams), Gentle baby wipes (12's)",
  //       "PACKER: The Himalaya Drug Company,Tumkur Road, Makali, Bangalore - 562162; IMPORTER: The Himalaya Drug Company,Tumkur Road, Makali, Bangalore - 562162",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "403",
  //         img: ["71byPJlAh8L._SX679_.jpg", "71jWrfzf-XL._SX679_.jpg", "71kwVZ-3zML._SX679_.jpg"],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Model Number": "HPXV1",
  //           "Target gender": "Unisex",
  //           "Maximum Weight Recommendation": "5 Kilograms",
  //           Material: "Cellulose fiber , polyester , polyacrylate , synthetic rubber",
  //           "Material free": "Chlorine Free",
  //           "Number Of Items": "1",
  //           Style: "24",
  //           "Batteries required": "No",
  //           "Is portable": "Yes",
  //           "Product Dimensions": "Product Dimensions",
  //           "Item model number": "	HPXV1",
  //           "Manufacturer recommended age": "0 - 3 months",
  //           Manufacturer: "Kimberly Clark India Private Limited",
  //           "Item Weight": "540 g",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B07JVTFGVV",
  //           "Net Quantity": "	24 count",
  //           Manufacturer:
  //             "Kimberly Clark India Private Limited, Kimberly Clark India Private Limited, Art Guild House, A-09, 3rd Floor, Phoenix Market City, LBS Marg, Kurla (West), Mumbai - 400 070. Toll Free No : 18002104040",
  //           "Included Components": "	Baby Daipers 24 Count",
  //           "Item Dimensions LxWxH": "26 x 18.5 x 13 Centimeters",
  //           "Generic Name": "Baby Diapers",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/5faed35e-33eb-4182-830a-3686203b4e48._SR970,300_.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/5a91d313-4a1a-4a03-a887-41258abe524f._SR970,300_.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/248d80f6-32e4-4f24-8002-f8b4084ccef3._SR970,300_.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/2f070037-03f8-498c-82f9-b4208e449bc9._SR970,300_.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sota/5e63a52c-93b2-4753-9983-c0ed6455bdff._SR970,300_.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       " What is in the box?": "Baby Daipers 24 Count",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Huggies Wonder Pants Extra Small / New Born (XS / NB) Size Diaper Pants, 24 Count, With Bubble Bed Technology For Comfort for Kids",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "11",
  //     name: "Himalaya Gentle Baby Soap (4N*75g)",
  //     category: "baby products",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/710Lq5TyfhL._SX522_.jpg",
  //     productDescription: [
  //       `Gently cleanses baby's skin`,
  //       "Key Ingrediants: Almond Oil is a renowned skin softener which moisturizes baby's skin.",
  //       "Olive Oil known to nourish, protect and soften skin.",
  //       `Direction For Use: Wet baby's face and body. Apply Himalaya Gentle Baby Soap, gently working up a lather. Rinse thoroughly.`,
  //       "sun protection: No",
  //       "color name: white",
  //       "target audience keywords: unisex baby",
  //       "scent name: olive",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "144",
  //         img: [
  //           "710Lq5TyfhL._SX522_.jpg",
  //           "71-+fIFJjHL._SX522_.jpg",
  //           "71McMnv8CaL._SX522_.jpg",
  //           "719mML8ll0L._SX522_.jpg",
  //           "71+T1nHflxL._SX522_.jpg",
  //           "615cP6JswVL._SX522_.jpg",
  //           "61ENqUT0qRL._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Model Number": "7002719",
  //           "Target gender": "Unisex",
  //           "Number Of Items": "1",
  //           Style: "Gentlle Baby Soap - Buy 3 Get 1 Free",
  //           "Is portable": "No",
  //           "Batteries required": "No",
  //           "Dishwasher safe": "No",
  //           "Product Dimensions": "5.2 x 8.4 x 10 cm; 305 Grams",
  //           "Item model number": "7002719",
  //           "Item Weight": "305 g",
  //           "Country of Origin": "India",
  //           Manufacturer: "The Himalaya Drug Company",
  //         },
  //         additionalInformation: {
  //           ASIN: "B01N4MLUUO",
  //           "Net Quantity": "4 count",
  //           Manufacturer: "The Himalaya Drug Company, The Himalaya Drug Company, Makali,Bangalore-562123",
  //           Packer: "The Himalaya Drug Company, Makali, Bengalure, 562162; 1-800-208-1930",
  //           "Included Components": "4 Baby Soap 75GM",
  //           "Item Dimensions LxWxH": "5.2 x 8.4 x 10 Centimeters",
  //           "Generic Name": "	Baby Soap",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f71706c0-889d-4201-a02c-eeb92f22b2f6.__CR0,0,4042,1250_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f568bd31-b788-4135-8913-c1afa85ef49f.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fb597e42-2174-4c41-9978-4f5cd575e3d9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a23ba7b5-47d3-40db-9757-9156a327fe9b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/761b9ca0-7388-450d-8a1a-5189005522ce.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       " What is in the box?": "4 Baby Soap 75GM",
  //     },
  //     productDisc: {
  //       "Product description": "Himalaya Gentle Baby Soap (4N*75g)",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "12",
  //     name: "Storio Toys Dancing Cactus Talking Toy, Cactus Plush Toy, Wriggle & Singing Recording Repeat What You Say Funny Education Toys for Babies Children Playing, Home Decorate (Cactus Toy)",
  //     category: "toys",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71BAdf6V32L._SX522_.jpg",
  //     productDescription: [
  //       "Perfect gift for your kids or friends. This funny toy will definitely make people who receive it laught! It can record what you say and keep playing.",
  //       "Dancing Cactus Plush Toys, Toys for Babies Toddlers Kids 3 Months and up, It can slso as a room decoration.",
  //       "Gifts for 1, 2, 3 Year-Old girls and boys. It is also a nice adults stress relief toy and educational toy for kids.",
  //       "Cheerful music and dancing are very suitable for creating a pleasant atmosphere and for hosting parties.",
  //       `With the singing and humorous dancing, children's attention will be aroused and joyness will be brought to them.`,
  //       "Made of soft and comfortable plush fabric, colorless and tasteless, it is skin‑friendly and is safe and hygienic.",
  //       `Fun and lovely cactus plush toys, can dance, sing, move. It's good for early education.`,
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "675.0",
  //         img: [
  //           "71BAdf6V32L._SX522_.jpg",
  //           "7183PaGr8nL._SX522_.jpg",
  //           "71XKrx+-L3L._SX522_.jpg",
  //           "71-sLvR7nxL._SX522_.jpg",
  //           "71WRlKQUYML._SX522_.jpg",
  //           "71BAdf6V32L._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Model Number": "SC1032",
  //           "Number of Puzzle Pieces": "1",
  //           "Assembly Required": "No",
  //           "Batteries required": "Yes",
  //           "Batteries Included": "Yes",
  //           "Material Type(s)": "Fabric",
  //           "Number Of Items": "1",
  //           Color: "Multicolor",
  //           Style: "24",
  //           Batteries: "1 Lithium Polymer batteries required. (included)",
  //           "Product Dimensions": "5 x 7 x 4 cm; 200 Grams",
  //           "Item model number": "SC1032",
  //           "Manufacturer recommended age": "6 months - 15 years",
  //           Manufacturer: "Storio",
  //           "Item Weight": "200 g",
  //           "Country of Origin": "China",
  //           "Imported By": "Storio International",
  //         },
  //         additionalInformation: {
  //           ASIN: "B085F19QXT",
  //           Manufacturer:
  //             "Storio, Standard HMC Toys, Factory,ADD- Chenghai,Shantou,Guangdong,China; Contact - +91 0 8668406280",
  //           Importer: "	Avenue Overseas Incorporation",
  //           Packer: "Storio Innovative Learning Solutions",
  //           "Included Components": "1 Dancing & Talking Cactus Doll Toy and Charging Cable",
  //           "Item Dimensions LxWxH": "50 x 70 x 40 Millimeters",
  //           "Net Quantity": "1 Pack",
  //           "Generic Name":
  //             "Car 1: 32 Bmw Z4 Car Open Door Car Metal Car Die-Cast Car Pull Back Car (Any One & Colour May Vary) (Bmw Z4)",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/982772c4-dc33-4a46-b3e5-b094e5931719.__CR0,96,2000,1237_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/02cfeea7-2092-44c0-b362-b6f82ea8965e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c27497c7-82d2-4621-9e22-fe4b1c962e90.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f5c9809a-51e2-4cd9-b097-a81c0ace3193.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     importantInformation: {
  //       " What is in the box?": "1 Dancing & Talking Cactus Doll Toy and Charging Cable",
  //     },

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "13",
  //     name: "Mirana USB Rechargeable Battery Powered Hover Football Indoor Floating Hoverball Soccer | Air Football Pro | Original Made in India Fun Toy for Boys and Kids (Red)",
  //     category: "toys",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/41BNF4K1iSL._SX300_SY300_QL70_FMwebp_.jpg",
  //     productDescription: [
  //       "Have Fun and Stay Active - children, parents, and even pets love playing with this hover soccer ball that is suitable for any smooth surface (indoor or outdoor)!",
  //       "Padded Bumpers to Protect Your Home - Hover soccer ball has a foam edge that will protect furniture and walls from damage and keep kids from injuring themselves. With its padded bumpers, the hover ball will rebound off surfaces for hours of fun!",
  //       "Great Gift and Easy to Use - Simply turn on the powerful and quiet air fan and kick the air powered floating ball softly and it will glide amazingly on the floor! This small and fun indoor sport toy makes a great gift for any age, for 3 4 5 6 7 8 9 10 11 12 13 year old boys and girls.",
  //       "No Hassle only Fun - Upgraded version rechargeable Air Football Pro. Just USB charging. No worry about buying battery.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "699",
  //         img: [
  //           "41BNF4K1iSL._SX300_SY300_QL70_FMwebp_.jpg",
  //           "616tEavNgxL._SX522_.jpg",
  //           "61tg3vDL26L._SX522_.jpg",
  //           "61VlGKsi9pL._SX522_.jpg",
  //           "61EhHtvRSsL._SX522_.jpg",
  //           "61UDbKfCDcL._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Assembly Required": "No",
  //           "Batteries required": "Yes",
  //           "Batteries Included": "Yes",
  //           Color: "Red",
  //           Batteries: "1 Lithium Ion batteries required. (included)",
  //           "Product Dimensions": "18 x 18 x 7 cm; 290 Grams",
  //           "Item part number": "AFP04L0206-3",
  //           "Manufacturer recommended age": "3 years and up",
  //           Manufacturer: "Mirana Innovations Private Limited",
  //           "Item Weight": "290 g",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           ASIN: "B099DVGKMC",
  //           Manufacturer: "	Mirana Innovations Private Limited, Mirana Innovations Private Limited",
  //           "Included Components": "Air Football Pro, USB charging cable, Instruction Manual",
  //           "Item Dimensions LxWxH": "	18 x 18 x 7 Centimeters",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2c30867c-cdf8-4a3b-8f67-4df82ca09a84.__CR0,0,600,180_PT0_SX600_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/288218a7-e642-49f2-9184-3ef4ca1c9592.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/81fe6eff-bcb8-4593-8ce4-a5095435ce2e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9acd6c98-3ac4-4e85-9219-99f017328ab3.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fc1ee048-36c0-4cdc-b79d-b9ba59626ac5.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7b81752d-2d43-424e-be2c-66852775d96e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "14",
  //     name: "Baby Yoda Star Wars The Child Plush Toy, 11-Inch Soft Figure From The Mandalorian",
  //     category: "toys",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71-2CohiZaL._SX522_.jpg",
  //     productDescription: [
  //       "This 11-inch The Child plush toy will capture the hearts of Star Wars fans everywhere!",
  //       "Inspired by the Disney+ series The Mandalorian",
  //       "The adorable figure with green skin, big ears and large eyes resembles a baby Yoda but is referred to as The Child",
  //       "The toy plush has a soft body, plus a sturdy base filled with beans, perfect for cuddling or display as a collectible",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "4,530",
  //         img: [
  //           "71-2CohiZaL._SX522_.jpg",
  //           "71rG2+9P0EL._SX522_.jpg",
  //           "71Q8m0mfFWL._SX522_.jpg",
  //           "71SdRcPBLPL._SX522_.jpg",
  //           "71QJ1Gv6lHL._SX522_.jpg",
  //           "713EeaPKJmL._SX522_.jpg",
  //           "81wKKLAiTaS._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Language: "Multilingual",
  //           "Model Number": "GWD85",
  //           "Number of Puzzle Pieces": "1",
  //           "Assembly Required": "No",
  //           "Batteries required": "No",
  //           "Batteries Included": "No",
  //           "Material Type(s)": "Plush",
  //           "Remote Control Included?": "No",
  //           Color: "Multicolor",
  //           "Product Dimensions": "20.29 x 15.19 x 27.99 cm; 100 Grams",
  //           Batteries: "1 A batteries required.",
  //           "Item modal number": "GWD85-3",
  //           "Manufacturer recommended age": "36 months - 6 years",
  //           Manufacturer: "Mattel Toys",
  //           "Item Weight": "100 g",
  //           "Country of Origin": "USA",
  //         },
  //         additionalInformation: {
  //           ASIN: "B0825SNHP1",
  //           Manufacturer:
  //             "	Mattel Toys, Mattel Asia Pacific Sourcing, Ltd. 11/F., South Tower, World Finance Centre, Harbour City, Tsimshatsui, Kowloon, H.K. Ph No-852 3185 5000",
  //           Packer: "Mattel Asia Pacific Sourcing Ltd",
  //           Importer:
  //             "Mattel Toys (India) Pvt. Ltd., 5th Floor, North Avenue 4, Maker Maxity, Bandra Kurla Complex, Bandra (E ), Mumbai, Maharashtra, 400051. +911800 209 0102",
  //           "Included Components": `1 11" Viny Figure`,
  //           "Item Dimensions LxWxH": "20.3 x 15.2 x 28 Centimeters",
  //           "Generic Name": "Star Wars The Child Plush Toy, 11-Inch Small Yoda-Like Soft Figure From The Mandalorian",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/c1712475-f184-4b77-901b-f9d24e0eaec5.__CR0,0,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/0ac4a4da-5f5f-4db3-912f-54ecfbeb0dc4.__CR0,0,970,300_PT0_SX970_V1___.png",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "15",
  //     name: "Funko Pop Anime Naruto Shippuden Tobi Toy Figure",
  //     category: "toys",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51-H7QOsVES._SX522_.jpg",
  //     productDescription: [
  //       "Stylized figure stands at about 4 inches",
  //       "Perfect merchandise for fans to place on desk or collect",
  //       "Officially licensed figures by Funko, USA",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "3,578",
  //         img: ["51-H7QOsVES._SX522_.jpg", "418e5uAx9NS.jpg", "518oRL2t0XL.jpg"],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Theme: "Naruto Shippuden",
  //           Brand: "Funko",
  //           Colour: "Multicolour",
  //           Style: "Funko",
  //           Material: "Vinyl",
  //           Occasion: "Christmas, Anniversary, Fathers Day, Birthday, Mothers Day",
  //           "Cartoon Character": "Pain",
  //           "Product Dimensions": "6.4L x 6.4W x 9.5H Centimeters",
  //           "Age Range (Description)": "168 months to 1200 months",
  //           "Number of Puzzle Pieces": "1",
  //           "Item Weight": "0.09 Kilograms",
  //           "Assembly Required": "No",
  //           "Number of Items": "1",
  //           "Collection Name": "Funko Pop Animation: Naruto Shippuden",
  //           Contributor: "Funko Pop! Anime:",
  //           Manufacturer: "Funko",
  //           "Item Package Quantity": "1",
  //           Language: "English, French, German, Spanish",
  //           "Model Number": "12452-PX-1R2",
  //           "Number of Game Players": "82",
  //           "Batteries Required": "No",
  //           "Batteries Included": "No",
  //           "Material Type(s)": "Vinyl",
  //           "Remote Control Included?": "No",
  //           "Item model number": "12452-PX-1R2",
  //           "Manufacturer recommended age": "6 years and up",
  //           "Country of Origin": "USA",
  //         },
  //         additionalInformation: {
  //           ASIN: "B01M9JZJTB",
  //           Manufacturer: "Funko",
  //           Packer: "Mattel Asia Pacific Sourcing Ltd",
  //           "Included Components": `Funko POP vinyl`,
  //           "Item Dimensions LxWxH": "	6.4 x 6.4 x 9.5 Centimeters",
  //           "Generic Name": "Collectible Figure",
  //         },
  //       },
  //     ],

  //     importantInformation: {
  //       "Safety Information:": "Choking Hazard - Small Parts",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "1 X Funko pop animation - vinyl figure - Naruto shippuden - Tobi. Attractive display box. Perfect for your desk or shelf. Collect them all.",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "16",
  //     name: "The Man Company Charcoal Grooming Kit with Body Wash, Shampoo, Face Scrub, Face Wash, Cleansing Gel, Solid Soap Bar | Combo Gift Set for Husband, Boyfriend - Set of 6",
  //     category: "beauty and grooming",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61PBLMArsWS._SX679_.jpg",
  //     productDescription: [
  //       "Perfect Gift Set – The Man Company Charcoal Detan Kit comes up with face wash, face scrub, cleansing gel, shampoo, soap, body wash or soap free shower gel enriched with Activated Charcoal, Hyaluronic acid, Aloe Vera and Clove. The perfect skin care gift set for him provides you tan free and glowing face in this summer season. Keeps your skin soft, supple and glowing throughout the day.",
  //       "Charcoal Body Wash - Lemongrass & Cinnamon - The activated charcoal-based body wash infused with Lemongrass and Cinnamon natural essential oil is a tube full of goodness! An acne fighter, an antioxidant, and antiseptic, it smoothens your skin, removes dead skin cells and improves your overall complexion. Charcoal is a tried and tested cleansing agent, known for its unique ability to draw out toxins and purify you from the inside!",
  //       "Charcoal Shampoo - Pepper Mint & Clove - A powerful combination of pepper mint and clove essential oil on an activated charcoal base, in the form of a shampoo can provide multiple benefits to the hair! It will help you eliminate dandruff and lice from your scalp. It can also improve frizzy hair and may contribute to hair growth. Acts like a hair conditioner and offers relief from anxiety.",
  //       "Charcoal Face Scrub - Lemongrass & Eucalyptus - A face scrub made with activated charcoal and essentials oils of lemongrass and eucalyptus will scrub off the dust and dirt off your skin. This scrub contains anti-fungal, antiseptic, antibacterial, anti-inflammatory and antioxidant properties",
  //       "Charcoal Face Wash - Ylang-Ylang & Argan - Rosemary and Ylang Ylang essential oil with an activated charcoal base is a unique combination to spot. After rigorous research, these components have been blended together to create an exceptional face wash that rejuvenates the skin, treats acne and prevents skin infection. It also contains aphrodisiac, hypotensive and anti-ageing properties. Charcoal Cleansing Gel - Black Pepper & Bergamot - A cleansing gel made with activated charcoal.",
  //       "Charcoal Soap Bar -give your skin a manly glow like never before. Using our Charcoal bar consistently on your face can reduce or eliminate acne, bumps and blackheads. Our Charcoal soap is also a great body bar for an all over skin detox.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "1,616",
  //         img: [
  //           "61PBLMArsWS._SX679_.jpg",
  //           "61VwGVOjd1S._SX679_.jpg",
  //           "41kpcGGjCRS.jpg",
  //           "31QfHnMfuIL.jpg",
  //           "51xDBDRf89L._SX679_.jpg",
  //           "51lypxgOiGL._SX679_.jpg",
  //           "31SE-WLAh8L.jpg",
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6e60d5dd-7a79-4886-9d22-ad51f00901c8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cf669410-097f-4bdf-b038-2fb5de72f0e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/23277319-76d3-43c6-86ec-0ca5d509b31e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cd23bb51-d41b-4ccc-9f61-e85f215799f5.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       "Is Discontinued By Manufacturer": "NO",
  //       "Package Dimensions ": "31 x 21.1 x 8.2 cm; 1.73 Kilograms",
  //       "Date First Available": " 16 June 2020",
  //       ASIN: "B08BCNLM58",
  //       "Item part number": "TMC-WEB-225T",
  //       "Country of Origin": "India",
  //       Manufacturer:
  //         " VEDIC NATURAL CARE PRIVATE LIMITED, GOODNESS OF NATURE,128/230, H-Block, Kidwai Nagar,Kanpur- 208011, Uttar Pradesh, India",
  //       "Item Weight": " 1 kg 730 g",
  //       "Net Quantity ": "6.00 count",
  //     },
  //     importantInformation: {
  //       "Ingredients:": "Charcoal",
  //     },

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "17",
  //     name: "Pilgrim Korean Beauty Flawless Skin Face Care Kit With Vitamin C Night Serum & Jute Kit Bag | Daily Face Wash 100 ml, Refreshing Face Mist & Toner 100 ml, Brightening Day Cream SPF50 100 gm",
  //     category: "beauty and grooming",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/81r0A7ZvLtL._SX522_.jpg",
  //     productDescription: [
  //       "✅ KOREAN BEAUTY FACE KIT has White Lotus Day Cream SPF 50, Volcano Lava Ash Face Wash, Vitamin C Night Serum, and White Lotus Natural Face Mist and Toner.",
  //       "✅ It gives your skin all the care it needs while keeping it flawless and radiant.",
  //       "✅ HOW TO USE: Apply face wash to cleanse your face. Gently spritz toner and apply the cream In AM and serum in PM.",
  //       "✅ PREMIUM VOLCANIC LAVA ASH FACE WASH gently removes dirt and impurities & fights pollution.",
  //       "✅ 3-IN-1 DAY CREAM WITH SPF 50 offers sun protection, leaves no white cast, and reduces pigmentation & blemishes.",
  //       "✅TONER rejuvenates your skin while absorbing excess oil and keeps the skin nourished.",
  //       "✅VITAMIN C SERUM makes your skin look YOUNGER and BRIGHTER and reduces dark spots and acne scars.",
  //       "✅Pilgrim is a NON-TOXIC CLEAN BEAUTY, and the products contain no paraben or sulfates and are 100% vegan and PETA-certified cruelty-free.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "1,283",
  //         img: [
  //           "81r0A7ZvLtL._SX522_.jpg",
  //           "71F+pWUo1nL._SX522_.jpg",
  //           "71B2GVuwA6L._SX522_.jpg",
  //           "71KdxPqk9AL._SX522_.jpg",
  //           "717ZlJDPGCL._SX522_.jpg",
  //           "71aHbLIwVZL._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/20a03e40-f4b5-4035-b809-bc74382e245e.__CR0,0,1903,1177_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/657eec6c-43c0-4e41-8f7a-df52bb1c5e56.__CR0,0,1903,1177_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b59adbce-2a22-4043-9bb5-94013a6a47fe.__CR0,0,1903,1177_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/89cab289-5bd5-42be-8e8f-ae1dc7b9e9b1.__CR0,0,1903,1177_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/35015cca-56f2-49b6-93a0-92277df48d74.__CR0,0,1903,1177_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6af3f4ed-86a4-4dff-b951-e6e993d110af.__CR0,0,1903,1177_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       "Product Dimensions": "19 x 11 x 9.5 cm; 230 Grams",
  //       "Date First Available ": "29 October 2020",
  //       Manufacturer: " Aelius Parallel Holdings Pvt Ltd",
  //       ASIN: "B08HJMW95Q",
  //       "Item part number": "PGKFWFMTDCNS1",
  //       "Country of Origin ": "India",
  //       "Item Weight": "230 g",
  //       "Item Dimensions LxWxH": "19 x 11 x 9.5 Centimeters",
  //       "Net Quantity": "4.00 count",
  //       "Included Components ": "Face Wash, Face Mist & Toner, Day Cream with SPF 50 & Vit C Night Serum",
  //       "Generic Name": " Face Wash",
  //     },
  //     importantInformation: {
  //       "Ingredients:": "Face wash, Face toner & mist, night serum",
  //     },

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "18",
  //     name: "Viulvuk Multi-functional Large Makeup Pouch for Women | Waterproof PVC Cosmetic Bags with Hook for Girls | Toiletry Storage Wash Bag | Travel Organizer for Bath Accessories & Grooming Kit (Black)",
  //     category: "beauty and grooming",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61T9lpRPTPL._SX522_.jpg",
  //     productDescription: [
  //       "MATERIAL QUALITY: This makeup bags are made of Premium PU leather and waterproof PVC material. There is Premium zippers, sturdy hook, easy to access. Effective protection is good for your cosmetics. Keep them dry at all times without getting wet or damp. The simple and large-capacity style design makes the cosmetic bag look neat and unique.",
  //       "LARGE CAPACITY: The size of the transparent travel bag is about 23x16x14 cm (LxWxH), it has enough space to store our items and meet different requirements for various purposes.",
  //       "CONVENIENT & PORTABLE: Our Makeup Bag Is Lightweight And Portable. There Is Hanging Hook Allows Hanging The Toiletry Case Making Your Toiletries And Cosmetics Displayed Well For Easy Access And Save Space As Well. You Can Hang The Bag On The Bathroom Door, Shower Rod Or Towel Rack.",
  //       "HAND STRAP: Reinforced hand strap design, sturdy and durable. It is easy to carry, reducing the carrying pressure. You can also pick it up more easily or hang it elsewhere.",
  //       "WIDE APPLICATION: You can easily put in shampoos, lotions, perfumes, cosmetics, medicines, stationery and other small items. Use it as a cosmetic bag, a travel wash bag, or even a stationery bag, which is convenient for outdoor activities, business travel, vacation travel or gym.",
  //       "BEST TRAVEL PARTNER: Suitable for home travel, when you are at home, you can use it as a storage bag to pack cosmetics, skin care products, etc., and store them in a unified manner; you can take the items you need to go out when you travel, and it is portable and light.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "239",
  //         img: [
  //           "41HmhuwdL-L._SX300_SY300_QL70_FMwebp_.jpg",
  //           "61b9NyVEk0L._SX522_.jpg",
  //           "51Wg-vtmwcL._SX522_.jpg",
  //           "611C5vdtT+L._SX522_.jpg",
  //           "61CKQ5wSGHL._SX522_.jpg",
  //           "71UDfgt3EqL._SX522_.jpg",
  //           "41kUbIcXvRL.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       " Product Dimensions": "23 x 14 x 16 cm; 189 Grams",
  //       " Date First Available": " 25 September 2022",
  //       ASIN: "B0BGFNM1BK",
  //       " Country of Origin": "India",
  //       Department: "unisex-adult",
  //       " Item Weight": " 189 g",
  //       " Item Dimensions LxWxH": " 23 x 14 x 16 Centimeters",
  //       " Net Quantity": "1.00 count",
  //       "Generic Name ": "Travel Accessory- Cosmetic Bag",
  //     },

  //     productDisc: {
  //       "Product description": `It is made of durable, water-resistant PU and PVC material. Heavy ​duties handle Strap hold all the bag from bottom to top, no worry to break and fall. Double fine stitching at both sides protects the zipper and makes it more sturdy. Waterproof and thickened PVC material can protect your cosmetics and toiletries from getting wet. This clear cosmetic bag is also a good choice for storing wet swimsuits after you swim. The transparent design allows you can easily to see what's inside and save time to find what you need. Our toiletry travel bag is waterproof and the surfaces can keep items free from moisture and dirt, simply wipe clean and air dry as needed. This portable travel toiletry bag to carry your toiletries or cosmetics on the go, and protect your items from moisture or sand. This Makeup Bag not only can storage your cosmetics, but also Jewelry, Electronic Accessories, Camera, Essential oil, Toiletries, Shaving Kit, Valuable objects and so on.`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "19",
  //     name: "Park Avenue Good Morning Grooming Kit – Combo of 7in 1 combo",
  //     category: "beauty and grooming",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71DUCJQSXYL._SX522_PIbundle-12,TopRight,0,0_AA522SH20_.jpg",
  //     productDescription: [
  //       "Quantity: Park Avenue fragrance Body spray (150 ml), soap (125G), shaving cream (84G), after shave lotion travel pack (50ml), razor (1n), & shaving brush (1n)",
  //       "good quality travel pouch with the pack",
  //       "Target Audience: men with class. Soap : A good Start makes a day great. Let the refreshing goodness of tea tree oil make you come alive",
  //       "Experience the range of men’s grooming products from the house of Park Avenue. This carefully designed 7-in-1 kit ensures a refreshing start to your mornings",
  //       "An excellent choice for daily use, traveling or gifting",
  //       ` Unleash your x-factor with Park Avenue men’s grooming range`,
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "375",
  //         img: [
  //           "71DUCJQSXYL._SX522_PIbundle-12,TopRight,0,0_AA522SH20_.jpg",
  //           "81I+2M+R3gL._SX522_.jpg",
  //           "8124jCak8bL._SX522_.jpg",
  //           "61t45WP0nRL._SX522_.jpg",
  //           "61W0hrNgPvL._SX522_.jpg",
  //           "51Q8urTA-gL._SX522_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "  Product Dimensions": "48 x 37 x 24 cm; 300 Grams",
  //       "Date First Available": " 10 October 2019",
  //       ASIN: "B07YY7YPLT",
  //       "Item model number ": "8901277013668_combo",
  //       "Country of Origin": "India",
  //       Manufacturer:
  //         "Suhan Aerosol, Suhan Aerosol, J / 1 – 8, Radheyshyam Industrial Complex, Village Asangaon (W), Tal. Shahapur, Thane-421 601, Maharashtra; Email: suhan.aerosol@gmail.com",
  //       Packer:
  //         " A) ESQUIRE HEALTH CARE AND LOGISTICS PVT.LTD., Bhagwan Seth Estate, Building No. A-2, Gala No. 8-B, Purna Village Bhiwandi - 401 302, Maharashtra; B) INVENTORY SOLUTIONS, Godown no.1, Village Khanpur, Ambala, Haryana - 133102, India; Email: suhan.aerosol@gmail.com",
  //       "Item Weight ": "300 g",
  //       "Item Dimensions LxWxH": "48 x 37 x 24 Centimeters",
  //       "Net Quantity  ": "1 count",
  //       "Included Components ": " GOOD MORNING GROOMING KIT",
  //       "Generic Name": "Good Morning Grooming Kit",
  //     },
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/703f4959-59d7-4b35-825c-bc1274822baf.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/61b0cd12-ae6a-485a-9e2a-f155c480c2d2.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/63c3e468-b0f2-4885-ae63-2009ed3ba6dd.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/830a4e80-68a0-4fee-9c71-d0415ffcc5da.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/70b9b65a-586b-4ea4-9d12-1a8a8c9a13a8.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],

  //     productDisc: {
  //       "Product description": `Park Avenue Good Morning Grooming Kit – Combo of 7in 1 combo`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "20",
  //     name: "Jaipur Ace Premium Rakhi for Brother | Adiyogi Metal Rudraksh Rakhi with Adiyogi Statue Rakhi Gift for Brother (Rudraksh Adiyogi Rakhi with Adiyogi Statue)",
  //     category: "home and decor",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/81iAMIM6OeL._SX679_.jpg",
  //     productDescription: [
  //       "Package Content:- 1 Adiyogi Rakhi, 1 Adiyogi Idol ,1 Designer Card, 1 Pack of Roli & Chawal",
  //       "Premium Quality With Packaging :- High Quality as per International Standards that makes it very skin friendly. It has been made from toxic free materials Anti-Allergic and Safe for Skin. It can be worn over long time periods without any complains of ach and swelling. Made from Premium Quality Material this product assures to remain in its Original Glory even after years of usage.",
  //       "Jaipur Ace Lord Adiyogi Shiva Statue for Car Dash Board, Pooja & Gift, Mahadev Murti/Idol, Lord Adiyogi Shankara for Home & Office Decore-Made in India",
  //       "Adiyogi Idol size in CM (L x W x H): 16.5 cm x 11 cm x 13 cm | Size In Inches : 6.5 Inch x 4.3 Inch x 5 Inch",
  //       "High Quality Rakhi Material | Comes with Roli Chawal OR Greeting cards",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "499",
  //         img: [
  //           "81iAMIM6OeL._SX679_.jpg",
  //           "713adDVfwQL._SY879_.jpg",
  //           "71DveD4JgHL._SX679_.jpg",
  //           "71Z5UgUOMsL._SX679_.jpg",
  //           "71CLkAMK7WL._SX679_.jpg",
  //           "61Wlp90uoiL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "JAIPUR ACE",
  //           "Country of Origin": "India",
  //           "Item model number": "Adiyogi Rakhi",
  //           ASIN: "B0B6CCJ75C",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "JAIPUR ACE, JAIPUR ACE, Email- support@jaipurace.com, Contact - 9680794505",
  //           Importer: "	Avenue Overseas Incorporation",
  //           Packer: "JAIPUR ACE, Email- support@jaipurace.com, Contact - 9680794505",
  //           "Item Dimensions LxWxH": "13 x 11 x 16.5 Centimeters",
  //           "Net Quantity": "	1.00 count",
  //         },
  //       },
  //     ],

  //     productDisc: {
  //       "Product description": `Jaipur Ace Lord Adiyogi 6.5-inch × 5-inch Statue is handcrafted by indian artist. This idol/ Statue is the Abode of Yoga and source of energy for people to enhance their well-being. It can be a source of positivity and spirituality in your daily life. This Jaipur ace Adiyoga idol is a miniature version of the 112-Feet Adiyogi statue, an Incredible India destination in the Isha Yoga Centre, Coimbatore. You can place it at your home or on your office desk, gift to your loved ones on special occasions/festivals/Ceremony etc. Clean it with a white dry cotton cloth. On this Raksha Bandhan let your brother feel that his sister loves him a lot and express your heart to him with some sweetest rakhi gift hamper. If you are blank then this Rakhi gift hamper is the best to go with. Celebrate Rakhi in a special way with this beautiful rakhi gift for brother combo pack. We understand your unique needs and the importance of this festival, thus we offer a rakhi gifts hamper that have all the things that will make your rakhi celebration more joyous & cheerful`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "21",
  //     name: "Dequera® > Human Face with Hand on his Mouth White Showpiece for Home Decor|Decorative Items for Room|Home Decoration Items|Table Decoration Items |Showpiece Antique (Golden)",
  //     category: "home and decor",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/91ryN7wxtSL._SX522_.jpg",
  //     productDescription: [
  //       "֎► Material: Polyresin , The Package Contains:- 3 Pcs Set",
  //       "֎► This figure is having detailed hand work, made of polyresin material and have beautiful hand work of skilled indian artist",
  //       "֎► Spiritual Lucky Gift, Fengshui Gift, Thanksgiving Gift, Anniversary Gift,Birthday Gift, Wedding Gift,Christmas gift,diwali gift .lled indian artist",
  //       "֎► Easy to put the figurines on your desk, car dashboard, perfect for display on shelf of store. A nice gift.",
  //       "֎► Best item for decor in home,office and other working places & it can be an attractive item for gift purposes also.",
  //       "֎► Care Instruction: Wipe with soft clean cloth",
  //       "֎►Designed & Developed by Dequera ",
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/62025a57-3f11-4da9-ac17-6e8940c704c8.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e4b87bea-8f83-4ed7-be38-01e6b78314c3.__CR0,477,2500,1546_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/70a8b789-a7c0-4b0d-852e-5bd9f5471c65.__CR0,477,2500,1546_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f82b8c2f-c01a-4b76-9988-43c9c51010e5.__CR0,477,2500,1546_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "599",
  //         img: [
  //           "91ryN7wxtSL._SX522_.jpg",
  //           "91ZiT0tUE9L._SX522_.jpg",
  //           "91cedHJpXSL._SX522_.jpg",
  //           "91gTyjlkIEL._SX522_.jpg",
  //           "91kDhn7ycyL._SX522_.jpg",
  //           "91BvIq3OVsL._SX522_.jpg",
  //         ],
  //       },
  //     ],

  //     specification: [
  //       {
  //         technicalDetails: {
  //           Brand: "DEQUERA",
  //           Colour: "Golden",
  //           Material: "Resin",
  //           Occasion: "Christmas, New Year, Anniversary, Birthday,Congratulations",
  //           "Cartoon Character": "Face with Hand",
  //           " Product Dimensions": "7.6L x 5.1W x 20.1H Centimeters",
  //           " Finish Type": "	Painted",
  //           Weight: "350 Grams",
  //           "Is Assembly Required": "NO",
  //           "Number of Items": "3",
  //           "Collection Name": "Humans",
  //           "  Net Quantity": "1.00 count",
  //           Manufacturer:
  //             "FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, email - foxbraincrafts@gmail.com",
  //           "Item Package Quantity": "1",
  //           "Batteries Required?": "No",
  //           Color: "Golden",
  //           "Shipping Weight": " 0.8 Kilograms",
  //           " Item Model Number": " DQ-1002-01",
  //           "Item Part Number	": "DQ-1002-01",
  //           "Primary material": "Resin",
  //           Capacity: " 2 x3 x 7.9",
  //           "Country of Origin": "India",
  //         },
  //         additionalInformation: {
  //           Manufacturer:
  //             "FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, email - foxbraincrafts@gmail.com",
  //           "Item Weight": "350 g",
  //           Packer:
  //             "FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, FOXBRAIN CRAFTS, GURUGRAM, HARYANA , INDIA, +91 - 8510058282, email - foxbraincrafts@gmail.com",
  //           "Item Dimensions LxWxH": "5.1 x 7.6 x 20.1 Centimeters",
  //           "Net Quantity": "	1.00 count",
  //           "Generic Name":
  //             "Idol / Figurine Decoration Item for Home Décor *Indoor *Outdoor *Garden *Porch *Bedroom *Living Roo *Gifting",
  //         },
  //       },
  //     ],

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "22",
  //     name: "About Space Cycle Decorations Items - Figurines Showpieces Resin Table Top Black Bicycle Rider Statue for Showcase, Living Room, Cupboard, Office Table, Gifts,Home Decor (L20.5 x W 4.5 x H 17cm)",
  //     category: "home and decor",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/719rMKI+IWL._SX679_.jpg",
  //     productDescription: [
  //       "Product description: Cyclist represent a symbol of progress, of renewal, of promising times ahead. About Space’s cyclist statue express positiveness and symbolise that you will win. The dimensions are (20.5 x 4.5 x 17Cm)",
  //       "Quality Material: These charming statues are made of high quality resin, so these pieces are durable,wear-proof and waterproof all the way through",
  //       "Lightweight: This small statue is lightweight so that you can place it almost anywhere in your home or office, which is convenient to carry with and send as a gift. Any adult or child would love this sculpture, an excellent addition to any home",
  //       "Design: Beautiful, exquisite, excellent craft, highly ornamental and collection value. Matte glaze can better reflect the great touch feeling and wonderful texture. The bottom design prevents the furniture from being scratched and has a non-slip effect",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "1,099",
  //         img: [
  //           "719rMKI+IWL._SX679_.jpg",
  //           "61dY96DbbuL._SX679_.jpg",
  //           "714XrzpCoZL._SX679_.jpg",
  //           "714HPxXXeyL._SX679_.jpg",
  //           "81Tjud4X+gL._SX679_.jpg",
  //           "81RHmZd5I7L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "Fireball Technologies",
  //           "Country of Origin": "China",
  //           "Item model number": "Model 2",
  //           ASIN: "B0B6VZQQ7W",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "Fireball Technologies",
  //           "Item Weight": "520 g",
  //           "Item Dimensions LxWxH": "20.5 x 4.5 x 17 Centimeters",
  //           "Net Quantity": "	1.00 count",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/21754ea0-60bf-4df0-976d-2cb52bf851a8.__CR0,0,600,180_PT0_SX600_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/50913800-99d3-4fee-943e-3fc0e5053af5.__CR0,0,970,600_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0d762bf2-4700-407b-80c4-c29ac35702d0.__CR0,0,970,600_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0cdba680-02c1-4cfe-bb4c-62ef3c152299.__CR0,0,970,600_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/25c44c0c-b6ba-4554-a3f4-a62a591c6772.__CR0,0,970,600_PT0_SX970_V1___.png",
  //         ],
  //       },
  //     ],
  //     productDisc: {
  //       "Product description": `This small statue is lightweight so that you can place it almost anywhere in your home or office, which is convenient to carry with and send as a gift. Any adult or child would love this sculpture, an excellent addition to any home`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "23",
  //     name: "Global Grabbers Polyresin Sitting Buddha Idol Statue Showpiece for Home Decor Decoration Gift Gifting Items-ORG_BLK-BS2-(00)",
  //     category: "home and decor",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/91FwdCVfcJL._SX679_.jpg",
  //     productDescription: [
  //       "Material: Polyresin0",
  //       "Size (L x W x H): 18.5 cm x 8 cm x 24 cm: Weight : 300 gm",
  //       "Colour: Orange Black",
  //       " Care Instruction: Wipe with soft clean cloth",
  //       " Made In India",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "1,099",
  //         img: [
  //           "719rMKI+IWL._SX679_.jpg",
  //           "61dY96DbbuL._SX679_.jpg",
  //           "714XrzpCoZL._SX679_.jpg",
  //           "714HPxXXeyL._SX679_.jpg",
  //           "81Tjud4X+gL._SX679_.jpg",
  //           "81RHmZd5I7L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Theme: "figures, religion",
  //           Brand: "	Global Grabbers",
  //           Colour: "Orange Black",
  //           Material: "polyresin",
  //           Occasion: "New Year, Diwali, Raksha Bandhan, Anniversary, Wedding And Engagement",
  //           "  Cartoon Character": "Gautam Buddha",
  //           "Product Dimensions": "18.5L x 8W x 24H Centimeters",
  //           "Special Feature":
  //             "Diwali Decoration, Showpiece For Home Decoration, Home Decoration, Home Decor Items, Showpiece For Living Room Decoration",
  //           "Number of Pieces": "1",
  //           " Finish Type": "Painted",
  //           " Item Weight": " 299 Grams",
  //           "Assembly Required": "NO",
  //           " Number of Items": "1",
  //           "  Collection Name": "All",
  //           "Net Quantity": " 1.00 Piece",
  //           Manufacturer: " Global Grabbers, Global Grabbers",
  //           " Item Package Quantity	": "1",
  //           "Batteries Required?": "NO",
  //           "Country of Origin": "India",
  //           " Item model number": "ORG_BLK-BS2",
  //           ASIN: "B07LF3PQYF",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "Global Grabbers, Global Grabbers  Packer	Global Grabbers",
  //           "  Item Weight": "299 g",
  //           "        Item Dimensions LxWxH": "18.5 x 8 x 24 Centimeters",
  //           "  Net Quantity": "	1.00 Piece",
  //           "Included Components": "One Buddha Showpiece",
  //           "Generic Name": "	Buddha Statue",
  //         },
  //       },
  //     ],

  //     productDisc: {
  //       "Product description": `Everyone wants perfect peace of mind that's free from ignorance, greed, hatred and other afflictive states. Buddha has always been a great symbol of peace. So, what could be a better gift or a better option to bring home than the idol of Buddha.`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "24",
  //     name: "Global Grabbers Polyresin Sitting Buddha Idol Statue Showpiece for Home Decor Decoration Gift Gifting Items-ORG_BLK-BS2-(00)",
  //     category: "cookware and dining",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61dYZRx1K4L._SX679_.jpg",
  //     productDescription: [
  //       "material - pure grade aluminum, colour - brown",
  //       " set content: 1 kadhai- 2 litres, 1 fry pan- 220mm, 1 dosa tawa- 280 mm, 1 glass lid",
  //       "the cookware set features a nonstick coating, which allows for lower-fat cooking options-no need for excess butter or oil. Dishwasher Safe : No",
  //       "these versatile cookware are compatible with gas stove & induction cooktop compatible feature makes it more user-friendly.",
  //       "  100% flame proof",
  //       "tempered-glass lids make it easy to monitor the cooking process.",
  //       "the handle is made from heat resistant material that enables ease and convenience while cooking and carrying the cookware",
  //       "it is easy to clean, very stylish and will become an eye-catching piece of cookware to have in your kitchen",
  //       " caution : do not use metal spoon",
  //       "warranty - 1 year, customer care no. - 7400001799",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "1,499",
  //         img: [
  //           "61dYZRx1K4L._SX679_.jpg",
  //           "61+TVs08n0L._SX679_.jpg",
  //           "71-1MpQ6FfL._SX679_.jpg",
  //           "71a3eFpjsBL._SX679_.jpg",
  //           "61eOJ0-pEKL._SX679_.jpg",
  //           "61bnCX0Y36L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Material: "Aluminum",
  //           Colour: "Brown",
  //           Brand: "Cello",
  //           Size: "Medium",
  //           "Is Dishwasher Safe": "No",
  //           "Number of Pieces": "3",
  //           "Included Components	": "1N Kadhai, 1N Fry Pan, 1N Dosa Tawa & 1N Glass Lid",
  //           Manufacturer: "Cello",
  //           "Country of Origin": "India",
  //           "Item model number": "CLO_PRMA_NS_CKWR_BRWN_3PC",
  //           ASIN: "B08L3DXWMY",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "Cello",
  //           Packer: "	Cello",
  //           "Item Weight": "2 kg 700 g",
  //           " Item Dimensions LxWxH": "29 x 29 x 30 Centimeters",
  //           "Net Quantity": "3 count",
  //           " Included Components	": "1N Kadhai, 1N Fry Pan, 1N Dosa Tawa & 1N Glass Lid",
  //           "Generic Name": "Cookware",
  //         },
  //       },
  //     ],

  //     productDisc: {
  //       "Product description": `Prepare healthy meals easily with Cello’s 3 pcs nonstick cookware set. Available in a striking brown color this cookware set will definitely add a charm to you kitchen collection. This nonstick cookware set is made of American heritage original dupont coating. The set consists of dosa tawa, fry pan and kadhai with a tempered glass lid. One can cook and fry varieties of food like dosa, roti, curry, paneer rolls and more on this essential cookware set. Cello nonstick cookware set needs lesser oil making the food you cook in it healthiers and tastier. Its high gauge aluminum adds to its cooking efficiency by evenly distributing heat. This cookware set has a sturdy handle made of bakelite and is compatible with both lpg stoves and induction. The other notable feature is that the lid has an air vent or steam hole that provides security by releasing extra pressure of steam while cooking. Now revolutionize your cooking experience with the Prima 3pc cookware set by Cello.`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "25",
  //     name: "Non Stick COOKWARE for Home Dining",
  //     category: "cookware and dining",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61MVBe-QWWL._SX679_.jpg",
  //     productDescription: [
  //       "Sturdy and long lasting handle",
  //       "Made from virgin aluminium",
  //       "Prevents nutrients in the food",
  //       "Longer life and durable",
  //       "Low gas consumption",
  //       "Oil free cooking",
  //       " Gas compatible only",
  //       "Color: Red, Material: Aluminium",
  //       "Warranty: 1 Year Warranty On Shape Deformnation Through Natural Means",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "829",
  //         img: ["61MVBe-QWWL._SX679_.jpg", "61xLC+jg+fL._SX679_.jpg", "514lZUj9ofL._SX679_.jpg"],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "  Country of Origin	": "India",
  //           "Item model number	": "RB1597",
  //           ASIN: "B09HKM1SQD",
  //         },
  //         additionalInformation: {
  //           "  Included Components": "steel",
  //         },
  //       },
  //     ],

  //     productDisc: {
  //       "Product description": `Introducing orange 2.6 mm platina series deep kadhai with stainless steel lid with superior quality, spoon friendly and long-lasting coating. It is very durable as it is made up of high-grade aluminium with cool touch and heat-resistant strong handle. It will be an ideal addition to your kitchen. Made up of German technology, this product is hassle-free while cooking and easy to clean and store thus proving a perfect match in the kitchen.`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "26",
  //     name: `IndianArtVilla 3.6" X 6.5" Steel Copper Serving Handi with Glass Lid 750 ML - Serving Dishes Chicken Briyani Vegetables Home Hotel Restaurant Tableware Dishware`,
  //     category: "cookware and dining",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/81vJtwqgzSL._SX679_.jpg",
  //     productDescription: [
  //       'Steel Copper Handi with Glass Lid Color: Copper & Silver, Material: Copper & Stainless Steel, Weight: approx 500 gram, Height -3.6", Width/Diameter – 6.5", Capacity - 750 ML',
  //       "FUNCTIONAL & FASHIONABLE - Stainless steel surface preserves the taste and nutritional qualities of foods and is safe for food contact; Copper bottom adds style - Easy to Clean - no re-tinning",
  //       "An Essential Indian Dinnerware to present Indian Foods like Curries, Daal, Biryani & Condiments for Authentic Indian Dining Experience",
  //       "Cleaning Instrucations:- Clean your copperware by hand and avoid dishwasher. Use pitambri powder to clean copper utensils and wipe with soft cotton cloth.",
  //       "Copper products tarnish/oxidize over time, this is natural for copper products. Please follow the care instruction manual for cleaning copper products. Sample copper cleaning powder is provided with every order",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "1,015",
  //         img: [
  //           "81vJtwqgzSL._SX679_.jpg",
  //           "81rdNX9JJ5L._SX679_.jpg",
  //           "815qeP0s2qL._SX679_.jpg",
  //           "81HuUObOIHL._SX679_.jpg",
  //           "81vJtwqgzSL._SX679_.jpg",
  //           "71r8dpD9ieL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "	INDIAN ART VILLA",
  //           "Country of Origin": "India",
  //           "Item model number	": "IAV-SCB-TW-150",
  //           ASIN: "B07CXRSZXS",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "INDIAN ART VILLA",
  //           "Item Weight": "	500 g",
  //           "Item Dimensions LxWxH	": "16.5 x 16.5 x 9.1 Centimeters",
  //           Included: "Components",
  //         },
  //       },
  //     ],

  //     productDisc: {
  //       "Product description": `Relish Indian cuisine in Indian style! This is a set of centerpiece serve-ware for Indian food. Serve Indian dishes to your friends and family in this unique and ethnic looking centerpiece serve ware. With this serving utensil set your Indian style dining experience goes several notches up. The material used is food grade. Hammered Copper is used only on the outside of the utensil and does not come in contact with the food. Only the high quality food grade stainless steel is in contact with the food. Two layers of metal with air cushion ensure that the food stays warm much longer. Serving dinner in this dinnerware handi would be unforgettable experience. Care Tips a) Clean your copperware by hand and avoid dishwasher as the detergent can cause oxidation leading to permanent damage. b) Use a solution of equal quantities vinegar or lemon juice and salt diluted with some water at such times but don't use it regularly. c) Avoid scratchy cleaners like steel wool. d) A simple, soft cleaning liquid on soap base, hot water and a soft washing cloth is best for daily use. e) Use Copper Shining Powder for cleaning the copper utensils. Completely safe and gentle on hands. f) Copper Utensils Tarnish from time to time. This is Normal for an Authentic Copper utensils. ; Many Customers Love the Vintage/Antique Tarnished Look, but Care Instructions for Minimizing and Removing Tarnish are Provided with Order`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "27",
  //     name: `Reach Air Bike Exercise Cycle With Cushioned Back Support Seat and Side Handles For Support`,
  //     category: "sports and fitness",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51BzD1K-VOL._SX679_.jpg",
  //     productDescription: [
  //       "BELT DRIVE RESISTANCE - Belt requires limited maintenance, improves pedaling technique, permits less momentum-based recovery, makes the rider work efficiently and operates quietly",
  //       "USER COMFORT – The Reach Exercise Fitness cycle is ergonomically designed for comfortable seating with large adjustable seat cushion. Its handlebars are packed with high-density foam which will prevent you from experiencing stiffness of the back, strains, and muscle aches and sit upright as you work out. The strapped pedals are designed to adjust to your comfort with minimum fuss.",
  //       "MULTI LEVEL BELT RESISTANCE: Since the resistance of the cycle is of a non-contact type, your cycling experience will be smooth and completely silent, making it perfect for home workouts.",
  //       "CUSTOMER SUPPORT & WARRANTY: We at Reach Provide Customer Service Support across 18000+ Pincodes. We provide the best post-sales service for Installation, Repair, and Maintenance throughout the year. Trusted by over 2 Lakh+ Customers. 1 year of Motor & Parts Warranty & Lifetime Frame Warranty. We are quite sure that you will be super-impressed with the DURABILITY and PORTABILITY of our Home Gym Exercise Equipment.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "6,195",
  //         img: [
  //           "51BzD1K-VOL._SX679_.jpg",
  //           "71VR4y7XOzL._SX679_.jpg",
  //           "51qWEA940WL.jpg",
  //           "41yZSJ7fM5L.jpg",
  //           "414Ol1DOF7L.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Department: "	Unisex-Adult",
  //           Manufacturer: "Reach Fitness",
  //           "  Country of Origin": "India",
  //           " Item model number	": "AB with Back Handles",
  //           ASIN: "B08Y7NMV6C",
  //         },
  //         additionalInformation: {
  //           Manufacturer:
  //             "Reach Fitness, HS Fitness Pvt Ltd, 216 SS Plaza, Sector 47, Gurgaon Haryana 122001, +918956212345",
  //           Packer: "	HS Fitness Pvt Ltd, 216 SS Plaza, Sector 47, Gurgaon Haryana 122001 +918956212345",
  //           Importer: "HS Fitness Pvt Ltd, 216 SS Plaza, Sector 47, Gurgaon Haryana 122001, +918956212345",
  //           "Item Weight	": "18 kg",
  //           " Item Dimensions LxWxH": "21 x 62 x 92 Centimeters",
  //           "  Net Quantity": "1 Count",
  //           "Included Components": "User Manual, Warranty Card, Fitting Tools, Exercise Bike",
  //           " Generic Name": "Exercise Bike",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a4abc052-0687-46b1-a0d7-bfa739b6ee99.__CR0,0,970,600_PT0_SX970_V1___.jpeg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d20a73d-3dc1-4f54-b3b3-2425b0e3a699.__CR0,0,970,600_PT0_SX970_V1___.jpeg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f1a7b654-68ce-4360-a92f-c4b4012ac176.__CR0,0,970,600_PT0_SX970_V1___.jpeg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cf14337e-fea8-4001-ad81-9ac87e0b3015.__CR0,0,970,600_PT0_SX970_V1___.jpeg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d6367041-77d4-4735-85f7-85a851d64af4.__CR270,0,825,1100_PT0_SX300_V1___.jpeg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "28",
  //     name: `5 O' CLOCK SPORTS Gym Bag Combo Set for Men's Fitness`,
  //     category: "sports and fitness",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71jFeeH+k6L._SX679_.jpg",
  //     productDescription: [
  //       "Ideal Gym Bag Combo Set Enclosed With Body Building Polyster Duffle Gym Bag, Shaker Cup and Leather Gym Gloves With Wrist Support",
  //       "Gym Bag: Premium and Stylish Body Building Polyester Duffle Gym Bag of 30 Ltr Capacity In Blue Color",
  //       "Adjustable Wrap Better Grip and Wrist Support Trending Lycra Gym Gloves",
  //       "A Unique Combination of All Exercise Accessories All Product Made With High Quality Material (Color May Vary - Subject to Availability)",
  //       "One Gym Bag + One Pair of Gym Gloves with Wrist Support + 1 Shaker Bottle WIth Mesh Color May Vary Subject to Availability",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "839",
  //         img: [
  //           "71jFeeH+k6L._SX679_.jpg",
  //           "61oj1sGLJuS._SX679_.jpg",
  //           "61lbN8v5FNL._SX679_.jpg",
  //           "61KtTcvBCQL._SX679_.jpg",
  //           "61i8E85Vd8L._SX679_.jpg",
  //           "615YyUFNa5L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       " Product Dimensions": "47 x 21 x 21 cm; 450 Grams",
  //       "Date First Available": "27 March 2019",
  //       Manufacturer: `5 O' CLOCK SPORTS`,
  //       ASIN: "B07Q2SH814",
  //       "Item part number": "PL-1662",
  //       "Country of Origin ": "India",
  //       Department: "Men",
  //       Packer: `5 O'CLOCK SPORTS`,
  //       "Item Weight": " 450 g",
  //       "Item Dimensions LxWxH ": " 47 x 21 x 21 Centimeters",
  //       "Generic Name": "Exercise & Fitness",
  //     },
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/084c46da-e00e-4a25-b054-77cce89e257a.__CR0,0,600,180_PT0_SX600_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/87798eb1-bc95-4065-a1d4-4f396f889013.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5681bdc9-3c2a-4f21-b532-a3b9748f6540.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/149175a0-3136-42ef-9525-d7fe14ff1ab8.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4cb028cc-8cdb-43ee-af4f-d597a639e481.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c42eed60-33b3-4d0b-a048-b709e44665d8.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "29",
  //     name: `SIMRAN SPORTS Mugdar, Indian Mugdar (Pack of 2), Indian Club, Fitness Weight for Wrestlers (9KG Set of 2)`,
  //     category: "sports and fitness",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/41p5it63VcL._SX300_SY300_QL70_FMwebp_.jpg",
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "3,549",
  //         img: [
  //           "41p5it63VcL._SX300_SY300_QL70_FMwebp_.jpg",
  //           "81KBt6YokbL._SX679_.jpg",
  //           "81NdzK4T6vL._SX679_.jpg",
  //           "81KBt6YokbL._SX679_.jpg",
  //           "81jIx3GhmjL._SX679_.jpg",
  //           "1Su2hyFNPL._SX679_.jpg",
  //           "61s6eAQh1sL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "Simran Sports",
  //           "  Country of Origin": "India",
  //           "Item part number": "SET2M",
  //           ASIN: "B08PKPNBC2",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "Simran Sports, Jalandhar",
  //           "Item Weight": "	18 kg",
  //           "Included Components":
  //             "SIMRAN SPORTS Mugdar , Indian Mugdar ( Pack of 2 ) , Indian Club , Fitness Weight For Wrestlers",
  //           "Generic Name	": "Weights",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fbbe507f-75e3-404f-be33-1da9ab09fe3c.__CR0,40,2812,1739_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0b470b3-1602-4014-8a7f-9e760839cd59.__CR0,0,1940,1200_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "30",
  //     name: `Godrej Security Solutions Forte Pro 15 Litres Digital Electronic Safe Locker for Home & Office with Motorized Locking Mechanism (Light Grey)`,
  //     category: "home improvment",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/318QDo3bjzL._SY300_SX300_QL70_FMwebp_.jpg",
  //     productDescription: [
  //       "Warranty - 1 Year; AutoLock Function- After 4 consecutive incorrect passcode entries the safe will auto freeze  preventing a possible threat",
  //       "Override Key - Helps to manually unlock the safe in emergencies such as drained batteries or forgotten passwords",
  //       "USB Charging - Provides external power supply to the locker in case the batteries are drained completely, and the key is lost",
  //       "Applications - Perfect to use at home and in-office to secure or safeguard your precious valuables, ideal birthday gift, or anniversary gift for your loved ones Package Inclusions - 1 Safe, 4 Grouting/Anchoring fasteners, 1 Mechanical override Key, 1 User Manual, 1 Warranty Card",
  //       "Material Type: Alloy Steel",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "10,900",
  //         img: [
  //           "318QDo3bjzL._SY300_SX300_QL70_FMwebp_.jpg",
  //           "71RLTbpEwPL._SX679_.jpg",
  //           "71R7z8XgX6L._SX679_.jpg",
  //           "71cYDyXK7LL._SX679_.jpg",
  //           "71BkR-7OevL._SX679_.jpg",
  //           "71Ia6txS6DL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "Godrej & Boyce Mfg. Co Ltd",
  //           "Country of Origin": "India",
  //           "Item model number": "Forte Pro Digital",
  //           "  Product Dimensions": "40 x 31.5 x 30.5 cm; 9.2 Kilograms",
  //           ASIN: "B07TFD2THQ",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "	Godrej & Boyce Mfg. Co Ltd, 18002099955",
  //           " Item Weight	": "9 kg 200 g",
  //           "Item Dimensions LxWxH	": "40 x 31.5 x 30.5 Centimeters",
  //           "  Included Components":
  //             "1 Safe, 4 Grouting/Anchoring fasteners, 1 Mechanical override Key, 1 User Manual, 1 Warranty Card",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/64107d7a-6f47-4bdb-8fb2-403df9934641.__CR0,15,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/af79b2da-4e03-4db5-b440-d13a7d544677.__CR0,15,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/9adadc88-6f02-4e4c-9974-457eaf8767b1.__CR0,15,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/70e67b7f-ff4d-43f0-bce2-59f2f8b1113c.__CR0,15,970,300_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/b61bc031-9333-4abc-8288-d29154a9be40.__CR0,15,970,300_PT0_SX970_V1___.png",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "31",
  //     name: `COSTAR Wireless Door Bell Kits Chime for Home Office with LED Light 300 Meter 1000 Feet Operating Range 32 Ringtones 5 Levels Volume, 1 Receiver and 1 Push Button IP44 Waterproof (Pebble T300-M508)`,
  //     category: "home improvment",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/31zkAIrSuxL._SY300_SX300_.jpg",
  //     productDescription: [
  //       "[ 1 Year Warranty ] The unique shape design highlights the taste of the house owner. The costar doorbell is more durable by adopting high quality fuse",
  //       "[ Ultra Long Operating Range ] Costar M508 wireless doorbell operating range is 300m / 1000ft in open areas. You can install it in any corner in your space",
  //       "[ 32 Ringtones Available& 5 Volume Mode & Amazing LED ] Find your favorite Ringtones among 32 Chimes. 5 levels of volume for your space. Flashing LED-Light makes it easier for you to notice the coming visitorsss",
  //       "[ Suitable for Variable Environment ] The working temperature is from -20° to 60° （-4°F to 140°F）. Multiple Ringtones and LED light make it sutable for home office store school hospital and other spaces",
  //       "[ Easy to Install ] We had paired each door bell and receiver before they were sold. Just install and use them easily",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "949",
  //         img: [
  //           "31zkAIrSuxL._SY300_SX300_.jpg",
  //           "71OWdILyA1L._SX679_.jpg",
  //           "71IsFNnLMYL._SX679_.jpg",
  //           "71iiFMV0ElL._SX679_.jpg",
  //           "71FfPFMdOWL._SX679_.jpg",
  //           "71Qwmdu6yVL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "Pacific Cyber Technology Pvt Ltd",
  //           "Country of Origin": "China",
  //           "Item model number": "M508",
  //           "Product Dimensions": "11 x 5.5 x 2.5 cm; 120 Grams",
  //           ASIN: "B09PJ6DNCP",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "Pacific Cyber Technology Pvt Ltd, support@costarcosmos.com | www.costarcosmos.com",
  //           " Item Weight	": "	120 g",
  //           "Item Dimensions LxWxH	": "11 x 5.5 x 2.5 Centimeters",
  //           "  Included Components":
  //             "1 * User Manual, 2 * Double Sided Sticker, 1 * Doorbell Receiver (Indoor Unit), 1 * Wireless Doorbell Push Button (Outdoor Unit)",
  //           "Net Quantity": "1 Set",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/90a50343-ceda-4ce0-8730-0c065f74625e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/68b5165c-93da-480d-9004-122a0e6ef34b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7b068f73-0a1c-416f-a210-788bcfbd89cb.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d12df9e5-9b4f-4362-b347-fa3b63b54fe4.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d12df9e5-9b4f-4362-b347-fa3b63b54fe4.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "32",
  //     name: `Wolpin Kitchen Wall Stickers Wood Wallpaper DIY PVC Shelf Liner, Furniture, Almirah, Table Top, Wardrobe, Kitchen Cupboard Decal, Mahogany Brown`,
  //     category: "home improvment",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/815XJU1dEKL._SX522_.jpg",
  //     productDescription: [
  //       "WOOD FURNITURE SHELF LINER, MULTI-USE: This wood self-adhesive furniture wallpaper is ideal to decorate or upgrade renovate old furniture, fridge/refrigerator, kitchen cabinets, drawers, bed, office table, wardrobe, desk, door, laminate or decorate even the walls of bedroom, living room, hall, study, office, restaurants, glass etc. Can be applied on smooth putty wall and tiles as well.",
  //       "MATERIAL: PVC Vinyl ROLL SIZE: Large Size in cms: 45 x 300 cm [Need 7 Rolls to cover a 10 ft by 10 ft Wall Size.]",
  //       "SAFE & REMOVABLE: This wood decorative stickers wall paper is Removable, Waterproof, Heat resistant, Oil-resistant, Re-positionable and Eco-friendly. Wolpin wood wall decal is made with high quality eco and durable PVC film material. Accent the furniture in your house with this natural wood sicker. Our wallpaper will last for years without fading.",
  //       `JUST PEEL & STICK: Quick & easy to apply! This wall paper can be applied to any smooth, clean and dry Surface. There are gridlines on the back for easy measurement and cutting. It’s easy to remove or re-use and they don't leave sticky messes behind. Works great for crafts, bookcase, stands, nightstand, dresser drawer and other projects.`,
  //       "CUSTOMER NOTE: If you wish to reposition the stickers after they have been applied on the walls; remove the stickers carefully to avoid any damage. The stickers can be reapplied, but its adhesive properties might be reduced. For newly painted walls, it’s suggested to wait for 4 weeks before applying the decal. DO NOT apply on wet walls.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "199",
  //         img: [
  //           "815XJU1dEKL._SX522_.jpg",
  //           "71hTR5LpdOL._SX522_.jpg",
  //           "71gpWTAIijL._SX522_.jpg",
  //           "71eiYwmx9oL._SX522_.jpg",
  //           "71eiYwmx9oL._SX522_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Material: "Polyvinyl Chloride",
  //           Colour: "	Mahogany Brown.",
  //           Brand: "wolpin",
  //           Style: "Modern",
  //           "Item Weight	": "390 Grams",
  //           "Product Dimensions": "3L x 0.45W Meters",
  //           "Pattern match	": "Straight Match",
  //           Theme: "Wooden",
  //           "Is Stain Resistant": "NO",
  //           Manufacturer: "WOLTOP INDIA PRIVATE LIMITED",
  //           "Country of Origin	": "India",
  //           "Item model number": "Z96_5m",
  //           ASIN: "B08SJBY2L2",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "	WOLTOP INDIA PRIVATE LIMITED, WOLTOP INDIA PRIVATE LIMITED",
  //           " Item Weight	": "390 g",
  //           Packer: "WOLTOP INDIA PRIVATE LIMITED",
  //           "Net Quantity": "1 Count",
  //           "Item Dimensions LxWxH": "	45 x 500 Centimeters",
  //           "Generic Name": "	Sticker Wallpaper",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/sc/5695eca3-82a1-45c9-a3c9-cc36674f85e1.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sc/d3944111-dd3a-43f5-a5c5-3fbe9d2f22cf.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sc/f11fa5c2-bfe8-473f-af59-0f3f6836a2e3.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sc/da8dde42-7910-4aad-9532-9ec2d9db040f.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e69c442d-a38b-4bf5-b2dc-abbe0feed3e9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "Non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "33",
  //     name: `Saregama Carvaan Premium (Pop Colour Range) Hindi - Portable Music Player with 5000 Preloaded Songs, FM/BT/AUX (Cobalt Blue)`,
  //     category: "electronics",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71UPLAo0JSL._SX679_.jpg",
  //     productDescription: [
  //       "5000 songs categorised into 130+ dedicated stations | Bluetooth, USB/Aux In support | FM/AM radio",
  //       "App support - Download the Saregama Carvaan App from App store or playstore",
  //       "Rechargeable battery; approximately 5-hour playtime when battery is fully charged. | 3.5 mm audio jack for connecting external speakers/ headphones",
  //       "Available with remote | Android device compatible charger",
  //       "Dimensions : (W) 28.9 cm x (H) 22.6 cm x (D) 8.4 cm; Weight : 1.3 kgs | 1 year Doorstep after-sales service",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "7,790",
  //         img: [
  //           "71UPLAo0JSL._SX679_.jpg",
  //           "71mY-LobYcL._SX679_.jpg",
  //           "61njwvjANIL._SX679_.jpg",
  //           "71WfVKZnEQL._SX679_.jpg",
  //           "61M2w89PeML._SX679_.jpg",
  //           "61qNq7hs8IL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Brand: "Carvaan",
  //           Manufacturer: "Kenuo Digital Technology Co., Ltd",
  //           Model: "SC230",
  //           " Model Name":
  //             "Saregama Carvaan Premium (Pop Colour Range) Hindi - Portable Music Player with 5000 Preloaded Songs, FM/BT/AUX (Cobalt Blue)",
  //           "Product Dimensions": "8.4 x 28.9 x 22.6 cm; 1.5 Kilograms",
  //           Batteries: "1 Lithium Ion batteries required. (included)",
  //           "Item model number": "SC230",
  //           "Hardware Interface	": "USB, 3.5mm Audio",
  //           "Tuner Technology": "FM",
  //           "Mounting Hardware": "User Manual, Power Adapter, FM Antenna, Remote Control, Carvaan Unit",
  //           "Speakers Maximum Output Power	": "10 Watts",
  //           "Power Source	": "Battery Powered",
  //           "Batteries Included": "Yes",
  //           "Batteries Required": "Yes",
  //           "Battery Cell Composition": "Lithium Ion",
  //           "GSM frequencies": "108 MHz",
  //           "Connector Type": "AUX",
  //           "Radio Bands Supported": "AM/FM",
  //           Material: "ABS Plastic",
  //           " Includes Rechargable Battery": "Yes",
  //           "Remote Control Included?": "Yes",
  //           "Country of Origin	": "China",
  //           "Item Weight	": "1 kg 500 g",
  //         },
  //         additionalInformation: {
  //           ASIN: "B0B45P7D9V",
  //           "Net Quantity": "	1.00 count",
  //           "Item Dimensions LxWxH": "8.4 x 28.9 x 22.6 Centimeters",
  //           "Generic Name": "Music Player",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/17458d63-77ee-4bd1-9105-9bbd080c1f43.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/448ab866-a4f4-47d0-9a6e-1eea69517b07.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3d1c5bd1-6368-4b88-81a3-68b875d524dd.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f3b398f-2456-4373-85a8-fe1541cd8806.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/94e945ca-ef7b-42db-b70e-972470d3833a.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f1bc4f44-9096-497f-a508-45da5536b0d2.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "34",
  //     name: `Shure MV7 USB Podcast Microphone for Podcasting, Recording, Live Streaming & Gaming, Built-In Headphone Output, All Metal USB/XLR Dynamic Mic, Voice-Isolating Technology, TeamSpeak Certified - Black`,
  //     category: "electronics",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/81ZHXEuhgIL._SX679_.jpg",
  //     productDescription: [
  //       "Convenient Plug-and-Play Operation",
  //       "Durable, Versatile Design",
  //       "  Flexible Sound Control with the ShurePlus MOTIV Desktop Application",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "22,874",
  //         img: [
  //           "81ZHXEuhgIL._SX679_.jpg",
  //           "71Fh3YLVURL._SX679_.jpg",
  //           "71TGaURw9yL._SX679_.jpg",
  //           "51TiHIMhknL._SX679_.jpg",
  //           "61s4TBmQ-3L._SX679_.jpg",
  //           "61s4TBmQ-3L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Product Dimensions": "10.92 x 31.24 x 12.7 cm; 1.05 Kilograms",
  //           Batteries: "1 Lithium Ion batteries required",
  //           "Item model number": "MV7-K",
  //           Colour: "Black",
  //           "Compatible Devices": "Headphone",
  //           Connector: "USB, XLR Connector",
  //           Material: "	Metal",
  //           "Power Source": "Corded Electric",
  //           "Item Weight": "1 kg 50 g",
  //           Manufacturer: "Shure Incorporated",
  //           "Country of Origin": "China",
  //         },
  //         additionalInformation: {
  //           ASIN: "B08G7RG9ML",
  //           Manufacturer: "	Shure Incorporated, Shure Inc.",
  //           "Net Quantity": "	1.00 count",
  //           Packer: "	Shure Inc.",
  //           Importer: "Sun Infonet Pvt. Ltd.",
  //           "Item Dimensions LxWxH": "10.9 x 31.2 x 12.7 Centimeters",
  //           "Generic Name": "Microphone",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/4176c049-1f24-41e0-ba4c-57178dc10e65.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/1ce856da-1f42-49db-b9f3-12615194d4f6.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "35",
  //     name: `TRENDY Cameo 4 Step Heavy Duty Foldable Metal Step Ladder with Anti-Skid Shoes and Extra Strong Wide Steps (Yellow and Black)`,
  //     category: "home and kitchen",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51gOM0rpvoS._SX679_.jpg",
  //     productDescription: [
  //       "BUILT FOR HEAVY USAGE - Strong built, elegant design and usage of high quality material ensures that this stairs for home can easily hold weight upto 150 kg without fumbling, that makes this ladder usable by all kinds of people without any fear of falling",
  //       "BUILT FOR HEAVY USAGE - Strong built, elegant design and usage of high quality material ensures that this stairs for home can easily hold weight upto 150 kg without fumbling, that makes this ladder usable by all kinds of people without any fear of falling",
  //       "ANTI SKID SHOES - This Step Ladder For Home Comes Equipped With Anti Skid Shoes Which Prevents it From Fumbling or Sliding When In Use.",
  //       "VIBRANT COLOR - This Ladder Truly Stands Out From Other Stepladders In The Market, All Thanks To its Vibrant Colors And Design.",
  //       "WIDE STEPS - This Foldable 4 Step Ladder Has Wide Steps For Climbing On It. These Steps Ensure You a Smooth Climb And Gives You Confidence To Use These Stairs Even Without Anyone Holding It.",
  //       "LOAD CAPACITY - Upto 150 kgs",
  //       "DIMENSIONS - 49 x 81 x 138 (CM) | 19 x 32 x 54 (IN)",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "22,874",
  //         img: [
  //           "51gOM0rpvoS._SX679_.jpg",
  //           "61jmjspz4lS._SX679_.jpg",
  //           "61GM2j-onFS._SX679_.jpg",
  //           "611iFInhZ9S._SX679_.jpg",
  //           "61h82l+Ir4S._SX679_.jpg",
  //           "61Koxjq8dPS._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Material: "Metal",
  //           Brand: "TRENDY",
  //           "  Product Dimensions": "47W x 133H Centimeters",
  //           " Item Weight	": "7.1 Kilograms",
  //           " Load Capacity	": "150 Kilograms",
  //           "Maximum Height": "138 Centimetres",
  //           "Country of Origin": "India",
  //           "Item model number": "4 Step Ladder Cameo",
  //           ASIN: "B07Y6M82QG",
  //         },
  //         additionalInformation: {
  //           "Item Weight": "	7 kg 100 g",
  //           "  Item Dimensions LxWxH": "47 x 12.7 x 133 Centimeters",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/sc/a4d7d049-8535-4daa-b8f5-195510f51e6e.__CR0,0,2500,750_PT0_SX600_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/sc/43907aff-b40b-4947-8320-b4ea91155730.__CR0,0,4042,2500_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "36",
  //     name: `GARBNOIRE Stainless Steel Towel Ring, Napkin Ring, Towel Holder, Towel Hanger for Bathroom, Kitchen, Washbasin, Homes, Hotels- Chrome Finish (Pack of 1)`,
  //     category: "home and kitchen",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51guQlAsEGL._SX679_.jpg",
  //     productDescription: [
  //       "To make a bathroom all you need is a tap, shower and four walls, but to make a perfect bathroom for your rejuvenating needs you need to have a lot more than that.",
  //       "Presenting garbnoire rectangle Squar Napking Ring, an innovative solution for the unused edges.",
  //       "Here’s what makes it a desirable detail in your bathroom organising journey:",
  //       "PREMIUM MATERIAL : This Towel Hanger is made up of High Quality 202 Grade Stainless Steel, which is sturdy and durable.",
  //       "BRUSHED NICKEL FINISH : The towel ring hanger is available in a warm brushed nickel finish that resists fingerprints and water spots to keep your home looking cleaner.",
  //       "PACKAGE INCLUDED : A unit of Towel Ring with Mounting Accessories. Size : 20 x 10.2 x 4.5 (L X B X H) cm.",
  //       "ELEGANT APPEARANCE : Concealed Screw Mounting with Subtle and Relaxed Design, Making your bathroom simple and Low-key.",
  //       "VARIOUS APPLICATIONS : According to your need, this lavatory towel holder can be hang above a toilet, on a door, in a closet or along a wall.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "22,874",
  //         img: ["51guQlAsEGL._SX679_.jpg", "71U21MJ55SL._SY879_.jpg"],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Material: "	garbnoire",
  //           "Country of Origin": "India",
  //           "Item model number": "Rectangle Square Ring",
  //           ASIN: "B07P6ZZT4H",
  //         },
  //         additionalInformation: {
  //           Manufacturer: "	garbnoire, Kathwada GIDC, Ahmedabad 382430, Customer Support: +91 91577-35370",
  //           Packer: "FORTUNE, Kathwada GIDC, Ahmedabad 382430, Customer Support: +91 91577-35370",
  //           "Item Dimensions LxWxH": "20 x 10.5 x 4.5 Centimeters",
  //           "Net Quantity": "1.00 count",
  //           "Included Components": "Fitting Hardware",
  //           "Generic Name": "Rectangle Napkin Ring",
  //           "Item Weight": "	7 kg 100 g",
  //           "  Item Dimensions LxWxH": "47 x 12.7 x 133 Centimeters",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9bcb5c00-cf7c-42eb-ad18-ca6d59245930.__CR0,0,4043,2501_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/994e0d8c-4899-4783-9ead-f79b9449cf73.__CR0,0,4043,2501_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/da977e7c-fb31-48ac-979b-38ae3dedd9df.__CR0,0,4043,2501_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/da977e7c-fb31-48ac-979b-38ae3dedd9df.__CR0,0,4043,2501_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a3e48776-99a7-49dc-ac4e-86d29c31c222.__CR0,0,4043,2501_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5986ce08-bb3c-4a7f-acaa-b5525383e9d1.__CR0,0,4043,2501_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "37",
  //     name: `The Better Home Borosilicate Glass Jar for Kitchen Storage (300ml) | Kitchen Container Set and Storage Box , Glass Containers with Lid | Air Tight Containers for Kitchen Storage (Pack of 2)`,
  //     category: "home and kitchen",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51xcTo3AxYL._SX679_.jpg",
  //     productDescription: [
  //       "GLASS CONTAINERS WITH LID | Our elegant and chic kitchen container set is thoughtfully designed and well crafted glass container for kitchen storage made with borosilicate glass and a bamboo wooden lid to give it the perfect finish and look. The air tight containers for kitchen storage are the perfect kitchen accessories items to solve all your kitchen storage needs",
  //       "AIRTIGHT CONTAINERS FOR KITCHEN STORAGE | Each of our glass storage containers is a small glass jar with a lid made of sustainable bamboo wood to make your kitchen storage solutions look and feel even better. These glass jars are kitchen tools made to change the way you approach your kitchen storage.",
  //       "KITCHEN STORAGE FOR ALL ITEMS | This kitchen container set with glass containers for kitchen are perfect to be used for all kitchen items like cereal, coffee, masala, tea and much more. The masala container for kitchen is a chic kitchen set for home that serve multiple purpose and can be used as the perfect kitchen tool for your storage",
  //       "BOROSILICATE GLASS KITCHEN CONTAINERS SET FOR HOME | These glass jars for kitchen storage and made with borosilicate glass to make the glass container set with lid more sturdy and durable. The small glass jar with lid is a set of glass kitchen containers with lid and designed to be the perfect kitchen set for home.",
  //       "CHIC KITCHEN TOOLS SET AND KITCHEN ITEMS | The Better Home kitchen containers set are the perfect kitchen accessories items for all kitchen storage. The glass jars are the perfect addition to your collection. Our small glass jar with lid with serve all your needs and and help you store everything you need while keeping it fresh.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "399",
  //         img: [
  //           "51xcTo3AxYL._SX679_.jpg",
  //           "71wvz5q2aBL._SX679_.jpg",
  //           "61Iyn49BIrL._SX679_.jpg",
  //           "612YNyBjhpL._SX679_.jpg",
  //           "61s-+iv0-RL._SX679_.jpg",
  //           "51kyB+W4fxL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           "Country of Origin": "India",
  //           "Item model number": "300ml",
  //           "Package Dimensions	": "29.1 x 26.1 x 10.1 cm; 960 Grams",
  //           ASIN: "B0BCHXM48S",
  //         },
  //         additionalInformation: {
  //           Item: "Weight	960 g",
  //           "Included Components": "Bag",
  //         },
  //       },
  //     ],

  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6c3891ca-218a-4337-a2fe-1710652c9e67.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/37c49e5a-3fb6-460d-a73f-2dc600d0690e.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ec682c1e-e734-4722-a426-6b58385bd60c.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1334f661-f421-40ab-9b6d-b0b5d27b39ac.__CR0,0,970,300_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "38",
  //     name: "Kaya Clinic Daily Pore Minimising Toner | Alcohol Free Face Toner With Witch Hazel & Niacinamide | Reduces Pores & Dullness | Tightens Skin | Even Skin Tone | All Skin Types | 200ml",
  //     category: "home and kitchen",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/41ZAwmE0C6L._SY879_.jpg",
  //     productDescription: [
  //       "Gently removes impurities and leaves the skin feeling smooth, refreshed and comfortable",
  //       "Niacinamide, a known whitening agent, helps tackle uneven skin-tone",
  //       "The toner is developed to provide benefits beyond its traditional function. It drastically reduces the size of pores and subsidizes it providing less pore visibility of the face",
  //       "The alcohol-free formula ensures no irritation or burning sensation on your delicate face. It gently removes residual dirt leaving behind a calming sensation",
  //       "The toner can be used before you apply your moisturizer for a non-sticky, refreshed and glowing look",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "142",
  //         img: [
  //           "41ZAwmE0C6L._SY879_.jpg",
  //           "41XJCAa7XFL._SY879_.jpg",
  //           "612-PEziflL._SX679_.jpg",
  //           "51B57WVuStL._SX679_.jpg",
  //           "51Zdh+tSi3L._SX679_.jpg",
  //           "61cEdOAe-TL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/12d230e9-ea2c-4de4-80e6-5c5d8aab7ac2.__CR0,0,2910,900_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media/vc/e2032e9f-90c3-4b54-b769-1cf9eab5d690.__CR0,0,2910,1800_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       "Package Dimensions ": " 4.9 x 4.9 x 15.2 cm; 230 Grams",
  //       "Date First Available": " 4 November 2017",
  //       ASIN: "B01LWPEJEP",
  //       "Item modal number": "710142",
  //       "Country of Origin": "India",
  //       Manufacturer:
  //         " MAXIMA SOLUTIONS, MAXIMA SOLUTIONS PLOT NO. 56, SECTOR - IIDC,IIE, SIDCUL PANTNAGAR, UDHAM SINGH NAGAR, UTTARAKHAND 263153, India",
  //       packer:
  //         "MAXIMA SOLUTIONS PLOT NO. 56, SECTOR - IIDC,IIE, SIDCUL PANTNAGAR, UDHAM SINGH NAGAR, UTTARAKHAND 263153, India",
  //       "Item Weight": " 230 g",
  //       "Net Quantity ": " 267.0 gram",
  //       "Included Components ": " Toner",
  //     },
  //     importantInformation: {
  //       "Ingredients:":
  //         "Developed with Witch Hazel and Cucumber extract , Cucumber extracts ensure that that skin feels refreshed and comfortable, Niacinamide, a known whitening agent, helps tackle uneven skin-tone",
  //       "Indications:": "Dispense 3 to 4 pumps on a cotton pad. Dab gently over your face and neck post cleansing.",
  //     },
  //     productDisc: {
  //       "Product description":
  //         "Applying make-up is fun and inspirational but we often ignore its repercussions on our skin. After the harsh effects of make-up remover, face wash and other products, Kaya Daily Pore Minimizing Toner provides a much-needed soothing sensation. The cooling effects of botanicals like cucumber render skin feeling refreshed and comfortable.",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "39",
  //     name: "Tikitoro Kids Daily Essentials Combo, Vegan Kids Body Wash (300 ml) & Conditioning Shampoo (300 ml)",
  //     category: "daily essentials",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51RScF0UFXL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
  //     productDescription: [
  //       "Nourishing Body Wash cleanses, moisturizes and nourishes skin. Conditioning Shampoo gently cleanses and strengthens hair.",
  //       "Key Ingredients in Nourishing Body Wash: Moringa, Indian pennywort, Calendula, Chamomile, Aloe vera, Red algae, Almond, Pomegranate.",
  //       "Key Ingredients in Conditioning Shampoo: Moringa, Indian pennywort, Aloe vera, Rice protein, Fenugreek, Greater burdock, Provitamin B5, Red algae, Kokum butter, Sacred lotus, Almond.",
  //       "No Parabens. No Sulphates. No Silicones. No harsh chemicals. No Petroleum derivatives. Gluten-free. Certified Vegan and Cruelty free. IFRA certified and allergen-free fragrances.",
  //       "Certified by Safe Cosmetics Australia (SCA), certified toxic-free, allergy certified, hypoallergenic, dermatologically tested, pH balanced, FDA Approved.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "990",
  //         img: [
  //           "51RScF0UFXL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
  //           "51f7DmoYiLL._SX679_.jpg",
  //           "51PXswbh8nL._SX679_.jpg",
  //           "71nsIKVQyaL._SX679_.jpg",
  //           "61tSjBB3cjL._SX679_.jpg",
  //           "51o5nUZgv1L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0797f6ca-03ca-4a7d-8dc0-b9539c643b05.__CR0,0,970,600_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/637a54ac-47b9-4455-84e7-624b0c9abc32.__CR0,0,970,600_PT0_SX970_V1___.png",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fd367e55-843a-43b4-8bb0-ba9159d5005a.__CR0,0,970,600_PT0_SX970_V1___.png",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       "Package Dimensions ": " 7.5 x 4.2 x 19.5 cm; 772 Grams",
  //       "Date First Available": " 7 December 2021 ",
  //       ASIN: "B09WMNP6FH",
  //       "Item modal number": "Kids daily Essential Combo",
  //       "Country of Origin": "India",
  //       Manufacturer:
  //         " Harshvin kare products, Harshvin kare products, No. 13, 14, 15 Vaidyanathan St. Palanjur Chembarambakkam (Panchayat) Chennai - 600123",
  //       packer:
  //         "Harshvin kare products, No. 13, 14, 15 Vaidyanathan St. Palanjur Chembarambakkam (Panchayat) Chennai - 600123",
  //       "Item Weight": " 772 g",
  //       "Net Quantity ": " 600.0 gram",
  //       "Generic Name": " Kids Nourishing Shower Body Wash & Kids Conditioning Shampoo",
  //     },
  //     importantInformation: {
  //       "Ingredients:":
  //         "Nourishing Body wash: Moringa, Indian pennywort, Calendula, Chamomile, Aloe vera, Red algae, Almond, Pomegranate. Soothing Body Lotion: Avocado, Cocoa Butter, Kashmiri Saffron. Conditioning Shampoo: Moringa, Rice Protein , Sacred Lotus.",
  //       "Safety Information:":
  //         "For external use only. Avoid contact with eyes. In case of contact, rinse immediately with lots of water.",
  //     },

  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "40",
  //     name: "Source Naturals Daily Essential Enzymes, 240 Capsules",
  //     category: "daily essentials",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/715EXL1WlCL._SY879_.jpg",
  //     productDescription: [
  //       `Health Mall Is Authorized Distributor of Source Naturals, EZ Melts, Now Foods, Jarrow Formulas, Nordic Naturals, Doctor's Best, Healthy Origins, and Deva Nutrition Brand.`,
  //       `“THE PACKING & LABELING MAY VARY FROM TIME TO TIME WITHOUT PRIOR NOTICE”`,
  //       "“THIS PRODUCT ONCE DELIVERED IS NON-RETURNABLE”",
  //       "Dietary Supplement.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "5551",
  //         img: [
  //           "715EXL1WlCL._SY879_.jpg",
  //           "718KiXF13OL._SY879_.jpg",
  //           "71HTd-gBTCL._SY879_.jpg",
  //           "81xK9Wn+5hL._SX522_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Is Discontinued By Manufacturer ": "No",
  //       "Package Dimensions ": " 7.26 x 7.26 x 13.56 cm; 12.75 Grams",
  //       "Date First Available": "5 August 2014 ",
  //       ASIN: "B0009EXOTQ",
  //       "Item modal number": "138731",
  //       "Country of Origin": " USA",
  //       Manufacturer: " Source Naturals",
  //       "Item Dimensions LxWxH ": "7.3 x 7.3 x 13.6 Centimeters",
  //       "Item Weight": "12.8 g",
  //       "Net Quantity ": "  240.00 count",
  //     },
  //     importantInformation: {
  //       "Ingredients:":
  //         "Supplement Facts for Capsule Serving Size: 1 Capsule Amount %DV Essential Enzymes™ Blend Yielding: 500 mg To break down protein: Vegetal Analog of Pancreatin 28,625 HUT Acid-Stable Protease 70 SAP To break down fats: Lipase 375 FIP To break down carbohydrates: alpha-Amylase 630 DU Amyloglucosidase 2 AG To break down fiber: Cellulase 100 CU Hemicellulase 325 HCU To break down milk sugar: Lactase 40 ALU FCC Enzyme Measurement Units:HUT (Hemoglobin Units on a Tyrosine Base), SAP (SpectrophotometricAcid Protease Units), FIP (Federation Internationale Pharmaceutique), DU(Dextrinizing Units), AG (Amyloglucosidase Units), CU (Cellulase Units), HCU(Hemicellulase Units), ALU (Acid Lactase Units). Other Ingredients: gelatin (capsule), calcium sulfate, stearic acid, silica, and magnesium stearate.",
  //       "Safety Information:":
  //         "Store in a cool, dry place. Note: If you are pregnant, may become pregnant, or breastfeeding, consult your health care professional before using this product. Do not use if either tamper-evident seal is broken or missing. Keep out of the reach of children.",
  //       "Directions:":
  //         "1 capsule with water at the beginning of each meal (or open capsules and sprinkle over foods). If the meal is very large or unusually high in fat or protein, a second capsule can be taken. Do not sprinkle on hot food.",
  //       "Legal Disclaimer": `******************* “THIS PRODUCT ONCE DELIVERED IS "NON-RETURNABLE"”. ****************** This product have not been evaluated by the Food and Drug Administration. They are not intended to Diagnose, Treat, Cure, or prevent any disease. While we work to ensure that product information is correct, on occasion manufacturers may alter their ingredient lists. Actual product packaging and materials may contain more and different information than what is shown on website. We recommend that you do not rely solely on the information presented and that you always read labels, warnings, and directions before using or consuming a product. Please see our full disclaimer. http://www.amazon.in/gp/aag/details/ref=aag_m_ss?ie=UTF8&asin=&isAmazonFulfilled=&isCBA=&marketplaceID=A21TJRUUN4KGV&seller=A2T5SQXK3ZOABQ#aag_legalInfo.`,
  //     },
  //     productDisc: {
  //       "Product description": `It's a Dietary Supplement.`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",

  //           "non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "41",
  //     name: "Johnson's Face Care Daily Essentials Refreshing Gel Wash (150ml)",
  //     category: "daily essentials",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51L5RGJ25pL._SX522_.jpg",
  //     productDescription: [
  //       `The products are bringing from USA & UK.We don't sell replicas, counterfeit items, or unauthorized copies. In every respect it's a original product by their original designers.`,
  //       `For normal skin. Dermatologically tested. Suitable for sensitive skin, even around the eyes. Johnson's Daily Essentials Refreshing Gel Wash gently lifts away impurities and removes make-up whilst caring for your skin. With: Soft micro beads Skin loving minerals to restore skin freshness Vitamin C derivative known for its antioxidant properties. Results: Skin is cleansed, feels soft and refreshed.`,
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "590",
  //         img: ["51L5RGJ25pL._SX522_.jpg", "51NhG1AaklL._SX522_.jpg"],
  //       },
  //     ],

  //     productdetails: {
  //       "Is Discontinued By Manufacturer ": "No",
  //       "Package Dimensions ": " 3 x 6 x 14 cm; 175 Grams",
  //       "Date First Available": " 8 July 2017 ",
  //       ASIN: "B00MY5GSOG",
  //       "Item modal number": " 357-0967",
  //       "Country of Origin": " South Africa",
  //       Manufacturer: " Johnson's",
  //       "Item Dimensions LxWxH ": "30 x 60 x 140 Millimeters",
  //       "Item Weight": "175 g",
  //       "Net Quantity ": " 150 millilitre",
  //     },
  //     importantInformation: {
  //       "Safety Information:": "No Warning Applicable",
  //     },
  //     productDisc: {
  //       "Product description": `For normal skin. Dermatologically tested. Suitable for sensitive skin, even around the eyes. Johnson's Daily Essentials Refreshing Gel Wash gently lifts away impurities and removes make-up whilst caring for your skin. With: Soft micro beads Skin loving minerals to restore skin freshness Vitamin C derivative known for its antioxidant properties. Results: Skin is cleansed, feels soft and refreshed.`,
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "non-Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "42",
  //     name: "Alan Jones Clothing Colorblocked Boys Hoodies Sweatshirt",
  //     category: "clothing",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61GV8PTNVsL._UX679_.jpg",
  //     productDescription: [
  //       "Care Instructions: Machine Wash",
  //       "Fit Type: Regular Fit",
  //       "Comfort & Style : Best Fashionably Comfortable that you have wore till now, Fabric is so soft over the skin. High Fashion rich culture look will get just teaming up with washed jeans.",
  //       "Sleeve Type: Full Sleeve; Pockets : Kangaroo pocket which is enough to cover your palm, when you feel cold; Style: Splattering Print Sweatshirt. Perfect for Trending Stylish Look.",
  //       "Fabric: Cotton Blend ; Premium Quality Branded Full Sleeve sweatshirt for Boys; Unique Collection to your wardrobe casuals a hit of effortless cool with this best looking Sweatshirt",
  //       "Ideal for Casual Wear, Sports Activity and Autumn Season.",
  //       "Quality: All garments are subjected to the following tests Fabric dimensional stability test and quality inspection for colours and wash fastness. To maintain the Color please dry in shades. Usual Machine wash or Regular wash is preferable.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "599",
  //         img: [
  //           "61GV8PTNVsL._UX679_.jpg",
  //           "51Yb9HdPmqL._UX679_.jpg",
  //           "71gr9nQRstL._UX679_.jpg",
  //           "81o-Yiufs-L._UX679_.jpg",
  //           "718RfomgdjL._UX679_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Package Dimensions ": "26.6 x 21.3 x 5.1 cm; 300 Grams",
  //       "Date First Available": " 19 September 2022 ",
  //       ASIN: "B0BFRG6GFZ",
  //       "Item part number": " BOY22-SW116-DENIM-6.7YRS",
  //       "Country of Origin": " South Africa",
  //       Manufacturer: " Alan Jones Clothing",
  //       "Item Dimensions LxWxH ": "30 x 60 x 140 Millimeters",
  //       "Item Weight": " 300 g",
  //       Department: "Boys",
  //       "Generic Name ": " Hooded Sweatshirt",
  //     },

  //     productDisc: {
  //       "Product description": `This Winter be a style guru with all new range of ALAN JONES Sweatshirt. You look stylish and elegant, easy style with the New Range of Alan Jones Sweatshirt.`,
  //     },
  //   },
  //   {
  //     localid: "43",
  //     name: "XPIOR Funky Printed Shirt for Men",
  //     category: "clothing",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51FNFmM459L._UY879_.jpg",
  //     productDescription: [
  //       "Care Instructions: Machine Wash",
  //       "Fit Type: Regular Fit",
  //       "Why Xpior? One-stop solution for Men Fashion 100% Original Products.",
  //       "Our partywear outfit collection for men includes a shirt neckline, full-sleeves, and button placket on the front. Custom fitted to a thin fit.",
  //       "Best for Casual & Smart Casual Wear",
  //       "Half Sleeved",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "475",
  //         img: ["51FNFmM459L._UY879_.jpg", "51+El+KczHL._UX569_.jpg", "51l6dN+G8gL._UX569_.jpg"],
  //       },
  //     ],

  //     productdetails: {
  //       "Package Dimensions ": "18 x 14 x 4 cm; 400 Grams",
  //       "Date First Available": "16 August 2022 ",
  //       ASIN: "B0B9YB28T8",
  //       "Item part number": " XP-1011",
  //       "Item Weight": " 300 g",
  //       Department: "Men",
  //     },
  //   },
  //   {
  //     localid: "44",
  //     name: "F GALLERY Men's Printed Fleece Hooded Sweatshirt",
  //     category: "clothing",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51+Nbaa985L._UX569_.jpg",
  //     productDescription: [
  //       "Care Instructions: Machine Wash",
  //       "Fit Type: Regular Fit",
  //       "Material: Spun Fleece. The Fabric is soft and comfortable to keep your skin safe.",
  //       "Full Sleeve Sweatshirt with 2 side pockets to protect your hands from cold as pockets have enough size.",
  //       "This hooded Sweatshirt has casual yet trendy look that makes it perfect for casual wear and for events too.",
  //       'Pattern: Printed ; Fit Type: Rehular Fit ; Closure Type: Drawstring; Please refer to the "size chart" to select your size',
  //       "Department Name: Unisex-Adult; Closure Type: Pull On; Age Range Description: Adult; Pattern Type: Colorblock",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "528",
  //         img: [
  //           "51+Nbaa985L._UX569_.jpg",
  //           "41nQin091fL._UX679_.jpg",
  //           "51DXsNNWLBL._UY741_.jpg",
  //           "71CDp34zmmL._UX679_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Package Dimensions ": "22 x 22 x 3 cm; 400 Grams",
  //       "Date First Available": "16 June 2022 ",
  //       Manufacturer: "Raj Shobha Home Decor",
  //       ASIN: "B0B49HFPPL",
  //       "Item part number": " RS-HOOD-JKT-PRINT-BOSS-BLK-S",
  //       Department: "unisex-adult",
  //       "Item Weight": " 400 g",
  //     },
  //   },
  //   {
  //     localid: "45",
  //     name: "SCOTTeVEST Revolution 2.0 - Warm Utility Jacket - Pickpocket Proof Clothing",
  //     category: "clothing",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/41sq8EYjEJL.jpg",
  //     productDescription: [
  //       `[ 25 Hidden Pockets For Travel ] - Featuring over 20 concealed pockets this low profile men's travel jacket can hold all of your essentials while traveling working hiking fishing golfing or simply running a few errands`,
  //       `[ Stay Connected Within Hands Reach ] - Using hidden conduits our men's security outerwear fits cell phones and most tablets keeping them charged without the tangled wires. Easily store your boarding pass passport and wallet in one of the many easy-to-access compartments`,
  //       "[ Breeze Through Airport Security ] - By storing all your electronics documents gadgets and accessories in this lightweight breathable coat you can simply take off the jacket without having to empty your pockets when going through TSA",
  //       `[ Weight Management System for All Day Comfort ] - Say goodbye to heavy tactical jackets with limited storage or flimsy lopsided money belts. Our lightweight polyester utility jackets are the all-in-one replacement for men's wallets anti-pickpocket bags card cases and money organizers`,
  //       "[ 2 Year Warranty ] - Since 2000 we have designed the best multi-pocket clothing available. We love what we do and we stand behind every product we make. All SCOTTeVEST garments come with a 2-year warranty covering your product from any/all manufacturer defects. This warranty does not cover wear and tear ripped or stained garments or other damage due to user error",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "55,892",
  //         img: ["41sq8EYjEJL.jpg"],
  //       },
  //     ],

  //     productdetails: {
  //       "Is Discontinued By Manufacturer  ": "No",
  //       "Package Dimensions ": "34.29 x 25.4 x 7.62 cm; 952.54 Grams",
  //       "Date First Available": " 21 December 2019 ",
  //       ASIN: "B01E4KAPZQ",
  //       "Item part number": " REV-BLK-M",
  //       Department: "mens",
  //       "Item Weight": " 953 g",
  //     },
  //   },
  //   {
  //     localid: "46",
  //     name: "Women's Air Jordan 1 Mid SE Peach Mocha (DH0210 100) Size",
  //     category: "footware",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51FXWRFd6eL._UX575_.jpg",
  //     productDescription: [
  //       " Closure: Lace-Up",
  //       "Shoe Width: Medium",
  //       "Women to Men Sizing 11W=9.5M",
  //       " Unisex Shoe",
  //       "Color: Black/Brown/Peach",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "55,892",
  //         img: [
  //           "51FXWRFd6eL._UX575_.jpg",
  //           "61pvEOThAIL._UX575_.jpg",
  //           "51Wsu1gi0pL._UX575_.jpg",
  //           "514fv3I0LqL._UX575_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Is Discontinued By Manufacturer  ": "No",
  //       "Package Dimensions ": "30.48 x 20.32 x 10.16 cm; 1.04 Kilograms",
  //       "Date First Available": " 28 May 2021 ",
  //       ASIN: "B08WX1NWSF",
  //       Department: "womens",
  //       "Item Dimensions LxWxH": "30.5 x 20.3 x 10.2 Centimeters",
  //       "Item Weight": " 953 g",
  //     },
  //   },
  //   {
  //     localid: "47",
  //     name: "crocs Unisex-Adult Classic Slide Slipper",
  //     category: "footware",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61REicIJjJL._UX575_.jpg",
  //     productDescription: [
  //       " Shoe Width: Medium",
  //       " Outer Material: Synthetic",
  //       " Color: Bone",
  //       " Closure: Slip-on; Toe Style: Round Toe",
  //       "Height Map: Low-top; Surface Recommendation: Road; Arch Type: Medium Arch",
  //       " Package Contents: Pair of Slide",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "958",
  //         img: [
  //           "61REicIJjJL._UX575_.jpg",
  //           "61KSK2h5wGL._UX575_.jp",
  //           "51jnS0gIRZL._UY675_.jpg",
  //           "61dhZods0xL._UX575_.jpg",
  //           "51JWo3ECFYL._UX575_.jpg",
  //           "51jFowZn0ML._UX575_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Is Discontinued By Manufacturer  ": "No",
  //       "Package Dimensions ": "10 x 2 x 2.7 cm; 500 Grams",
  //       Manufacturer: "Crocs.Inc, Niwot Colorado, USA",
  //       "Date First Available": " 21 September 2021 ",
  //       ASIN: "B09GRW3HBX",
  //       "Item model numbe": "206121",
  //       Department: "unisex-adult",
  //       "Item Dimensions LxWxH": " 10 x 2 x 2.7 Centimeters",
  //       "Item Weight": " 500 g",
  //       "Generic Name": "Slide",
  //     },
  //   },
  //   {
  //     localid: "48",
  //     name: "Saucony Mens Endorphin Shift Road Running Shoe",
  //     category: "footware",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61YH9p56fgL._UY695_.jpg",
  //     productDescription: [
  //       "Sole: Rubber",
  //       "Shoe Width: Medium",
  //       "Closure: Lace-Up",
  //       `Our revolutionary SPEEDROLL Technology propels you forward with the feeling of continuous momentum. Its two core variables are elevated cushioning and a stiff forefoot, which together result in an instantly responsive ride so you can run faster, not harder.`,
  //       "Its thick bed of springy PWRRUN cushioning alone provides a more plush take on SPEEDROLL and makes the EndorphinSHIFT perfect for every distance and any day of the week, especially those when you want your shoes to do a little more work for you.",
  //       "FORMFIT hugs the foot in 3D comfort while an external TPU heel outrigger works in unison with a medial rubber wrap to provide structural support. Along with the EndorphinSHIFT’s thicker footbed, these features deliver a more supportive ride that still has the propulsive feel that makes the Endorphin Collection so special.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "10,342",
  //         img: [
  //           "61YH9p56fgL._UY695_.jpg",
  //           "71EbjfBQFlL._UY695_.jpg",
  //           "61+5RS6akTL._UY695_.jpg",
  //           "61p8TTTR4cL._UY695_.jpg",
  //           "61aQmh2ZMiL._UY695_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Package Dimensions ": "20.32 x 5.08 x 6.35 cm; 286 Grams ",
  //       Manufacturer:
  //         "Saucony, Saucony Address :- 1400 Industries Road Richmond, IN 47374 Contact Num:- (800) 282-6575",
  //       "Date First Available": " 22 October 2020 ",
  //       ASIN: "B08LNZ5QVR",
  //       Packer:
  //         "Brightex Synergizer India Private Limited Address :- Flat No.1B , Green Terrace Condominium , Plot No.410/2, Near Vidyut Nagar, Lane No.5, South Koregaon Park, Pune - 411001. Maharashtra, India. Email ID :- bsi@brightex.net Tele phone num :- 18002668571",
  //       "Item model numbe": "S20577-55",
  //       Importer:
  //         "Brightex Synergizer India Private Limited Address :- Flat No.1B , Green Terrace Condominium , Plot No.410/2, Near Vidyut Nagar, Lane No.5, South Koregaon Park, Pune - 411001. Maharashtra, India. Email ID :- bsi@brightex.net Tele phone num :- 18002668571",
  //       Department: "mens",
  //       "Item Dimensions LxWxH": " 20.3 x 5.1 x 6.3 Centimeters",
  //       "Item Weight": " 286 g",
  //       "Generic Name": "Marathon Running Shoe",
  //       "Net Quantity": "2 N",
  //     },
  //   },
  //   {
  //     localid: "49",
  //     name: "Puma Men's Rebound Street V2 L Leather Sneakers",
  //     category: "footware",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/712SucBQHGL._UY695_.jpg",
  //     productDescription: [
  //       "Sole: Leather",
  //       "Shoe Width: Narrow",
  //       "Fit Type: Regular",
  //       "Closure: Lace-Up",
  //       "Care Instructions: Clean your shoes with leather cleaner or leather shampoo, and use a good quality brush to remove loose surface dirt; if your shoes are wet after cleaning, let them air-dry before your proceed with the next step; dry shoes in room temperature only and never expose them to the sun, heat from the sun will cause the leather to shrink, wrinkle, harden, dry, and crack",
  //       "Warranty Type: Manufacturer",
  //       "Product warranty against manufacturing defects: 90 days",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "7,342",
  //         img: [
  //           "712SucBQHGL._UY695_.jpg",
  //           "81tNz7TS75L._UY695_.jpg",
  //           "71DqiaedaYL._UY695_.jpg",
  //           "71+CJN8s60L._UY695_.jpg",
  //           "71L0pFvb9CL._UY695_.jpg",
  //         ],
  //       },
  //     ],

  //     productdetails: {
  //       "Is Discontinued By Manufacturer": "No",
  //       "Package Dimensions ": "30.2 x 22.8 x 11.4 cm; 9.07 Grams ",
  //       Manufacturer: "Puma",
  //       "Date First Available": "  23 September 2017 ",
  //       ASIN: "B072J6D6VR",
  //       "Item model numbe": "363716",
  //       Importer:
  //         "Brightex Synergizer India Private Limited Address :- Flat No.1B , Green Terrace Condominium , Plot No.410/2, Near Vidyut Nagar, Lane No.5, South Koregaon Park, Pune - 411001. Maharashtra, India. Email ID :- bsi@brightex.net Tele phone num :- 18002668571",
  //       Department: "mens",
  //       "Item Dimensions LxWxH": " 20.3 x 5.1 x 6.3 Centimeters",
  //       "Item Weight": "  9.07 g",
  //       "Net Quantity": "1.00 count",
  //       "Generic Name": "Marathon Running Shoe",
  //     },
  //   },
  //   {
  //     localid: "50",
  //     name: "Costoso Italiano Brown & Tan Leather Formal Monk Strap Shoes for Men",
  //     category: "footware",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61Hccr0CqIL._UY695_.jpg",
  //     productDescription: [
  //       "Sole: Leather",
  //       "Shoe Width: Medium",
  //       "Fit Type: Regular",
  //       "Closure: Buckle",
  //       "Quality Control: Our every shoe is passed through multiple levels of quality control and quality correction so that every part of the shoe is perfect from Sole to Aglet. Each colour is tried and tested be it any weather dry, humid, hot or cold, it can be assured the colour of the shoe remains as vibrant as on the day of finishing.",
  //       "Material: Real Leather, lets air in to cool your feet and stop them from getting the prudent odour, can outlive other shoes made from synthetic materials, our waxed leather is water-resistant, mould to the shape of the feet, easy to maintain and much more eco-friendly.",
  //       "Sole: Costoso Italiano sole allows an incredibly comfortable and stable structure. The thickness of the sole is optimal which allows shock absorption.",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "25,794",
  //         img: ["61Hccr0CqIL._UY695_.jpg", "51fCregyGlL._UY575_.jpg", "51hJwWYi91L._UY575_.jpg"],
  //       },
  //     ],

  //     productdetails: {
  //       "Date First Available": "25 March 2019",
  //       ASIN: "B07XVN3SQ8",
  //       Department: "boys",
  //       "Generic Name": "oxford",
  //     },
  //     productDisc: {
  //       "About The Product:":
  //         "A Simple and minimal design combining with comfort and falling in line with your demand for the latest in fashion. This range is suave, fashionable and comfortable, both outer material and inner material is made of Genuine Leather.",
  //       "About the Brand:":
  //         "COSTOSO ITALIANO is a subject of art taking place globally, redefining a wholly new approach to luxury and comfort. We at COSTOSO ITALIANO, with great love for detail, high-grade leathers and fashionable material, this brand rich in tradition believes above all in a strong price and quality. The expected high level of comfort in wear and pleasant walking experience, perfect last-shapes and innovative features are brought to bear. We welcome you to a result of a unique process the one that will stay with you and impact the flock on many levels.",
  //       "Premium Leather :":
  //         "Our Leather is Handpicked from the Finest Tanneries across India so that Leather of Highest is used providing a better Texture, colour, strength and Durability.",
  //     },
  //   },
  //   {
  //     localid: "51",
  //     name: "Apple Watch Series 7 (GPS + Cellular, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular",
  //     category: "watches",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/41Oi9Yjne+L._SX342_SY445_.jpg",
  //     productDescription: [
  //       "Stay connected to family and friends with calls, texts and email, even when you don’t have your phone;Stream music and podcasts on the go, and leave your phone at home",
  //       "Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use;The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance and swimproof design",
  //       "Measure your blood oxygen with a powerful sensor and app;Take an ECG anytime, anywhere; Get high and low heart rate, and irregular heart rhythm notifications;Stay in the moment with the new Mindfulness app reach your sleep goals with the Sleep app",
  //       "Track new tai chi and pilates workouts, in addition to favourites like running, yoga, swimming and dance;Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone",
  //       "Included Components: Apple Watch 1n, Band 1n, 1m Magnetic Charging Cable; Compatible Devices: Smartphone; Color Name: Midnight Aluminium Case / Midnight",
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "53,900",
  //         img: [
  //           "41Oi9Yjne+L._SX342_SY445_.jpg",
  //           "81uWH0feipL._SX679_.jpg",
  //           "A1UIeoRxAhL._SX679_.jpg",
  //           "71vbBMjZufL._SX679_.jpg",
  //           "81a7YVoy1FL._SX679_.jpg",
  //           "61yRF7bZ-3L._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Manufacturer: "Apple Computer",
  //           "Country of Origin": "China",
  //           "Product Dimensions": "29.6 x 7.6 x 3.6 cm; 420 Grams",
  //           ASIN: "B09HHFR9XM",
  //         },
  //         additionalInformation: {
  //           Manufacturer:
  //             "Apple Computer, Apple Inc, One Apple Park Way, Cupertino, CA 95014, USA. or Apple India Private Limited No.24, 19th floor, Concorde Tower C, UB City, Vittal Mallya Road, Bangalore - 560 001",
  //           Packer:
  //             "	(If applicable) Apple India Private Limited No.24, 19th floor, Concorde Tower C, UB City, Vittal Mallya Road, Bangalore - 560 001",
  //           "Item Weight": "420 g",
  //           " Item Dimensions LxWxH": "	29.6 x 7.6 x 3.6 Centimeters",
  //           "Net Quantity": " 1 Unit",
  //           " Included Components	": "Case, Band, 1m Magnetic Charging Cable",
  //           "Generic Name": "Apple Watch Series 7",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_01._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_01._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_03._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_04._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_05._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_06._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_07._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_08._CB626547304_.jpg",
  //           "https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/7_LTE/Apple_Watch_Series_7_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_09._CB626547304_.jpg",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     localid: "52",
  //     name: "Samsung Galaxy Watch5 Pro Bluetooth (45 mm, Black Titanium, Compatible with Android only",
  //     category: "watches",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/61Su0aM8NoL._SX679_.jpg",
  //     productDescription: [
  //       "Sleep Tracking: Know your sleep with our new and improved sleep tracking technology. Plan your bedtime, detect snoring, understand and track your sleep.",
  //       "Body composition Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
  //       "Optical Heart Rate Sensor: Monitor your heart rate and track your cardiovascular health.",
  //       `Fitness Tracking: Every step counts. Your watch will automatically detect physical activity — counting your steps, calories, and even your routines. (supports over 90 exercises).",'Meet the Sapphire crystal display.Water-resistant, with a harder front display made with premium Sapphire Crystal that's 1.6 times stronger against scratches.`,
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "44,999",
  //         img: [
  //           "61Su0aM8NoL._SX679_.jpg",
  //           "61Sl+xoVHoL._SX679_.jpg",
  //           "61bRLjUL9vL._SX679_.jpg",
  //           "71aj77Jdp9L._SX679_.jpg",
  //           "91Lq7+upj0L._SX679_.jpg",
  //           "61wzxeeYglL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Brand: "Samsung",
  //           Manufacturer:
  //             "Samsung, Samsung Electronics Vietnam.co.,Ltd, Yen Phong Industrial Park I, Yen Trung Commune,Yen Phong District, Bac Ninh Province, Vietnam",
  //           "Country of Origin": "Vietnam",
  //           Model: "SM-R920NZKAINU",
  //           "Product Dimensions": " 4.5 x 4.5 x 1.1 cm; 47 Grams",
  //           "Memory Storage Capacity": "16 GB",
  //           "Operating System": "Wear Os",
  //           "Compatible Devices": "Smartphone",
  //           "Special Features": "Sleep Monitor, Alarm Clock, Activity Tracker, Stress Tracking, Heart Rate Monitor",
  //           "Mounting Hardware": "Galaxy Watch::Watch strap::Wireless charger::Quick start quide",
  //           "Number Of Items": "4",
  //           "Display Type": "AMOLED",
  //           Wattage: "45 Watts",
  //         },
  //         additionalInformation: {
  //           ASIN: "B0B99PCKR1",
  //           Importer:
  //             "Samsung India Electronics Pvt. Ltd. having its Registered Office at: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001",
  //           "Item Dimensions LxWxH": "	45 x 45 x 11 Millimeters",
  //           Packer:
  //             "	Samsung Electronics Vietnam.co.,Ltd, Yen Phong Industrial Park I, Yen Trung Commune,Yen Phong District, Bac Ninh Province, Vietnam",
  //           "Item Weight": "420 g",
  //           " Item Dimensions LxWxH": "	29.6 x 7.6 x 3.6 Centimeters",
  //           "Net Quantity": " 1 Unit",
  //           "Generic Name": "Smart Watch",
  //         },
  //       },
  //     ],
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/06bc0901-ac0d-4157-ab5c-2e5e44c84607.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7ae64a36-80f2-4ab5-a4a7-17efff234c75.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/36a5da9e-fb8b-400f-9d52-ce2e5b5f9e8f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2e9f0e25-314e-4bc0-98f4-20c711d734f3.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f479647b-cd9a-4b9d-af97-bba96cb93de1.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/40f87da4-d292-4e4f-94ed-ab78b7c17cb7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ac4062ed-c299-4855-b671-6976e856ae9a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     localid: "53",
  //     name: "Fossil Neutra Analog Black Dial Men's Watch-FS5525",
  //     category: "watches",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/71yIz3Hxm6L._UX679_.jpg",
  //     productDescription: [
  //       "Dial Color: Black, Case Shape: Round, Dial Glass Material: Mineral",
  //       "Band Color: Black, Band Material: Stainless Steel; Interchangeable Compatibility: 22mm",
  //       "Watch Movement Type: Quartz, Watch Display Type: Analog",
  //       "Case Material: Stainless Steel, Case Diameter: 44 millimeters, Stainless Steel Bezel",
  //       "Water Resistance Depth: 50 meters, Fold-Over Clasp",
  //       "2 years warranty",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "13,495",
  //         img: [
  //           "71yIz3Hxm6L._UX679_.jpg",
  //           "71oIWz+4ZGL._UX522_.jpg",
  //           "71uhLogvFXL._UX522_.jpg",
  //           "81mtKnrZiwL._UX522_.jpg",
  //           "71ppnpgfT0L._UX522_.jpg",
  //           "91Kc1VvmgyL._UX522_.jpg",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       "Package Dimensions ": "17.78 x 12.7 x 17.78 cm; 113 Grams",
  //       "Country of Origin": "China",
  //       Batteries: "1 CR2 batteries required. (included)",
  //       Manufacturer:
  //         "Fossil India Pvt Ltd, Fossil India Pvt Ltd Khata Khatoni No-147/150 Min, Village-Tipra Barotiwala Teh- Nalagarh Distt.-Solan (H.P) - 174103",
  //       "Date First Available": " 11 March 2019 ",
  //       ASIN: "B07MFZ6S2Q",
  //       Packer:
  //         " Fossil India Pvt. Ltd., Khasra No: 2058/1754/18 & 2059/1754/18, Waka Mouza Bhatoli kalan, Baddi 173205 India",
  //       "Item model numbe": "S20577-55",
  //       Importer:
  //         "Fossil India Pvt. Ltd., Khasra No: 2058/1754/18 & 2059/1754/18, Waka Mouza Bhatoli kalan, Baddi 173205 India",
  //       Department: "mens",
  //       "Item Dimensions LxWxH": " 20.3 x 5.1 x 6.3 Centimeters",
  //       "Item Weight": " 113 g",
  //       "Generic Name": "  Watch",
  //       "Net Quantity": " 1 Count",
  //     },
  //     productDisc: {
  //       "Product description": `As royal as it gets, these incorporating elements from mid-century architecture never gets out of fashion. Neutra chronograph watch features a well-balanced construction with black chronograph dial, white stick markings at all hours and sculpted case. A black stainless steel bracelet fastens the dial around your wrist. It is designed to raise your 'class' standard in any formal meeting.`,
  //     },
  //   },
  //   {
  //     localid: "54",
  //     name: "realme TechLife Watch R100 Bluetooth Calling & 1.32inch Metallic Dial Smartwatch (Black Strap, Free Size)",
  //     category: "watches",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/51oIGrqm+bL._SY879_.jpg",
  //     productDescription: [
  //       "3.35 cm (1.32) HD Colour Touch Display with Bluetooth Calling",
  //       "Upto 7 days of battery life - 100% charge in 2 hrs",
  //       "Built-in high performance mic and speakers for loud and clear calls",
  //       "Premium looking metallic bezel design | IP68 Water and dust resistant",
  //       "100+ Watch Faces | 100+ Sports Mode",
  //       "realme Wear App for comprehensive health tracking - real-time Heart Rate, SpO2, Sleep monitoring and many more",
  //       "With Call Function | Touchscreen | Fitness & Outdoor | Battery Runtime: Upto 7 days",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "4,990",
  //         img: [
  //           "51oIGrqm+bL._SY879_.jpg",
  //           "51U-4-TiDtL._SY879_.jpg",
  //           "41hToSrsOqL._SY879_.jpg",
  //           "51OcJhR1QQL._SY879_.jpg",
  //           "412e7dbGHTL._SY879_.jpg",
  //           "51Ud18xB9TL._SY879_.jpg",
  //           "16yolG22kL._SY879_.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "7 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     specification: [
  //       {
  //         technicalDetails: {
  //           Brand: "realme",
  //           Manufacturer: "SHENZHEN DO INTELLIGENT TECHNOLOGY CO. LTD",
  //           Model: "RMW2106",
  //           "Model Name": "RMW2106",
  //           "Product Dimensions": "1.4 x 4.6 x 26.2 cm; 120 Grams",
  //           "Operating System": "Android & IOS",
  //           "Compatible Devices": "Tablet, Smartphone",
  //           "Special Features": " Sleep Monitor, Sedentary Reminder, GPS",
  //           "Country of Origin": "India",
  //           "Mounting Hardware": "Extra Band, Charger",
  //           "Standing screen display size": "44 Millimetres",
  //           "Battery Average Life": "7 Days",
  //           "Wireless Type": "Bluetooth",
  //           "Item model number": "RMW2106",
  //         },
  //         additionalInformation: {
  //           ASIN: "B0BGZV4HLS",
  //           Packer: "	White Way Web",
  //           "Item Weight": "2 kg 700 g",
  //           "Date First Available": "1 October 2022",
  //           " Item Dimensions LxWxH": "14 x 46 x 262 Millimeters",
  //           "Net Quantity": "1.00 count",
  //           "Generic Name": "Smart Watch",
  //         },
  //       },
  //     ],
  //     productDisc: {
  //       "Product description": `You can easily keep an eye on your notifications, time, health, and much more with the realme TechLife R100 Smartwatch. It offers an engaging viewing experience with reminders, notifications, sports and health data, and much more on a 3.35 cm (1.32) HD colour display. This smartwatch will give you an elegant appearance everywhere you go, thanks to its stylish round watch face, aluminium bezel, and matt-finished back cover. Moreover, this smartwatch just needs to be charged once a week because it offers a battery life of up to seven days on a single charge.`,
  //     },
  //   },
  //   {
  //     localid: "55",
  //     name: "MOKOBARA The Cabin Pro Polycarbonate Hardsided Luggage | 8 Wheel Trolley Bag, with USB Charging Socket | Travel Suitcase for Men & Women (Seaweed Green)",
  //     category: "bags and luggage",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/81o0Fn5h2RL._SX679_.jpg",
  //     productDescription: [
  //       "UNDESTRUCTABLE GERMAN MARKLON POLYCARBONATE SHELL: Casing: Hard, Water resistant: Yes",
  //       "LIGHTWEIGHT & INDUSTRY BEST STORAGE: Capacity: 40liter, Weight: 3.65 grams, Dimension : 57.8 x 37 x 24.3 cm",
  //       "SILENT RUN JAPANESE WHEEL TECHNOLOGY: Number of wheels: 8, Super Smooth Hinomoto Wheels",
  //       "THE MOST FEATURE RICH LUGGAGE: USB Port: 1, Powerbank not included, Lock Type: TSA Number Lock, Comes with magic eraser, Dust Bag & Laundry Bag",
  //       "MORE REASON TO LOVE YOUR MOKOBARA: Warranty Type: 6 Years, Register warranty on (mokobara.com/warranty). Get in touch with us @7975298840 (10:30AM - 5:30PM MON-FRI)",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "12,990",
  //         img: [
  //           "81o0Fn5h2RL._SX679_.jpg",
  //           "71MEHeyEU-L._SX679_.jpg",
  //           "81ZbkRmlhTL._SX679_.jpg",
  //           "71s7UOHlQsL._SX679_.jpg",
  //           "71YI0nkCvgL._SX679_.jpg",
  //           "71VYiMlCXfL._SX679_.jpg",
  //         ],
  //       },
  //     ],
  //     productdetails: {
  //       "Product Dimensions ": " 37 x 24.3 x 57.8 cm; 4.93 Kilograms",
  //       "Date First Available": "23 March 2022",
  //       Manufacturer: "Designed By Mokobara Lifestyle Private Limited, Bangalore.",
  //       ASIN: "B09W99ZN81",
  //       "Item model number": "CabinProAll",
  //       "Country of Origin": "China",
  //       "Department ": " unisex-adult",
  //       Packer: " Mokobara Lifestyle Private Limited, Bangalore",
  //       Importer:
  //         " Mokobara Lifestyle Private Limited, Bangalore. Customer Care: Email : hello@mokobara.com Contact no. 7975298840 (10:30AM - 5:30PM MON-FRI)",
  //       "Item Weight ": "4 kg 930 g",
  //       "Item Dimensions LxWxH": "37 x 24.3 x 57.8 Centimeters",
  //       "Net Quantity": "1.00 count",
  //       "Generic Name": "Luggage- Suitcase",
  //     },
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     localid: "56",
  //     name: "American Tourister Ivy Spinner 77 cm Polypropylene Hardside, Cabin Luggage, TSA Lock, Spring Green (Trolley/Suitcase)",
  //     category: "bags and luggage",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/514nZJiADGL._UX679_.jpg",
  //     productDescription: [
  //       "UNDESTRUCTABLE GERMAN MARKLON POLYCARBONATE SHELL: Casing: Hard, Water resistant: Yes",
  //       "LIGHTWEIGHT & INDUSTRY BEST STORAGE: Capacity: 40liter, Weight: 3.65 grams, Dimension : 57.8 x 37 x 24.3 cm",
  //       "SILENT RUN JAPANESE WHEEL TECHNOLOGY: Number of wheels: 8, Super Smooth Hinomoto Wheels",
  //       "THE MOST FEATURE RICH LUGGAGE: USB Port: 1, Powerbank not included, Lock Type: TSA Number Lock, Comes with magic eraser, Dust Bag & Laundry Bag",
  //       "MORE REASON TO LOVE YOUR MOKOBARA: Warranty Type: 6 Years, Register warranty on (mokobara.com/warranty). Get in touch with us @7975298840 (10:30AM - 5:30PM MON-FRI)",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "3,999",
  //         img: [
  //           "514nZJiADGL._UX679_.jpg",
  //           "71rEPEUCZJL._UX679_.jpg",
  //           "61gm-Mh-KLL._UX679_.jpg",
  //           "61aHmDgoIbL._UX679_.jpg",
  //           "61OMdx+nk0L._UX679_.jpg",
  //           "61UF8GKJvPL._UX679_.jpg",
  //           "61035BVzVIL._UX679_.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     productdetails: {
  //       "Product Dimensions ": "51 x 30 x 78 cm; 6.09 Kilograms",
  //       "Date First Available": "8 June 2022",
  //       Manufacturer:
  //         "Samsonite South Asia Pvt. Ltd., Samsonite South Asia Pvt Ltd, GAT NO 159 to 163 , Gonde Taluka,Igatpuri,Nashik-422403",
  //       ASIN: "B0B3HV8JZK",
  //       "Item model number": "FO1 (0) 04 403",
  //       "Country of Origin": "India",
  //       "Department ": " unisex-adult",
  //       Packer: " Mokobara Lifestyle Private Limited, Bangalore",
  //       Importer: " Samsonite South Asia Pvt Ltd, GAT NO 159 to 163 , Gonde Taluka,Igatpuri,Nashik-422403",
  //       "Item Weight ": "6 kg 90 g",
  //       "Item Dimensions LxWxH": "51 x 30 x 78 Centimeters",
  //       "Net Quantity": "1.00 count",
  //       "Generic Name": "Luggage- Suitcase",
  //     },
  //     overview: [
  //       {
  //         img: [
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c097a987-7ee9-450f-ad14-25b2c8d96b0e.__CR0,1,1222,378_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0382272a-3bc9-4163-bd83-9116a64b3913.__CR0,1,1222,378_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7222df7f-8480-4dac-9602-fecebcc7fa91.__CR0,1,1222,378_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d2dbd07e-dd29-45fe-b3d4-2c3cf7e2842e.__CR0,1,1222,378_PT0_SX970_V1___.jpg",
  //           "https://m.media-amazon.com/images/S/aplus-media-library-service-media/403b81ef-524e-4435-b008-a6ae74fd0e4f.__CR0,1,1222,378_PT0_SX970_V1___.jpg",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     localid: "57",
  //     name: "American Tourister Skittle Nxt Polypropylene 50 cms Orange Kid's Luggage (FH0 (0) 96 001",
  //     category: "bags and luggage",
  //     imagePath: "https://m.media-amazon.com/images/I/",
  //     productImg: "https://m.media-amazon.com/images/I/611Gas6PXDL._UX679_.jpg",
  //     productDescription: [
  //       "Outer Material: Polypropylene, Color: Orange",
  //       "Capacity: 25 liters; Dimensions: 50 cms x 21 cms x 39 cms (LxWxH)",
  //       "Number of compartments: 1",
  //       "Laptop Compatibility: No",
  //       "Warranty type: Manufacturer; 3 year manufacturer warranty is non-transferable and valid for 3 years from the original date of purchase",
  //       "Easy-to-grab webbing handles for the chils to hold on to while sitting",
  //       "Leash for parents that can be converted to a shoulder strap",
  //     ],
  //     variants: [
  //       {
  //         qtyUnit: "",
  //         price: "2,999",
  //         img: [
  //           "611Gas6PXDL._UX679_.jpg",
  //           "611Gas6PXDL._UX679_.jpg",
  //           "61srn5PRI3L._UX679_.jpg",
  //           "51wEIgdcXcL._UX679_.jpg",
  //           "51HKHUu3TAL._UX679_.jpg",
  //           "612xLa1fEVL._UX679_.jpg",
  //           "61Ds1URkYSL._UX679_.jpg",
  //         ],
  //       },
  //     ],
  //     return: [
  //       {
  //         retrunpolicy: {
  //           "Free Delivery:":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
  //           "Pay on Delivery":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
  //           "10 days Returnable":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
  //           "Amazon Delivered":
  //             "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
  //         },
  //       },
  //     ],
  //     productdetails: {
  //       "Product Dimensions ": "50 x 21 x 39 cm; 2.8 Kilograms",
  //       "Date First Available": "25 March 2019",
  //       Manufacturer:
  //         "SAMSONITE SOUTH ASIA PVT. LTD, SAMSONITE SOUTH ASIA PVT. LTD GAT NO.159 TO 163,GONDE,TALUKA-IGATPURI NASIK 422403;Tel No. 02553-229700",
  //       ASIN: "B07Q2DV3H1",
  //       "Item model number": "FH0 (0) 96 001",
  //       Packer:
  //         " SAMSONITE SOUTH ASIA PVT. LTD, SAMSONITE SOUTH ASIA PVT. LTD GAT NO.159 TO 163,GONDE,TALUKA-IGATPURI NASIK 422403;Tel No. 02553-229700",
  //       "Item Weight ": "2 kg 800 g",
  //       "Item Dimensions LxWxH": "50 x 21 x 39 Centimeters",
  //       "Net Quantity": "1 N",
  //       "Generic Name": " Hard Luggage",
  //     },
  //   },
  // ];

  // const addCatData = () => {
  //   category.forEach((element) => {
  //     addDoc(collection(db, "category"), element)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .then((error) => {
  //         console.log(error);
  //       });
  //   });
  // };

  // Add Product to firestore
  // const addProduct = () => {
  //   newPxxroduct.forEach((element) => {
  //     console.log("Btn for each", element);
  //     addDoc(collection(db, "products"), element)
  //       .then((response) => console.log("Data Added to firestore"))
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   });
  // };
  return (
    <IonPage>
      <Header />
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
        duration={5000}
      />
      <IonContent ref={contentRef} scrollEvents={true}>
        <BannerOffer />
        <IonGrid>
          <IonRow className="text">
            <IonCol>
              <IonRow>
                {catData.map(
                  (item: {
                    id: string;
                    heading: string;
                    subheading: string;
                    subCategory: any[];
                    name: string;
                  }) => (
                    <IonCol
                      sizeXs="12"
                      sizeSm="6"
                      sizeMd="6"
                      sizeLg="3"
                      sizeXl="3"
                      key={item.id}
                    >
                      <IonCard className="card-size">
                        <IonCardHeader>
                          <IonCardTitle style={{ fontSize: "18px" }}>
                            {item.heading} | {item.subheading}
                          </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent style={{ height: "300px" }}>
                          <IonRow>
                            {item.subCategory.map(
                              (subCat: {
                                catThumnail: string;
                                catId: string;
                                catName: string;
                                category: string;
                              }) => (
                                <IonCol size="6" key={subCat.catId}>
                                  <img
                                    src={subCat.catThumnail}
                                    alt=""
                                    onClick={() => {
                                      history.push(
                                        `/product/${subCat.category}`
                                      );
                                    }}
                                  />
                                  <div
                                    style={{
                                      lineHeight: "1.8rem",
                                      fontSize: "12px",
                                    }}
                                  >
                                    {/* <IonButton onClick={addProduct}>Add</IonButton> */}

                                    <IonText class="ion-text-wrap">
                                      {subCat.catName}
                                    </IonText>
                                  </div>
                                </IonCol>
                              )
                            )}
                          </IonRow>
                        </IonCardContent>
                        <IonCardHeader>
                          <IonCardTitle color="primary">
                            See all offer
                          </IonCardTitle>
                        </IonCardHeader>
                      </IonCard>
                    </IonCol>
                  )
                )}
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <section className="card-align">
          <SwiperCard />
        </section>
        <IonRow className="ion-margin-vertical">
          <IonCol size="12">
            <div className="ion-text-center">
              <IonText>See personalized recommendations</IonText>
            </div>
            <div className="ion-text-center">
              <IonButton
                style={{ width: "254px" }}
                color="warning"
                className="ion-no-padding"
              >
                <Link to="login" style={{ textDecoration: "none" }}>
                  Sign in
                </Link>
              </IonButton>
              <div className="ion-padding-bottom">
                <IonText style={{ fontSize: "0.8rem" }}>
                  New customer?
                  <Link to="signup" style={{ textDecoration: "none" }}>
                    Start here
                  </Link>
                </IonText>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonButton
          expand="full"
          className="ion-no-margin footerColor "
          onClick={scrollToTop}
        >
          Back to top
        </IonButton>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
