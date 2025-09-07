import { useState, useEffect } from 'react'


function App() {
  const [colors, setColors] = useState([]);
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const listener = (msg) => {
      if (msg.type === "FONT_GRABBED") {
        setFonts(prev => [...prev, msg.payload]);
      }
      if (msg.type === "COLOR_PICKED") {
        setColors(prev => [...prev, msg.payload.color]);
      }
    };
    chrome.runtime.onMessage.addListener(listener);

    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);

  return (
    <main>
      <p>{colors}</p>
      <p>{fonts}</p>
    </main>
  )
}

export default App
