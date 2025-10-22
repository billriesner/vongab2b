'use client';

import * as React from 'react';

export type SelectOption = { label: string; value: string };

export function LabeledSelect({
  id,
  name,
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  required,
  disabled,
  helperText,
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: string;
}) {
  const helpId = helperText ? `${id}-help` : undefined;
  const errId = error ? `${id}-err` : undefined;

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-gray-700 mb-1 font-medium">
        {label}{required ? ' *' : ''}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={[helpId, errId].filter(Boolean).join(' ') || undefined}
        aria-invalid={Boolean(error) || undefined}
        required={required}
        disabled={disabled}
        className={`w-full rounded-xl bg-white text-gray-900 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-[#33BECC]/40 border border-gray-300 ${
          error ? 'ring-2 ring-red-400/60' : ''
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helperText && <p id={helpId} className="text-gray-500 text-xs">{helperText}</p>}
      {error && <p id={errId} className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
