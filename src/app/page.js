import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8 w-full">
      <div className="w-1/2 mx-auto">
        <p className="text-center">
          Hi, I'm <span className="text-blue-600 font-semibold">Buns</span>. I
          turn iced coffee into websites and bugs into features.
        </p>
        <h1 className="text-3xl font-bold text-center">
          Keep it clean, keep it clever, and ship it.
        </h1>
      </div>
    </div>
  );
}
