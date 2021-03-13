import React, { useState, useEffect } from 'react';
import { Alert, Button, Image, Text, View, Platform } from 'react-native';
import imageUpload from './img2test.jpeg'
import { Container, ImageToPalette, Button4SelectImg, TextElement, ButtonText, ButtonIcon } from './styles';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Entypo'

const Upload = () => {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    };

    console.log(result)
  }

  return (
    <Container>

      <Button4SelectImg onStartShouldSetResponder={() => pickImage()}>
        <ButtonText>
          <TextElement>
            {colors ? colors : 'no color'}
          </TextElement>
        </ButtonText>
        <ButtonIcon>
          <Icon 
            size={22}
            name="image" 
          />
        </ButtonIcon>
      </Button4SelectImg>

      { 
        image 
        ? 
          <ImageToPalette source={{ uri: image }} />
        :
          <ImageToPalette source={ imageUpload }/>
      }
    </Container>
  );
}

export default Upload;