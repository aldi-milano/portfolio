import './experience.scss';

import notFound from '../../assets/ilustration/undraw_under_construction_-46-pa.svg';
import certificate from '../../assets/certificate/certificate.jpg';
import letter from '../../assets/certificate/letter.jpg';

function Experience() {
  return (
    <>
      <section className='experience'>
        <article className='experience__content'>
          <div className='experience__content-title'>
            <h1 className='title'>Experience</h1>
          </div>
          <div className='experience__content-detail'>
            <div className='ilustration-container'>
              <img
                src={notFound}
                alt='ilustration not found'
                className='ilustration'
              />
            </div>
            <p>Experience will be added soon</p>
          </div>
          <div className='experience__content-title'>
            <h1 className='title'>Achievment</h1>
          </div>
          <div className='experience__content-achievment'>
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

export default Experience;
