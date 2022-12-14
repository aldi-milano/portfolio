import './contact.scss';

import cat from '../../assets/ilustration/cat.png';

function Contact() {
  return (
    <>
      <div id='contact' className='container-title'>
        <div className='contact__content-title'>
          <h1 className='title'>Get In Touch</h1>
        </div>
      </div>
      <section className='container'>
        <div className='contact'>
          <article className='contact__content'>
            <div className='contact__content-description'>
              <p className='desc'>
                Hello Hello 👋 Thanks for stopping by. I'm currently looking for
                new career opportunities in the web development industry with my
                background area in the front-end development.
              </p>
              <p className='desc'>
                If you think we might be a good fit for one another or I'm
                qualified for particular requirements you're looking for, or
                even if you have any further question in your head? Please, feel
                free, don't hesitate to reach me out on my contact below.
              </p>
            </div>

            <div className='contact__content-icon'>
              <a href='mailto:milano.aldi@gmail.com' className='link-icon'>
                <img
                  src='https://img.icons8.com/color/48/000000/gmail--v1.png'
                  className='icon email'
                />
                milano.aldi@gmail.com
              </a>
              <a href='https://wa.me/628999253350' className='link-icon'>
                <img
                  src='https://img.icons8.com/fluency/48/000000/whatsapp.png'
                  className='icon whatsapp'
                />
                +628999253350
              </a>
            </div>
          </article>
          <aside>
            <img src={cat} alt='cat image' className='cat' />
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;
