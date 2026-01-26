function Badge({ text }) {
  return (
    <span className="badge-glass d-inline-block d-flex align-items-center gap-2 mx-auto mb-4" style={{ width: "fit-content" }}>
      <span className="p-1 rounded-circle bg-info" style={{ width: "8px", height: "8px", display: "inline-block" }}></span>
      {text}
    </span>
  );
}

export default Badge;
