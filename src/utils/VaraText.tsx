import { useEffect } from "react";
import Vara from "vara";

export default function VaraText({ text }: { text: string }) {
    useEffect(() => {
        console.log('useEffect');
      var vara = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: text,
            fontSize: 120,
            strokeWidth: 1,
          },
        ]
      );
    }, []);
  
    return <div id="vara-container" className="z-[20]"></div>;
  }