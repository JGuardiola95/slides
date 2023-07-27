import { presentationReducer } from '@/reducers/presentationReducer';
import { ReactNode, createContext, useCallback, useContext, useReducer, useRef, useState } from 'react';

type PresentationProviderValue = ReturnType<typeof usePresentationSource>;

export interface Slide {
  id: number;
  elements: SlideElement[];
  isSelected: boolean;
}

export interface SlideElement {
  id: number;
  isBold: boolean;
  isItalic: boolean;
  fontColor: string;
  fontFamily: string;
  isSelected: boolean;
  text: string;
}

export const PresentationContext = createContext<PresentationProviderValue>({} as PresentationProviderValue);

const initialSlides: Slide[] = [
  { id: 1, elements: [], isSelected: true },
  { id: 2, elements: [], isSelected: false },
];

export const usePresentationSource = () => {
  const [slides, dispatch] = useReducer(presentationReducer, initialSlides);

  const selectedSlide = slides.find((slide) => slide.isSelected)!;
  const selectedElement = selectedSlide.elements.find((el) => el.isSelected);

  const handleSlideSelect = useCallback((slideId: number) => {
    dispatch({ type: 'SELECT_SLIDE', payload: { slideId } });
  }, []);

  const handleElementCreation = useCallback(() => {
    dispatch({
      type: 'CREATE_ELEMENT',
      payload: { slideId: selectedSlide?.id },
    });
  }, [selectedSlide?.id]);

  const updateElement = useCallback(
    (elementId: number, updatedElement: SlideElement) => {
      dispatch({
        type: 'UPDATE_ELEMENT',
        payload: {
          slideId: selectedSlide?.id,
          elementId,
          updatedElement,
        },
      });
    },
    [selectedSlide?.id]
  );

  const selectElement = useCallback(
    (elementId: number) => {
      dispatch({
        type: 'SELECT_ELEMENT',
        payload: {
          slideId: selectedSlide?.id,
          elementId,
        },
      });
    },
    [selectedSlide?.id]
  );

  return {
    slides,
    handleSlideSelect,
    handleElementCreation,
    selectedSlide,
    updateElement,
    selectedElement,
    selectElement,
  };
};

export const usePresentation = () => {
  const presentationSource = useContext(PresentationContext);

  return {
    ...presentationSource,
  };
};

interface PresentationProviderProps {
  children: ReactNode;
}

export const PresentationProvider = ({ children }: PresentationProviderProps) => {
  const source = usePresentationSource();
  return <PresentationContext.Provider value={source}>{children}</PresentationContext.Provider>;
};
