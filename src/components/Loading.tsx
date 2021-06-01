import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../store';

const BigLoader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  div {
    color: ${(props) => props.theme.colors.yellow};
  }
  .spinner-grow{
    width: 150px;
    height: 150px;
  }
`

const LoaderOverlay = styled.div`
  position: absolute;
  background-color: gray;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  z-index: 3;
`

const Loading = ():JSX.Element => {
  const { state, dispatch } = useContext(AppContext)
  const { isLoading } = state
  return (
    <div className={isLoading ? 'd-block' : 'd-none'}>
      <LoaderOverlay />
      <BigLoader className="d-flex flex-column justify-content-center align-items-center">
        <div className="spinner-grow spinner-grow-lg"> </div>
        <div> May the 4th be with you... </div>
      </BigLoader>
    </div>
  )
}

export default Loading
