import PropTypes from 'prop-types';

const DemoSection = ({ title, description, children }) => {
  return (
    <section className='space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm'>
      <header className='space-y-2'>
        <h2 className='text-2xl font-semibold text-[var(--text)]'>{title}</h2>

        {description && <p className='text-sm text-[var(--text-muted)]'>{description}</p>}
      </header>

      <div className='space-y-6'>{children}</div>
    </section>
  );
};

DemoSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DemoSection;
