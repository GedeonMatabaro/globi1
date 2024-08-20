"use client"

import { Button } from "@/components/ui/button";
import UserButton from "@/components/UserButton";
import { Bell, Bookmark, Home, Mail } from "lucide-react";
import Link from "next/link"; 
import { useSession } from "@/app/(main)/SessionProvider";

interface SideMenuBarProps {
  className?: string;
}

export default function SideMenuBar({ className }: SideMenuBarProps) {
    //ccess the user from the session
    const { user } = useSession();

  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="User"
        asChild
      > 
      <span>
        <UserButton />
        <span className="hidden lg:inline ">{user.displayName}</span> {/* Display user's name */}
      </span>
        
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href="/">
          <Home />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Notifications"
        asChild
      >
        <Link href="/notifications">
          <Bell />
          <span className="hidden lg:inline">Notifications</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Messages"
        asChild
      >
        <Link href="/messages">
          <Mail />
          <span className="hidden lg:inline">Messages</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Bookmarks"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark />
          <span className="hidden lg:inline">Bookmarks</span>
        </Link>
      </Button>
    </div>
  );
}
