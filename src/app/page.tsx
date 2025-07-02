import AddressConverter from "@/components/AddressConverter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2">한국 주소 &rarr; 해외결제용 영문주소 변환기</h1>
          <p className="text-muted-foreground">
            한국 주소를 검색하고 해외 온라인 결제에 적합한 영문 주소 형태로 변환해보세요
          </p>
        </div>

        <AddressConverter />
      </div>
    </div>

  )
}