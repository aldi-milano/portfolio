import './about.scss';

import profile from '../../assets/profille-image/portfolio.jpg';

function About() {
  return (
    <div>
      <section className='about'>
        <article className='content'>
          <div className='content__title'>
            <h1 className='title'>About Me</h1>
            <div className='line'></div>
          </div>
          <div className='content-main'>
            <div className='content__paragraph'>
              <p className='paragraph-1'>
                Hello there! Let me introduce myself. My fullname is Aldi
                Samudra Milano, I live in Bandung, Indonesia. As you read from
                my information above, I am a disabled person,{' '}
                <a href='https://www.accessibility.com/glossary/hard-of-hearing#:~:text=Hard%20of%20Hearing%20(HoH)'>
                  Hard of Hearing (HoH)
                </a>{' '}
                to be exact, because of side effect of high dose medication that
                I took for over a year. Tuberculosis had gotten me quite serious
                back then because it’s escalated to be{' '}
                <a href='https://www.who.int/news-room/questions-and-answers/item/tuberculosis-multidrug-resistant-tuberculosis-(mdr-tb)'>
                  Multidrug-resistant tuberculosis (MDR-TB)
                </a>{' '}
                around 2018-2019. Thankfully to God I withstand it and able to
                write this portfolio right now and doing things such a learning
                Web Development.
              </p>
              <p className='paragraph-2'>
                You might be wondering or asking how I’m communicating with
                others? Well, firstly I’m not completely deaf, so I can barely
                hear what people say in person, but, when it comes to devices
                such a phone, video conference, TV and any other devices, I can
                say I can’t hear them properly or nothing at all. If I may to
                explain, it’s more or less like mumbling, gibberish or static
                high pitch noise sometimes. So my comprehension best with text.
              </p>
              <p className='paragraph-3'>
                I found myself having huge passion on everything about Web
                Development, since I found its disability-friendly nature for me
                personally. And the most important thing is, I find it really
                enjoyable and fun.
              </p>
            </div>
            <div className='image-profile'>
              <img
                src={profile}
                alt='profile picture of me'
                className='profile-img'
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;
