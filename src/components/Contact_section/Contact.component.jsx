import "./Contact.style.scss";
import { useState, useEffect } from "react";

const Contact = () => {
  const initialValues = { nome: "", email: "", assunto: "", mensagem: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formValues }),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.nome) {
      errors.nome = "*Nome não pode ser vazio.";
    }
    if (!values.email) {
      errors.email = "*E-mail não pode ser vazio.";
    } else if (!regex.test(values.email)) {
      errors.email = "*Insira um formato válido de E-mail.";
    }
    if (!values.assunto) {
      errors.assunto = "*Assunto não pode ser vazio.";
    }
    if (!values.mensagem) {
      errors.mensagem = "*Mensagem não pode ser vazio.";
    }
    return errors;
  };

  return (
    <div className="contact" id="Contato">
      <div className="contact-section container">
        <section className="contact-section__content">
          <h2>Curtiu?</h2>
          <p>
            Preencha o formulário a seguir e irei responder o mais breve
            possível. Você pode me encontrar também em:
          </p>
          <div className="contact-section__links">
            <a
              href="https://github.com/felipe-miranda-marreiros"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/glyph-neue/256/000000/github.png"
                alt="Github"
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-miranda-marreiros/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/glyph-neue/256/000000/linkedin.png"
                alt="Linkedin"
                title="Linkedin"
              />
            </a>
          </div>
          <div className="contact-section__content-img">
            <img src="./img/undraw_interview_re_e5jn.svg" alt="" />
          </div>
        </section>
        <form
          className="contact-section__form"
          method="POST"
          name="contact-form"
          netlify="true"
          data-netlify="true"
          action="/pages/success"
          onSubmit={handleSubmit}
        >
          <ul className="contact-section__form-items">
            <li>
              <p className="form-error">{formErrors.nome}</p>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                name="nome"
                value={formValues.nome}
              />
            </li>
            <li>
              <p className="form-error">{formErrors.email}</p>
              <label htmlFor="mail">E-mail</label>
              <input
                type="email"
                id="mail"
                onChange={handleChange}
                name="email"
                value={formValues.email}
              />
            </li>
            <li>
              <p className="form-error">{formErrors.assunto}</p>
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                onChange={handleChange}
                name="assunto"
                value={formValues.assunto}
              />
            </li>
            <li>
              <p className="form-error">{formErrors.mensagem}</p>
              <label htmlFor="msg">Mensagem</label>
              <textarea
                id="msg"
                onChange={handleChange}
                name="mensagem"
                value={formValues.mensagem}
              ></textarea>
            </li>
          </ul>
          <button type="submit" className="btn" title="Enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
