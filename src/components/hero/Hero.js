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
            I Am <span>Disabled</span>
          </h1>
        </div>
        <div className='hero__paragraph'>
          <p className='paragraph'>
            An ordinary man who has a huge passionate and curiosity about Web
            Development. Makes his first step up to take a journey as a real Web
            Developer.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
