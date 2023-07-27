// import { useElementSource } from '@/hooks/useElement';
import SlideElementSettings from '@/components/slides/SlideElementSettings';
import SlideMainArea from '@/components/slides/SlideMainArea';
import { PresentationProvider, Slide, SlideElement, usePresentation } from '@/hooks/usePresentation';
import { classNames } from '@/utils/classNames';
import { FocusEvent, useRef } from 'react';

export default function EdClub() {
  return (
    <PresentationProvider>
      <div className="flex flex-col h-screen p-4">
        <div className="h-24">
          <CreateElementButton />
        </div>
        <div className="w-full flex flex-row h-full gap-2">
          <SlidesBar />
          <SlideMainArea />
          <SlideElementSettings />
        </div>
      </div>
    </PresentationProvider>
  );
}

function CreateElementButton() {
  const { handleElementCreation } = usePresentation();

  return (
    <button className="bg-slate-300 p-4 rounded-lg" onClick={handleElementCreation}>
      Create Element
    </button>
  );
}

function SlidesBar() {
  const { slides } = usePresentation();
  return (
    <div className="w-[219px] h-full border border-slate-400 flex flex-col p-2 gap-2 items-center">
      {slides.map((slide) => (
        <SlideThumbnail key={slide.id} slide={slide} /> // @TODO: key should be unique
      ))}
    </div>
  );
}

interface SlideThumbnailProps {
  slide: Slide;
}

function SlideThumbnail({ slide }: SlideThumbnailProps) {
  const { handleSlideSelect } = usePresentation();
  const selectedClassName = 'ring-2 ring-blue-400';
  const hoverClassName = 'hover:ring-2 hover:ring-slate-300';

  return (
    <button
      onClick={() => handleSlideSelect(slide.id)}
      className={classNames(
        'rounded-md shadow-sm text-center border border-slate-400 w-[190px] h-[100px]',
        slide.isSelected ? selectedClassName : hoverClassName
      )}
    >
      Slide {slide.id}
    </button>
  );
}
