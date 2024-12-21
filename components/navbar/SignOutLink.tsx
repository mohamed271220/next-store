"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been logged out" });
  };
  return (
    <SignOutButton>
      <Link href={"/"} className="w-full text-left" onClick={handleLogout}>
        Sign Out
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
