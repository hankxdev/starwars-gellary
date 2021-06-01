import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { IPeople, IPlanets, IStarShips } from '../intefaces';
import { getLastNumFromURL } from '../utils';

const PrettyCards = styled.div`
  margin: 1rem auto;

  :hover {
    transform: scale(1.1);
  }

  .card {
    height: 200px;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.yellow};
  }


  ul {
    list-style: none;
    margin-left: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
  }
`

type PropsType = {
  pathName: string
  displayItems: Array<keyof Partial<IPeople | IStarShips |IPlanets>>
  itemData: IPeople |IPlanets|IStarShips
}

const Card = ({ pathName, displayItems, itemData }: PropsType): JSX.Element => {
  const history = useHistory()
  const handleClick = () => {
    const id = getLastNumFromURL(itemData.url)
    history.push(`/${pathName}-detail/${id}/${itemData.name}`)
  }

  return (
    <PrettyCards onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <ul className="list-group list-unstyled">
            {
              displayItems.map((key) => (itemData[key]
                ? (
                  <li key={key}>
                    <strong>{key}</strong>
                    :
                    {itemData[key]}
                  </li>
                ) : null))
            }
          </ul>
        </div>
      </div>
    </PrettyCards>
  )
}

export default Card
