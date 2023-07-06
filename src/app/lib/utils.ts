export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
