"use client";

import { useForm } from "react-hook-form";

type ContactFormValues = {
  nombre: string;
  email: string;
  mensaje: string;
};

export default function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Formulario enviado:", data);
    reset();
  };

  return (
    <main className="min-h-screen p-8 flex justify-center items-center bg-gray-100">
      <section className="w-full max-w-2xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          ¿Trabajamos juntos?
        </h1>
        <p className="text-slate-600 mb-8">
          Si tenés un proyecto turístico, una marca en crecimiento o simplemente
          querés mejorar tu presencia online, escribime. Estoy para ayudarte a
          llevar tu propuesta al próximo nivel.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-slate-700"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              {...register("nombre", { required: "Este campo es obligatorio" })}
              className="mt-1 block w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Correo inválido",
                },
              })}
              className="mt-1 block w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-slate-700"
            >
              ¿En qué te puedo ayudar?
            </label>
            <textarea
              id="mensaje"
              {...register("mensaje", {
                required: "Este campo es obligatorio",
              })}
              className="mt-1 block w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32 resize-none"
            />
            {errors.mensaje && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mensaje.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
