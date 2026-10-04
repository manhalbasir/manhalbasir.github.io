import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function AppCard({ app }) {
  const apk = app.platforms.android.apk;
  return (
    <article className="app-card">
      <Link to={`/app/${app.id}`} className="app-card-head">
        <Icon app={app} size={56} />
        <div>
          <h3>{app.name}</h3>
          <span className="tag">{app.category}</span>
        </div>
      </Link>
      <p className="muted clamp">{app.description ?? app.tagline}</p>
      <dl className="meta">
        <div><dt>الإصدار</dt><dd dir="ltr">{app.version}</dd></div>
        <div><dt>الحجم</dt><dd dir="ltr">{app.sizeMB} MB</dd></div>
        {app.androidMin && <div><dt>يتطلب</dt><dd dir="ltr">Android {app.androidMin}+</dd></div>}
      </dl>
      <div className="card-actions">
        <Link className="btn" to={`/app/${app.id}`}>التفاصيل</Link>
        {apk && <a className="btn alt" href={apk}>تحميل</a>}
      </div>
    </article>
  );
}
