"use client";

export const Checkbox = ({
  checked = false,
  className = "",
  onCheckedChange,
  ...props
}) => (
  <input
    checked={checked}
    className={`h-4 w-4 rounded border-gray-300 accent-blue ${className}`}
    data-state={checked ? "checked" : "unchecked"}
    onChange={(event) => onCheckedChange?.(event.target.checked)}
    type="checkbox"
    {...props}
  />
);
