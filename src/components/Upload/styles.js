import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const ImageToPalette = styled.Image`
  height: 240px;
  width: 240px;
  border-radius: 12px;
  border: 3px solid #000;
`;

export const Button4SelectImg = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ButtonText = styled.View`
  border-left-width: 3px;
  border-left-color: #000;
  border-top-width: 3px;
  border-top-color: #000;
  border-bottom-width: 3px;
  border-bottom-color: #000;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TextElement = styled.Text`
  font-size: 20px;
  font-family: monospace;
  font-weight: bold;
`;

export const ButtonIcon = styled.View`
  border: 3px solid #000;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
