import SectionTitle from './ui/SectionTitle';
import SkillBadge from './ui/SkillBadge';

const skills = [
  'React',
  'Laravel',
  'Node.js',
  'Express',
  'TypeScript',
  'JavaScript',
  'PHP',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'Tailwind CSS',
  'Git',
  'Next.js',
  'Vue.js',
  'Redis',
  'MongoDB',
  'REST APIs',
  'GraphQL',
];

export default function SkillsCard() {
  return (
    <div>
      <SectionTitle delay={0.1}>Skills & Technologies</SectionTitle>
      <div className="glass rounded-xl p-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <SkillBadge key={skill} name={skill} delay={i * 0.02} />
          ))}
        </div>
      </div>
    </div>
  );
}
