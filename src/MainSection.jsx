import Category from "./Category.jsx";

function MainSection(props) {
  const sections = props.content;
  return (
    <main>
      <div className="container">
        {sections.map((section, indexSection) => {
          return <Category key={indexSection} content={section} />;
        })}
      </div>
    </main>
  );
}

export default MainSection;
