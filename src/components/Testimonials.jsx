import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <div className="swiper-container relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-15 px-6 rounded-lg mx-auto max-w-[350px]">
            <p>
              {' '}
              <img src="images/Quote.png" alt="" />
            </p>
            <p className="mt-8 mb-10">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr />
            <div className="mt-15 flex gap-x-10">
              <div>
                <img
                  src="images/Avater.png"
                  alt=""
                  className="w-24 rounded-full"
                />
              </div>
              <div>
                <p className="mb-3.5 font-semibold text-2xl">
                  Oberon Shaw, MCH
                </p>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" py-15 px-6 bg-[#4F9CF9] rounded-lg text-white mx-auto max-w-[350px]">
            <p>
              <img src="images\Group.png" alt="" />
            </p>
            <p className="mt-8 mb-10">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr />
            <div className="mt-15 flex gap-x-10">
              <div>
                <img
                  src="images/Avater1.png"
                  alt=""
                  className="w-24 rounded-full"
                />
              </div>
              <div>
                <p className="mb-3.5 font-semibold text-2xl text-[#212529]">
                  Oberon Shaw, MCH
                </p>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-15 px-6 bg-[#4F9CF9] rounded-lg mx-auto text-white max-w-[350px]">
            <p>
              <img src="images\Group.png" alt="" />
            </p>
            <p className="mt-8 mb-10">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr />
            <div className="mt-15 flex gap-x-10">
              <div>
                <img
                  src="images/Avater2.png"
                  alt=""
                  className="w-24 rounded-full"
                />
              </div>
              <div>
                <p className="mb-3.5 font-semibold text-2xl text-[#212529]">
                  Oberon Shaw, MCH
                </p>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
