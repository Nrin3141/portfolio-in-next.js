const Parallax = props => {
  return (
    <div>
      <img className="img" />
      {props.content}

      <style jsx>
        {`
          .img {
            height: 100vh;
            width: 100%;
            margin: 0;

            background: url("/static/images/img.jpg");
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .size {
            height: 50vh;
          }
        `}
      </style>
    </div>
  );
};
export default Parallax;
