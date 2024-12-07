function MainSection(props) {
  return (
    <main>
      <div className="container">
        <section>
          <p>{props.content[0].name}</p>

          <div className="category">{props.content[0].category}</div>
          <div className="films">
            <div className="left-filler"></div>
            <div className="film">
              {/* <img src={`${props.content[0].images[0]}`} /> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainSection;
