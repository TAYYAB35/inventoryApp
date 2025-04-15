import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    // Check if the userId is provided
    if (!userId) {
        throw new Error("User ID is required to generate a token.");
    }
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    // Set the token as a cookie in the response
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    });
}

export default generateToken;