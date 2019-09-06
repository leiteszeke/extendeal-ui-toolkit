// Dependencies
import * as React from 'react';
import classnames from 'classnames';
import { objects } from '@extendeal/ext-commons';
// Styled
import { Container, Content, HideableDiv, Footer } from './CarouselStyle';
// Props
import { CarouselProps, SlideProps, defaultProps } from './CarouselProps';
import { Button } from '../Buttons/Button';

const isActiveSlide = (index: number, activeIndex: number) => index === activeIndex;

const SlideContent = (props: SlideProps) => {
  return (
    <HideableDiv
      active={ isActiveSlide(props.index, props.activeIndex) }
      classes={ 'carousel__body' }
    >
      { props.slide }
    </HideableDiv>
  );
};

class Carousel extends React.PureComponent<any, any> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = { activeIndex: 0 };

    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.resetSlide = this.resetSlide.bind(this);
    this.slideButtons = this.slideButtons.bind(this);
  }

  goToPrevSlide() {
    const { activeIndex } = this.state;
    const { content, loopable } = this.props;

    if (activeIndex >= 1) {
      this.setState({ activeIndex: activeIndex - 1 });
    } else {
      if (loopable) {
        this.setState({ activeIndex: content.length - 1 });
      }
    }
  }

  goToNextSlide() {
    const { activeIndex } = this.state;
    const { content, loopable, canNext } = this.props;

    if (false === canNext) {
      return;
    }

    if (activeIndex < content.length - 1) {
      this.setState({ activeIndex: activeIndex + 1 });
    } else {
      if (loopable) {
        this.setState({ activeIndex: 0 });
      }
    }
  }

  resetSlide() {
    this.setState({ activeIndex: 0 });
  }

  slideButtons(buttons: any, index: number, activeIndex: number) {
    const validButton = (button: any) => React.isValidElement(button);
    const [prev, next] = buttons;
    const prevClick = validButton(prev) && prev.props.onClick || this.goToPrevSlide;
    const nextClick = validButton(next) && next.props.onClick || this.goToNextSlide;

    return (
        <HideableDiv active={ index === activeIndex }>
          {
            validButton(prev)
            && React.cloneElement(prev, { onClick: prevClick, key: `prev-${index}` })
          }
          {
            validButton(next)
            && React.cloneElement(next, { onClick: nextClick, key: `next-${index}` })
          }
        </HideableDiv>
    );
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (
      prevState.activeIndex !== this.state.activeIndex
      && this.props.handleSlideChange
      && typeof this.props.handleSlideChange === 'function'
    ) {
      this.props.handleSlideChange(this.state.activeIndex);
    }
  }

  render() {
    const {
      content,
      classes,
    } = { ...defaultProps, ...this.props };

    return (
      <React.Fragment>
        <Button
          classes={{ wrapper: 'carousel-reset' }}
          variant="invisible"
          onClick={ this.resetSlide }
        />

        <Container classes={ classnames('carousel', classes.container) }>
          {
            content.map((slide: any, index: number) => {
              const { activeIndex } = this.state;

              return (
                isActiveSlide(index, activeIndex)
                && (
                  <Content
                    key={ index }
                    data-slide-name={ slide.name }
                    classes={classnames(
                      'carousel__content',
                      classes.container,
                    )}
                  >
                    <SlideContent
                      classes={{ slideContent: classes.slideContent }}
                      key={ index }
                      index={ index }
                      activeIndex={ activeIndex }
                      slide={ this.props.renderSlide(slide) }
                    />

                    <Footer classes={ classnames('carousel__footer', classes.footer) }>
                      { this.slideButtons(slide.buttons, index, activeIndex) }
                    </Footer>
                  </Content>
                )
              );
            })
          }
        </Container>
      </React.Fragment>
    );
  }
}

export { Carousel };
