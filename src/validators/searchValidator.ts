import Joi from "joi";

const searchValidator = Joi.object({
    keyWord: Joi.string().allow('').pattern(/^[a-zA-Z0-9 ]*$/).messages({
        'string.pattern.base': 'You cannot use special characters in the keyWord field',
    }),
});

export {searchValidator}