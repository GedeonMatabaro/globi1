

import { Button } from "@/components/ui/button";
import UserButton from "@/components/UserButton";
import { Bell, Bookmark, CalendarClock, ChevronRight, ContactRound, Home, Mail, MapPinned, NotepadText, Telescope, Users } from "lucide-react";
import Link from "next/link"; 
// import { useSession } from "@/app/(main)/SessionProvider";
import { Separator } from "@/components/ui/separator"
import prisma from "@/lib/prisma";
import NotificationsButton from "@/app/(main)/NotificationsButton";
import { validateRequest } from "@/auth";
import MessagesButton from "@/app/(main)/MessagesButton";
import streamServerClient from "@/lib/stream";

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

/*

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null;

  const unreadNotificationCount = await prisma.notification.count({
    where: {
      recipientId: user.id,
      read: false,
    },
  });
*/



export default async function SideMenuBar({ className }: SideMenuBarProps) {
    //ccess the user from the session
    
    const { user } = await validateRequest();
    if (!user) return null;

    const [unreadNotificationsCount, unreadMessagesCount] = await Promise.all([
      prisma.notification.count({
        where: {
          recipientId: user.id,
          read: false,
        },
      }),
      (await streamServerClient.getUnreadCount(user.id)).total_unread_count,
    ]);

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
      <NotificationsButton
        initialState={{ unreadCount: unreadNotificationsCount }}
      />
      <MessagesButton initialState={{ unreadCount: unreadMessagesCount }} />
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
