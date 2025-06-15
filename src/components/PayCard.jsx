import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PayCard() {
  return (
    <div>
      <div className="swiper-container relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
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
            <div className="px-11 py-10 border border-[#FFE492] my-auto h-fit max-w-[450px] mx-auto">
              <p className="font-semibold text-2xl">Free</p>
              <p className="font-bold text-4xl py-6">$0</p>
              <p className="font-medium">Capture ideas and find them quickly</p>

              <ul className='list-image-[url("/images/Icon.png")] py-6 '>
                <li className="pl-4 pb-7">Sync unlimited devices</li>
                <li className="pl-4 pb-7">10 GB monthly uploads</li>
                <li className="pl-4 pb-7">200 MB max. note size</li>
                <li className="pl-4 pb-7">
                  Customize Home dashboard and access extra widgets
                </li>
                <li className="pl-4 pb-7">
                  Connect primary Google Calendar account
                </li>
                <li className="pl-4 pb-7">
                  Add due dates, reminders, and notifications to your tasks
                </li>
              </ul>

              <button className="w-[168px] h-[51px] border border-[#FFE492] rounded-lg cursor-pointer">
                Get Started
              </button>
            </div>
          </SwiperSlide>

          {/* Second Card */}

          <SwiperSlide>
            <div className="px-11 py-20 bg-[#043873] text-white max-w-[450px] mx-auto">
              <p className="font-semibold text-2xl">Personal</p>
              <p className="font-bold text-4xl py-6 text-[#FFE492]">$11.99</p>
              <p className="font-medium">Keep home and family on track</p>

              <ul className='list-image-[url("/images/Icon-yellow.png")] py-6'>
                <li className="pl-4  pb-7">Sync unlimited devices</li>
                <li className="pl-4  pb-7">10 GB monthly uploads</li>
                <li className="pl-4  pb-7">200 MB max. note size</li>
                <li className="pl-4  pb-7">
                  Customize Home dashboard and access extra widgets
                </li>
                <li className="pl-4  pb-7">
                  Connect primary Google Calendar account
                </li>
                <li className="pl-4  pb-7">
                  Add due dates, reminders, and notifications to your tasks
                </li>
              </ul>

              <button className="w-[168px] h-[51px] bg-[#4F9CF9] rounded-lg cursor-pointer">
                Get Started
              </button>
            </div>
          </SwiperSlide>

          {/* Third Card */}

          <SwiperSlide>
            <div className="px-11 py-10 border border-[#FFE492] h-fit my-auto  max-w-[450px] mx-auto">
              <p className="font-semibold text-2xl">Organization</p>
              <p className="font-bold text-4xl py-6">$49.99</p>
              <p className="font-medium">Capture ideas and find them quickly</p>

              <ul className='list-image-[url("/images/Icon.png")] py-6'>
                <li className="pl-4  pb-7">Sync unlimited devices</li>
                <li className="pl-4  pb-7">10 GB monthly uploads</li>
                <li className="pl-4  pb-7">200 MB max. note size</li>
                <li className="pl-4  pb-7">
                  Customize Home dashboard and access extra widgets
                </li>
                <li className="pl-4  pb-7">
                  Connect primary Google Calendar account
                </li>
                <li className="pl-4  pb-7">
                  Add due dates, reminders, and notifications to your tasks
                </li>
              </ul>

              <button className="w-[168px] h-[51px] border border-[#FFE492] rounded-lg cursor-pointer">
                Get Started
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PayCard;
