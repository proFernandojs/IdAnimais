import React, { useState, useEffect } from 'react';
import Camera from './Components/Camera';
import AnimalCard from './Components/AnimalCard';


const App = () => {
  const [image, setImage] = useState(null);
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const getAnimalInfo = async (imageUm) => {
      // ... código para chamar a API Google Cloud Vision e obter dados do animal ...

      const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
      const apiKey = process.env.GOOGLE_CLOUD_VISION_API_KEY;

      const vision = require('@google-cloud/vision').v1p4;
      const client = new vision.ImageAnnotatorClient({
      projectId,
      credentials: {
      apiKey,
  },
});

const detectAnimals = async (image) => {
  const request = {
    image: {
      content: image,
    },
    features: [{ type: 'LABEL_DETECTION' }],
  };

  const response = await client.annotateImage(request);
  const labels = response.imageAnnotations[0].labels;
  const animalLabels = labels.filter((label) => label.description.includes('animal'));

  return animalLabels.map((label) => label.description);
};

fetch('https://api.example.com/detect?key=' + API_KEY + '&image=' + image + '&options=' + JSON.stringify(options))
  .then(response => response.json())
  .then(data => {
    // Tratar os dados da resposta
    console.log(data.labels);
  });

const image = 'https://example.com/image.jpg';

detectAnimals(image).then((animalLabels) => {
  console.log(animalLabels);
});

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