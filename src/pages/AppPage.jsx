import { useParams, Link } from "react-router-dom";
import { findApp } from "../data/apps";
import Icon from "../components/Icon";
import Gallery from "../components/Gallery";

const extra = { ios: "App Store", web: "نسخة الويب", windows: "Windows" };

export default function AppPage() {
  const app = findApp(useParams().id);
  if (!app) return <p>التطبيق غير موجود. <Link to="/">العودة للتطبيقات</Link></p>;
  const { android, ...others } = app.platforms;
  const names = ["أندرويد", ...Object.keys(others).map((k) => extra[k] ?? k)].join("، ");

  return (
    <>
      <p className="crumb"><Link to="/">التطبيقات</Link> / {app.name}</p>
      <div className="hero">
        <Icon app={app} size={96} />
        <div>
          <h1>{app.name}</h1>
          <span className="tag">{app.category}</span>
        </div>
      </div>

      <div className="buttons">
        {android.play && <a className="btn" href={android.play} target="_blank" rel="noreferrer">Google Play</a>}
        {android.apk && <a className={android.play ? "btn alt" : "btn"} href={android.apk}>تحميل APK</a>}
        {Object.entries(others).map(([k, url]) => url && (
          <a key={k} className="btn alt" href={url} target="_blank" rel="noreferrer">{extra[k] ?? k}</a>
        ))}
      </div>

      <div className="layout">
        <div>
          <h2>عن التطبيق</h2>
          <p>{app.description ?? app.tagline}</p>
          <Gallery shots={app.screenshots} />
        </div>
        <aside className="info">
          <h2>معلومات</h2>
          <table>
            <tbody>
              <tr><th>الإصدار</th><td dir="ltr">{app.version}</td></tr>
              <tr><th>الحجم</th><td dir="ltr">{app.sizeMB} MB</td></tr>
              {app.androidMin && <tr><th>يتطلب</th><td dir="ltr">Android {app.androidMin}+</td></tr>}
              <tr><th>المنصات</th><td>{names}</td></tr>
              <tr><th>الحزمة</th><td dir="ltr" className="pkg">{app.pkg}</td></tr>
            </tbody>
          </table>
          <p><Link to={`/privacy/${app.id}`}>سياسة الخصوصية</Link></p>
        </aside>
      </div>
    </>
  );
}
