import {Swiper} from "swiper/react"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full max-w-[30rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-t-2xl px-4 py-7 bg-white">
      <div className="flex justify-between">
        <div>
          <span>홈</span>
        </div>
        <div>
          <span>찜</span>
        </div>
        <div>
          <span>주문내역</span>
        </div>
        <div>
          <span>my배민</span>
        </div>
      </div>
    </footer>
  )
}
