import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonial() {
    const clients =[
        {
        img: profilePic1,
        reviews: 
        " Working with Francis was a game-changer for our business!,took our vision and turned it into a stunning website"
        },
        {
        img: profilePic2,
        reviews: 
            "We approached him with a tight deadline and a complex set of requirements and he not only delivered on time but also surpassed our expectations "
        },
            {
        img: profilePic3,
        reviews: 
        " The post-launch support has been exceptional, and we continue to receive compliments on our site's design."
                },
     {
        img: profilePic4,
        reviews: 
        " We are extremely pleased with the professional and efficient service provided, from the initial consultation to the final launch"
              }
    ];
  return (
    <div className='t-wrapper'>
    <div className='t-heading'>
        <span>Clients always get</span> <br/>
        <span>Exceptional Work</span><br/>
        <span>from me...</span>
        <div className='blur t-blur1' style={{
            ackground: "var(--purple)"}}></div>
        <div className='blur t-blur2' style={{
            background: "styblue"}}></div>
    </div>

        {/* Slider */}
        <Swiper
        modules={[]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((clients, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={clients.img} alt=''/>
                        <span>{clients.reviews}</span>
                        </div>
                    </SwiperSlide>
                )
            }
            )}
        </Swiper>

    </div>
  )
}

export default Testimonial