// enum ActionTypes {
//   SelectSlide,
//   CreateElement,
//   UpdateElementText,
// }

import { Slide, SlideElement } from '@/hooks/usePresentation';

type PresentationAction =
  | { type: 'SELECT_SLIDE'; payload: { slideId: number } }
  | { type: 'CREATE_ELEMENT'; payload: { slideId: number } }
  | { type: 'UPDATE_ELEMENT'; payload: { slideId: number; elementId: number; updatedElement: SlideElement } }
  | { type: 'SELECT_ELEMENT'; payload: { slideId: number; elementId: number } };

const newSlideElement: SlideElement = {
  id: 0,
  fontColor: '#000000',
  isBold: false,
  isItalic: false,
  fontFamily: 'Verdana',
  isSelected: false,
  text: 'New Element',
};

export const presentationReducer = (state: Slide[], action: PresentationAction) => {
  switch (action.type) {
    case 'SELECT_SLIDE':
      return state.map((slide) => ({
        ...slide,
        isSelected: slide.id === action.payload.slideId,
      }));

    case 'CREATE_ELEMENT':
      return state.map((slide) => {
        if (slide.id === action.payload.slideId) {
          return {
            ...slide,
            elements: [
              ...slide.elements,
              {
                ...newSlideElement,
                id: slide.elements.length + 1,
              },
            ],
          };
        }
        return { ...slide };
      });

    case 'UPDATE_ELEMENT':
      return state.map((slide) => {
        if (slide.id === action.payload.slideId) {
          return {
            ...slide,
            elements: slide.elements.map((element) => {
              if (element.id === action.payload.elementId) {
                return {
                  ...action.payload.updatedElement,
                };
              }
              return { ...element };
            }),
          };
        }
        return { ...slide };
      });

    case 'SELECT_ELEMENT':
      return state.map((slide) => {
        if (slide.id === action.payload.slideId) {
          return {
            ...slide,
            elements: slide.elements.map((element) => {
              return { ...element, isSelected: element.id === action.payload.elementId };
            }),
          };
        }
        return { ...slide };
      });

    default:
      return state;
  }
};
