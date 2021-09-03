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
  align-items: center;
`;

const UserBlock = style.View`
  height: 190px;
  padding: 5px;
  justify-content: center;
  align-items: flex-start;
`;



const onPressUser_Key =(idUser) => {
  props.changeID(idUser);
  props.navigateFAR(idUser);
}

const healHomes = () => {
  return <Hobo>
    
      <Text>Hello Sam</Text>
  </Hobo>;
};

export default healHomes;
