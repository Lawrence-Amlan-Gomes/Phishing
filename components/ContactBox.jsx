"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EachField from "./EachField";
// import { registerUser } from "@/app/actions";
import EachTextArea from "./EachTextArea";

const ContactBox = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [noError, setNoError] = useState(false);
  const [subjectError, setSubjectError] = useState({
    iserror: false,
    error: "subject is required",
  });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({
    iserror: true,
    error: "Email is required",
  });
  const [text, setText] = useState("");
  const [textError, setTextError] = useState({
    iserror: true,
    error: "Text is required",
  });

  useEffect(() => {
    if (subject == "") {
      setSubjectError({ ...subjectError, iserror: true });
    } else {
      setSubjectError({ ...subjectError, iserror: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject]);

  useEffect(() => {
    if (text == "") {
      setTextError({ ...textError, iserror: true });
    } else {
      setTextError({ ...textError, iserror: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    if (email == "") {
      setEmailError({ iserror: true, error: "Email is required" });
    } else if (email.slice(-10) != "@gmail.com") {
      setEmailError({
        iserror: true,
        error: "Use @gmail.com as your email format",
      });
    } else {
      setEmailError({ ...emailError, iserror: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    if (subjectError.iserror == false && emailError.iserror == false) {
      if (textError.iserror == false) {
        setNoError(true);
      } else {
        setNoError(false);
      }
    } else {
      setNoError(false);
    }
  }, [emailError.iserror, subjectError.iserror, textError.iserror]);

  const submitForm = async () => {
    if (noError) {
      try {
        setIsLoading(true);
        // await registerUser({
        //   email: email,
        //   subject: subject,
        //   text: text,
        // });
        setIsLoading(false);
        alert("Your email has been sent successfully!");
        setEmail("");
        setText("");
        setSubject("");
      } catch {
        alert("Your message somehow couldn't sent for some technical error!");
      }
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 2, type: "spring" }}
        className="sm:p-10 p-5 shadow-xl border-[1px] border-transparent hover:border-[#555555] rounded-lg sm:w-[400px] text-center bg-[#181818] text-[#f0f0f0]"
      >
        {/* <div className="lg:text-[30px] sm:text-[25px] text-[16px] font-bold sm:mb-10 mb-5 ">
        Direct Message Us
      </div> */}
        {/* Trick the browser with this fake email and subject field */}
        <div className="opacity-0">
          <EachField
            label="fake"
            type="email"
            subject="email"
            isReal={false}
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            iserror={emailError.iserror}
            error={emailError.error}
          />
          <EachField
            label="fake"
            type="subject"
            subject="subject"
            isReal={false}
            placeholder="Enter your subject"
            value={subject}
            setValue={setText}
            iserror={subjectError.iserror}
            error={subjectError.error}
          />
        </div>
        <EachField
          label="Email"
          type="email"
          subject="email"
          isReal={true}
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          iserror={emailError.iserror}
          error={emailError.error}
        />
        <EachField
          label="Subject"
          type="subject"
          subject="subject"
          isReal={true}
          placeholder="Enter your subject"
          value={subject}
          setValue={setSubject}
          iserror={subjectError.iserror}
          error={subjectError.error}
        />
        <EachTextArea
          label="Text"
          type="text"
          subject="text"
          isReal={true}
          placeholder="Feel free to text us"
          value={text}
          setValue={setText}
          iserror={textError.iserror}
          error={textError.error}
        />
        <button
          onClick={submitForm}
          className={`sm:text-[18px] text-[14px] cursor-pointer rounded-full sm:mt-10 mt-5 py-2 px-6 shadow-md ${
            noError
              ? "bg-green-800 hover:bg-green-700 text-white"
              : "bg-[#111111] text-[#696969]"
          }`}
        >
          {isLoading ? `Sending...` : `Send`}
        </button>
        {/* <p className="mt-10">
          No Account?{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-500">
            Register
          </Link>
        </p> */}
      </motion.div>
    </div>
  );
};

export default ContactBox;
