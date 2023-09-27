import Layout2 from "@/components/Layaout2"
import { signIn, useSession, getProviders } from "next-auth/react"
import { useRouter } from "next/router"


function LoginPage() {
    const { data: session, status } = useSession()
    const router = useRouter()


    if (status !== 'loading...' && status === 'authenticated') {
        router.push('/')
    }
    const handleGithubSignIn = () => {
        signIn("github");
    };
    const handleGoogleSignIn = () => {
        signIn("google"); 
    };

    return (
        <Layout2>
      <div className="login-container">
        <div className="login-text">
          <h2>Bienvenido a nuestro sistema de ventas</h2>
          <p>Inicia sesión para acceder a tu cuenta de ventas.</p>
        </div>

        <div className="login-box">
          <form className="login-form">
            <div className="form-group">

              <label htmlFor="nombre-usuario">Nombre de Usuario:</label>
              <input
                type="text"
                id="nombre-usuario"
                name="nombre-usuario"
                required
                placeholder="Ingresa tu nombre de usuario"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <button type="submit">
              <i className="fa fa-sign-in"></i> Iniciar Sesión
            </button>
          </form>
          <br></br>

          <div className="github-button">
            <button onClick={handleGithubSignIn}>
              <i className="fa fa-github"></i> Sign in with GitHub
            </button>
          </div>
<br></br>
          <div className="google-button">
            <button onClick={handleGoogleSignIn}>
              <i className="fa fa-google"></i> Sign in with Google
            </button>
          </div>

          {/* Enlace para registrarse */}
          <p>No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
        </div>
      </div>

            <style jsx>{`
  .login-container {
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  .login-text {
    flex: 1;
    padding-right: 20px;
  }

  .login-box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
  }

  .login-form div {
    margin-bottom: 10px;
  }

  .login-form label {
    display: block;
    font-weight: bold;
  }
  .inicio-button {
    flex: 1;
  }

  .inicio-button button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  .github-button {
    flex: 1;
  }

  .github-button button {
    background-color: green;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .goolgle-button {
    flex: 1;
  }

  .google-button button {
    background-color: blue;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  label {
    font-weight: bold;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }
  .form-group {
    margin-bottom: 10px;
  }
`}
            </style>
        </Layout2>
    );
}
export default LoginPage