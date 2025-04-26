import { Form, Input, Textarea, Button } from "@heroui/react";

import { addToast } from "@heroui/toast";

import emailjs from "emailjs-com";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_kk2nw1p",
        "template_burq19j",
        form,
        "j-nrMGzutGOW6I99d"
      )
      .then(
        () => {
          addToast({
            title: "El email ha sido enviado correctamente",
            description: "Gracias por contactarnos",
            color: 'success',
          })
          form.reset();
        },
        () => {
          addToast({
            title: "Hay un problema al enviar el email",
            description: "Perdona las molestias, podrás encontrar el correo de la empresa al final de la página",
            color: 'danger',
          })
        }
      );
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4 flex items-center justify-center h-screen">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Contáctanos</h1>
        <Form onSubmit={handleSubmit} className="space-y-6">
          <Input type="text" placeholder="Tu nombre" name="nombre" required />
          <Input type="email" placeholder="Tu correo: nombre@ejemplo.com" name="email" required />
          <Input type="tel" placeholder="Tu número: 123-456-7890" name="telefono" />
          <Textarea minRows={6} placeholder="Escribe tu mensaje..." name="mensaje" required />
          <Button type="submit" color="primary" className="w-full">
            Enviar mensaje
          </Button>
        </Form>
      </div>
    </section>
  );
}