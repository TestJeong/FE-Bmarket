import MainCarousel from "components/carousel"

export default function MainHome() {
  return (
    <div className="max-w-[30rem] h-full">
      <div className="h-full mb-4">
        <MainCarousel />
      </div>

      <div>카테고리 선택 창 및 검색창</div>

      <div>추천 상품 (큰 이미지로 1줄)</div>

      <div>번쩍 할인 (작은 이미지로 2줄)</div>
    </div>
  )
}
