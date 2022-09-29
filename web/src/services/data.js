import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";

const getPublicShares = async () => {
  console.log("fetching public shares...");
  const q = query(collection(firestore, "shares"), where("public", "==", true));
  try {
    const snapshot = await getDocs(q);
    let res = [];
    snapshot.forEach((doc) => res.push({ id: doc.id, ...doc.data() }));
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { getPublicShares };
