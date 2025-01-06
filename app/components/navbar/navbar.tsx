import Image from "next/image"
import Link from "next/link";
import logo from "@/app/components/pictures/logo.png"
import profile from "@/app/components/pictures/profile.png"
import search from "@/app/components/pictures/search.png"
import heart from "@/app/components/pictures/heart.png"
import cart from "@/app/components/pictures/cart.png" 
export default function Navbar(){
    return(
        <div className="h-[100px] w-[1440px] bg-white">
            <div className="flex mt-[29px] mb-[30px] ml-[54px] mr-[100px] items-center">
<div className="flex items-center w-[185px] h-[41px] gap-[5px]">
   <div className="w-[52px] h-[32px]"> <Image src={logo} alt="logo"/> </div>
   <div className="w-[130px] h-[41x] text-black text-[34px] font-bold">Furniro</div>
</div>
<div className="ml-[266px] flex gap-[75px] w-[430px] h-[24px] font-medium text-base items-center">
<Link
  href="/"
  className="hover:underline transition-transform duration-500 ease-in-out"
>
  <div className="hover:scale-105 transition-all duration-100 active:scale-110 active:opacity-80">
    Home
  </div>
</Link>
    <Link
  href="/Shop"
  className="hover:underline transition-transform duration-500 ease-in-out"
>
  <div className="hover:scale-105 transition-all duration-100 active:scale-110 active:opacity-80">
    Shop
  </div>
</Link>

    <div>Blog</div>
    <div>Contact</div>
</div>

<div className="ml-[158px] flex gap-[45px] items-center">
    <div className="w-7 h-7"><Image src={profile} alt="profile"/></div>
    <div className="w-7 h-7"><Image src={search} alt="search"/></div>
    <div className="w-7 h-7"><Image src={heart} alt="favorites"/></div>
    <div className="w-7 h-7"><Image src={cart} alt="cart"/></div>
</div>
            </div>
        </div>
    )
}