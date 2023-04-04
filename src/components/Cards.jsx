import Card from "./Card";
// import styles from "../stylesheets/Cards.module.css"

export default function Cards({ characters }) {

  return (
    <>
      {characters.map((item) => {
        const { id, name, status, species, gender, origin, image } = item;
        return (
          <div className="card" key={id}>
            <Card
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={() => alert("Emulamos que se cierra la card")}
            />
          </div>
        );
      })}
    </>
  );
}

// onClose={() => window.alert('Emulamos que se cierra la card')}