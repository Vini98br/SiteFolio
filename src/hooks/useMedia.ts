import { useEffect, useState } from 'react'

export default function useMedia() {
  if(typeof window !== `undefined`){
    const [width, setWidth] = useState(window.innerWidth);
    // Add a second state variable "height" and default it to the current window height
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        // Set the height in state as well as the width
        setHeight(window.innerHeight);
      }

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return both the height and width
    return { width, height };
  }
  else{
    return {width: 1000, height: 1000}
  }
}
