import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import qarsak from "../../img/Group147.png";
import share from "../../img/Vector.png";
import soat from "../../img/bytesize_clock.png";
import "./mainContent.scss";

function MainContent() {
  const { Id, inner, setInner, filter, setId, setFilter, million} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (Id === 0) {
      navigate("/");
    }
  }, [Id, navigate]);
  useEffect(() => {
    if (Id === 0) {
      return;
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then((re) => re.json())
        .then((data) => setInner([data]));
    }
    setFilter(million.slice(1, 4))
  }, [Id, setInner]);

  let itemLink = (eky) => {
    setId(eky)
  }

  return (
    <>
      <div className="content">
        <div className="content_left">
          <div className="content_svg">
            <div className="content_qarsak_otas">
              <img src={qarsak} alt="qarsak" />
              <span className="content_qarsak_soni">125</span>
            </div>
            <div className="content_qarsak_otas">
              <img src={share} alt="share" />
              <span className="content_share_soni">70</span>
            </div>
          </div>
        </div>
        <div className="content_rigth">
          {inner.map((key) => (
            <div key={new Date().getTime()} className="content_header">
              <span className="content_header_span">User interface</span>
              <p className="content_header_p">{key.body}</p>
              <div className="content_span_otasi">
                <span className="content_data">October 24, 2020</span>
                <span className="content_ajrat"></span>
                <div className="content_vaqt_otas">
                  <img src={soat} className='nmadur_soat' alt="soat" />
                  <span className="content_vaqt">3 minutes read</span>
                </div>
              </div>
            </div>
          ))}
          <img
            className="randomImage"
            width="736"
            height="352"
            src="https://picsum.photos/352/736"
            alt="RandomImage"
          />
          <div className="content_lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis
            sagittis sem ac porta. Sed commodo ligula vitae mollis tristique.
            Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin
            elit nulla, viverra id suscipit quis, tristique a dolor. Sed
            dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non
            imperdiet dui risus et elit.
          </div>
          <h2 className="content_lorem_h2">Information overload</h2>
          <div className="content_lorem">
            Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit
            dignissim, mauris massa pellentesque augue, quis ultricies sem
            tortor et velit.
          </div>
          <div className="content_text">
            <span className="content_text_span"></span>
            <div className="content_text_text">
              Sed commodo ligula vitae mollis tristique. Maecenas egestas semper
              mauris. Duis tempus blandit ultrices. Proin{" "}
              <Link to="/nmadur">elit.uz</Link> nulla, viverra id suscipit quis,
              tristique a dolor.
              <div className="content_text_bottom">
                ‘Designing For Sustainability, Tim Frick, 2014'
              </div>
            </div>
          </div>

          <h3 className="content_lesson">Lessons Learnt: Best Practice</h3>
          <ul className="content_list">
            <li className="content_item">
              Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at
              lorem ultricies aliquam eu eu nisl. Suspendisse.
            </li>
            <li className="content_item">
              Maecenas sit amet ligula auctor neque aliquam placerat et ac
              neque. Proin risus eros, fringilla eu suscipit dignissim,
              dignissim.
            </li>
          </ul>

          <h2 className="content_like">More like this</h2>
          <ul className="inner_list">
                {filter.map(key => (
                    <li key={key.id} className="inner_item">
                      <Link to='/' className='inner_linkId'   onClick={() => itemLink(key.id)}>
                        <div className="inner_header">
                            <span className='inner_span'>September 24.2020</span>
                            <span className="inner_rigt">User Interface</span>
                        </div>
                        <div className="inner_main">
                            {key.body.slice(0, 80)}
                        </div>
                        <div className="inner_footer">
                          <span className="inner_footer_span">
                            <img src={soat} alt="soat" />
                            3 minutes read
                          </span>
                        </div>
                      </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </>
  );
}

export default MainContent;
