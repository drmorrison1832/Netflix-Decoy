import Category from "./Category.jsx";

function MainSection(props) {
  const movies = props.content;
  return (
    <main>
      <div className="container">
        {movies.map((cat, indexCat) => {
          return (
            <section key={indexCat}>
              <div className="category">{cat.category}</div>
              <div className="films">
                <div className="left-filler"></div>
                {cat.images.map((film, indexFilm) => {
                  return (
                    <div key={indexFilm} className="film">
                      <img src={film} />
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default MainSection;
