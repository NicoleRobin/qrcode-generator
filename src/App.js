import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Update this line
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const qrRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const image = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={inputText}
        onChange={handleInputChange}
      />
      <div className="qr-code" ref={qrRef}>
        <QRCodeCanvas value={inputText} size={256} />
      </div>
      <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  );
}

export default App;
