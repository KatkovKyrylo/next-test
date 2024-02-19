import Image from 'next/image';
import { TravellingMembers } from './components/travelling-members';
import { PersonalCard } from './components/personal-card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 max-[700px]:px-0 max-[700px]:py-0 py-8">
      <div className="max-w-[1200px] w-[100%] min-h-[750px] bg-[#fff] rounded-lg px-[20px] py-[14px]">
        <header className="flex justify-between items-center relative">
          <Image
            width={157}
            height={28}
            src="/icons/citizen-logo.svg"
            alt="citizen logo"
          />

          <Image
            src="/images/Steps.svg"
            alt="steps"
            width={92}
            height={20}
            className="absolute top-1/2 left-1/2 min-[1000px]:transform  min-[1000px]:-translate-x-1/2  min-[1000px]:-translate-y-1/2 max-[1000px]:static"
          />
        </header>

        <div className="flex justify-between mt-[74px] px-[22px] max-[450px]:px-0 gap-[50px] max-[1000px]:flex-col max-[1000px]:items-center">
          <div className="flex flex-col max-[1000px]:max-w-[100%] max-w-[360px] w-[100%]">
            <div className="flex flex-col mb-[32px]">
              <h6 className="font-bold text-xl">Traveling members</h6>
              <span>Are you traveling alone or with someone else?</span>
            </div>

            <div className="flex flex-col gap-[10px] mb-[24px]">
              <button
                className="p-[14px] rounded-[10px] border-[1px] border-[#DDDDE3] focus:font-semibold focus:border-[#000] focus:outline-none focus:ring focus:ring-[#EBEBEF]"
                type="button"
              >
                Alone
              </button>
              <button
                className="p-[14px] rounded-[10px] border-[1px] border-[#DDDDE3] focus:font-semibold focus:border-[#000] focus:outline-none focus:ring focus:ring-[#EBEBEF]"
                type="button"
              >
                With others
              </button>
            </div>

            <TravellingMembers />

            <div className="mt-[32px] flex items-center justify-between max-[1000px]:hidden">
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

          <PersonalCard />
        </div>
      </div>
    </main>
  );
}
