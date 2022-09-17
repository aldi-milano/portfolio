import './achievment.scss';

import certificate from '../../assets/certificate/certificate.jpg';
import letter from '../../assets/certificate/letter.jpg';

function Achievment() {
  return (
    <>
      <section className='achievment'>
        <article className='achievment__content'>
          <div className='achievment__content-title'>
            <h1 className='title'>Achievment</h1>
          </div>
          <div className='achievment__content-achievment'>
            <div className='certificate'>
              <img src={letter} alt='letter' className='img' />
              <h2>Letter of Recomendation</h2>
              <p>Best bootcamp participants by Jasa Raharja.</p>
            </div>
            <div className='certificate'>
              <img src={certificate} alt='letter' className='img' />
              <h2>Certificate Completion with Honors</h2>
              <p>
                Has given for the best participants Front-End Web Development
                bootcamp program.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Achievment;
