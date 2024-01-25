import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mt-8">aespa</h1>
        <h2 className="text-4xl font-bold mt-4"><a href="/tetris">tetris</a></h2>
      </div>
    </main>
  );
}
