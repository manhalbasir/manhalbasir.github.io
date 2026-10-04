// يقبل null أو undefined أو [] ولا يعرض شيئًا في هذه الحالات
export default function Gallery({ shots }) {
  const list = Array.isArray(shots) ? shots.filter(Boolean) : [];
  if (list.length === 0) return null;
  return (
    <section>
      <h2>لقطات من التطبيق</h2>
      <div className="gallery">
        {list.map((s, i) => (
          <img key={i} src={s} alt={`لقطة ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
