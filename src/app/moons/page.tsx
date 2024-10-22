import Link from "next/link";

export default function Home() {
    const moons = [ "Experimentation", "Assurance", "Vow", "Offense", "March", "Rend", "Dine", "Titan", "Embrion", "Artifice"]

    return (
      <div
          className="text-red text-center place-items-stretch text-xl font-bold pt-20 grid xl:grid-cols-3 gap-24 sm:grid-cols-1 xl:pl-20 xl:pr-20 sm:pl-3 sm:pr-3">
          {moons.map(moon => (

              <Link
                  key={moon}
                  href={'/moons/' + moon}
                  className="hover:text-xl transition-transform hover:font-extrabold">
                  <div className="border-2 border-red rounded-2xl p-4 hover:bg-red hover:bg-opacity-20 ">{moon}</div>
              </Link>

          ))}
      </div>
  );
}
