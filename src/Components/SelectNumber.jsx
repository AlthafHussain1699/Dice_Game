import React from 'react'
import styled from 'styled-components'

function SelectNumber({value, setValue}) {
  const a = [1, 2, 3, 4, 5, 6]
  return (
     <Container>
        {
            a.map((val)=>(
                <Box flag = {val == value ? true : false} key = {val} onClick={() => (setValue(val))}>{val}</Box>
            ))
        }
     </Container>
  )
}

const Container = styled.div`
 display : flex;
 gap : 10px;
`
const Box = styled.button`
  color: ${(props) => (props.flag ? 'white' : 'black')};
  background-color: ${(props) => (props.flag ? 'black' : 'white')};
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 1px solid black;

  ${(props) => {
    if (!props.flag) {
      return `
        &:hover {
          background-color: black;
          color: white;
        }
      `;
    }
    return ''; 
  }}
`;
export default SelectNumber