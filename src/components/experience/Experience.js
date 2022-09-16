import './experience.scss';

// import notFound from '../../assets/ilustration/undraw_page_not_found_re_e9o6.svg';
import notFound from '../../assets/ilustration/undraw_under_construction_-46-pa.svg';
// import notFound from '../../assets/ilustration/undraw_multitasking_re_ffpb.svg';

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
