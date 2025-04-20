import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image} from "@heroui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function App() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <Image src={logo} alt="Logo Pinturas Trafalgar" width={40} height={40} />
        <p className="font-bold text-inherit">Pinturas Trafalgar</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link to="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/" color="foreground">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/">
            Catálogo
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} to="/Contacto" color="primary">
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
