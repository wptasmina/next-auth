import { auth } from "@/auth";
import Logout from "@/components/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

const HomePage = async() => {

    const session = await auth();

    if(!session?.user) redirect("/")

  return (
    <div className="flex flex-col items-center m-4">
        <h1 className="text-3xl my-2">{session?.user?.name}</h1>

        <Image 
         src={session?.user?.image}
         alt={session?.user?.name}
         width={32}
         height={32}
         className="rounded-full"
        />
        
        <Logout />
    </div>
  )
}

export default HomePage;
