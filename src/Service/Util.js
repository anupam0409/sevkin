import { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

export const validateUsernamePassword = (username, password) => {
    const errors = [];

    if (!username || typeof username !== 'string' || username.trim() === '') {
        errors.push("Username is required.");
    } else {
        const trimmedUsername = username.trim();
        if (trimmedUsername.length < 3) {
            errors.push("Username must be at least 3 characters long.");
        }
        /*if (trimmedUsername.length > 20) {
            errors.push("Username cannot exceed 20 characters.");
        }
        // Example: Only allow alphanumeric, underscore, and hyphen characters
        if (!/^[a-zA-Z0-9_-]+$/.test(trimmedUsername)) {
            errors.push("Username can only contain letters, numbers, underscores, and hyphens.");
        }*/
        // Add more specific username rules as needed, e.g., no leading/trailing spaces
    }

    // --- Password Validation Rules ---
    if (!password || typeof password !== 'string' || password.trim() === '') {
        errors.push("Password is required.");
    } else {
        const trimmedPassword = password.trim();
        if (trimmedPassword.length < 5) {
            errors.push("Password must be at least 5 characters long.");
        }
        /*if (trimmedPassword.length > 50) {
            errors.push("Password cannot exceed 50 characters.");
        }
        if (!/[A-Z]/.test(trimmedPassword)) {
            errors.push("Password must contain at least one uppercase letter.");
        }
        if (!/[a-z]/.test(trimmedPassword)) {
            errors.push("Password must contain at least one lowercase letter.");
        }
        if (!/[0-9]/.test(trimmedPassword)) {
            errors.push("Password must contain at least one number.");
        }
        // Example: Requires at least one special character (non-alphanumeric, non-space)
        if (!/[^a-zA-Z0-9\s]/.test(trimmedPassword)) {
            errors.push("Password must contain at least one special character.");
        }*/
    }

    // Determine overall validity
    const isValid = errors.length === 0;

    return { isValid, errors };
};

export const justAnAlert = () => {
    alert('hello');
};

export const ShowSuccessCall = ({ message }) => {
    // State to control the visibility of the toast
    const [showSuccess, setShowSuccess] = useState(true); // Start as true to immediately show the toast

    useEffect(() => {
        if (showSuccess) {
            setTimeout(function () {
                setShowSuccess(false)
                window.location.reload();
            }, 2000);
        }
    }, [showSuccess]); // Empty dependency array ensures this effect runs only once on mount

    // Render the Toast component
    return (
        <Toast
            show={showSuccess}
            onClose={() => setShowSuccess(false)} // Optional: allow user to close manually
            style={{
                position: 'fixed', // Position the toast
                top: '20px',
                right: '20px',
                zIndex: 9999, // Ensure it's above other content
                backgroundImage: 'linear-gradient(#4BB543,#87cc80)', // Success gradient
                color: 'white',
                fontSize: '15px',
                borderLeft: '4px solid green'
            }}
        >
            <Toast.Body>
                <img
                    style={{ padding: '8px', marginRight: '10px' }} // Added right margin for spacing
                    src="/sevkin/assets/img/icon/success.png"
                    alt="sevkin"
                    height={50}
                    width={50}
                />
                <b>{message}</b>
            </Toast.Body>
        </Toast>
    );
};

export const ShowErrorCall = ({ message }) => { // Renamed for clarity and to indicate it's a component
    const [showError, setShowError] = useState(true); // Start as true to immediately show the toast

    useEffect(() => {
        if (showError) {
            setTimeout(function () {
                setShowError(false)
            }, 2000);
        }
    }, [showError]); // Empty dependency array ensures this effect runs only once on mount

    // Render the Toast component
    return (
        <Toast
            show={showError}
            onClose={() => setShowError(false)} // Optional: allow user to close manually
            style={{
                position: 'fixed', // Position the toast
                top: '20px',
                right: '20px',
                zIndex: 9999, // Ensure it's above other content
                backgroundImage: 'linear-gradient(#DC3545,#ee7b7b)',
                color: 'white',
                fontSize: '15px',
                borderLeft: '4px solid red'
            }}
        >
            <Toast.Body>
                <img
                    src="/sevkin/assets/img/icon/error.png"
                    alt="sevkin"
                    height={50}
                    width={50}
                    style={{ marginRight: '10px' }} // Add some spacing
                />
                <b>{message}</b>
            </Toast.Body>
        </Toast>
    );
}