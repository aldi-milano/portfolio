import './experience.scss';

import notFound from '../../assets/ilustration/undraw_under_construction_-46-pa.svg';

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
        </article>
      </section>
    </>
  );
}

export default Experience;
