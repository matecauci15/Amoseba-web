// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// export const Contact: React.FC = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data); // Aquí puedes enviar los datos a tu backend
//     setSubmitted(true);
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto text-center">
//       <h1 className="text-3xl font-bold mb-4 text-blue-900">Contacto</h1>
//       {submitted ? (
//         <p className="text-[#A39F73] text-lg">
//           ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
//         </p>
//       ) : (
//         <form
//           className="space-y-4 bg-gray-100 p-4 rounded shadow-md"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           {/* Nombre */}
//           <div>
//             <label className="block text-sm font-bold text-blue-900 mb-1">
//               Nombre:
//             </label>
//             <input
//               type="text"
//               {...register("name", { required: "Este campo es obligatorio" })}
//               className={`w-full p-2 border ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               } rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
//               placeholder="Ingresa tu nombre"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Correo Electrónico */}
//           <div>
//             <label className="block text-sm font-bold text-blue-900 mb-1">
//               Correo Electrónico:
//             </label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Este campo es obligatorio",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Correo electrónico no válido",
//                 },
//               })}
//               className={`w-full p-2 border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
//               placeholder="Ingresa tu correo"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Mensaje */}
//           <div>
//             <label className="block text-sm font-bold text-blue-900 mb-1">
//               Mensaje:
//             </label>
//             <textarea
//               {...register("message", {
//                 required: "Este campo es obligatorio",
//                 minLength: {
//                   value: 10,
//                   message: "El mensaje debe tener al menos 10 caracteres",
//                 },
//               })}
//               className={`w-full p-2 border ${
//                 errors.message ? "border-red-500" : "border-gray-300"
//               } rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
//               rows={4}
//               placeholder="Escribe tu mensaje aquí"
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.message.message}
//               </p>
//             )}
//           </div>

//           {/* Botón de Enviar */}
//           <button
//             type="submit"
//             className="bg-[#EEA987] text-white py-2 px-4 rounded hover:bg-[#ff8548] focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Enviar
//           </button>
//         </form>
//       )}

//       {/* Mapa */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold text-blue-900">Nuestra Ubicación</h2>
//         <iframe
//           title="Ubicación de la oficina"
//           className="w-full h-64 rounded mt-4"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.304347779653!2d-58.37994475468674!3d-34.606196475245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad27b20837b%3A0x650f852d59480657!2sFlorida%20165%2C%20C1005AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738162703744!5m2!1ses-419!2sar"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Swal from "sweetalert2";

// export const Contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "El nombre debe contener al menos 3 caracteres")
//         .max(50, "El nombre no puede contener más de 50 caracteres")
//         .required("El nombre es obligatorio"),
//       email: Yup.string()
//         .email("Correo electrónico inválido")
//         .required("El correo es obligatorio"),
//       message: Yup.string()
//         .min(10, "El mensaje debe tener al menos 10 caracteres")
//         .required("El mensaje es obligatorio"),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       console.log("Datos enviados:", values);
      
//       Swal.fire({
//         title: "¡Mensaje enviado!",
//         text: "Nos pondremos en contacto contigo pronto.",
//         icon: "success",
//         confirmButtonColor: "#EEA987",
//         confirmButtonText: "Aceptar",
//       });

//       resetForm();
//     },
//   });

//   return (
//     <div className="p-6 md:p-8 bg-gray-100 rounded-lg shadow-lg max-w-5xl mx-auto text-center mt-10 mb-10 w-full">
//       <h1 className="text-3xl md:text-4xl font-bold text-[#A39F73] mb-6 mt-4">Contáctanos</h1>
//       <form onSubmit={formik.handleSubmit} className="space-y-6">
//         <div className="text-left">
//           <label className="block text-sm font-bold text-gray-700">Nombre:</label>
//           <input
//             type="text"
//             name="name"
//             className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
//               formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
//             }`}
//             {...formik.getFieldProps("name")}
//           />
//           {formik.touched.name && formik.errors.name && (
//             <p className="text-red-500 text-sm">{formik.errors.name}</p>
//           )}
//         </div>
//         <div className="text-left">
//           <label className="block text-sm font-bold text-gray-700">Correo Electrónico:</label>
//           <input
//             type="email"
//             name="email"
//             className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
//               formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//             {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <p className="text-red-500 text-sm">{formik.errors.email}</p>
//           )}
//         </div>
//         <div className="text-left">
//           <label className="block text-sm font-bold text-gray-700">Mensaje:</label>
//           <textarea
//             name="message"
//             rows={4}
//             className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
//               formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"
//             }`}
//             {...formik.getFieldProps("message")}
//           ></textarea>
//           {formik.touched.message && formik.errors.message && (
//             <p className="text-red-500 text-sm">{formik.errors.message}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="bg-[#EEA987] text-white py-2 px-4 rounded hover:bg-[#ff8548] focus:outline-none focus:ring-2 focus:ring-orange-300"
//           >
//           Enviar
//         </button>
//       </form>
      
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold text-blue-900">Nuestra Ubicación</h2>
//         <iframe
//           title="Ubicación de la oficina"
//           className="w-full h-64 rounded mt-4"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.304347779653!2d-58.37994475468674!3d-34.606196475245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad27b20837b%3A0x650f852d59480657!2sFlorida%20165%2C%20C1005AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738162703744!5m2!1ses-419!2sar"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

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
          <h2 className="text-5xl font-bold text-center items-center  text-white mt-2 mb-6">
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
        <h1 className="text-4xl text-white  font-bold text-center mb-2">
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