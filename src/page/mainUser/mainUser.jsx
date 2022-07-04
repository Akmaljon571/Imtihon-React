import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./mainUser.scss";
import Footer from "../../components/footer/footer";
import image from "../../img/Iconcolor.png";
import fc from "../../img/fc.png";
import github from "../../img/github.png";
import twitte from "../../img/twitter.png";
import In from "../../img/In.png";
import useAuth from "../../hooks/useAuth";
import soat from "../../img/bytesize_clock.png";
import rigth from "../../img/rigth.png";
import left from "../../img/left.png";
import { Container } from "../../components";

function MainUser() {
  const { filter, setFilter, million, Id, setId, searchBody } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    setId(0);
  }, [setId]);

  useEffect(() => {
    setFilter(million.slice(1, 10));
  }, [million, setFilter]);

  let itemLink = (eky) => {
    setId(eky);
  };

  useEffect(() => {
    if (Id !== 0) {
      navigate("/single");
    }
  }, [Id, navigate]);

  let clickButton = (evt) => {
    switch (evt.target.id) {
      case "left":
        break;
      case "1":
        setFilter(million.slice(1, 10));
        break;
      case "2":
        setFilter(million.slice(11, 20));
        break;
      case "3":
        setFilter(million.slice(21, 30));
        break;
      case "4":
        setFilter(million.slice(31, 40));
        break;
      case "5":
        setFilter(million.slice(41, 50));
        break;
      case "rigth":
        break;

      default:
        break;
    }
  };

  const filterData = filter.filter((value) => {
    if (value.body.toLowerCase().includes(searchBody.toLowerCase())) {
      return value;
    } 
    if (searchBody === '') {
      return value
    }
  })

  return (
    <>
      <Container>
        <div className="user">
          <div className="user_left">
            <h2 className="user_h2">What I do!</h2>
            <p className="user_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
              rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </p>
            <div className="user_link">
              <label htmlFor="input" className="user_label">
                EXPLORE ME
                <img src={image} alt="tabiat" className="user_label_image" />
                <Link to="/f">
                  <input type="submit" id="input" className="none" />
                </Link>
              </label>
            </div>
            <div className="user_tarmoqlar">
              <Link to="/f">
                <img src={fc} className="user_facebook" alt="facebook" />
              </Link>
              <Link to="/f">
                <img src={github} className="user_GitHub" alt="GitHub" />
              </Link>
              <Link to="/f">
                <img src={twitte} className="user_Twitter" alt="Twitter" />
              </Link>
              <Link to="/f">
                <img src={In} className="user_LendIn" alt="LendIn" />
              </Link>
            </div>
          </div>
          <div className="inner">
            <h1 className="inner_h1">Recent Posts</h1>
            <ul className="inner_list">
              {filterData.map((key) => (
                  <li key={key.id} className="inner_item">
                  <Link
                    to="/"
                    className="inner_linkId"
                    onClick={() => itemLink(key.id)}
                  >
                    <div className="inner_header">
                      <span className="inner_span">September 24.2020</span>
                      <span className="inner_rigt">User Interface</span>
                    </div>
                    <div className="inner_main">{key.body.slice(0, 80)}</div>
                    <div className="inner_footer">
                      <span className="inner_footer_span">
                          <img src={soat} alt="soat" />3 minutes read
                        </span>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="button_group">
              <div
                className="btn-group me-2"
                onClick={clickButton}
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  id="left"
                  className="btn btn-outline-secondary btn_rigth"
                >
                  <img src={rigth} id="left" alt="rigth" />
                </button>
                <button
                  type="button"
                  id="1"
                  className="btn btn-outline-secondary"
                >
                  1
                </button>
                <button
                  type="button"
                  id="2"
                  className="btn btn-outline-secondary"
                >
                  2
                </button>
                <button
                  type="button"
                  id="3"
                  className="btn btn-outline-secondary"
                >
                  3
                </button>
                <button
                  type="button"
                  id="4"
                  className="btn btn-outline-secondary"
                >
                  4
                </button>
                <button
                  type="button"
                  id="5"
                  className="btn btn-outline-secondary"
                >
                  5
                </button>
                <button
                  type="button"
                  id="rigth"
                  className="btn btn-outline-secondary btn_leftlar"
                >
                  <img src={left} id="rigth" alt="left" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default MainUser;
