import react, {useState} from 'react';
import Image from 'next/image';  
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper from 'swiper'; 
import 'swiper/css' 

const CategoryCard = ({ iconSrc, title, properties }) => {
  return (
    <div className="flex_col_center gap-3 w-[42%] sm:w-[190px] text-center  bg-white py-5">
      <div className="icon flex_center  h-[80px] w-[80px] rounded-md">
        <Image
          src={iconSrc}
          alt={title}
          width={0}  
          height={0} 
          className='object-contain w-[70%]  h-auto'
        />
      </div>
      <h3 className="font_large font-bold">{title}</h3>
      <p className="font_super_small">{properties} Properties</p>
    </div>
  );
};

const DealsContainer = ({ imageSrc, title, location, bed, bathroom,wide,price,isFeatured,aboutDeals ,isRent,isWhiteIcon  }) => {
  return (
    <div className="min-w-[160px] w-[90%] relative flex_itemsStartColmn gap-5">

    {/* image */}
    <div className="w-full rounded-2xl overflow-hidden flex_center">
      <Image
          src={imageSrc}
          alt={title}
          width={1000}  
          height={1000} 
          className='object-contain w-full h-auto relative'
      />
      
      {/* about deals image */}
      <div className={`absolute w-auto flex_center gap-4 left-3 lg:left-5 top-3 lg:top-5 h-auto  font-medium uppercase ${isWhiteIcon ? "text-[10px]" : "text-[10px] lg:font_super_small"}`}>

        <div className={`relative rounded-3xl bg-[#1f4b43] text-white py-1 lg:py-2 px-3 lg:px-5`}>{aboutDeals}</div>
       
       
        {isFeatured && (
            <div className={`relative rounded-3xl bg_secondary py-1 lg:py-2 px-3 lg:px-5 text-black`}>Featured</div>
          )}

      </div>

    </div>

    {/* about deal */}
    <div className="w-full relative flex flex-col items-start gap-2">

      {/* name */}
      <h3 className="font_xl_large font-bold max-lg:min-h-[70px]">{title}</h3>

      {/* location */}
      <div className="flex items-center gap-2">

      <Image
        src={isWhiteIcon ? "/icons/location_white.svg" : "/icons/location.svg"}
        alt="Logo"
        width={0}  
        height={0} 
        className={`object-contain h-auto ${isWhiteIcon ? "w-[23px]" : "w-[15px] lg:w-[30px]"} `}
        />

      <h2 className={` ${isWhiteIcon ?  "font_super_small" : "font_super_small lg:font_medium" }`}>{location}</h2>

      </div>

      {/* information */}
      <div className="flex_between relative w-full mt-4 xl:mt-10 border-t-[2px] border-t-[#dbdbdb] py-4 max-sm:flex-col">
        
        {/* about apart */}
        <div className="left flex items-center gap-4">
          
          {/* bed */}
          <div className={`flex_center ${isWhiteIcon ? "gap-2" : "gap-2 md:gap-3"}`}>
          
          <Image
              src={isWhiteIcon ? "/icons/bad_white.svg" : "/icons/bad.svg"}
              alt="bad"
              width={0}  
              height={0} 
              className={`object-contain ${isWhiteIcon ? "w-[15px] " : "w-[15px] xl:w-[25px]"} `}
          />

          <p className="font_super_small lg:font_medium font-bold">{bed}</p>

          </div>

          {/* line */}
          <div className="line h-[30px] w-[2px] bg-[#dbdbdb]"></div>

          {/* bathroom */}
          <div className={`flex_center ${isWhiteIcon ? "gap-2" : "gap-2 md:gap-3"}`}>
                    
          <Image
              src={isWhiteIcon ? "/icons/bathroom_white.svg" : "/icons/bathroom.svg"}
              alt="bathroom"
              width={0}  
              height={0} 
              className={`object-contain ${isWhiteIcon ? "w-[15px] " : "w-[15px] xl:w-[25px]"} `}
          />

          <p className="font_super_small lg:font_medium font-bold">{bathroom}</p>

          </div>

          {/* line */}
          <div className="line h-[30px] w-[2px] bg-[#dbdbdb]"></div>

          {/* wide */}
          <div className={`flex_center ${isWhiteIcon ? "gap-2" : "gap-2 md:gap-3"}`}>
          
          <Image
              src={isWhiteIcon ? "/icons/wide_white.svg" : "/icons/wide.svg"}
              alt="wide"
              width={0}  
              height={0} 
              className={`object-contain ${isWhiteIcon ? "w-[15px] " : "w-[15px] xl:w-[25px]"} `}
          />

          <p className="font_super_small lg:font_medium font-bold">{wide}</p>

          </div>


        </div>

        {/* price */}
        <div className={`right max-sm:mt-4 flex items-end  ${isWhiteIcon ? "text-white" : "text-[#eb664e]"}`}>

          <p className={`${isWhiteIcon ? "text-[15px]" : "font_medium xl:font_large"}  font-bold`}>{price}</p>

          {/* rent checked */}
          { isRent && ( 
            <p className="font_super_small pb-1">/month</p>
          )}

        </div>

      </div>

    </div>

  </div> 
  );
};

const AboutCities = ({properties,cities}) => {
  return (

    <div className="absolute bottom-5 w-[90%] h-16 lg:h-20 backdrop-blur-lg bg-[#bbbbbb1e] rounded-lg lg:rounded-3xl flex_itemsStartColmn justify-between text-white px-7 py-3">
              
      <p className="font_super_small lg:font_small ">{properties} properties</p>

      <p className="font_small sm:font_large font-bold ">{cities}</p>

    </div>
  )
}

const FaqContainer = ({question,answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq h-auto w-full flex_col_center gap-4">

      <div className="btnFaq w-full flex_between">
        
        <p className="font_large font-bold">
       {question}
        </p>

        <button onClick={toggleAnswer} className="iconFaq flex_center cursor-pointer h-[50px]">

          <span className="w-[30px] h-[3px] bg-black relative"></span>
          <span className={`minIcon w-[3px] h-[30px] bg-black absolute duration-350 ${isOpen ? 'nonActive' : ''}`}></span>

        </button>

      </div>

      <div className={`answer ${isOpen ? 'active' : ''}`}>

        <p className="font_small">{answer}</p>
        
      </div>

    </div>
  )
}

const SocialLink = ({links,icons,alt}) => {
  return (
    <a href={links} className="h-[25px] md:h-[18px] relative duration-150 hover:scale-110">
    <Image
      src={icons}
      alt={alt}
      width={100}  
      height={100} 
      className='object-contain w-auto h-full relative'
     />
    </a>
  )
}

const FooterLink = ({link,text}) => {
  return ( 
    <a href={`#${link}`} className="text-white text-[13px] min-[1500px]:text-[15px]">{text}</a>
  )
}


export {CategoryCard, DealsContainer, AboutCities,FaqContainer,SocialLink,FooterLink };
