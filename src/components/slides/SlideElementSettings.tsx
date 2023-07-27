import { usePresentation } from '@/hooks/usePresentation';
import { classNames } from '@/utils/classNames';
import { fontFamilies } from '@/utils/fontFamilies';
import { ChangeEvent, useRef } from 'react';

export default function SlideElementSettings() {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const { selectedElement, updateElement } = usePresentation();
  if (!selectedElement) return;

  const handleColorInputClick = () => {
    // Programmatically trigger the hidden input when the button is clicked
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle color change here (e.target.value contains the selected color)
    const selectedColor = e.target.value;
    updateElement(selectedElement.id, { ...selectedElement, fontColor: selectedColor });
  };

  const handleFontFamily = (e: ChangeEvent<HTMLSelectElement>) => {
    updateElement(selectedElement.id, { ...selectedElement, fontFamily: e.target.value });
  };

  const elementTextColor = `border-b-[${selectedElement.fontColor}]`;

  return (
    <div className="min-w-[219px] h-full border border-slate-400 flex flex-col p-2 gap-2 items-center">
      <div>{selectedElement.text}</div>
      <div className="flex flex-row gap-2 p-2">
        {/* Bold */}
        <button
          className={classNames(
            'rounded-lg p-1 font-bold',
            selectedElement.isBold ? 'bg-blue-100' : 'hover:bg-blue-50',
          )}
          onClick={() => updateElement(selectedElement.id, { ...selectedElement, isBold: !selectedElement.isBold })}
        >
          B
        </button>
        {/* Italica  */}
        <button
          className={classNames('rounded-lg p-1 italic', selectedElement.isItalic ? 'bg-blue-100' : 'hover:bg-blue-50')}
          onClick={() => updateElement(selectedElement.id, { ...selectedElement, isItalic: !selectedElement.isItalic })}
        >
          I
        </button>
        {/* color picker input */}
        <div className="relative hover:bg-blue-50 cursor-pointer rounded-lg">
          <button className={classNames(` p-1 hover:bg-blue-50`, elementTextColor)} onClick={handleColorInputClick}>
            <div className={classNames(`border-b-2`)} style={{ borderBottomColor: selectedElement.fontColor }}>
              A
            </div>
          </button>
          <input
            className="w-0 absolute left-2 h-0 top-4 opacity-0 "
            ref={colorInputRef}
            type="color"
            onChange={handleColorChange}
            value={selectedElement.fontColor}
          />
        </div>
        {/* Font family select */}
        <select
          name="fonts"
          value={selectedElement.fontFamily}
          className="max-w-[100px] border border-slate-400 rounded-md p-1"
          onChange={handleFontFamily}
        >
          {fontFamilies.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
