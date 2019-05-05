import React from 'react';
import styled from 'styled-components'

const Input = (props) => {
  return (<Base {...props} />);
}

const Base = styled.input`
  font-size: 14px;
  height: 26px;
  width: 100%;
`;

export default Input;