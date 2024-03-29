import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;


const cardSchema = {
    title: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    imageAlt: Joi.string().min(2).max(256).allow(""),
    state: Joi.string().allow(""),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    zip: Joi.number(),
    houseNumber: Joi.number().required(),
    phone: Joi.string()
        .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
        .rule({ message: 'ad "phone" mast be a valid phone number' })
        .required(),
    email: Joi.string()
        .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: 'ad "mail" mast be a valid mail' })
        .required(),
    imageUrl: Joi.string()
        .ruleset.regex(urlRegex)
        .rule({ message: 'ad.image "url" mast be a valid url' })
        .allow(""),

}

export default cardSchema;