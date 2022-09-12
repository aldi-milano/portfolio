import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './works.scss';

import logo from '../../assets/alpaca/alpaca-logo.png';

function Works() {
  return (
    <>
      <section className='works'>
        <article className='work'>
          <div className='work__title'>
            <h1 className='title'>Thing(s) I’ve built</h1>
            <div className='line'></div>
          </div>
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={{ type: 'fraction' }}
            modules={[Navigation, EffectFade, Pagination]}
            effect={'fade'}
            className='mySwiper'
            // pagination={{ type: 'fraction' }}
          >
            <SwiperSlide>
              <div className='showcase showcase-1'>
                <div className='showcase__picture'>
                  <img src={logo} alt='logo alpaca' className='logo-alpaca' />
                </div>
                <div className='showcase__desc'>
                  <div className='description'>
                    <h2 className='title-alpaca'>Alpaca</h2>
                    <p>
                      Fictional E-Commerce using{' '}
                      <a href='https://fakestoreapi.com/'>Fakestore</a> API
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='showcase showcase-2'>
                <div className='showcase__desc'>
                  <div className='description'>
                    <h2 className='title-alpaca'>Alpaca</h2>
                    <p>
                      Fictional E-Commerce using{' '}
                      <a href='https://fakestoreapi.com/'>Fakestore</a> API
                    </p>
                  </div>
                </div>
                <div className='showcase__picture'>
                  <img src={logo} alt='logo alpaca' className='logo-alpaca' />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
}

export default Works;
