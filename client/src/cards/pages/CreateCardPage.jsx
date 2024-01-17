import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import initialCardForm from "./../helpers/initialForms/initialCardForm";
import useForm from "./../../forms/hooks/useForm";
import cardSchema from "../models/joi-schema/cardsSchema";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const CreateCardPage = () => {
    const { handleCreateCard } = useCards();
    const { user } = useUser();

    const { value, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        handleCreateCard
    )

    if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />

    const inputFactory = (name, label, required, type) => ({ name, label, required, type })
    const mapInputs = [
        inputFactory("title", "title", true, "text"),
        inputFactory("description", "description", true, "text"),
        inputFactory("price", "price", true, "number"),
        inputFactory("phone", "phone", true, "phone"),
        inputFactory("email", "email", true, "email"),
        inputFactory("imageUrl", "image url", false, "text"),
        inputFactory("imageAlt", "image alt", false, "text"),
        inputFactory("state", "state", false, "text"),
        inputFactory("country", "country", true, "text"),
        inputFactory("city", "city", true, "text"),
        inputFactory("street", "street", true, "text"),
        inputFactory("houseNumber", "houseNumber", true, "number"),
        inputFactory("zip", "zip", true, "number")
    ]

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Form
                onSubmit={rest.onSubmit}
                onChange={rest.validateForm}
                onReset={rest.handleReset}
                styles={{ maxWidth: "800px" }}
                title="Create ads"
                to={ROUTES.CARDS}>
                {
                    mapInputs.map((input, index) => (
                        <Input
                            key={index}
                            {...input}
                            data={value.formData}
                            error={value.errors[input.name]}
                            handleChange={rest.handleChange}
                            sm={6}
                        />
                    ))
                }

            </Form>
        </Container>
    )
};

export default CreateCardPage;
