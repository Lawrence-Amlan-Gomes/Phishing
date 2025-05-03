import { db } from "../../lib/firebase";
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

export async function updateCredentialById(id, newData) {
  if (!id) return;

  const q = query(collection(db, 'credentials'), where('id', '==', id));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docRef = doc(db, 'credentials', querySnapshot.docs[0].id);
    await updateDoc(docRef, { ...newData, id });
  }
}