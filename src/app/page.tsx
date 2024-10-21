import ConstructionSign from './components/ConstructionSign';
import ExitButton from './components/ExitButton';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-mat-black">
      <ConstructionSign message="Under Construction"></ConstructionSign>
      <ExitButton></ExitButton>
    </main>
  );
}
