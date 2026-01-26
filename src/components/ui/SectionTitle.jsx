function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && <p className="text-white-50">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
