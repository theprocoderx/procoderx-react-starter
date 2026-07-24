import {
  AccordionPlayground,
  AlertPlayground,
  AvatarPlayground,
  BadgePlayground,
  BreadcrumbPlayground,
  ButtonPlayground,
  CardPlayground,
  CheckboxPlayground,
  InputPlayground,
  LabelPlayground,
  RadioPlayground,
  SelectPlayground,
  SeparatorPlayground,
  SwitchPlayground,
  TextareaPlayground,
} from './';

const Playground = () => {
  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 md:gap-6 md:px-6 md:py-10'>
      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight text-(--text) md:text-5xl'>Component Playground</h1>
        <p className='max-w-3xl text-base text-(--text-muted) md:text-lg'>
          Interactive development environment for manually verifying every component before documentation,
          testing, and release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Component Playgrounds */}
      {/* ====================================================== */}

      {/* <ButtonPlayground />

      <InputPlayground />

      <LabelPlayground />
      <RadioPlayground />
      <CheckboxPlayground />
      <SwitchPlayground />
      <TextareaPlayground /> */}
      {/* <SelectPlayground /> */}
      {/* <BadgePlayground /> */}
      {/* <AlertPlayground /> */}
      {/* <AvatarPlayground /> */}
      {/* <CardPlayground /> */}
      {/* <AccordionPlayground /> */}
      {/* <SeparatorPlayground /> */}
      <BreadcrumbPlayground />
    </section>
  );
};

export default Playground;
