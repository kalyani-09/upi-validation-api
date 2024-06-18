const Joi = require('joi');

const phoneSchema = Joi.string().pattern(/^[6-9]\d{9}$/);

const validatePhoneNumber = (phoneNumber) => {
    return phoneSchema.validate(phoneNumber);
};

module.exports = validatePhoneNumber;
