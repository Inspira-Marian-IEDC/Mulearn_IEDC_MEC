// src/App.jsx
import { useState, useEffect } from "react";

import "./App.css";
import Loading from "./components/Loading/Loading";

function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Load the Frisky font
    // const friskyFont = new FontFace("Frisky", `url(${FriskyFont})`);
    // const minecraftFont = new FontFace("Minecraft", `url(${MinecraftFont})`);

    // Promise.all([friskyFont.load(), minecraftFont.load()])
    //   .then((fonts) => {
    //     fonts.forEach((font) => document.fonts.add(font));
    //     setIsFontLoaded(true);
    //   })
    //   .catch(() => {
    //     // Font loading failed, continue with fallback fonts
    //     setIsFontLoaded(true);
    //   });

    // Fetch the data from data.json
    const fetchData = async () => {
      try {
        const response = await fetch("/data2026.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch {
        // Error fetching data, use fallback
        setData({
          navbar: [],
          hero: { image: {}, description: "", buttonText: "" },
        });
      }
    };

    fetchData();

    // Ensure loading screen shows for minimum 3 seconds
    const minLoadingTime = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => {
      clearTimeout(minLoadingTime);
    };
  }, []);

  // Show loading screen if:
  // 1. Still within minimum 3 second period, OR
  // 2. Fonts haven't loaded yet, OR
  // 3. Data hasn't loaded yet
  if (showLoading || !isFontLoaded || !data) {
    return <Loading/>;
  }

  return (
    <>
      <p>dfd</p>
    </>
  );
}

export default App;