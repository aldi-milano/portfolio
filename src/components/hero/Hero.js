import './hero.scss';

function Hero() {
  return (
    <div className='background'>
      <section class='hero'>
        <div class='hero__container'>
          <h1 class='header'>
            ALDI MILANO <span class='header__separator'>|</span>
            <span class='header__position'>FRONT-END DEV</span>
          </h1>
          <p>
            and<span class='quotation-mark'>,</span>
          </p>
          <h1 className='condition'>
            I<span className='quotation-mark'>’</span>m{' '}
            <span className='disabled'>Disabled.</span>
          </h1>
        </div>
        <div className='hero__paragraph'>
          <p className='paragraph'>
            A Freshman, have none experience prior in the software industry.
            Having a huge passionate and curiosity about web development. Eager
            to make his first step up to take a long journey as a web developer.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
