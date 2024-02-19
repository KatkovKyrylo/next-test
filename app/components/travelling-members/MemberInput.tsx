import Image from 'next/image';

type Props = {
  title: string;
  subtitle: string;
};

export const MemberInput: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-sm mb-[4px]">{title}</span>
        <span className="text-xs">{subtitle}</span>
      </div>
      <div className="flex items-center gap-[16px]">
        <button className="w-[32px] h-[32px] flex justify-center items-center rounded-[6px] bg-[#F2F2F5]">
          <Image
            src="/icons/minus-sign.svg"
            width={10}
            height={2}
            alt="minus sign"
          />
        </button>
        <span className="font-semibold">1</span>
        <button className="w-[32px] h-[32px] flex justify-center items-center rounded-[6px] bg-[#F2F2F5]">
          <Image
            src="/icons/plus-sign.svg"
            width={10}
            height={2}
            alt="minus sign"
          />
        </button>
      </div>
    </div>
  );
};
