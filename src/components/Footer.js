import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const isEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailError = document.getElementById("email-error");
    const emainErrorInput = document.getElementById("email");

    if (email.match(regex)) {
      emailError.innerHTML = "Votre E-mail:";
      emailError.classList.add("text-white");
      emainErrorInput.classList.remove("error-contact");
      return true;
    } else {
      emailError.innerHTML = "Votre E-mail est incorrect ! ⚠️";
      emailError.classList.remove("texte-white");
      emailError.style.color = "#b31b1b";
      emainErrorInput.classList.add("error-contact");
      return false;
    }
  };
  const isName = () => {
    const nameError = document.getElementById("name-label");
    const nameErrorInput = document.getElementById("name");
    const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    if (name.match(nameRegex)) {
      nameError.innerHTML = "Votre Nom et Prénom";
      nameError.classList.add("text-white");
      nameErrorInput.classList.remove("error-contact");
      return true;
    } else {
      nameError.innerHTML = "Votre Nom et Prénom est incorrect ! ⚠️";
      nameError.classList.remove("texte-white");
      nameErrorInput.classList.add("error-contact");
      nameError.style.color = "#b31b1b";
      return false;
    }
  };

  const failMessage = (message) => {
    const statusMess = document.querySelector(".status");

    statusMess.innerHTML = message;
    statusMess.style.color = "#b31b1b";
  };

  const succesMessage = () => {
    const statusMess = document.querySelector(".status");

    statusMess.innerHTML =
      "Votre message a bien été envoyé ! Je vous recontacterai si besoin 😀 ";
    statusMess.style.color = "#25d946";

    document.getElementById("name").classList.remove("error-contact");
    document.getElementById("email").classList.remove("error-contact");
    document.getElementById("message").classList.remove("error-contact");

    setTimeout(() => {
      statusMess.style.opacity = "0";
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageErrorInput = document.getElementById("message");
    const messageErrorLabel = document.getElementById("message-label");

    if (isName() && isEmail() && message) {
      sendFeedback("template_twk7uzo", {
        name,
        email,
        subject,
        message,
      });
    } else {
      failMessage("Merci de remplir correctement le formulaire ! ⚠️ ");

      setTimeout(() => {
        failMessage("");
      }, 5000);
      isEmail(false);
      isName(false);
      messageErrorInput.classList.add("error-contact");
      messageErrorLabel.innerHTML = "Votre Message est incorrect ! ⚠️";
      messageErrorLabel.style.color = "#b31b1b";
    }
  };

  const sendFeedback = (templateId, variables) => {
    const messageErrorLabel = document.getElementById("message-label");
    window.emailjs
      .send("MaximeGmail", templateId, variables)
      .then(() => {
        succesMessage();
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        isEmail(true);
        isName(true);
        messageErrorLabel.innerHTML = "Votre Message:";
        messageErrorLabel.style.color = "#fff";
      })
      .catch(() => {
        failMessage("Une erreur s'est produite, veuillez réesayer ! ⚠️");
      });
  };
  return (
    <>
      {/* <!--Section: Contact v.2--> */}
      <footer className=" mt-5" id="contact">
        <div className="footer-container">
          {/* <!--Section heading--> */}
          <h2 className="h1-responsive font-weight-bold text-center my-4 text-white">
            Contactez-moi
          </h2>
          {/* <!--Section description--> */}
          <p className="text-center w-responsive text-white mx-auto mb-5 fs-5">
            Vous avez une question? N'hésitez pas à me contacter. Je reviendrai
            vers vous pour plus de précisions.
          </p>

          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                className="contact-form"
                action="mail.php"
                method="POST"
              >
                {/* <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        aria-label="votre nom et prénom"
                        type="text"
                        id="name"
                        name="name"
                        className="form-control fs-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label
                        htmlFor="name"
                        id="name-label"
                        className="texte-white fs-5"
                      >
                        Votre Nom et Prénom
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        aria-label="votre email"
                        type="text"
                        id="email"
                        name="email"
                        className="form-control fs-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        htmlFor="email"
                        id="email-error"
                        className="fs-5 texte-white"
                      >
                        Votre E-mail
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        aria-label="sujet du message"
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control fs-4"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <label htmlFor="subject" className="fs-5 texte-white">
                        Sujet du Message
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        aria-label="votre message"
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea fs-4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <label
                        htmlFor="message"
                        id="message-label"
                        className="fs-5 texte-white"
                      >
                        Votre Message
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}
              </form>

              <div className="text-center text-md-left">
                <button
                  type="submit"
                  className="btn btn-lg fs-5 btn-style"
                  onClick={handleSubmit}
                  aria-label="Envoyez votre message"
                >
                  Envoyez
                </button>
              </div>
              <div className="status text-center fs-4 m-3"></div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-md-3 text-center texte-white">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p className="fs-5">07 60 40 32 10</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p className="fs-5">maximepaupy@gmail.com</p>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>

          <div className="text-center texte-white p-3">
            <p>
              <Link to="/mentions-legales">Mention Légales</Link>

              {/* -
              <Link to="/politiques-de-confidentialites">
              Politiques de confidentialité
              </Link> */}
            </p>
            <p> © 2021 Copyright: Maxime Paupy</p>
          </div>
        </div>
      </footer>
    </>
  );
}
