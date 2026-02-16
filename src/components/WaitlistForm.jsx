import React, { useState } from 'react';

function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Simulate an API call to add the email to the waitlist
        setTimeout(() => {
            setLoading(false);
            setMessage('Added to waitlist!');
            setEmail('');
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Join Waitlist'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default WaitlistForm;
