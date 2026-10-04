import { useState } from "react";
import { Link } from "react-router-dom";
import { apps } from "../data/apps";
import AppCard from "../components/AppCard";

export default function Home() {
  const [q, setQ] = useState("");
  const list = apps.filter((a) => a.name.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <>
      <section className="intro">
        <h1>تطبيقات وحلول برمجية</h1>
        <p className="muted">نصمم ونطوّر تطبيقات أندرويد وتطبيقات ويب. حمّل تطبيقاتنا مباشرة أو تواصل معنا لتنفيذ مشروعك.</p>
        <div className="buttons">
          <Link className="btn" to="/contact">اطلب مشروعك</Link>
          <Link className="btn alt" to="/portfolio">أعمالنا</Link>
        </div>
      </section>

      <div className="section-head">
        <h2>التطبيقات <span className="count">{list.length}</span></h2>
        <input className="search" placeholder="ابحث عن تطبيق" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {list.length === 0 && <p className="muted">لا توجد تطبيقات بهذا الاسم.</p>}
      <div className="grid">{list.map((a) => <AppCard key={a.id} app={a} />)}</div>
    </>
  );
}
