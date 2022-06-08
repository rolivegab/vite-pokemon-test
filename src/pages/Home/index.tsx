import { Container } from "@mui/material";
import {
  HomeButton,
  HomeRectangle,
  HomeSubtitle,
  HomeTitle,
  HomeTitleWrapper,
} from "./style";

export const Home = () => (
  <>
    <Container>
      <HomeTitleWrapper>
        <HomeTitle>Qual pokemon você escolheria?</HomeTitle>
        <HomeRectangle />
      </HomeTitleWrapper>
      <HomeSubtitle>
        Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
        habilidades.
      </HomeSubtitle>
      <HomeButton>Veja os Pokémons</HomeButton>
    </Container>
  </>
);
