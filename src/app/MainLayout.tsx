"use client";
import Alert from "@/components/Alert";
import { useCartStore } from "@/Utils/storeCart";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const alert = useCartStore((state) => state.alert as { type?: boolean });
  return (
    <>
      {children}
      {alert.type && <Alert />}
    </>
  );
};
export default MainLayout;
