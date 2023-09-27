import Layout2 from "../components/Layaout2";
import { useState } from "react";
import { useRouter } from "next/router";

function Registro() {
  const router = useRouter();

  // Estado para los campos del formulario
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizar una solicitud POST al servidor Node.js para registrar el usuario
    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombreUsuario, email, password }),
      });

      if (response.ok) {
        // El registro fue exitoso, redirige a la página de inicio de sesión u otra página
        router.push("/login"); // Cambia "/login" a la ruta que desees
      } else {
        // Mostrar un mensaje de error en caso de problemas
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <Layout2>
      <div className="registro-container">
        <div className="registro-text">
          <h2>Registro de Usuario</h2>
          <p>Regístrate para acceder a tu cuenta de ventas de este software.</p>
        </div>

        <div className="registro-box">
          <form className="registro-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
              <input
                type="text"
                id="nombreUsuario"
                name="nombreUsuario"
                required
                placeholder="Ingresa tu nombre de usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              <i className="fa fa-user-plus"></i> Registrarse
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* Estilos CSS para la página de registro */
        /* ... */
      `}</style>
    </Layout2>
  );
}

export default Registro;

