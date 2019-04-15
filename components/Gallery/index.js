const Gallery = props => (
  <div className="masonry">
    {props.images.map((image, index) => (
      <img key={index} className="item" src={"/static/gallery/" + image} />
    ))}

    <style jsx>{`
      .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .tile {
        width: 20%;
        height: 20%;
      }
      .masonry {
        /* Masonry container */
        column-count: 4;
        column-gap: 1em;
      }

      .item {
        /* Masonry bricks or child elements */
        background-color: #eee;
        display: inline-block;
        margin: 0 0 1em;
        width: 100%;
      }
    `}</style>
  </div>
);
export default Gallery;
