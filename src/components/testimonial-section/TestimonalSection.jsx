import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import anishaAvatar from '/images/avatars/avatar-anisha.png';
import aliAvatar from '/images/avatars/avatar-ali.png';
import richardAvatar from '/images/avatars/avatar-richard.png'; 
import shanaiAvatar from '/images/avatars/avatar-shanai.png';
import CTA from '../cta-buttons/CTA';
import './style.css';
import testimonialsData from '../../data/data.json';


function TestimonalSection() {
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className="mb-[10vh]">
      <h1 className="text-center text-primary-blue font-bold text-3xl">What they've said</h1>
      <div className="mb-4">
        <Carousel responsive={responsive} className="carousel" itemClass="carousel-item-padding-40-px">
          {
            testimonialsData.map((testimonial, index) => (
              <div className="mr-8 p-4">
                <Card 
                  key={index}
                  image={testimonial.imagePath} 
                  name={testimonial.name} 
                  paragraph={testimonial.testimonial} 
                />
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className="flex justify-center">
        <CTA buttonType={"primary"} />
      </div>
    </div>
  )
}

export default TestimonalSection