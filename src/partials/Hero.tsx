import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello there, I'm <GradientText>Davide Trovisco</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a{' '}
          <a className="text-cyan-400" href="/">
            Software Engineer,
          </a>{' '}
          <a className="text-cyan-400" href="/">
            FullStack Developer
          </a>{' '}
          and{' '}
          <a className="text-cyan-400" href="/">
            App Developer.{' '}
          </a>{' '}
          I specialize in crafting intuitive solutions, merging creativity with
          functionality. Let's embark on a journey to design seamless digital
          experiences!
        </>
      }
      avatar={
        <img
          src="/assets/images/profile-img.png"
          alt="Avatar image"
          loading="lazy"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="border-3 w-64 rounded-md border"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/davide-trovisco-440b5717a/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/davidtrovisco/">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <a href="https://play.google.com/store/apps/">
            <HeroSocial
              src="https://img.icons8.com/?size=256&id=s9k2rXOtb7lB&format=png"
              alt="Google Play Apps"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
