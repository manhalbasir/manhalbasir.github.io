import { site } from "../data/site";

export default function Contact() {
  const wa = "https://wa.me/213" + site.phone.replace(/^0/, "");
  return (
    <article className="prose">
      <h1>تواصل معنا</h1>
      <p>الهاتف: <a href={`tel:${site.phone}`} dir="ltr">{site.phone}</a></p>
      <p>واتساب: <a href={wa} target="_blank" rel="noreferrer">ابدأ محادثة</a></p>
      <p>البريد: <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </article>
  );
}
