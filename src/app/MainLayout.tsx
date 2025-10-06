"use client";
import Navbar from "@/components/Navbar";
import Alert from "@/components/Alert";
import { useCartStore } from "@/Utils/storeCart";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const alert = useCartStore((state) => state.alert as { type?: boolean });
  return (
    <>
      <Navbar />
      {children}
      {alert.type && <Alert />}
    </>
  );
};
export default MainLayout;
