import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import qarsak from '../../img/Group147.png'
import share from '../../img/Vector.png'
import soat from '../../img/bytesize_clock.png'
import './mainContent.scss'


function MainContent() {
    const { Id, inner, setInner } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (Id === 0){
            navigate('/')
         } 
    }, [Id, navigate]);
    useEffect(() => {
        if (Id === 0){
            return
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
            .then(re => re.json())
            .then(data => setInner([data]))
        }
    }, [Id, setInner]);








    return ( 
        <div className="content">
            <div className="content_left">
                <div className="content_svg">
                    <div className="content_qarsak_otas">
                        <img src={qarsak} alt="qarsak" />
                        <span className="content_qarsak_soni">
                            125
                        </span>
                    </div>
                    <div className="content_qarsak_otas">
                        <img src={share} alt="share" />
                        <span className="content_share_soni">
                            70
                        </span>
                    </div>
                </div>
            </div>
            <div className="content_rigth">
                {inner.map(key => (
                  <div key={new Date().getTime()} className="content_header">
                        <span className='content_header_span'>User interface</span>
                        <p className='content_header_p'>{key.body}</p>
                        <div className="content_span_otasi">
                            <span className="content_data">
                              October 24, 2020
                            </span>
                            <span className="content_ajrat"></span>
                            <div className='content_vaqt_otas'>
                                <img src={soat} alt="soat" />
                                <span className="content_vaqt">3 minutes read</span>
                            </div>
                        </div>
                   </div>
                ))}
                
            </div>



        </div>
     );
}

export default MainContent;