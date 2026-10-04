import { useParams } from "react-router-dom";
import { findApp } from "../data/apps";
import { site } from "../data/site";

export default function Privacy() {
  const app = findApp(useParams().id);
  if (!app) return <p>غير موجود</p>;
  const p = app.privacy;
  const list = (arr, empty) => (arr.length ? <ul>{arr.map((x) => <li key={x}>{x}</li>)}</ul> : <p>{empty}</p>);

  return (
    <article className="prose">
      <h1>سياسة الخصوصية: {app.name}</h1>
      <p className="muted">آخر تحديث: {p.updated}</p>
      <h2>البيانات التي نجمعها</h2>
      <p>{p.collectsData ? "يجمع التطبيق بعض البيانات اللازمة لعمله كما هو موضح في هذه الصفحة." : "لا يجمع التطبيق أي بيانات شخصية عن مستخدميه."}</p>
      <h2>الصلاحيات</h2>
      {list(p.permissions, "لا يطلب التطبيق صلاحيات خاصة.")}
      <h2>خدمات الأطراف الثالثة</h2>
      {list(p.thirdParties, "لا يستخدم التطبيق خدمات أطراف ثالثة.")}
      <h2>مشاركة البيانات</h2>
      <p>لا نبيع بياناتك ولا نشاركها مع جهات إعلانية.</p>
      <h2>التواصل</h2>
      <p>لأي استفسار عن الخصوصية: <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </article>
  );
}
