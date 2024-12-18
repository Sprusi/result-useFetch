import React, { useRef } from "react";
import styles from "./TextInput.module.css";

export const TextInput = ({
  style,
  value,
  label,
  placeholder,
  description,
  error,
  variant = "default",
  disabled = false,
  required = false,
  size = "sm",
  radius = "sm",
  ...otherProp
}) => {
  const inputRef = useRef(null);

  const onLabelClick = () => {
    if (!disabled) inputRef.current?.focus();
  };

  const inputClasses = [
    error && styles.errorInput,
    variant === "filled" && styles.variantFilled,
    variant === "unstyled" && styles.variantUnstyled,
    disabled && styles.disabledInput,
    size === "xs" && styles.sizeXs,
    size === "md" && styles.sizeMd,
    size === "lg" && styles.sizeLg,
    size === "xl" && styles.sizeXl,
    radius === "xs" && styles.radiusXs,
    radius === "md" && styles.radiusMd,
    radius === "lg" && styles.radiusLg,
    radius === "xl" && styles.radiusXl,
  ]
    .filter(Boolean)
    .join(" ");

  const labelClasses = [
    styles.label,
    size === "xs" && styles.sizeXs,
    size === "md" && styles.sizeMd,
    size === "lg" && styles.sizeLg,
    size === "xl" && styles.sizeXl,
  ]
    .filter(Boolean)
    .join(" ");

  const descriptionClasses = [
    styles.description,
    size === "xs" && styles.sizeXs,
    size === "md" && styles.sizeMd,
    size === "lg" && styles.sizeLg,
    size === "xl" && styles.sizeXl,
  ]
    .filter(Boolean)
    .join(" ");

  const errorClasses = [
    styles.error,
    size === "xs" && styles.sizeXs,
    size === "md" && styles.sizeMd,
    size === "lg" && styles.sizeLg,
    size === "xl" && styles.sizeXl,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.container} style={style}>
      {label && (
        <label onClick={onLabelClick} className={labelClasses}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {description && <p className={descriptionClasses}>{description}</p>}
      <input
        ref={inputRef}
        value={value}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        {...otherProp}
      />
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
};
