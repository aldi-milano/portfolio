import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './works.scss';

import logo from '../../assets/alpaca/alpaca-logo.png';
import homepage from '../../assets/alpaca/homepage.png';
import checkout from '../../assets/alpaca/checkout.png';
import profile from '../../assets/alpaca/profile.png';

function Works() {
  return (
    <>
      <section className='works'>
        <article className='work'>
          <div className='work__title'>
            <h1 className='title'>
              <span>Things I built</span>
            </h1>
          </div>
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={true}
            modules={[Navigation, EffectFade, Pagination]}
            effect={'fade'}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='showcase showcase-1'>
                <div className='showcase__picture'>
                  <img src={logo} alt='logo alpaca' className='logo-alpaca' />
                </div>
                <div className='showcase__desc'>
                  <div className='description'>
                    <h2 className='title'>Alpaca</h2>
                    <p>
                      Fictional E-Commerce using{' '}
                      <a href='https://fakestoreapi.com/'>Fakestore</a> API.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='showcase showcase-2'>
                <div className='showcase__desc'>
                  <div className='description'>
                    <h2 className='title'>About The Project</h2>
                    <p className='about-desc'>
                      This simple fictional <em>so-called</em> E-Commmerce
                      website using{' '}
                      <a href='https://fakestoreapi.com/'>Fakestore</a> API
                      which I can use to fetch data that I need to build this
                      website project.
                    </p>
                    <p className='about-desc'>
                      On this website you can get various stuff from outfit to
                      electronic. You can whether put them on the Cart or put it
                      in the Wishlist, whatever you desire, and doing simulation
                      transactional after that.
                    </p>
                    <p className='about-desc'>
                      Through this project I tried to hone my knowledge about
                      Front-End technologies that I've been learning for over
                      past a year.
                    </p>
                    <a href='https://alpaca-store.netlify.app/'>Visit Site</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='showcase showcase-3'>
                <div className='showcase__desc'>
                  <div className='description'>
                    <h2 className='title'>Technical</h2>
                    <p>
                      The Front-End development of the website has been made
                      with React. The web design is simple yet elegant with 2
                      main color, black and white.
                    </p>
                  </div>
                  <div className='stack'>
                    <img
                      src='https://img.icons8.com/color/48/000000/javascript--v1.png'
                      alt='javascript logo'
                    />
                    <img
                      src='https://img.icons8.com/color/48/000000/react-native.png'
                      alt='react logo'
                    />
                    <img
                      src='https://img.icons8.com/color/48/000000/sass.png'
                      alt='sass logo'
                    />
                    <img src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className='showcase showcase-4'>
                <div className='showcase__picture'>
                  <div className='homepage-display'>
                    <img
                      src={homepage}
                      alt='homepage display'
                      className='homepage'
                    />
                  </div>
                  <div className='profile-display'>
                    <img
                      src={profile}
                      alt='profile display'
                      className='profile'
                    />
                  </div>
                  <div className='checkout-display'>
                    <img
                      src={checkout}
                      alt='checkout display'
                      className='checkout'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className='showcase showcase-5'>
                <div className='showcase__picture'>
                  <div className='checkout-display'>
                    <img
                      src={checkout}
                      alt='checkout display'
                      className='checkout'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </article>
      </section>
    </>
  );
}

export default Works;
