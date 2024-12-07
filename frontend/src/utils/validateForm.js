export const validateSignup = ({ name, email, mobile, password }) => {
    const errors = {};

    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errors.email = 'Valid email is required';
    }
    if (!mobile.trim() || !/^\d{10}$/.test(mobile)) {
        errors.mobile = 'Valid 10-digit mobile number is required';
    }
    if (!password.trim() || password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
};
export const validateLogin = ({ email, password }) => {
    const errors = {};
    if (!email.trim()) errors.email = 'Email is required';
    if (!password.trim()) errors.password = 'Password is required';
    return errors;
};
