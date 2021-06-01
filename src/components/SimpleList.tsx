import React from 'react';

import styled from 'styled-components';

type ListProps = {
    list: Array<string>
}

const DarkListItem = styled.div`
  display: inline-block;
  width: calc(100% - 150px);
  `
const SimpleList = ({ list } : ListProps) :JSX.Element => (
  <DarkListItem>
    <ul className="list-group list-unstyled">
      {
        list.map((item) => (
          <li className="" key={item}>
            {item}
          </li>
        ))
      }
    </ul>
  </DarkListItem>
)

export default SimpleList
