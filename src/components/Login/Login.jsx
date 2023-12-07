import "./login.css";

const Login = () => {
  return (
    <>
      <main className="contenedorlogin">
        <form className="contenedorformulario">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Usuario
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su usuario"
              aria-label="Ingrese su usuario"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Contraseña
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              aria-label="Ingrese su contraseña"
              aria-describedby="basic-addon1"
            />
          </div>
          <button type="bsu" className="btn btn-outline-secondary">
            Inicio Sesión
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
