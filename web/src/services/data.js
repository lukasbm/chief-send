import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";

const getPublicShares = async () => {
  console.log("fetching public shares...");
  const q = query(collection(firestore, "shares"), where("public", "==", true));
  const snapshot = await getDocs(q);
  let res = [];
  snapshot.forEach((doc) => res.push({ id: doc.id, ...doc.data() }));
  return res;
};

const getShare = async (id) => {
  console.log("fetching share ", id, "...");
  const docRef = doc(firestore, "shares", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: id, ...docSnap.data() };
  } else {
    return null;
  }
};

export { getPublicShares, getShare };
