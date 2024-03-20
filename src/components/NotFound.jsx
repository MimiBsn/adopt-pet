import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <iframe
        src="https://giphy.com/embed/UslGBU1GPKc0g"
        width="480"
        height="268"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <h1>I'm sorry Sir, I think you lost your way.</h1>
      <Link to="/">
        <button>Let me redirect you</button>
      </Link>
    </div>
  );
};
