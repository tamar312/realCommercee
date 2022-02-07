import './App.css';
import { useState, useEffect } from 'react';
import View from './components/view';
import axios from 'axios'
import { DetailsCard } from './components/detailsCard'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [cardList, setCardList] = useState();

  const onLoud = () => {
    axios.get('angular_Response.json')
      .then(res => {
        setCardList(res.data);
      })
      .catch(error => alert('failed to load data error description: ' + error))
  }
  useEffect(onLoud, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <View cardList={cardList} cardsView={cardList?.results} onLoud={onLoud} />} />
        <Route exact path="/:detailsCard" render={() => <DetailsCard cardList={cardList} />} />
      </Switch>
    </Router>
  );
}

export default App;
