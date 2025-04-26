// src/pages/Home.tsx
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <Card className="mb-10">
        <CardHeader className="flex-col items-center gap-3">
          <h1 className="text-3xl font-bold text-black-600 p-3">Bienvenido a Pinturas Trafalgar</h1>
          <p className="text-default-500 text-lg font-semibold">
            Transformamos espacios con color y calidad.
          </p>
        </CardHeader>
        <CardBody className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col gap-4 p-3">
            <p>
              En <strong>Pinturas Trafalgar</strong>, nos dedicamos a ofrecer servicios de pintura interior y exterior para hogares, negocios y comunidades. Rehabilitación de azoteas y fachadas. Contamos con un equipo profesional y los mejores materiales del mercado.
            </p>
            <Button color="primary" as={Link} to="/pinturas-trafalgar/Contacto">
              Solicita presupuesto
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
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
          <CardHeader className="font-semibold text-lg">Rehabilitación de azoteas</CardHeader>
          <CardBody>
            <p>Prevención de entradas de agua y mantenimiento de la pintura.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
