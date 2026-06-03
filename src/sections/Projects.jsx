import Container from '../components/common/Container';

const Projects = () => {
  return (
    <section className='py-16'>
      <Container>
        <h2>Latest Works</h2>

        <div className='grid gap-6 md:grid-cols-2'>{/* Project Cards */}</div>
      </Container>
    </section>
  );
};

export default Projects;
