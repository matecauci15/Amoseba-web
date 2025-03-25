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
//         confirmButtonColor: "#A39F73",
//         confirmButtonText: "Aceptar",
//       });

//       resetForm();
//     },
//   });

//   return (
//     <div className=" mx-auto mt-25 bg-gradient-to-b from-[#CAC792] to-gray-50">
//       <div className="rounded-xl overflow-hidden">
//         <div className="p-8  mb-8  items-center justify-center ">
//           <h2 className="text-5xl font-montserrat font-black text-center items-center  text-white mt-2 mb-6">
//             Nuestra Ubicación
//           </h2>
//           <div className="flex justify-center">
//             <div className="rounded-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300 max-w-4xl w-full">
//               <iframe
//                 title="Ubicación de la oficina"
//                 className="w-full h-64 md:h-80 lg:h-96"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.304347779653!2d-58.37994475468674!3d-34.606196475245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad27b20837b%3A0x650f852d59480657!2sFlorida%20165%2C%20C1005AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738162703744!5m2!1ses-419!2sar"
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//         <h1 className="text-4xl text-white  font-montserrat font-black text-center mb-2">
//           Contáctanos
//         </h1>
//         <p className="text-center text-white mb-5 opacity-90">
//           Estamos aquí para ayudarte
//         </p>

//         <form
//           onSubmit={formik.handleSubmit}
//           className="mb-10 space-y-6 max-w-lg mx-auto border-r-2 shadow-lg rounded-xl p-10"
//         >
//           {/* Name Input */}
//           <div className="relative">
//             <label className="block text-gray-700 font-semibold mb-1">
//               Nombre
//             </label>
//             <input
//               type="text"
//               {...formik.getFieldProps("name")}
//               className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none 
//         ${
//           formik.touched.name && formik.errors.name
//             ? "border-red-500"
//             : "border-gray-300"
//         }`}
//               placeholder="Ingresa tu nombre"
//             />
//             {formik.touched.name && formik.errors.name && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//             )}
//           </div>

//           {/* Email Input */}
//           <div className="relative">
//             <label className="block text-gray-700 font-semibold mb-1">
//               Correo Electrónico
//             </label>
//             <input
//               type="email"
//               {...formik.getFieldProps("email")}
//               className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none
//         ${
//           formik.touched.email && formik.errors.email
//             ? "border-red-500"
//             : "border-gray-300"
//         }`}
//               placeholder="Ingresa tu correo"
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//             )}
//           </div>

//           {/* Message Textarea */}
//           <div className="relative">
//             <label className="block text-gray-700 font-semibold mb-1">
//               Mensaje
//             </label>
//             <textarea
//               {...formik.getFieldProps("message")}
//               rows={4}
//               className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none resize-none
//         ${
//           formik.touched.message && formik.errors.message
//             ? "border-red-500"
//             : "border-gray-300"
//         }`}
//               placeholder="Escribe tu mensaje aquí..."
//             />
//             {formik.touched.message && formik.errors.message && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#E8A598] text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:bg-[#D08A85] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A39F73] active:scale-95"
//           >
//             Enviar Mensaje
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Mail, MapPin, Phone, Send, User, MessageSquare, CheckCircle } from "lucide-react";

// TypeScript interfaces
interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="bg-[#CAC792] p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-700">{title}</h4>
      {children}
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<FormValues>({
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
      setLoading(true);
      
      // Simular un retardo en el envío
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Nos pondremos en contacto contigo pronto.",
          icon: "success",
          confirmButtonColor: "#A39F73",
          confirmButtonText: "Aceptar",
        });
        resetForm();
      }, 1000);
    },
  });

  return (
    <div className="bg-gradient-to-b from-[#CAC792] to-gray-50 py-20 mt-18">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          {/* <span className="bg-white px-4 py-1 rounded-full text-[#CAC792] text-sm font-semibold shadow-md">
            ¿Tienes alguna pregunta?
          </span> */}
          <h1 className="text-5xl font-montserrat font-black text-white mb-4 mt-4">
            Contáctanos
          </h1>
          <div className="w-24 h-1 bg-[#E8A598] mx-auto rounded-full mb-6"></div>
          {/* <p className="text-white text-lg opacity-90">
            Estamos para ayudarte.
          </p> */}
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Side - Contact Information */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-xl p-8 transform transition-all hover:shadow-2xl duration-300 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#E8A598] pl-4">
              Información de Contacto
            </h3>
            
            <div className="space-y-10 flex-grow">
              <ContactCard 
                icon={<MapPin className="h-5 w-5 text-white" />} 
                title="Dirección"
              >
                <p className="text-gray-600">Florida 165, Ciudad Autónoma de Buenos Aires</p>
              </ContactCard>
              
              <ContactCard 
                icon={<Phone className="h-5 w-5 text-white" />} 
                title="Teléfono"
              >
                <p className="text-gray-600">+54 (11) 3023 0633</p>
              </ContactCard>
              
              <ContactCard 
                icon={<Mail className="h-5 w-5 text-white" />} 
                title="Correo Electrónico"
              >
                <p className="text-gray-600">info@amoseba.com.ar</p>
              </ContactCard>

              {/* <ContactCard 
                icon={<Clock className="h-5 w-5 text-white" />} 
                title="Horario de Atención"
              >
                <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
              </ContactCard> */}
            </div>
            
            {/* Benefits list */}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-bold text-gray-700 mb-3">¿Por qué contactarnos?</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#CAC792] mr-2" />
                  <span className="text-sm">Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#CAC792] mr-2" />
                  <span className="text-sm">Atención personalizada</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#CAC792] mr-2" />
                  <span className="text-sm">Asesoramiento profesional</span>
                </li>
              </ul>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider font-bold text-gray-700 mb-4">Síguenos en</h4>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a 
                  href="https://www.instagram.com/amosebapresta/" 
                  className="bg-[#CAC792] hover:bg-[#A39F73] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* <a 
                  href="#" 
                  className="bg-[#CAC792] hover:bg-[#A39F73] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a> */}
                <a 
                  href="https://www.facebook.com/amoseba.caba" 
                  className="bg-[#CAC792] hover:bg-[#A39F73] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-10 rounded-xl shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#E8A598] pl-4">
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      {...formik.getFieldProps("name")}
                      className={`w-full pl-10 px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none 
                      ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      {...formik.getFieldProps("email")}
                      className={`w-full pl-10 px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none
                      ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Ingresa tu correo"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensaje
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      {...formik.getFieldProps("message")}
                      rows={7}
                      className={`w-full pl-10 px-4 py-3 border rounded-lg transition-all duration-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#A39F73] outline-none resize-none
                      ${
                        formik.touched.message && formik.errors.message
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                {/* Terms and privacy */}
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-[#CAC792] border-gray-300 rounded focus:ring-[#CAC792]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-500">
                      Acepto la <a href="#" className="text-[#CAC792] hover:underline">política de privacidad</a> y los <a href="#" className="text-[#CAC792] hover:underline">términos y condiciones</a>
                    </label>
                  </div>
                </div> */}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E8A598] text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:bg-[#D08A85] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A39F73] active:scale-95 flex items-center justify-center disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-montserrat font-black text-center text-white mb-8">
            Nuestra Ubicación
          </h2>
          <div className="bg-white p-4 rounded-xl shadow-xl transform transition-all hover:shadow-2xl duration-300">
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Ubicación de la oficina"
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.304347779653!2d-58.37994475468674!3d-34.606196475245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad27b20837b%3A0x650f852d59480657!2sFlorida%20165%2C%20C1005AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738162703744!5m2!1ses-419!2sar"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;