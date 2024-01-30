const generateBizNumber = require("./generateBizNumber");

const normalizeCard = async (rawCard, userId) => {
  const { url, alt } = rawCard.image;
  const image = {
    url:
      url ||
      "https://media.istockphoto.com/id/1438931606/photo/womans-hand-with-a-tree-she-is-planting-environmental-conservation-concept-protect-and.webp?b=1&s=612x612&w=0&k=20&c=qkiZnwOcwDunV8cnvxFZTEthGGTi8PnNcacRJ94Bifo=",
          alt: alt || "Firstand",
  };

  return {
    ...rawCard,
    image,
    address: {
      ...rawCard.address,
      state: rawCard.address.state || "",
    },
    bizNumber: rawCard.bizNumber || (await generateBizNumber()),
    user_id: userId || rawCard.user_id,
  };
};

module.exports = normalizeCard;