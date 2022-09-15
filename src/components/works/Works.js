import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Keyboard, Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './works.scss';

import logo from '../../assets/alpaca/alpaca-logo.png';
import homepage from '../../assets/screenshoot/homepage.png';
import profile from '../../assets/screenshoot/profile.png';
import checkout from '../../assets/screenshoot/checkout.png';
import item from '../../assets/screenshoot/item.png';
import itemM from '../../assets/screenshoot/mobile/item.jpg';
import homepageM from '../../assets/screenshoot/mobile/homepage.jpg';
import checkoutM from '../../assets/screenshoot/mobile/checkout.jpg';
import mixM from '../../assets/screenshoot/mobile/mix.jpg';
import logoM from '../../assets/screenshoot/mobile/alpaca-logo.png';

function Works() {
  return (
    <>
      <section className='works'>
        <article className='content__works'>
          <div className='container-title'>
            <div className='content__works-title'>
              <h1 className='title'>Thing(s) I Built</h1>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Navigation, EffectFade, Pagination, Keyboard]}
            effect={'fade'}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='slide slide-1'>
                <div className='slide__logo'>
                  <img src={logoM} alt='alpaca logo' className='logo' />
                </div>
                <div className='slide__desc'>
                  <h1 className='title'>Alpaca</h1>
                  <p>
                    Fictional store using{' '}
                    <a href='https://fakestoreapi.com/'>Fakestore</a> API
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide slide-2'>
                <div className='description'>
                  <h2 className='title'>About The Project</h2>
                  <p className='about-desc'>
                    This simple fictional <em>so-called</em> E-Commmerce website
                    using <a href='https://fakestoreapi.com/'>Fakestore</a> API
                    which I can use to fetch data that I need to build this
                    website project.
                  </p>
                  <p className='about-desc'>
                    On this website you can get various stuff from outfit to
                    electronic. You can whether put them in the Cart or put it
                    in the Wishlist, whatever you desire, and doing simulation
                    transactional after that.
                  </p>
                  <p className='about-desc'>
                    Through this project I tried to hone my knowledge about
                    Front-End technologies that I've been learning for over past
                    a year.
                  </p>
                  <a href='https://alpaca-store.netlify.app/'>Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide slide-3'>
                <div className='slide__desc'>
                  <div className='description'>
                    <h2 className='title'>Technical</h2>
                    <p>
                      The Front-End development of the website has been made
                      with React and SCSS which quite effective and keep things
                      neat with help of Mixin, Variable, Nesting, etc. I like
                      the design keep simple with just 2 main color, which black
                      and white.
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
            <SwiperSlide>
              <div className='slide slide-4'>
                <SwiperSlide>
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className='swiper-2'
                  >
                    <SwiperSlide>
                      <div className='slide__picture-desktop'>
                        <img
                          src={logo}
                          alt='logo alpaca'
                          className='logo-alpaca-real'
                        />
                      </div>
                      <div className='slide__picture-mobile'>
                        <img
                          src={logoM}
                          alt='logo alpaca'
                          className='logo-mobile'
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='slide__picture-desktop'>
                        <img
                          src={homepage}
                          alt='logo alpaca'
                          className='logo-alpaca'
                        />
                      </div>
                      <div className='slide__picture-mobile'>
                        <img
                          src={homepageM}
                          alt='logo alpaca'
                          className='screenshoot-mobile'
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='slide__picture-desktop'>
                        <img
                          src={profile}
                          alt='logo alpaca'
                          className='logo-alpaca'
                        />
                      </div>
                      <div className='slide__picture-mobile'>
                        <img
                          src={itemM}
                          alt='logo alpaca'
                          className='screenshoot-mobile'
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='slide__picture-desktop'>
                        <img
                          src={item}
                          alt='logo alpaca'
                          className='logo-alpaca'
                        />
                      </div>
                      <div className='slide__picture-mobile'>
                        <img
                          src={checkoutM}
                          alt='logo alpaca'
                          className='screenshoot-mobile'
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='slide__picture-desktop'>
                        <img
                          src={checkout}
                          alt='logo alpaca'
                          className='logo-alpaca'
                        />
                      </div>
                      <div className='slide__picture-mobile'>
                        <img
                          src={mixM}
                          alt='logo alpaca'
                          className='screenshoot-mobile'
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
}

export default Works;
