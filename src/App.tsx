import React, { useReducer } from 'react'
import './styles/App.scss'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import styled from 'styled-components';
import { initState, reducer, AppContext } from './store';
import Loading from './components/Loading';
import Header from './components/Header';
import ListPage from './pages/ListPage';
import { ListTypes } from './consts';
import ListItemDetails from './pages/ListItemDetails';
import Galaxy from './components/Galaxy';

const ContentBlock = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
`

function App():JSX.Element {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <Galaxy />
      <AppContext.Provider value={{ state, dispatch }}>
        <Router>
          <div className="container">
            <Header />
            <ContentBlock>
              <Loading />
              <Switch>
                <Route exact path="/">
                  <ListPage name={ListTypes.people} />
                </Route>
                <Route path="/people-detail/:id/:name">
                  <ListItemDetails itemName={ListTypes.people} />
                </Route>
                <Route path="/starships/">
                  <ListPage name={ListTypes.starships} />
                </Route>
                <Route path="/starships-detail/:id/:name">
                  <ListItemDetails itemName={ListTypes.starships} />
                </Route>
                <Route path="/planets/">
                  <ListPage name={ListTypes.planets} />
                </Route>
                <Route path="/planets-detail/:id/:name">
                  <ListItemDetails itemName={ListTypes.planets} />
                </Route>
              </Switch>
            </ContentBlock>
          </div>
        </Router>
      </AppContext.Provider>
    </>

  )
}

export default App
