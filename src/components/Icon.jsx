export default function Icon({ app, size = 64 }) {
  const s = { width: size, height: size, fontSize: size * 0.45 };
  return app.icon ? (
    <img className="icon" style={s} src={app.icon} alt="" loading="lazy" />
  ) : (
    <div className="icon ph" style={s} aria-hidden="true">{app.name[0]}</div>
  );
}
