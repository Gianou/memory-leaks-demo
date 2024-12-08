import React, { useRef, useEffect } from "react";
import "./App.css";

/* useRef avoids directely interacting with the DOM
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
*/

function CanvasComponent() {
  const canvasRef = useRef(null); // Ref for the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 500, 500);
  }, []);

  const drawCat = () => {
    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    // Draw cat body (circle)
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(250, 300, 100, 0, Math.PI * 2);
    ctx.fill();

    // Draw cat ears (triangles)
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(180, 200);
    ctx.lineTo(150, 130);
    ctx.lineTo(220, 150);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(320, 200);
    ctx.lineTo(350, 130);
    ctx.lineTo(280, 150);
    ctx.fill();

    // Draw cat eyes (two circles)
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(220, 270, 20, 0, Math.PI * 2);
    ctx.arc(280, 270, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(220, 270, 10, 0, Math.PI * 2);
    ctx.arc(280, 270, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw cat nose (triangle)
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.moveTo(250, 300);
    ctx.lineTo(240, 320);
    ctx.lineTo(260, 320);
    ctx.fill();

    // Draw cat mouth (lines)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(250, 320);
    ctx.lineTo(250, 330);
    ctx.moveTo(250, 330);
    ctx.lineTo(240, 340);
    ctx.moveTo(250, 330);
    ctx.lineTo(260, 340);
    ctx.stroke();
  };

  return (
    <>
      <h2>useRef() Demo</h2>
      <button onClick={drawCat}>Draw a cat</button>
      <canvas
        ref={canvasRef} // Links the useRef and the canvas
        id="gameCanvas"
        width={500}
        height={500}
      ></canvas>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CanvasComponent />
      </div>
    </div>
  );
}

export default App;
