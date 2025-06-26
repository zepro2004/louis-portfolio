import { Card, SkillTag, SkillTagContainer } from '../ui';

/**
 * Skill Category component for displaying grouped skills
 */
export default function SkillCategory({ 
  title,
  icon,
  skills = [],
  style = {},
  ...props 
}) {
  const categoryStyle = {
    textAlign: 'center',
    ...style
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '1rem'
  };

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block'
  };

  return (
    <Card style={categoryStyle} {...props}>
      {icon && <span style={iconStyle}>{icon}</span>}
      <h3 style={titleStyle}>{title}</h3>
      <SkillTagContainer>
        {skills.map((skill, index) => (
          <SkillTag key={index}>
            {skill}
          </SkillTag>
        ))}
      </SkillTagContainer>
    </Card>
  );
}
