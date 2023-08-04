import React, { useRef, useEffect, ChangeEvent, useState } from 'react';
import p5 from 'p5';

export default function DrawingCanvas() {
  const [color, setColor] = useState('black');
  const [strokeWeightValue, setStrokeWeightValue] = useState(5);
  const initialRender = useRef(true);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const colorRef = useRef<string>('black');
  const strokeWeightRef = useRef<number>(strokeWeightValue);
  const p5Ref = useRef<p5 | null>(null);

  colorRef.current = color;
  strokeWeightRef.current = strokeWeightValue;

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.background(255);
      p.stroke(0);
      p.strokeWeight(strokeWeightRef.current); // Set the initial stroke weight
    };

    p.draw = () => {
      if (p.mouseIsPressed) {
        if (p.mouseButton === p.LEFT) {
          p.stroke(colorRef.current);
          p.strokeWeight(strokeWeightRef.current); // Set the initial stroke weight
          p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY); // Draw with left-click
        }
      }
    };
  };

  useEffect(() => {
    initialRender.current = false;
    if (canvasRef.current) {
      const p5Instance = new p5(sketch, canvasRef.current);
      p5Ref.current = p5Instance;
    }

    // Cleanup function to remove the p5.js instance when the component unmounts
    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
      }
    };
  }, []);

  const handleEraser = () => {
    setColor('white');
  };

  const handleColor = (e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  };

  const handleStrokeWeight = (event: ChangeEvent<HTMLInputElement>) => {
    setStrokeWeightValue(Number(event.target.value));
  };

  // const handleHighlighter = () => {
  //   if (p5Ref.current) {
  //     p5Ref.current.blendMode('lighten');
  //     // colorRef.current = 'orange';
  //   }
  // };

  return (
    <div>
      <div className="flex flex-row gap-2">
        <button className="bg-slate-500 p-2" onClick={handleEraser}>
          Eraser
        </button>
        {/* <button className="bg-slate-500 p-2" onClick={handleHighlighter}>
          Highlighter
        </button> */}
        <input type="range" min={0} max={100} value={strokeWeightValue} onChange={handleStrokeWeight} />
        <select name="color" id="color" value={color} onChange={handleColor}>
          <option value="red">red</option>
          <option value="black">black</option>
          <option value="blue">blue</option>
        </select>
      </div>
      <div ref={canvasRef} />
    </div>
  );
}
