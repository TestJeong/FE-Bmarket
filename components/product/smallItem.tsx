export default function ProductSmallItem() {
  return (
    <div className=" flex flex-col justify-center items-center mb-4 text-xs">
      <div className="border border-black w-[6rem] h-[6rem] relative">
        <span className="absolute top-1 left-1 bg-red-500 text-white font-semibold rounded-md px-2">13%</span>
        {/* 이미지 위치 */}
        {/* <span>cxvvxsdfsdfsdsadasdas</span> */}
        <button className="absolute bottom-2 right-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-8 h-8 rounded-full text-2xl text-green-700">+</button>
      </div>
      <div className="flex flex-col items-start w-full text-xs">
        <span>햇반 컵밥 스팸김치덮밥 251g</span>
        <div>
          <span className="text-red-500 font-semibold">13% </span>
          <span className="font-bold text-xs">3,800원</span>
        </div>
        {/* <span>태그</span> */}
      </div>
    </div>
  )
}
