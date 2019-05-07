import React from 'react';
import styled from 'styled-components'

const Select = (props) => {
  return (<Base {...props} />);
}

const Base = styled.select`
  padding: 8px;
  height: 32px;
  font-size: 14px;
`;

export default Select;