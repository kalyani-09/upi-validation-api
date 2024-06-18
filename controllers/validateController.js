const User = require('../models/User');
const validatePhoneNumber = require('../utils/validatePhoneNumber');

exports.validateAndRetrieveUPI = async (req, res, next) => {
    try {
        const { phoneNumber } = req.body;
        
        // Validate phone number format
        const { error } = validatePhoneNumber(phoneNumber);
        if (error) {
            return res.status(400).json({ message: 'Invalid phone number format' });
        }

        // Find user by phone number
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.status(404).json({ message: 'Phone number not associated with any UPI IDs' });
        }

        // Return UPI IDs if user found
        res.json({ upiIds: user.upiIds });
    } catch (err) {
        // Handle database or server errors
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
