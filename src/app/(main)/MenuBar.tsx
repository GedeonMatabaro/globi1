import { Button } from "@/components/ui/button";
import { Bell, Home, Mail, MapPinned } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
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
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Notifications"
        asChild
      >
        <Link href="/notifications">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Bell />
              <span className="text-[10px] sm:hidden">Notifications</span>
            </div>
            <span className="hidden lg:inline ml-2">Notifications</span>
          </div>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Messages"
        asChild
      >
        <Link href="/messages">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Mail />
              <span className="text-[10px] sm:hidden">Messages</span>
            </div>
            <span className="hidden lg:inline ml-2">Messages</span>
          </div>
        </Link>
      </Button>
    </div>
  );
}
