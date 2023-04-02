import { collection } from "firebase/firestore";
import { db } from "./init-firebase";

export const userdataCollectionRef = collection(db, "userData");
export const bannerdataCollextionRef = collection(db, "bannerData");
