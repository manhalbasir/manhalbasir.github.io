import { site } from "../data/site";

export default function About() {
  return (
    <article className="prose">
      <h1>من نحن</h1>
      <p>{site.about}</p>
    </article>
  );
}
