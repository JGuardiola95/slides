import { Excalidraw } from '@excalidraw/excalidraw';

export default function Sketch() {
  return (
    <div>
      <h1 className="text-7xl text-center">Excalidraw demo</h1>
      <div style={{ height: '500px' }}>
        <Excalidraw />
      </div>
    </div>
  );
}
