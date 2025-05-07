// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination , Autoplay } from 'swiper/modules';
import './styles.css';
import { img1, img10, img11, img12, img13, img14 } from '../assets';

const Serveices = () => {
    const data = [
        { id: 0 , title: "Machine Brain" , img: img1},
        { id: 1 , title: "Machine Dentist", img: img10},
        { id: 2 , title: "Machine Air", img: img11},
        { id: 3 , title: "Machine Heart", img: img12},
        { id: 4 , title: "Magnatic Ranen", img: img13},
        { id: 5 , title: "Compelete Machine", img: img14},
    ]
    return (
        <section className="bg-[#EEECF8] pt-15!">
            <div className="loading mx-[5%]! py-10!">
                <div className="container mx-auto!">
                    <div className="text-2xl font-bold flex justify-center mb-5!">OUR SERVICES</div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            700: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                            
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination , Autoplay]}
                        className="mySwiper w-[80%]"
                    >
                        {data.map(item => (
                            <SwiperSlide key={item.id} className='bg-white rounded-3xl'>
                                <img className='rounded-3xl w-full h-[250px] mb-3!' src={item.img} alt="Image-Error" />
                                <h3 className='mb-3!'>{item.title}</h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Serveices