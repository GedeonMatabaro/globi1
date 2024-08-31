import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Bell, Home, Mail, MapPinned } from "lucide-react";
import Link from "next/link";
import NotificationsButton from "./NotificationsButton";
import streamServerClient from "@/lib/stream";
import MessagesButton from "./MessagesButton";

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
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
        title="Home"
        asChild
      >
        <Link href="/">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Home />
              <span className="text-[10px] sm:hidden">Home</span>
            </div>
            <span className="hidden lg:inline ml-2">Home</span>
          </div>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Discover"
        asChild
      >
        <Link href="/discover">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <MapPinned />
              <span className="text-[10px] sm:hidden">Discover</span>
            </div>
            <span className="hidden lg:inline ml-2">Discover</span>
          </div>
        </Link>
      </Button>
      <NotificationsButton
        initialState={{ unreadCount: unreadNotificationsCount }}
      />
      <MessagesButton initialState={{ unreadCount: unreadMessagesCount }} />
    </div>
  );
}
