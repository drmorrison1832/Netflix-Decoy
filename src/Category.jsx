import FilmsCarroussel from "./FilmsCarroussel.jsx";

function Category(props) {
  const section = props.content;

  return (
    <section>
      <div className="category">{section.category}</div>
      <FilmsCarroussel content={section.images} />
    </section>
  );
}

export default Category;
