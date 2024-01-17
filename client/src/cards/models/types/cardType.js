import { shape, string, number, arrayOf, } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string,
  title: string.isRequired,
  description: string.isRequired,
  price: string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  likes: arrayOf(string).isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

export default cardType;