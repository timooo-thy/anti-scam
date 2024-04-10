"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ModeToggle } from "@/src/components/mode-toggle";
import { Separator } from "@/src/components/ui/separator";
import { Link1Icon } from "@radix-ui/react-icons";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useAuth();

  type MenuItem = {
    name: string;
    link: string;
  };

  let menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Upload", link: "/upload" },
  ];

  if (userId) {
    menuItems = [...menuItems, { name: "Dashboard", link: "/admin/dashboard" }];
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Link1Icon width="22" height="22" />
            <p className="font-bold text-inherit">SG Anti-Scam AI</p>
          </Link>
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
        {userId && (
          <>
            <Separator orientation="vertical" className="h-5" />
            <NavbarItem>
              <Link color="foreground" href="/admin/dashboard">
                Dashboard
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {!userId ? (
          <SignInButton redirectUrl="/">
            <Button className="text-white">Sign in</Button>
          </SignInButton>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
        <ModeToggle />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"foreground"} className="w-full" href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
