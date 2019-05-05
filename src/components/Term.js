import React, { useContext } from 'react';
import styled from 'styled-components'
import { TermContext } from '../context';
import { formatDate } from '../Util';
import Input from './Input';

const Term = () => {
  const { term, setTerm } = useContext(TermContext);
  const handleChange = (name) => (e) => {
    const value = new Date(e.target.value);
    setTerm(prevState => {
      // reducer使うべきなんでしょうね
      const updatedValues = {...prevState};
      updatedValues[name] = value;
      return updatedValues;
    });
  }

  return (<Container>
    <div>
      <Label>開始日：</Label>
      <InputWrapper>
        <Input type='date' defaultValue={formatDate(term.beginDate, 'YYYY-MM-DD')} onChange={handleChange('beginDate')} />
      </InputWrapper>
    </div>
    <div>
      <Label>終了日：</Label>
      <InputWrapper>
        <Input type='date' defaultValue={formatDate(term.endDate, 'YYYY-MM-DD')} onChange={handleChange('endDate')} />
      </InputWrapper>
    </div>
  </Container>);
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  div {
    display: flex;
  }
`;

const Label = styled.span`
  flex: 0 0 70px;
  display: block;
`;

const InputWrapper = styled.div`
  flex: 1 1 auto;
`;

export default Term;