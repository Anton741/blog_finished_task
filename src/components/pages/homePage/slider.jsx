import {useEffect, useState} from 'react'
import SliderArticles from '../../articlesWrappers/sliderArticles';
import _ from 'lodash';


const Slider = ({articles, authors}) => {
  const countSlides = _.range(1, articles.length+ 1);
  const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
    setInterval(() => {
        setActiveIndex((current) => {
            const res = current === articles.length - 1 ? 0 : current + 1
            return res
        })
    }, 9000)
    return () => clearInterval()
}, [])
const prevImgIndex = activeIndex ? activeIndex - 1 : articles.length - 1
const nextImgIndex = activeIndex === articles.length - 1 ? 0 : activeIndex + 1
  return (
    <div className="slider">
      <div className="arrow__prev" onClick = {() => setActiveIndex(prevImgIndex)}></div>
      <div className="sliders">
        <div className="slider-img slider-img-prev" key={prevImgIndex}>
          <SliderArticles article={articles[prevImgIndex]} />
        </div>
        <div className="slider-img" key={activeIndex}>
          <SliderArticles article={articles[activeIndex]} />
        </div>
        <div className="slider-img slider-img-next" key={nextImgIndex}>
          <SliderArticles article={articles[nextImgIndex]} />
        </div>
      </div>
      <div className="arrow__next" onClick = {() => setActiveIndex(nextImgIndex)}></div>
      <div className="slider__pagination">
        {countSlides.map(slideNumber => {
          return (
            <div className={
                activeIndex + 1 === slideNumber
                  ? 'pagination-slider__slide pagination-slider__slide-active'
                  : 'pagination-slider__slide'
              } onClick = {() => setActiveIndex(slideNumber-1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
export default Slider;