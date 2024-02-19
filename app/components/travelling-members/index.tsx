import Image from 'next/image';
import { MemberInput } from './MemberInput';

export const TravellingMembers = () => {
  return (
    <div className="flex flex-col gap-[16px] p-[16px] border-[1px] border-[#DDDDE3] rounded-[16px]">
      <div className="flex gap-[8px]">
        <Image
          src="/icons/members-icon.svg"
          width={20}
          height={20}
          alt="members icon"
        />
        <span className="font-semibold">Travelling members</span>
      </div>
      <hr />
      <MemberInput
        title="Legal Spouse"
        subtitle="Must have marrige certificate"
      />
      <hr />
      <MemberInput
        title="Children under 18"
        subtitle="Must have birth certificate"
      />
      <hr />
      <MemberInput title="Pets" subtitle="Must have documents" />
    </div>
  );
};
