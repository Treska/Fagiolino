import React, { useRef, useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import useScreenSize from "./useScreenSize";

import './styles.css';

import * as IMG from "./img.jpg";

import * as IMG2 from "./fev.jpg";





export default function App() {
  const [display, setDisplay] = useState('none');
  const [bgImage, setBgImg] = useState(IMG2.default);
  const [zoomIn, setZoomIn] = useState('');
  const ref = useRef();
  const screenSize = useScreenSize();
  const onClickReset = () => {
    ref.current && ref.current.reset();
  };
  window.addEventListener('resize', onClickReset);
  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1>Gratta & Vinci</h1>
      <h3 style={{ textAlign: "center" }}>Benvenuti alla lotteria della domenica.<br /> se sei pronto a scoprire chi ha vinto inizia a grattare</h3>
      <ScratchCard
        ref={ref}
        width={screenSize.width / 2}
        height={screenSize.height / 2}
        image={IMG.default}
        finishPercent={80}
        onComplete={() => {
          setDisplay('flex');
          setBgImg('');
          setZoomIn('zoomInUp')
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover"
          }}
        >
          <div className={zoomIn} style={{ display: `${display}` }}>ciao</div>
        </div>
      </ScratchCard >
    </div >
  );
}

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
