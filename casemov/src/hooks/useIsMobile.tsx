import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Periksa ukuran layar saat komponen pertama kali dipasang
    checkIsMobile();

    // Tambahkan event listener untuk perubahan ukuran layar
    window.addEventListener("resize", checkIsMobile);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}
