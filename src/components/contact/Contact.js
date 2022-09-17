import './contact.scss';

import cat from '../../assets/ilustration/cat.png';

function Contact() {
  return (
    <>
      <div className='container-title'>
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
                new career opportunities in the Web Development with my
                background area in the Front-End Development.
              </p>
              <p className='desc'>
                If you think we might be a good fit for one another or I'm
                qualified for certain requirements you're looking for. Please,
                don't hesitate to reach me out by clicking on these icon below.
              </p>
            </div>

            <div className='contact__content-icon'>
              <a href='mailto:milano.aldi@gmail.com' className='link-icon'>
                <img
                  src='https://img.icons8.com/color/48/000000/gmail--v1.png'
                  className='icon email'
                />
              </a>
              <a href='https://wa.me/628999253350' className='link-icon'>
                <img
                  src='https://img.icons8.com/fluency/48/000000/whatsapp.png'
                  className='icon whatsapp'
                />
              </a>
              <a
                href='https://www.facebook.com/milano.aldi.1'
                className='link-icon'
              >
                <img
                  src='https://img.icons8.com/color/48/000000/facebook-new.png'
                  className='icon facebook'
                />
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
