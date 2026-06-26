"use client";

import { usePathname } from "next/navigation";
import { getServiceContactByPathname } from "@/config/siteContact";

export const useCurrentServiceContact = () => {
  const pathname = usePathname();

  return getServiceContactByPathname(pathname);
};
