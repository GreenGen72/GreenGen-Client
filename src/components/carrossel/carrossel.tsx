import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carrossel.css';
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import banner01 from '../../assets/banner01.jpg';

function Carrossel() {

    return (
        <section className="flex flex-col h-96 w-full" style={{ border: '1px solid #000' }}>
            {/*<Swiper*/}
            {/*    // install Swiper modules*/}
            {/*    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}*/}
            {/*    spaceBetween={50}*/}
            {/*    slidesPerView={1}*/}
            {/*    navigation*/}
            {/*    autoplay={{*/}
            {/*        delay: 2000,*/}
            {/*        disableOnInteraction: false,*/}
            {/*    }}*/}
            {/*    pagination={{clickable: true}}*/}
            {/*    scrollbar={{draggable: true}}*/}
            {/*    onSwiper={(swiper) => console.log(swiper)}*/}
            {/*    onSlideChange={() => console.log('slide change')}*/}
            {/*>*/}
            {/*    <SwiperSlide className='swiperConfig'><img src={banner01} alt="" className='w-full'/></SwiperSlide>*/}
            {/*    <SwiperSlide className='swiperConfig'>Slide 2</SwiperSlide>*/}
            {/*    <SwiperSlide className='swiperConfig'>Slide 3</SwiperSlide>*/}
            {/*    <SwiperSlide className='swiperConfig'>Slide 4</SwiperSlide>*/}
            {/*    ...*/}
            {/*</Swiper>*/}
        </section>
    );
}

export default Carrossel;