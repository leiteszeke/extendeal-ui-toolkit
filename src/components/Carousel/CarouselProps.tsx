export interface CarouselProps {
  classes?: {
    container?: string;
    content?: string;
    footer?: string;
    slideContent?: string;
  };
  content?: Array<SlideProps>;
  canNext?: boolean;
  renderSlide: Function;
}

export interface SlideProps {
  activeIndex: number;
  index: number;
  classes?: {
    container?: string;
    content?: string;
    footer?: string;
    slideContent?: string;
  };
  slide: React.ReactNode;
}

export const defaultProps = {
  classes: {
    container: '',
    content: '',
    footer: '',
    slideContent: '',
  },
  content: [],
};
