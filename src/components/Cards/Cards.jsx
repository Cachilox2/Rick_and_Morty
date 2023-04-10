import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  let arr = Object.values(characters)
  return (
    <>
      {arr.map((item) => {
        const { id, name, status, species, gender, origin, image } = item;
        return (
          <div key={id}>
            <Card
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          </div>
        );
      })} 
    </>
  );
}

// onClose={() => window.alert('Emulamos que se cierra la card')}