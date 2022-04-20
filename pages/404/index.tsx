import Link from "next/link";
import NavBar from "../../components/NewDesignHome/NavBar";
import HomeFooter from "../../components/shared/HomeFooter";

export default function Custom404() {
  return(
    <>
    <NavBar />
    <div className="w-full flex flex-col justify-center items-center" style={{height: 'calc(100vh - 184px)'}}>
      <h1 className="block text-8xl font-extrabold">404</h1>
      <div className="">Page Not Found</div>
      <Link href="/">
        <a className="my-10 cursor-pointer bg-slate-600 hover:bg-slate-800 px-4 py-1 rounded-md text-white">Go back to Home</a>
      </Link>
    </div>
    <HomeFooter  />
    </>
  )
}
