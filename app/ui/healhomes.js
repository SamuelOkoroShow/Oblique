import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Head1 = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
const MiniHead1 = styled.Text`
  font-size: 20px;
  font-weight: 300;
`;

const Hobo = styled.View`
flex:1;
  background-color: #FF6347;
  justify-content: center;
  align-Items: center;
`;

const healHomes = () => {
  return <Hobo>
      <Text>Hello Sam</Text>
  </Hobo>;
};

export default healHomes;
