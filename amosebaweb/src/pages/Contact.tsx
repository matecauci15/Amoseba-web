import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre debe contener al menos 3 caracteres")
        .max(50, "El nombre no puede contener más de 50 caracteres")
        .required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo es obligatorio"),
      message: Yup.string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .required("El mensaje es obligatorio"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Datos enviados:", values);
      
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonColor: "#A39F73",
        confirmButtonText: "Aceptar",
      });

      resetForm();
    },
  });

  return (
    <div className=" mx-auto mt-10 bg-gradient-to-b from-[#CAC792] to-gray-50">
      <div className="rounded-xl overflow-hidden">
        <div className="p-8  mb-8  items-center justify-center ">
          <h2 className="text-5xl font-montserrat font-black text-center items-center  text-white mt-2 mb-6">
            Nuestra Ubicación
          </h2>
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300 max-w-4xl w-full">
              <iframe
                title="Ubicación de la oficina"
                className="w-full h-64 md:h-80 lg:h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.304347779653!2d-58.37994475468674!3d-34.606196475245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad27b20837b%3A0x650f852d59480657!2sFlorida%20165%2C%20C1005AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738162703744!5m2!1ses-419!2sar"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl text-white  font-montserrat font-black text-center mb-2">
          Contáctanos
        </h1>
        <p className="text-center text-white mb-5 opacity-90">
          Estamos aquí para ayudarte
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="mb-10 space-y-6 max-w-lg mx-auto border-r-2 shadow-lg rounded-xl p-10"
        >
          {/* Name Input */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Nombre
            </label>
            <input
              type="text"
              {...formik.getFieldProps("name")}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none 
        ${
          formik.touched.name && formik.errors.name
            ? "border-red-500"
            : "border-gray-300"
        }`}
              placeholder="Ingresa tu nombre"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none
        ${
          formik.touched.email && formik.errors.email
            ? "border-red-500"
            : "border-gray-300"
        }`}
              placeholder="Ingresa tu correo"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Mensaje
            </label>
            <textarea
              {...formik.getFieldProps("message")}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none resize-none
        ${
          formik.touched.message && formik.errors.message
            ? "border-red-500"
            : "border-gray-300"
        }`}
              placeholder="Escribe tu mensaje aquí..."
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#E8A598] text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:bg-[#D08A85] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A39F73] active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;