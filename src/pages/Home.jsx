import { useState } from "react";
import { Link } from "react-router-dom";
import { apps } from "../data/apps";
import Icon from "../components/Icon";

export default function Home() {
  const [q, setQ] = useState("");
  const list = apps.filter((a) => a.name.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <>
      <h1>تطبيقاتنا</h1>
      <input className="search" placeholder="ابحث عن تطبيق" value={q} onChange={(e) => setQ(e.target.value)} />
      {list.length === 0 && <p className="muted">لا توجد تطبيقات بهذا الاسم.</p>}
      <div className="grid">
        {list.map((a) => (
          <Link key={a.id} to={`/app/${a.id}`} className="card">
            <Icon app={a} />
            <div>
              <h3>{a.name}</h3>
              <p className="muted">{a.tagline}</p>
              <small>{Object.keys(a.platforms).length > 1 ? "متعدد المنصات" : "أندرويد"}</small>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
