function filmCover(props) {
  const movies = props.content;
  return (
    <div key={indexFilm} className="film">
      <img src={film} />
    </div>
  );
}

export default filmCover;
