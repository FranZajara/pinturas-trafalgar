// src/pages/Home.tsx
import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Link } from "@heroui/react";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <Card className="mb-10">
        <CardHeader className="flex-col items-start gap-3">
          <h1 className="text-3xl font-bold text-blue-600">Bienvenido a Pinturas Trafalgar</h1>
          <p className="text-default-500 text-lg">
            Transformamos espacios con color y calidad.
          </p>
        </CardHeader>
        <CardBody className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={logo}
            alt="Pintura profesional"
            className="w-full md:w-1/2 h-auto rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <p>
              En <strong>Pinturas Trafalgar</strong>, nos dedicamos a ofrecer servicios de pintura interior y exterior para hogares, negocios y comunidades. Contamos con un equipo profesional y los mejores materiales del mercado.
            </p>
            <Button color="primary" as={Link} href="#contacto">
              Solicita presupuesto
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="font-semibold text-lg">Pintura Interior</CardHeader>
          <CardBody>
            <p>Paredes, techos, acabados modernos y duraderos. Dale vida a tus espacios.</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="font-semibold text-lg">Pintura Exterior</CardHeader>
          <CardBody>
            <p>Protección y estilo para fachadas y exteriores. Resistentes al clima.</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="font-semibold text-lg">Diseño de color</CardHeader>
          <CardBody>
            <p>Asesoramiento personalizado en combinación de colores y tendencias.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
