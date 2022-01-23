import Card from '../components/Card';
import CardPlus from '../components/CardPlus';
import PageTitle from '../components/PageTitle';
import RootContainer from '../components/container/Root';
import AppContainer from '../components/container/App';
import { useContext } from 'react';
import { CardContext } from '../App';
import uuid from 'react-uuid';

const CardList = () => {
  const { cardList = [] } = useContext(CardContext);

  return (
    <RootContainer>
      <AppContainer appClass="flex-column-center">
        <PageTitle title="보유 카드" />
        {cardList.map((card, i) => (
          <Card key={uuid()} card={card} />
        ))}
        <CardPlus />
      </AppContainer>
    </RootContainer>
  );
};

export default CardList;