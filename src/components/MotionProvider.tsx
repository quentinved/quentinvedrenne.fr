"use client";

import { MotionConfig } from "framer-motion";

// Disables all Framer Motion animations for visitors whose OS has
// "reduce motion" enabled — an accessibility requirement, and free to honor.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
