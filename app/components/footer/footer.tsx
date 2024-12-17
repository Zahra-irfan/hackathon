export default function Footer(){
    return(
        <div className="w-[1440px] h-[505px]">
            <div className="w-[1240.01px] h-[419px] mt-[48px] mb-[38px] ml-[100px] mr-[99.99px]">
                <div className="w-[1133.01px] h-[312px] flex">
                    <div>
                    <div className="w-[85px] h-[36px] font-bold text-[#000000] text-2xl leading-[36px] mb-[50px]">Funiro.</div>
                    <div className="w-[285px] h-[72px] font-normal text-base text-[#9F9F9F] leading-6">400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</div>
                    </div>
                    <div className="w-[710px] h-[312px] ml-[136px] mr-[107px] flex gap-[72px]">
                        <div className="w-[352px] h-[312px] flex gap-36">
                            <div className="w-[68px] h-[312px] flex flex-col gap-[55px]">
                                <div className="w-[40px] h-[24px] text-[#9F9F9F] font-medium text-base leading-6">Links</div>
                                <div className="w-[66px] h-[223px] flex flex-col gap-[46px]">
                                    <div className="w-[42px] h-[24px] text-black font-medium text-base leading-6">Home</div>
                                    <div className="w-[48px] h-[24px] text-black font-medium text-base leading-6">Shop</div>
                                    <div className="w-[49px] h-[24px] text-black font-medium text-base leading-6">About</div>
                                    <div className="w-[66px] h-[24px] text-black font-medium text-base leading-6">Contact</div>
                                </div>
                            </div>
                            <div className="w-[68px] h-[312px] flex flex-col gap-[55px]">
                                <div className="w-[37px] h-[24px] text-[#9F9F9F] font-medium text-base leading-6">Help</div>
                                <div className="w-[140px] h-[163px] flex flex-col gap-[46px]">
                                    <div className="w-[140px] h-[24px] text-black font-medium text-base leading-6">Payment Options</div>
                                    <div className="w-[62px] h-[24px] text-black font-medium text-base leading-6">Returns</div>
                                    <div className="w-[124px] h-[24px] text-black font-medium text-base leading-6">Privacy Policies</div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="info w-[286px] h-[101px] flex flex-col gap-[53px]">
                            <div className="w-[86px] h-[24px] text-[#9F9F9F] font-medium text-base leading-6">Newsletter</div>
                            <div className="w-[286px] h-6 flex items-center">
                                <input type="text" placeholder="Enter Your Email Address" className="underline underline-offset-[3px] decoration-black text-[#9F9F9F] font-normal text-sm leading-[21px] w-[173px] h-[21px] "/>
                                <div className="w-[75px] h-[21px] font-medium text-sm leading-[21px] underline underline-offset-4">SUBSCRIBE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}