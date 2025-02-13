import { FC } from 'react';

interface CTAButtonProps {
  href?: string;
  text?: string;
  subText?: string;
}

const CTAButton: FC<CTAButtonProps> = ({
  href = "https://amosebaplus.com/",
  text = "Beneficios",
  subText = "plus"
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex w-[18%] h-[60px] bg-[#E8A598] text-white 
        rounded-full md:rounded-l-none md:-ml-[5%]
        hover:bg-red-300 transition-colors duration-200 
        items-center justify-center"
    >
      <div className="relative flex items-center lg:ml-10 md:ml-10  -mt-3">
        <div className="flex flex-col items-end">
          <p className="font-bold text-sm md:text-base lg:text-lg">{text}</p>
          <span className="italic text-xs md:text-sm absolute mt-4">{subText}</span>
        </div>
      </div>
    </a>
  );
};

export default CTAButton;