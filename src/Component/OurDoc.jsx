// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { img2, img4, img5 } from '../assets';
import './styles.css';

const OurDoc = () => {
    const data = [
        { id: 0 , title: "Omar Kamal" , img: img4},
        { id: 1 , title: "Mohamed Ahmed", img: img2},
        { id: 2 , title: "Abdallah Amr", img: img5},
        { id: 3 , title: "Omar Kamal", img: img4},
        { id: 4 , title: "Mohamed Ahmed", img: img2},
        { id: 5 , title: "Abdallah Amr", img: img5}
    ]

    return (
        <section>
            <div className="mx-[5%]! pt-10!">
                <div className="container mx-auto!">
                    <div className="text-2xl font-bold flex justify-center mb-5!">OUR Doctors</div>
                    <Swiper
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper "
                    >
                        {data.map(item => (
                            <SwiperSlide key={item.id} className='bg-[#EEECF8] py-10!'>
                                <img className='h-30 w-30 rounded-full mb-5! bg-contain' src={item.img} alt="Image-Error" />
                                <h3 className='mb-2! font-bold font-mono'>Dr: {item.title}</h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurDoc