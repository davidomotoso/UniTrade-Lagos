import { useCartStore } from "@/Utils/storeCart"

const Alert = () => {
  const alert = useCartStore((state) => state.alert) as {message:string,color:string};
  return (
    <div className={`w-full fixed top-0 left-0 p-2 ${alert.color} z-20 text-center text-white font-medium`}>{alert.message}</div>
  )
}

export default Alert