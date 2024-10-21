import React, { useEffect, useState } from 'react';

const AccountPage = () => {
    const [userData, setUserData] = useState({ email: '', error: '' });

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('http://localhost/get_user.php'); // Fetch user data
            const data = await response.json();
            if (data.email) {
                setUserData({ email: data.email });
            } else {
                setUserData({ error: data.error || 'User not found' });
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>Account Information</h1>
            {userData.error ? (
                <p>{userData.error}</p>
            ) : (
                <p>Email: {userData.email}</p>
            )}
        </div>
    );
};

export default AccountPage;
