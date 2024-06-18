const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { data } = req.body;

    // Basic validation logic
    if (!data || data.trim() === '') {
        return res.json({ success: false, message: 'Validation failed: Input data is empty' });
    }

    try {
        // Assuming 'data' is the phone number
        const user = await User.findOne({ phoneNumber: data });

        if (!user) {
            return res.json({ success: false, message: 'No UPI IDs found for the given number' });
        }

        return res.json({ success: true, upiIds: user.upiIds });
    } catch (error) {
        console.error('Error fetching UPI IDs:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
