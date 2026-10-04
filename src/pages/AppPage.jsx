import { useParams, Link } from "react-router-dom";
import { findApp } from "../data/apps";
import Icon from "../components/Icon";
import Gallery from "../components/Gallery";

const extra = { ios: "App Store", web: "نسخة الويب", windows: "Windows" };

export default function AppPage() {
  const app = findApp(useParams().id);
  if (!app) return <p>التطبيق غير موجود. <Link to="/">العودة للتطبيقات</Link></p>;
  const { android, ...others } = app.platforms;

  return (
    <>
      <div className="hero">
        <Icon app={app} size={96} />
        <div>
          <h1>{app.name}</h1>
          <p className="muted">الإصدار {app.version} · {app.sizeMB} ميغابايت</p>
        </div>
      </div>

      <div className="buttons">
        {android.play && <a className="btn" href={android.play} target="_blank" rel="noreferrer">Google Play</a>}
        {android.apk && <a className={android.play ? "btn alt" : "btn"} href={android.apk}>تحميل APK</a>}
        {Object.entries(others).map(([k, url]) => url && (
          <a key={k} className="btn alt" href={url} target="_blank" rel="noreferrer">{extra[k] ?? k}</a>
        ))}
      </div>

      <section>
        <h2>عن التطبيق</h2>
        <p>{app.description ?? app.tagline}</p>
      </section>

      <Gallery shots={app.screenshots} />

      <p><Link to={`/privacy/${app.id}`}>سياسة الخصوصية</Link></p>
    </>
  );
}
