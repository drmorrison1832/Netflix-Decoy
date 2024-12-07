function FilmsCarroussel(props) {
  const filmCovers = props.content;
  return (
    <div className="films-carroussel">
      <div className="left-filler"></div>
      {filmCovers.map((image, indexImage) => {
        return (
          <div key={indexImage} className="film-image">
            <img src={image} />
          </div>
        );
      })}
    </div>
  );
}

export default FilmsCarroussel;
