import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function SliderImage(){
    return(
        <Swiper style={{width:'300px',height:'300px'}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide >
            <img src="https://picsum.photos/200/300/" alt="uno"  />
        </SwiperSlide>
        <SwiperSlide >
        <img src="https://picsum.photos/200/300/" alt="uno" />
        </SwiperSlide>
        <SwiperSlide >
        <img src="https://picsum.photos/200/300/" alt="uno" />
        </SwiperSlide>
        <SwiperSlide >
        <img src="https://picsum.photos/200/300/" alt="uno" />
        </SwiperSlide>
      </Swiper>
    )
}