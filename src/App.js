import React, { useEffect, useRef } from "react";
import Move from "./Move";
import "./App.css";

export default function App() {
  const canvasRef = useRef(null);
  const linkdownRef = useRef(null);
  const linkupRef = useRef(null);
  const linkrightRef = useRef(null);
  const linkleftRef = useRef(null);
  const { x, y, dir, move } = Move();

  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);
  //   const [dir, setDir] = useState("down");
  //for setting similar to class based : componentdidmount
  useEffect(() => {
    // const context = canvasRef.current.getContext("2D");
    //   let theLinkRef;
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);
  //move the box if x y changes like componentrender
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // let theLinkRef=context.drawImage(linkupRef.current, x, y);
    // context.fillRect(x, y, 100, 100);
    if (dir === "up") context.drawImage(linkupRef.current, x, y);
    if (dir === "down") context.drawImage(linkdownRef.current, x, y);
    if (dir === "left") context.drawImage(linkleftRef.current, x, y);
    if (dir === "right") context.drawImage(linkrightRef.current, x, y);
  }, [x, y]);

  return (
    <div className="app">
      <canvas ref={canvasRef} />
      <div className="arrows">
        <button onClick={() => move("up")}>Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>
      <div className="images">
        <img
          ref={linkdownRef}
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down"
        />
        <img
          ref={linkrightRef}
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right"
        />
        <img ref={linkupRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img
          ref={linkleftRef}
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left"
        />
      </div>
    </div>
  );
}
