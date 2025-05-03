import { db } from "../../lib/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function getCredentialByEmail(email) {
    if (!email) return null;
  
    const q = query(collection(db, 'credentials'), where('email.email', '==', email));
    const querySnapshot = await getDocs(q);
  
    return querySnapshot.empty ? null : querySnapshot.docs[0].data();
  }