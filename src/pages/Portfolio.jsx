import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <>
      <h1>خدمات أنجزناها</h1>
      {projects.length === 0 && <p className="muted">سنضيف أعمالنا هنا قريبًا.</p>}
      <div className="grid">
        {projects.map((p) => (
          <div key={p.title} className="card col">
            {p.image && <img className="cover" src={p.image} alt="" loading="lazy" />}
            <h3>{p.title}</h3>
            {p.client && <small>{p.client}</small>}
            <p className="muted">{p.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
