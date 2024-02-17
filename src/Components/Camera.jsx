import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
      <button onClick={capture}>Capturar</button>
    </div>
  );
}

export default Camera;