import ProductItem from "@/components/product/item"
import ProductSmallItem from "@/components/product/smallItem"
import MainCarousel from "components/carousel"

export default function MainHome() {
  return (
    <div className="max-w-[30rem] h-full">
      <div className="h-full mb-4">
        <MainCarousel />
      </div>

      <div className="px-4">카테고리 선택 창 및 검색창</div>

      <div className="bg-gray-100 w-full h-3 my-7" />

      <div className="pl-4">
        <div className="flex justify-between mb-4 pr-4">
          <p className="font-bold text-lg">뽀뽀뽀님에게 추천 상품 하는 상품</p>
          <button>
            <span className="text-sm">전체보기 ＞</span>
          </button>
        </div>
        <div className="flex overflow-x-auto gap-8 pr-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>

      <div className="bg-gray-100 w-full h-3 my-7" />

      <div className="pl-4">
        <div className="flex justify-between mb-4 pr-4">
          <p className="font-bold text-lg">지금 사면 번쩍 할인</p>
          <button>
            <span className="text-sm">전체보기 ＞</span>
          </button>
        </div>
        <div className="flex overflow-x-auto flex-col ">
          <div className="flex gap-6">
            <ProductSmallItem />
            <ProductSmallItem />
            <ProductSmallItem />
            <ProductSmallItem />
            <div className="pr-[0.5px]" />
          </div>
          <div className="flex gap-6">
            <ProductSmallItem />
            <ProductSmallItem />
            <ProductSmallItem />
            <ProductSmallItem />
          </div>
        </div>
      </div>
    </div>
  )
}
