export default function ProductItem() {
  return (
    <div className=" flex flex-col justify-center items-center mb-4">
      <div className="border border-black  w-[9rem] h-[9rem] relative">
        <span className="absolute top-1 left-1 bg-red-500 text-white font-semibold rounded-md px-2">13%</span>
        {/* 이미지 위치 */}
        <span></span>
        <button className="absolute bottom-2 right-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-8 h-8 rounded-full text-2xl text-green-700">+</button>
      </div>
      <div className="flex flex-col items-start w-full text-sm">
        <div className="text-red-500 text-xs py-2">
          <span>4개 남았어요</span>
        </div>
        <span>햇반 컵밥 스팸김치덮밥 251g</span>
        <span className="text-xs text-gray-400 line-through mt-1">4,400원</span>
        <div>
          <span className="text-red-500 font-semibold">13% </span>
          <span className="font-bold">3,800원</span>
        </div>
        {/* <span>태그</span> */}
      </div>
    </div>
  )
}
