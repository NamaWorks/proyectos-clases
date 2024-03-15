import { useForm } from "../../customHooks/useForm";

const Home = () => {
  const { change, handleSubmit } = useForm();

  const mySubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Home</h1>
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
        <div>
          <label>Edad</label>
          <input onChange={(e) => change(e.target.value, "edad")} />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Home;
