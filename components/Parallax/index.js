const Parallax = props => {
  return (
    <div>
      <div className="img background" />
      {props.content}
      <div className="img background" />
      <style jsx>
        {`
          .img {
            height: 100vh;
            width: 100%;
            margin: 0;
            padding-bottom: 20vh;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .background {
            background-image: url("/static/images/img.jpg");
          }
        `}
      </style>
    </div>
  );
};
export default Parallax;
