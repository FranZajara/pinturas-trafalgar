import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
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
      isMenuOpen={isMenuOpen} // <- IMPORTANTE
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src={logo}
            alt="Logo Pinturas Trafalgar"
            width={40}
            height={40}
          />
          <p className="font-bold text-inherit">Pinturas Trafalgar</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <RouterLink to="/pinturas-trafalgar">Inicio</RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/pinturas-trafalgar/Galeria">Catálogo</RouterLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={RouterLink} to="/pinturas-trafalgar/Contacto" color="primary">
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <RouterLink to="/pinturas-trafalgar" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </RouterLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <RouterLink to="/pinturas-trafalgar/Galeria" onClick={() => setIsMenuOpen(false)}>
            Catálogo
          </RouterLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
