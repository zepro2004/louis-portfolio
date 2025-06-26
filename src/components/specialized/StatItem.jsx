import { Card } from '../ui';

/**
 * Stat Item component for displaying statistics
 */
export default function StatItem({ 
  number,
  label,
  style = {},
  ...props 
}) {
  const itemStyle = {
    textAlign: 'center',
    padding: 'var(--spacing-lg)',
    minWidth: '100px',
    cursor: 'pointer',
    ...style
  };

  const numberStyle = {
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--primary-color)',
    display: 'block'
  };

  const labelStyle = {
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)',
    marginTop: 'var(--spacing-xs)'
  };

  return (
    <Card style={itemStyle} {...props}>
      <span style={numberStyle}>{number}</span>
      <div style={labelStyle}>{label}</div>
    </Card>
  );
}
