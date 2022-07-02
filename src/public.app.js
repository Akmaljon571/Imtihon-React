import {Container} from "./components";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Group176.png";
import useAuth from "./hooks/useAuth";
import { notification , message } from 'antd'
import { SmileOutlined } from '@ant-design/icons';


function Public() {
  const { auth, setAuth, token, setToken } = useAuth();
  let shef = useRef()
  const key = 'updatable';

  let formValue = (evt) => {
    evt.preventDefault();
    if ((shef.current.value - 0) === 12345678) {
        message.loading({
            content: 'Loading...',
            key,
          });
          setTimeout(() => {
            message.success({
              content: 'Loaded!',
              key,
              duration: 2,
            });
          }, 500);

        setAuth(token);
        localStorage.setItem('token', JSON.stringify(token))
     } else {
        notification.open({
            message: 'Kirish kodi Xato!!!',
            description:
              'Iltimos kirish kodiga kiriting: 12345678',
            icon: (
              <SmileOutlined
                style={{
                  color: '#108ee9',
                }}
              />
            ),
          });
    }
  };

  useEffect(() => {
    fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((re) => re.json())
      .then((data) => setToken(data.token));
  }, [auth]);

  return (
    <Container>
      <div className="public_header">
        <Link to="/">
          <img src={Logo} width="209" height="56" alt="Kompany_logo" />
        </Link>
      </div>
      <div className="public_main">
        <h1 className="public_h1">Login</h1>
        <form onSubmit={formValue} className="public_form">
          <input type="text" className="public_input" placeholder="Login" required />
          <input ref={shef} type="password" className="public_input" required placeholder="password" />
          <button className="public_button">Submit</button>
        </form>
      </div>
    </Container>
  );
}

export default Public;
