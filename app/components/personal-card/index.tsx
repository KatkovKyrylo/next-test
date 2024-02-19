import Image from 'next/image';

export const PersonalCard = () => {
  return (
    <div className="max-w-[450px] max-[1000px]:max-w-[100%] w-full">
      <div
        className="min-h-[600px] p-[20px] rounded-[20px] bg-cover border-[4px] border-[#e4e4e9] relative"
        style={{ backgroundImage: 'url("/images/card-gradient-bg.png")' }}
      >
        <div className="flex justify-between mb-[20px] max-[450px]:flex-col max-[450px]:gap-[8px]">
          <div className="flex gap-[12px]">
            <div className="rounded-[50%] min-w-[48px] w-[48px] h-[48px] flex items-center justify-center bg-[#000]">
              <span className="text-white">FT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#EEF0F1] font-semibold">
                Fellow Traveler
              </span>
              <span className="text-[#EDF3FD] opacity-[0.7]">
                traveleremail@gmail.com
              </span>
            </div>
          </div>
          <div className="flex gap-[8px]">
            <Image
              src="/icons/germany.svg"
              width={32}
              height={32}
              alt="Germany"
            />
            <Image
              src="/icons/ukraine.svg"
              width={32}
              height={32}
              alt="Ukraine"
            />
          </div>
        </div>

        <div className="flex flex-col bg-[#fff] min-h-[460px] rounded-[16px] mb-[30px]">
          <div className="p-[20px]">
            <h6 className="text-[#60646C] underline decoration-dashed decoration-[#D3D4DB] text-xs mb-[20px]">
              Finance information
            </h6>

            <div className="flex flex-col mb-[16px]">
              <span className="text-[#60646C] text-xs">Full remote job</span>
              <span className="text-[#1F2327] text-sm">
                Yes, for over 6 months
              </span>
            </div>

            <div className="flex flex-col mb-[20px]">
              <span className="text-[#60646C] text-xs">Self employed</span>
              <span className="text-[#1F2327] text-sm">
                {`I'm self employed < 3 years business`}
              </span>
            </div>

            <div className="flex gap-[7px]">
              <div className="rounded-[12px] w-full p-[12px] flex justify-between bg-[#F9F9FB]">
                <span className="text-[#60646C] text-xs">Income</span>
                <span className="text-[#1F2327] text-xs font-semibold">
                  $1,000
                </span>
              </div>
              <div className="rounded-[12px] w-full p-[12px] flex justify-between bg-[#F9F9FB]">
                <span className="text-[#60646C] text-xs">Savings</span>
                <span className="text-[#1F2327] text-xs font-semibold">
                  $10,000
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="p-[20px]">
            <h6 className="text-[#60646C] underline decoration-dashed decoration-[#D3D4DB] text-xs mb-[20px]">
              Traveling members
            </h6>
            <div className="flex flex-wrap gap-[16px]">
              <div className="flex gap-[8px] items-center">
                <span className="flex items-center justify-center text-xs w-[20px] h-[20px] rounded-[50%] bg-[#F2F2F5]">
                  1
                </span>
                <span className="text-sm text-[#1F2327]">Legal Spouse</span>
              </div>
              <div className="flex gap-[8px] items-center">
                <span className="flex items-center justify-center text-xs w-[20px] h-[20px] rounded-[50%] bg-[#F2F2F5]">
                  1
                </span>
                <span className="text-sm text-[#1F2327]">Children</span>
              </div>
              <div className="flex gap-[8px] items-center">
                <span className="flex items-center justify-center text-xs w-[20px] h-[20px] rounded-[50%] bg-[#F2F2F5]">
                  1
                </span>
                <span className="text-sm text-[#1F2327]">Pets</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="p-[20px]">
            <h6 className="text-[#60646C] underline decoration-dashed decoration-[#D3D4DB] text-xs mb-[20px]">
              Additions
            </h6>
            <div className="bg-[#00003B] opacity-[0.05] w-[165px] h-[12px] rounded-[24px]"></div>
          </div>
        </div>

        <div className="absolute bottom-[15px] w-[calc(100%-40px)] flex justify-center">
          <span className="text-[#E6F4FE] opacity-[0.5] text-xs mx-auto">
            Personal Travel Card by Citizen Remote
          </span>
        </div>
      </div>

      <div className="mt-[32px] flex items-center justify-between w-full min-[1000px]:hidden">
        <span className="flex gap-[4px] font-semibold">
          <Image
            src="/icons/chevron-left.svg"
            width={20}
            height={20}
            alt="arrow back"
          />
          Back
        </span>
        <button className="rounded-[10px] bg-[#000] font-semibold p-[16px] text-white">
          Continue
        </button>
      </div>
    </div>
  );
};
