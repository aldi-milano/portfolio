import './hero.scss';

function Hero() {
  return (
    <div>
      <section class='hero'>
        <div class='hero__container'>
          <h1 class='header'>
            ALDI MILANO <span class='header__separator'>|</span>
            <span class='header__position'>FRONT-END DEV</span>
          </h1>
          <p>
            and<span class='coma'>,</span>
          </p>
          <h1 className='condition'>
            I'M <span>DISABLED</span>
          </h1>
        </div>
        <p className='hero__paragraph'></p>
      </section>
    </div>
  );
}

export default Hero;
