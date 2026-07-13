import { ButtonPlayground, InputPlayground, LabelPlayground } from './';

const Playground = () => {
  return (
    <main className='mx-auto flex max-w-7xl flex-col gap-16 px-6 py-10'>
      <header className='space-y-3'>
        <h1 className='text-4xl font-bold text-(--text)'>Component Playground</h1>

        <p className='max-w-3xl text-(--text-muted)'>
          Interactive development environment for manually verifying every component before documentation,
          testing, and release.
        </p>
      </header>

      <ButtonPlayground />

      <InputPlayground />

      <LabelPlayground />
    </main>
  );
};

export default Playground;
