import './achievment.scss';

import certificate from '../../assets/certificate/certificate.jpg';
import letter from '../../assets/certificate/letter_revision.jpg';

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
              <p>
                For having proven with satisfactory results and attitude
                throughout programme bootcamp by Jasa Raharja.
              </p>
            </div>
            <div className='certificate'>
              <img src={certificate} alt='letter' className='img' />
              <h2>Certificate Completion with Honors</h2>
              <p>
                Was given for the best Front-End Web Development bootcamp
                participants programme by Jasa Raharja.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Achievment;
