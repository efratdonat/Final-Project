import { Container, Paper, Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { cards, error, isPending, filteredCards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <Container>
      <PageHeader
        title="Ads Board"
        
      />

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Box mt={2}>
          {/* Content of the page goes here */}
          <CardsFeedback
            isPending={isPending}
            error={error}
            cards={filteredCards}
            onDelete={onDeleteCard}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default CardsPage;
