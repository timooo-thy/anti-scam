"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { Link1Icon } from "@radix-ui/react-icons";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type MenuItem = {
    name: string;
    link: string;
  };

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Upload", link: "/upload" },
    { name: "Dashboard", link: "/dashboard" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-2">
          <Link1Icon width="22" height="22" />
          <p className="font-bold text-inherit">SG Anti-Scam AI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="/">
            Home
          </Link>
        </NavbarItem>
        <Separator orientation="vertical" className="h-5" />
        <NavbarItem>
          <Link color="foreground" href="/upload">
            Upload
          </Link>
        </NavbarItem>
        <Separator orientation="vertical" className="h-5" />
        <NavbarItem>
          <Link color="foreground" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ModeToggle />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
