import { useState } from 'react';
import styles from './MagicSelect.module.css';

export default function MagicSelect({
  className,
  defaultOption,
  options = [],
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const label = focused ? 'raw' : 'brief';

  return (
    <div className={styles.container}>
      <select
        aria-label="Estado"
        className={className}
        defaultValue={defaultOption?.value}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        required={required}
      >
        {defaultOption && (
          <option value={defaultOption.value}>{defaultOption[label]}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option[label]}
          </option>
        ))}
      </select>
    </div>
  );
}
