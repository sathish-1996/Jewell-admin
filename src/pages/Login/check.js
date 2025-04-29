import React, { useEffect, useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../services/firebase";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const OTPLogin = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    useEffect(() => {
        // ✅ Safe place to set this
        if (window.location.hostname === "localhost") {
            auth.settings.appVerificationDisabledForTesting = true;
        }
    }, []);
    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: () => {
                        console.log("reCAPTCHA solved");
                    },
                },
                auth
            );
        }
    };

    const sendOTP = async () => {
        // Format phone number to E.164
        const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;
      
        setupRecaptcha(); // setup first
        const appVerifier = window.recaptchaVerifier;
      
        try {
          const confirmationResult = await signInWithPhoneNumber(auth, '+91 7010977849', appVerifier);
          console.log(confirmationResult,'confirmationResult');
          alert("OTP sent!");
        } catch (error) {
          console.error("OTP Error:", error.message);
          alert(error.message);
        }
      };

    const verifyOTP = async () => {
        if (!confirmationResult) return;

        try {
            const result = await confirmationResult.confirm(otp);
            const user = result.user;
            alert("Phone number verified!");
            console.log("User:", user);
        } catch (error) {
            console.error(error);
            alert("Invalid OTP.");
        }
    };

    return (
        <div className="p-4">
            <h2>Phone OTP Login</h2>

            <PhoneInput
                country={'us'}

                value={phone}
                onChange={(phone) => setPhone(phone)}

            />

            <div id="recaptcha-container"></div>

            <button onClick={sendOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
                Send OTP
            </button>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border p-2 mt-4 block w-full"
            />
           <div id="recaptcha-container"></div>
            <button onClick={verifyOTP} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                Verify OTP
            </button>
        </div>
    );
};

export default OTPLogin;