

export default function Card({id, name, status, species, gender, origin, image, onClose}) {


   return (
      <div key={id}>
         <button onClick={onClose}>X</button>
         <img src={image} alt={name} />
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}
