"use client";
import React, { useState } from 'react'
import EmailComponent from './EmailComponent'
import OtpComponent from './OtpComponent'

const Home = () => {
    const [showEmail, setShowEmail] = useState(true);
    const [userEmail, setUserEmail] = useState('');

    return (
        <>
            {showEmail ? (
                <EmailComponent
                    onContinue={() => setShowEmail(false)}
                    onEmailUpdate={setUserEmail}
                />
            ) : (
                <OtpComponent email={userEmail} />
            )}
        </>

    )
}

export default Home
