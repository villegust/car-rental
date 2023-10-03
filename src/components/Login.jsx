import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <section className="login-section">
        <div className="login-content">
          <div className="login-content__title">
            <h2>Login</h2>
          </div>
          <div className="login-content__login">
            <div className="login-content__login__icon">
              <FontAwesomeIcon
                icon={faUser}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="text" name="" id="" placeholder="Username" />
          </div>
          <div className="login-content__login">
            <div className="login-content__login__icon">
              <FontAwesomeIcon
                icon={faLock}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <div className="login-content__login__loginBtn">
            <a href="/">Login</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
