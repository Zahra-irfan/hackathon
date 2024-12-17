import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Image from "next/image";
import bg from "@/app/components/pictures/bg.png";
import live01 from "@/app/components/pictures/live01.png";
import live02 from "@/app/components/pictures/live02.png";
import live03 from "@/app/components/pictures/live03.png";
import pro1 from "@/app/components/pictures/pro1.png";
import pro2 from "@/app/components/pictures/pro2.png";
import pro3 from "@/app/components/pictures/pro3.png";
import pro4 from "@/app/components/pictures/pro4.png";
import pro5 from "@/app/components/pictures/pro5.png";
import pro6 from "@/app/components/pictures/pro6.png";
import pro77 from "@/app/components/pictures/pro77.png";
import pro8 from "@/app/components/pictures/pro8.png";
import l30 from "@/app/components/pictures/l30.png";
import l50 from "@/app/components/pictures/l50.png";
import newl from "@/app/components/pictures/newl.png";

export default function Home() {
  return (
    <div
      className="w-[1440px] h-[1007.93px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Navbar />

      <div className="w-[1440px] h-[716.83px]">
        <div className="bg-[#FFF3E3] w-[643px] h-[443px] mt-[253px] ml-[739px] rounded-[10px]">
          <div className="w-[561px] h-[344px] pt-[62px] pl-[39px] pr-[43px] pb-[37px] flex flex-col">
            <div className="w-[123px] h-[24px] text-[#333333] font-semibold text-base tracking-[3px] leading-6">
              New Arrival
            </div>
            <div className="w-[559px] h-[127px] font-bold text-[52px] leading-[65px] text-[#B88E2F]">
              Discover Our <br />
              New Collection
            </div>
            <div className="mt-[17px] w-[546px] h-[52px] text-[#333333] font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
            <button className="bg-[#B88E2F] mt-[46px] mr-[382px] w-[222px] h-[74px] py-[25px] px-[72px] text-white font-bold text-base leading-6">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[797.47px] bg-white">
        <div className="w-[1183px] h-[685px] mt-[56.47] mr-[126px] ml-[131px] mb-[56px]">
          <div className="w-[559px] h-[76.71px] mr-[306px] ml-[318px] mb-[62.29px]">
            <div className="w-[300px] h-[48px] mr-[95px] ml-[83px] text-black font-bold text-[32px] leading-[48px]">
              Browse The Range
            </div>
            <div className="w-[559px] h-[28.71px] text-[#666666] items-center text-xl leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="w-[380px] h-[546px]">
              <div className="w-[380px] h-[480px] mb-[30px]">
                <Image src={live01} alt="" />
              </div>
              <div className="w-[79px] h-[36px] text-[#333333] mx-[151px] font-semibold text-2xl items-center leading-9">
                Dining
              </div>
            </div>
            <div className="w-[380px] h-[546px]">
              <div className="w-[380px] h-[480px] mb-[30px]">
                <Image src={live02} alt="" />
              </div>
              <div className="w-[79px] h-[36px] text-[#333333] mx-[151px] font-semibold text-2xl items-center leading-9">
                Living
              </div>
            </div>
            <div className="w-[380px] h-[546px]">
              <div className="w-[380px] h-[480px] mb-[30px]">
                <Image src={live03} alt="" />
              </div>
              <div className="w-[79px] h-[36px] text-[#333333] mx-[151px] font-semibold text-2xl items-center leading-9">
                Bedroom
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1153px] bg-white">
        <div className="w-[1236px] h-[1084px] mx-[102px] mb-[69px]">
          <div className="w-[269px] h-[48px] ml-[486px] mr-[481px] mb-[32px] text-[#3A3A3A] font-bold items-center text-[40px] leading-[48px]">Our Products</div>
          <div className="Products grid grid-cols-4 gap-8 items-center">
            <div className="01 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro1.src})` }}> 
               <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]"><Image src={l30} alt=""/></div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Slytherine</div>
                    <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">Stylish cafe chair</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 2.500.000</div>
                    <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">Rp 3.500.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="02 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro2.src})` }}> 
              
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Leviosa</div>
                    <div className="w-[138px] h-[24px] text-[#898989] font-medium text-base leading-6">Stylish cafe chair</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 2.500.000</div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="03 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro3.src})` }}> 
              <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]"><Image src={l50} alt=""/></div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Lolito</div>
                    <div className="w-[121px] h-[24px] text-[#898989] font-medium text-base leading-6">Luxury big sofa</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 7.000.000</div>
                    <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">Rp 14.000.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="04 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro4.src})` }}> 
              <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]"><Image src={newl} alt=""/></div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Respira</div>
                    <div className="w-[224px] h-[24px] text-[#898989] font-medium text-base leading-6">Outdoor bar table and stool</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 500.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="05 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro5.src})` }}> 
             
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Grifo</div>
                    <div className="w-[90px] h-[24px] text-[#898989] font-medium text-base leading-6">Night lamp</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 1.500.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="06 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro6.src})` }}> 
              <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]"><Image src={newl} alt=""/></div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Muggo</div>
                    <div className="w-[88px] h-[24px] text-[#898989] font-medium text-base leading-6">Night lamp</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 150.000</div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="07 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro77.src})` }}> 
              <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]"><Image src={l50} alt=""/></div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Pingky</div>
                    <div className="w-[103px] h-[24px] text-[#898989] font-medium text-base leading-6">Cute bed set</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 7.000.000</div>
                    <div className="w-[102px] h-[21px] text-[#B0B0B0] font-normal text-base leading-6 line-through">Rp 14.000.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="08 w-[285px] h-[446px]">
              <div className="image w-[285px] h-[301px] bg-cover bg-center"  style={{ backgroundImage: `url(${pro8.src})` }}> 
              <div className="w-[48px] h-[48px] pt-[24px] mr-[24px] ml-[213px] mb-[229px]"><Image src={newl} alt=""/></div>
              </div>
              <div className="textbox w-[285px] h-[145px] bg-[#F4F5F7]">
                <div className="w-[249px] h-[99px] pt-[16px] pl-[16px] pb-[30px] pr-[20px]">
                  <div className="div1 w-[138px] h-[61px] mr-[131px] mb-[8px]">
                    <div className="w-[123px] h-[29px] text-[#3A3A3A] font-semibold text-2xl leading-[28.8px]">Potty</div>
                    <div className="w-[168px] h-[24px] text-[#898989] font-medium text-base leading-6">Minimalist flower pot</div>
                  </div>
                  <div className="div2 w-[249px] h-[30px] flex gap-4">
                    <div className="w-[131px] h-[30px] text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">Rp 500.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-[32px] ml-[496px] mr-[495px] w-[245px] text-[#B88E2F] border border-[#B88E2F] py-[12px] pr-[74px] pl-[82px]">Show More</button>

        </div>
      </div>
      <Footer/>

    </div>
  );
}
