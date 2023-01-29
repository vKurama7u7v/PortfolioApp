import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs, { send } from "emailjs-com";
import { toast } from "react-toastify";

import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "@/utils/const.utils";

export default function FormContact() {
  const [result, setResult] = useState(false);

  const sendEmail = (form) => {
    // e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // e.target.reset();
    setResult(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: null,
    onSubmit: async (formData, { resetForm }) => {
      const { name, email, message } = formData;

      const schema = Yup.object().shape({
        message: Yup.string()
          .required("¡Asunto Obligatorio!")
          .min(10, "El Mensaje debe ser de al menos 10 Carácteres"),
        email: Yup.string()
          .required("¡Correo Electrónico Obligatorio!")
          .email("Necesitas un Correo Electrónico Valido!"),
        name: Yup.string()
          .required("¡Nombre Obligatorio!")
          .min(4, "Necesitas un Nombre de 3 a 30 Carácteres")
          .max(30, "Necesitas un Nombre de 3 a 30 Carácteres"),
      });

      const isValid = await schema
        .validate({
          name,
          email,
          message,
        })
        .catch(function (err) {
          toast.error(err.errors[0]);
          console.log(err.errors[0]);
        });

      if (isValid) {
        try {
          sendEmail(formData);
          console.log("¡Email enviado con exito!");
          toast.success("¡Email enviado con exito!");

          // Resetenado Form
          resetForm({
            name: "",
            email: "",
            message: "",
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form__div">
          <input
            type="text"
            className="form__input"
            placeholder="Tú Nombre"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="name" className="form__label">
            Nombre
          </label>
          <i className="fa-solid fa-user-astronaut"></i>
        </div>

        <div className="form__div">
          <input
            type="email"
            className="form__input"
            placeholder="Tú Correo Electrónico"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="email" className="form__label">
            Correo Electrónico
          </label>
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div className="form__div text-area">
          <textarea
            name="message"
            className="form__input"
            placeholder="Asunto"
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
          <label htmlFor="message" className="form__label">
            Mensaje
          </label>
          <i class="fa-solid fa-message"></i>
        </div>

        <div className="form__div">
          <button type="submit" className="reset btn-submit">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
