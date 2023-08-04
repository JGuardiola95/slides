// import DrawingCanvas from '@/components/sketch/DrawingCanvas';

import dynamic from 'next/dynamic';

const DrawingCanvas = dynamic(() => import('@/components/sketch/DrawingCanvas'), { ssr: false });

export default function Sketch() {
  return (
    <div>
      <h1 className="text-7xl text-center">Sketch demo</h1>
      <DrawingCanvas />
    </div>
  );
}
