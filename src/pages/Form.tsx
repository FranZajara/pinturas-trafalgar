// src/pages/Form.tsx
import { Form, Input, Textarea, Button } from "@heroui/react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Datos del formulario:", data);
    // Aquí podrías enviar los datos a un backend o a un servicio como Formspree o EmailJS
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contáctanos</h1>
      <Form onSubmit={handleSubmit} className="space-y-6">
          <Input type="text" placeholder="Tu nombre" name="nombre" />

          <Input type="email" placeholder="tucorreo@ejemplo.com" name="email" />

          <Input type="tel" placeholder="123-456-7890" name="telefono" />

          <Textarea placeholder="Escribe tu mensaje..." name="mensaje" />

        <Button type="submit" color="primary" className="w-full">
          Enviar mensaje
        </Button>
      </Form>
    </section>
  );
}
