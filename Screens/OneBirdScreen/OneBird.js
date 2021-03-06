import { useContext } from "react";
import { v4 as uuid } from "uuid";
import {
  AppContainer,
  FlexRow,
  HeaderPanel,
  HeaderText,
  MainContent,
  StyledBirdCardList,
} from "../../Components/Styled Components";
import FactCardThumbnail from "./FactCardThumbnail";
import FactCardsContext from "../../FactCardsContext";
import { Navbar } from "../../Components/Navbar/Navbar";

const OneBird = ({ navigation, route }) => {
  const bird_name = route.params.bird_name;
  const { factCards: allFactCards } = useContext(FactCardsContext);
  const factCards = allFactCards.filter((card) => card.bird_name === bird_name);

  return (
    <AppContainer>
      <HeaderPanel>
        <HeaderText>{bird_name}</HeaderText>
      </HeaderPanel>
      <MainContent>
        <StyledBirdCardList>
          <FactCardThumbnail factCard={factCards[0]} navigation={navigation} />
          <FactCardThumbnail factCard={factCards[1]} navigation={navigation} />
          <FactCardThumbnail factCard={factCards[2]} navigation={navigation} />
          <FactCardThumbnail factCard={factCards[3]} navigation={navigation} />
        </StyledBirdCardList>
      </MainContent>
      <Navbar navigation={navigation} />
    </AppContainer>
  );
};

export default OneBird;
