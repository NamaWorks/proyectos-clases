import "./About.css";
import { useForm } from "../../customHooks/useForm";

const About = () => {

  const { change, handleSubmit } = useForm();
  
  const mySubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="about">
      <h1>About</h1>
      <form onSubmit={(e) => mySubmit(handleSubmit(e))}>
        <div>
          <label>Nombre de usuario</label>
          <input onChange={(e) => change(e.target.value, "name")} />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            onChange={(e) => change(e.target.value, "password")}
          />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default About;
