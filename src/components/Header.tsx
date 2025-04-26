import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Image
} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Image
            src={logo}
            alt="Logo Pinturas Trafalgar"
            width={40}
            height={30}
          />
          <p className="font-bold text-inherit whitespace-pre-wrap">
            Pinturas Trafalgar
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem isActive>
          <RouterLink to="/">Inicio</RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/Galeria">Catálogo</RouterLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={RouterLink} to="/Contacto" color="primary">
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <RouterLink to="/" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </RouterLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <RouterLink to="/Galeria" onClick={() => setIsMenuOpen(false)}>
            Catálogo
          </RouterLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
