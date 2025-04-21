import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import logo from "../assets/logo.png";

export default function App() {
  return (
    <Card className="max-w-[80%] mx-auto">
        <CardHeader className="flex gap-3">
            <Image
            alt="logo"
            height={40}
            radius="sm"
            src={logo}
            width={40}
            />
            <div className="flex flex-col">
            <p className="text-md">Pinturas Trafalgar</p>
            <p className="text-small text-default-500">
                Servicios de Pinturas en general y rehabilitación de azoteas y fachadas
            </p>
            </div>
        </CardHeader>

        <Divider />

        <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h4 className="font-semibold mb-2">Nuestros servicios</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                    <li>Pintura interior</li>
                    <li>Pintura exterior</li>
                    <li>Rehabilitación</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Términos legales</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                    <li>Aviso legal</li>
                    <li>Política de privacidad</li>
                    <li>Cookies</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contacto</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                    <li>Email: info@pinturastrafalgar.com</li>
                    <li>Teléfono: +34 600 123 456</li>
                    <li>Dirección: Barbate, Cádiz, España</li>
                    </ul>
                </div>
            </div>
        </CardBody>

        <Divider />

        <CardFooter>
            <div className="flex w-full justify-between items-center flex-wrap gap-2">
            <p className="text-small text-default-500">
              Copyright © 2025 Pinturas Trafalgar
            </p>
            <Link
                className="text-small text-default-500"
                isExternal
                href="https://www.linkedin.com/in/fran-z%C3%A1jara-g%C3%B3mez-513968244/"
            >
                Web creada y diseñada por Fran Zájara Gómez
            </Link>
            </div>
        </CardFooter>
        </Card>

  );
}
