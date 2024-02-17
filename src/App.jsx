import React, { useState, useEffect } from 'react';
import Camera from './Components/Camera';
import AnimalCard from './Components/AnimalCard';
import icon from './assets/camera.svg';

const App = () => {
  const [image, setImage] = useState(null);
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const getAnimalInfo = async (image) => {
      // ... código para chamar a API Google Cloud Vision e obter dados do animal ...
      setAnimal(animalData);
    }

    if (image) {
      getAnimalInfo(image);
    }
  }, [image]);

  return (
    <div>
      
      <Camera onCapture = {setImage} />
      {animal && <AnimalCard animal = {animal} />}
    </div>
  );
}

export default App;