import { useState } from "react";
import validation from "../../utils/validation";
import image from "../../assets/login.webp";
// import { MdEmail } from "react-icons/md";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <img className="form__rick" src={image} alt="" />

        <label className="form__label" htmlFor="email">Email</label>
        <input
          className="form__input"
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
          placeholder="Email"
        />

        <p className="form__danger">{errors.email}</p>

        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          onChange={handleChange}
          value={userData.password}
          type="text"
          name="password"
          placeholder="Password"
        />
        <p className="form__danger">{errors.password}</p>

        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;