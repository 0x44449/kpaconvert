import PostcodeEmbed from "@/components/PostcodeEmbed";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <header className="p-4 text-center text-xl font-bold">
        📦 카드결제용 주소 변환기
      </header>

      <section className="flex-grow flex items-start justify-center">
        <div className="max-w-2xl w-full h-full">
          <PostcodeEmbed />
        </div>
      </section>
    </main>
  );
}