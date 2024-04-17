import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      this ishome page
      <UserButton
        afterSignOutUrl="/"
      />
      <ModeToggle />
    </div>
  )
}

