'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string,
  label: string
}

export const BackButton = ({ href, label }: BackButtonProps) => (
  <Button variant="secondary">
    <Link aria-label={label} href={href}>
        {label}
    </Link>
  </Button>
)
