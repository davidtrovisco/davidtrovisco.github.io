import { GradientText, Project, Section } from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        My <GradientText>Professional Skills</GradientText>
      </>
    }
  >
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      {/* Card 1 */}
      <Project
        name="Software Development"
        link="https://seu-link-aqui"
        description={
          <span className="text-white">
            <p>
              Demonstrating significant proficiency in both functional and
              object-oriented programming, I have a wide-ranging expertise in
              programming languages, including:
            </p>
            <span className="text-cyan-400">
              <p style={{ fontWeight: 'bold' }}>
                C/C++, C#, HTML5, CSS, JavaScript.
              </p>
            </span>
          </span>
        }
        img={{
          src: 'https://img.icons8.com/?size=1000&id=dcP07MTsJKm9&format=png',
          alt: 'Web Development',
        }}
        category={<></>}
      />

      {/* Card 2 */}
      <Project
        name="FullStack Developer"
        link="https://seu-link-aqui"
        description={
          <span className="text-white">
            <p>
              Demonstrating significant proficiency in both functional and
              object-oriented programming, I have a wide-ranging expertise in
              programming languages, including:
            </p>
            <span className="text-cyan-400">
              <p style={{ fontWeight: 'bold' }}>
                .Net/.Net Core, ASP.Net Web API, SaaS, Razor/Blazor and
                Bootstrap Framework
              </p>
            </span>
          </span>
        }
        img={{
          src: 'https://img.icons8.com/?size=1000&id=Bvw1MpqGTPxI&format=png',
          alt: 'Web Development',
        }}
        category={<></>}
      />
    </div>

    <div
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}
    >
      {/* Card 3 */}
      <Project
        name="Mobile App Development"
        link="https://seu-link-aqui"
        description={
          <span className="text-white">
            <p>
              I have a strong interest in UI/UX and possess significant
              experience in developing mobile/web applications, various
              frameworks, including:
            </p>
            <span className="text-cyan-400">
              <p style={{ fontWeight: 'bold' }}>
                Android, Kotlin, ReactNative, Vue.js, Flutter, Angular,
                Bootstrap Framework
              </p>
            </span>
          </span>
        }
        img={{
          src: 'https://img.icons8.com/?size=1000&id=YGap766vgNOU&format=png',
          alt: 'Web Development',
        }}
        category={<></>}
      />
    </div>
  </Section>
);

export { ProjectList };
