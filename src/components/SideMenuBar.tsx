"use client"

import { Button } from "@/components/ui/button";
import UserButton from "@/components/UserButton";
import { Bell, Bookmark, CalendarClock, ChevronRight, ContactRound, Home, Mail, MapPinned, NotepadText, Telescope, Users } from "lucide-react";
import Link from "next/link"; 
import { useSession } from "@/app/(main)/SessionProvider";
import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}


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
      <span className="flex items-center w-full">
          <UserButton textS={user.displayName} className="w-full"/>
      </span>
        
      </Button>
      <Separator className="my-4" />
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
        title="Discover"
        asChild
      >
        <Link href="/dicover">
          <MapPinned />
          <span className="hidden lg:inline">Discover</span>
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
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Friends"
        asChild
      >
        <Link href="/friends">
        <ContactRound />
          <span className="hidden lg:inline">Friends</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Groups"
        asChild
      >
        <Link href="/groups">
          <Users />
          <span className="hidden lg:inline">Groups</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Memories"
        asChild
      >
        <Link href="/memories">
          <CalendarClock />
          <span className="hidden lg:inline">Memories</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="My plans"
        asChild
      >
        <Link href="/myplans">
          <NotepadText />
          <span className="hidden lg:inline">My plans</span>
        </Link>
      </Button>
      
    </div>
  );
}
