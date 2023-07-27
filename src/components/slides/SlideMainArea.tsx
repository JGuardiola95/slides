import { SlideElement, usePresentation } from '@/hooks/usePresentation';
import { classNames } from '@/utils/classNames';
import { FocusEvent, useRef } from 'react';

export default function SlideMainArea() {
  const { selectedSlide, updateElement, selectedElement } = usePresentation();
  const mainContainerRef = useRef<HTMLDivElement>(null);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {};

  const handleSelection = (e: FocusEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (selectedElement) {
      updateElement(selectedElement.id, { ...selectedElement, isSelected: false });
    }
  };

  return (
    <div className="border border-slate-400 p-2 w-full" ref={mainContainerRef} tabIndex={0} onFocus={handleSelection}>
      <div className="flex flex-row flex-wrap gap-2">
        {selectedSlide &&
          selectedSlide.elements.map((el) => (
            <TextEditorElement key={el.id} slideElement={el} handleBlur={handleBlur} />
          ))}
      </div>
    </div>
  );
}

interface TextEditorElementProps {
  slideElement: SlideElement;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

function TextEditorElement({ slideElement, handleBlur }: TextEditorElementProps) {
  const { fontColor, fontFamily, isBold, isItalic, isSelected, text, id } = slideElement;

  const { updateElement, selectElement } = usePresentation();

  return (
    <input
      className={classNames(
        ' p-4 border-2 border-dashed max-h-12 outline-none w-[207px]',
        isItalic ? 'italic' : '',
        isBold ? 'font-bold' : '',
        isSelected ? 'ring-2 ring-blue-400' : ''
      )}
      style={{ color: fontColor, fontFamily }}
      type="text"
      value={text}
      onChange={(e) => updateElement(id, { ...slideElement, text: e.target.value })}
      onFocus={() => selectElement(id)}
    />
  );
}
