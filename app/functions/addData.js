import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../../lib/firebase";

const addColumn = async (props, tableName) => {
  // Check if email exists in props
  if (!props.id) return;

  // Query to check if email.email already exists
  const q = query(collection(db, tableName), where('id', '==', props.id));
  const querySnapshot = await getDocs(q);

  // If email exists, do nothing and return
  if (!querySnapshot.empty) return;

  // If no email exists, add the new document
  await addDoc(collection(db, tableName), {
    ...props,
  });
};

export default addColumn;
