import { cn } from "@/lib/utils";
import * as React from "react";
import { BadgeProps } from "./badge";
import { badgeVariants } from "./badgeVariants";

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
