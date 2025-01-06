import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Image from "next/image";
import shop1 from "@/app/components/pictures/shop1.png";
import shopx from "@/app/components/pictures/shopx.png";
import shopf from "@/app/components/pictures/shopf.png";
import shop from "@/app/components/pictures/shop.png";
import shopi from "@/app/components/pictures/shopi.png";
import Overlay from "@/app/components/pictures/Overlay.png";
import share from "@/app/components/pictures/share.png";
import compare from "@/app/components/pictures/compare.png";
import like from "@/app/components/pictures/like.png";
import pro1 from "@/app/components/pictures/pro1.png";
import pro2 from "@/app/components/pictures/pro2.png";
import pro3 from "@/app/components/pictures/pro3.png";
import pro4 from "@/app/components/pictures/pro4.png";
import l30 from "@/app/components/pictures/l30.png";
import l50 from "@/app/components/pictures/l50.png";
import newl from "@/app/components/pictures/newl.png";
import prop0 from "@/app/components/pictures/prop0.png";
import prop1 from "@/app/components/pictures/prop1.png";
import prop2 from "@/app/components/pictures/prop2.png";
import prop3 from "@/app/components/pictures/prop3.png";
export default function Shop(){
    return(
        <div className="w-[1440px] h-[3474px]">
            <Navbar/>
            <div className="w-[1440px] h-[316px] bg-cover bg-center pt-[121px]" style={{backgroundImage: `url(${shop1.src})` }}>
               <div className="flex flex-col gap-[2px]">
                <div className="w-[124px] h-[72px] text-black font-medium text-[48px] leading-[72px]  mx-[658px] ">Shop</div>
                <div className="w-[121px] h-6 flex gap-[6px] ml-[660px] mr-[659px] items-center">
                    <div className="font-medium text-base text-black leading-6 w-[48px] h-6">Home</div>
                    <div > <Image src={shopx} alt="" className="w-2 h-2 "/></div>
                    <div className="w-[41px] h-6 font-light text-black text-base leading-6">Shop</div>
                </div>
                </div>
            </div>
            <div className="w-[1440px] h-[100px] bg-[#F9F1E7] flex items-center mb-[46px]">
                <div className="filter flex gap-3 w-[85px] h-[30px] ml-[98px] my-[35px]">
                    <Image src={shopf} alt="" className="w-[25px] h-[25px]"/>
                    <div className="w-12 h-[30px] text-black font-normal text-[20px] leading-[30px]">Filter</div>
                </div>
                <Image src={shop} alt="" className="w-[28px] h-[28px] my-[36px] ml-[23px]"/>
                <Image src={shopi} alt="" className="w-[24px] h-[24px] my-[38px] ml-[24px]"/>
                <div className="w-[237px] h-[37px] border-l-2 border-[#9F9F9F] ml-[30px]">
                    <div className="mt-[6px] mb-[7px] ml-[34px] w-[203px] h-[34px] text-black text-base font-normal leading-6">Showing 1–16 of 32 results</div>
                </div>
                <div className="w-[126px] h-[55px] flex gap-[17px] mb-[23px] mt-[22px] ml-[348px]">
                    <div className="w-[54px] h-[30px] font-normal text-[20px] leading-[30px] text-black mt-[12px] mb-[13px]">Show</div>
                    <div className="bg-white w-[55px] h-[55px] text-[#9F9F9F] font-normal text-[20px] leading-[30px] px-[18px] pt-[12px] pb-[13px] items-center">16</div>
                </div>
                <div className="w-[288px] h-[55px] flex gap-[17px] mb-[23px] mt-[22px] ml-[29px]">
                    <div className="w-[83px] h-[30px] font-normal text-[20px] leading-[30px] text-black mt-[12px] mb-[13px]">Short by</div>
                    <div className="bg-white w-[188px] h-[55px] text-[#9F9F9F] font-normal text-[20px] leading-[30px] pl-[30px] pt-[12px] pb-[13px] items-center">Default</div>
                </div>
            </div>
            <div className="w-[1440px] h-[2051px] pt-[17px] ml-[99px] mr-[97px] mb-[85px]">
                <div className="w-[1244px] h-[2034px]">
                <div className="Products grid grid-cols-4 gap-8 items-center">
                <div className="01 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center  "
                  style={{ backgroundImage: `url(${pro1.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l30} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Slytherine
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 3.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="02 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro2.src})` }}
                ></div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Leviosa
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="03 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro3.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l50} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Lolito
                      </div>
                      <div className="w-[121px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Luxury big sofa
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 7.000.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 14.000.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="04 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div
                className="image w-[285px] h-[301px] bg-cover bg-center"
                style={{ backgroundImage: `url(${pro4.src})` }}
              >
                <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                  <Image src={newl} alt="" />
                </div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                      Respira
                    </div>
                    <div className="w-[224px] h-[24px] text-[#898989] font-medium text-base leading-6">
                      Outdoor bar table and stool
                    </div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                      Rp 500.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="01 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center  "
                  style={{ backgroundImage: `url(${pro1.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l30} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Slytherine
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 3.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="02 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro2.src})` }}
                ></div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Leviosa
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="03 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro3.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l50} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Lolito
                      </div>
                      <div className="w-[121px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Luxury big sofa
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 7.000.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 14.000.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="04 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div
                className="image w-[285px] h-[301px] bg-cover bg-center"
                style={{ backgroundImage: `url(${pro4.src})` }}
              >
                <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                  <Image src={newl} alt="" />
                </div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                      Respira
                    </div>
                    <div className="w-[224px] h-[24px] text-[#898989] font-medium text-base leading-6">
                      Outdoor bar table and stool
                    </div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                      Rp 500.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="01 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center  "
                  style={{ backgroundImage: `url(${pro1.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l30} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Slytherine
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 3.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="02 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro2.src})` }}
                ></div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Leviosa
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="03 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro3.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l50} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Lolito
                      </div>
                      <div className="w-[121px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Luxury big sofa
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 7.000.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 14.000.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="04 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div
                className="image w-[285px] h-[301px] bg-cover bg-center"
                style={{ backgroundImage: `url(${pro4.src})` }}
              >
                <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                  <Image src={newl} alt="" />
                </div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                      Respira
                    </div>
                    <div className="w-[224px] h-[24px] text-[#898989] font-medium text-base leading-6">
                      Outdoor bar table and stool
                    </div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                      Rp 500.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="01 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center  "
                  style={{ backgroundImage: `url(${pro1.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l30} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Slytherine
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 3.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="02 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro2.src})` }}
                ></div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Leviosa
                      </div>
                      <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Stylish cafe chair
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 2.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="03 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="image w-[285px] h-[301px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pro3.src})` }}
                >
                  <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                    <Image src={l50} alt="" />
                  </div>
                </div>
                <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                  <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                    <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                      <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                        Lolito
                      </div>
                      <div className="w-[121px] h-[24px] text-[#898989] font-medium text-base leading-6">
                        Luxury big sofa
                      </div>
                    </div>
                    <div className="div2 w-[249px] h-[30px] flex gap-4">
                      <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                        Rp 7.000.000
                      </div>
                      <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">
                        Rp 14.000.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="04 relative group w-[285px] h-[446px]">
              <div
                className="overlay absolute inset-0 flex justify-center bg-cover bg-center w-[285px] h-[446px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Overlay.src})` }}
              >
                <div className="w-[252px] h-[96px] my-[175px] ml-[16px] mr-[17px]">
                  <button className="w-[202px] h-[48px] items-center mx-[25px] mb-[24px] bg-white text-[#B88E2F] text-xs font-semibold leading-6 py-3 pl-[59px] pr-[52px]">
                    <div className="w-[91px] h-[24px]">Add to cart</div>
                  </button>
                  <div className="w-[252px] h-[28px] flex gap-5">
                    <Image src={share} alt="" className="w-[66px] h-6" />
                    <Image src={compare} alt="" className="w-[96px] h-6" />
                    <Image src={like} alt="" className="w-[50px] h-6" />
                  </div>
                </div>
              </div>
              <div
                className="image w-[285px] h-[301px] bg-cover bg-center"
                style={{ backgroundImage: `url(${pro4.src})` }}
              >
                <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]">
                  <Image src={newl} alt="" />
                </div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">
                      Respira
                    </div>
                    <div className="w-[224px] h-[24px] text-[#898989] font-medium text-base leading-6">
                      Outdoor bar table and stool
                    </div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                      Rp 500.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="w-[392px] h-[90px] mx-[426px] mt-[40px] items-baseline flex gap-[38px]">
                <div className="w-[60px] h-[60px] bg-[#B88E2F] rounded-[10px] text-white font-normal text-[20px] leading-[30px] px-[27px] py-[15px] hover:bg-[#937736] hover:text-white hover:opacity-75" >1</div>
                <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-[10px] text-black font-normal text-[20px] leading-[30px] px-[24px] py-[15px] hover:bg-[#937736] hover:text-white hover:opacity-75 active:bg-[#B88E2F] active:text-white duration-300" >2</div>
                <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-[10px] text-black font-normal text-[20px] leading-[30px] px-[24px] py-[15px] hover:bg-[#937736] hover:text-white hover:opacity-75 active:bg-[#B88E2F] active:text-white duration-300" >3</div>
                <div className="w-[98px] h-[60px] bg-[#F9F1E7] rounded-[10px] text-black font-light text-[20px] leading-[30px] px-[28px] py-[15px] hover:bg-[#937736] hover:text-white hover:opacity-75 active:bg-[#B88E2F] active:text-white duration-300" >Next</div>
            </div>
                </div>
            </div>
            <div className="w-[1440px] h-[270px] bg-[#FAF3EA] px-[53px] py-[100px]">
              
                <div className="w-[1334px] h-[70px] flex justify-between">
                    <div className="1 w-[337px] h-[70px] flex gap-[10px]">
                        <Image src={prop0} alt="" className="image w-[60px] h-[60px]"/>
                        <div className="text w-[267px] h-[70px] flex flex-col gap-[2px]">
                            <div className="w-[157px] h-[38px] text-[#242424] font-semibold text-[25px] leading-[37.5px]">High Quality</div>
                            <div className="w-[267px] h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">crafted from top materials</div>
                        </div>
                    </div>
                    <div className="2 w-[328px] h-[70px] flex gap-[10px]">
                        <Image src={prop1} alt="" className="image w-[60px] h-[60px]"/>
                        <div className="text w-[258px] h-[70px] flex flex-col gap-[2px]">
                            <div className="w-[258px] h-[38px] text-[#242424] font-semibold text-[25px] leading-[37.5px]">Warranty Protection</div>
                            <div className="w-[126px] h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">Over 2 years</div>
                        </div>
                    </div>
                    <div className="3 w-[244px] h-[70px] flex gap-[10px]">
                        <Image src={prop2} alt="" className="image w-[60px] h-[60px]"/>
                        <div className="text w-[174px] h-[70px] flex flex-col gap-[2px]">
                            <div className="w-[174px] h-[38px] text-[#242424] font-semibold text-[25px] leading-[37.5px]">Free Shipping</div>
                            <div className="w-[163px] h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">Order over 150 $</div>
                        </div>
                    </div>
                    <div className="1 w-[259px] h-[70px] flex gap-[10px]">
                        <Image src={prop3} alt="" className="image w-[60px] h-[60px]"/>
                        <div className="text w-[189px] h-[70px] flex flex-col gap-[2px]">
                            <div className="w-[177px] h-[38px] text-[#242424] font-semibold text-[25px] leading-[37.5px]">24 / 7 Support</div>
                            <div className="w-[189px] h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">Dedicated support</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}