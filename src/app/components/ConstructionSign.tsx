import { Handyman } from '@mui/icons-material';

interface ConstructionSignProps {
  message: string;
}

export default function ConstructionSign({ message }: ConstructionSignProps) {
  return (
    <div className="mb-6 flex flex-col items-center justify-center rounded-xl bg-mat-white px-10 py-6 text-mat-black">
      <Handyman className="mb-4 size-20 animate-[spin_2s_infinite]"></Handyman>
      <span className="flex w-0 justify-center overflow-visible text-center font-bold">{message}</span>
    </div>
  );
}
