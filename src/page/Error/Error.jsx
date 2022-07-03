import "./Error.scss";
import logo404 from "../../img/error.png";
import image from "../../img/Iconcolor.png";
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <img src={logo404} className="error_img" alt="404" />
      <h2 className="error_h2">Page not found - 404</h2>
      <p className="error_p">
        This page not found (deleted or never exists).<br/> Try a phrase in search box
        or back to home and start again.
      </p>
      <label htmlFor="input" className="_label">
        TAKE ME HOME!
        <img src={image} alt="tabiat" className="error_arrow" />
        <Link to="/">
          <input type="submit" id="input" className="none" />
        </Link>
      </label>
    </div>
  );
}

export default Error;
