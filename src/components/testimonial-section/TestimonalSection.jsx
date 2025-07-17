import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import anishaAvatar from '/images/avatars/avatar-anisha.png';
import aliAvatar from '/images/avatars/avatar-ali.png';
import richardAvatar from '/images/avatars/avatar-richard.png'; 
import shanaiAvatar from '/images/avatars/avatar-shanai.png';
import CTA from '../cta-buttons/CTA';
import './style.css';


function TestimonalSection() {

  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  const testimonials = [
    {
      image: anishaAvatar,
      name: 'Anisha Li',
      testimonial: '"Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
    },
    {
      image: aliAvatar,
      name: 'Ali Bravo',
      testimonial: '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
    },
    {
      image: richardAvatar,
      name: 'Richard Watts',
      testimonial: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!"',
    },
    {
      image: shanaiAvatar,
      name: 'Shanai Leanne',
      testimonial: '"Their software allows us to track, manage, and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive."',
    }
  ]

  return (
    <>
      <h1 className="text-center text-primary-blue font-bold text-3xl">What they've said</h1>
      <div className="mb-4">
        <Carousel responsive={responsive} className="carousel">
          {
            testimonials.map((testimonial, index) => (
              <div className="mr-8">
                <Card 
                  key={index}
                  image={testimonial.image} 
                  name={testimonial.name} 
                  paragraph={testimonial.testimonial} 
                />
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className="sm:flex sm:justify-center">
        <CTA buttonType={"primary"} />
      </div>
    </>
  )
}

export default TestimonalSection