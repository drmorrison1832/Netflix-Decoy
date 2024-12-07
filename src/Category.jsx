import filmCover from "./filmCover.jsx";

function Category(props) {
  const movies = props.content;
  return (
    <>
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
      })}
    </>
  );
}

export default Category;
