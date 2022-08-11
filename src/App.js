import React, { Fragment } from "react";
import Header from "./component/Header";
import Container from "./component/Container";
import Side from "./component/Side";
import styled from "styled-components";

const BasicFlex = styled.div`
  display: flex;
`;
let FlexRow = styled(BasicFlex)`
  flex-direction: row;
`;
let FlexColumn = styled(BasicFlex)`
  flex-drection: column;
`;
let flexColumn = {
  display: "flex",
  flexDirection: "column",
};
let flexRow = {
  display: "flex",
  flexDirection: "row",
};

function App() {
  return (
    <div style={flexColumn}>
      <Header></Header>
      <div style={flexRow}>
        <Side></Side>
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
