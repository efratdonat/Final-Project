const normalizeCard = card => {
    return {
        title: card.title,
        description: card.description,
        price: card.price,
        phone: card.phone,
        email: card.email,
        image: {
            url: card.imageUrl,
            alt: card.imageAlt,
        },
        address: {
            state: card.state,
            country: card.country,
            city: card.city,
            street: card.street,
            zip: card.zip,
            houseNumber: card.houseNumber,
        },
    }
};

export default normalizeCard;