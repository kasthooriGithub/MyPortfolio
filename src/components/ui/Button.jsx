function Button({ children, variant = "primary", onClick, href }) {
  const className =
    variant === "primary"
      ? "btn btn-primary me-3 text-white"
      : "btn btn-outline-secondary";

  if (href) {
    return (
      <a href={href} className={className} download>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
