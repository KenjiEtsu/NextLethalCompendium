"use client";
import {useRouter, usePathname} from "next/navigation";


export default function Home() {
    const moons = [ "Experimentation", "Assurance", "Vow", "Offense", "March", "Rend", "Dine", "Titan", "Embrion", "Artifice"]
    const moon = usePathname().split("/")[2];
    const router = useRouter();
    if (!moons.includes(moon as string)) {
        router.push('/moons');
        console.log(moon);
    }


    return (
      <div
          className="text-red text-center place-items-stretch text-xl font-bold pt-20 grid xl:grid-cols-3 gap-24 sm:grid-cols-1 xl:pl-20 xl:pr-20 sm:pl-3 sm:pr-3">
          <h1 className="text-center text-4xl font-bold text-red">{moon}</h1>
      </div>
  );
}
