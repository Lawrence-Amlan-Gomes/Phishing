'use client';

     import { useState } from 'react';

     export default function SendEmail() {
       const [email, setEmail] = useState('');

       const handleSubmit = async (e) => {
         e.preventDefault();
         try {
           const response = await fetch('/api/send-email', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ email }),
           });
           if (response.ok) {
             alert('Email sent!');
           }
         } catch (error) {
           console.error('Error sending email:', error);
         }
       };

       return (
         <div className="min-h-screen flex items-center justify-center">
           <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter target email"
               className="p-2 border rounded mb-4 w-full"
               required
             />
             <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
               Send Email
             </button>
           </form>
         </div>
       );
     }