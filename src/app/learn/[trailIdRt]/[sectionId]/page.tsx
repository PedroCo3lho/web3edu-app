"use client";

import { Learn } from "@/components/learn/Learn";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrailPage() {
  const { trailIdRt, sectionId } = useParams();

  return <Learn trailIdRt={trailIdRt} sectionId={sectionId} />;
}