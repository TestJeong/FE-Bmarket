import React, { useRef, useState, useEffect, cloneElement } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { throttle } from "lodash";
import useWindowSize from "./useWindowSize";

type HooksProps = {
  component: JSX.Element;
  backdrop?: boolean;
  type?: "center" | "bottom" | "full";
  padding?: { top?: string; right?: string; bottom?: string; left?: string };
  swiper?: boolean;
};

type ComponentProps = {
  visible: boolean;
  show: () => void;
  hide: () => void;
};

const Modal = ({
  visible,
  swiper,
  show,
  hide,
  component,
  backdrop = true,
  type = "center",
  padding,
}: ComponentProps & HooksProps) => {
  const { width, height } = useWindowSize();
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  const handleClickBackdrop = () => backdrop && hide();

  useEffect(() => {
    let portalRoot = document.getElementById("portal");

    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.setAttribute("id", "portal");
      document.body.appendChild(portalRoot);
    }
  }, []);

  if (typeof window === "undefined") return null;
  return createPortal(
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <div
          className={`flex fixed top-0 left-0 z-[9999] w-full h-full justify-center
          ${type === "center" && "items-center"}
          ${type === "bottom" && "items-end"}
          ${type === "full" && "items-start"}
          ${swiper && "p-3"}
          `}
          style={{ alignItems: type === "bottom" ? "flex-end" : "" }}
        >
          <motion.div
            key="backdrop"
            variants={{
              hidden: { y: "0vh", opacity: 0, transition: { duration: 0.15 } },
              visible: { y: "0vh", opacity: 1, transition: { duration: 0.15 } },
            }}
            initial="hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.2", zIndex: 9 }}
            animate="visible"
            exit="hidden"
            className={" w-full h-full fixed"}
            onClick={handleClickBackdrop}
          />
          <motion.div
            key="modal"
            variants={{
              hidden: {
                y: "100vh",
                opacity: 0,
                transition: { duration: 0.15 },
              },
              visible: { y: "0vh", opacity: 1, transition: { duration: 0.15 } },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              display: "flex",
              flexDirection: "column",
              // width: "100%",
              maxHeight: "100%",
              zIndex: 10,
              background: "white",
              ...(type === "center" && {
                paddingTop: padding?.top ? padding.top : "1rem",
                paddingRight: padding?.right ? padding.right : "1rem",
                paddingBottom: padding?.bottom ? padding.bottom : "1rem",
                paddingLeft: padding?.left ? padding.left : "1rem",
                margin: "1.25rem",
                border: "none",
                borderRadius: "0.75rem",
                // maxWidth: width > 767 ? "36rem" : "24rem"
              }),
              ...(type === "bottom" && {
                width: "100%",
                paddingTop: padding?.top ? padding.top : "1.5rem",
                paddingRight: padding?.right ? padding.right : "1rem",
                paddingBottom: padding?.bottom
                  ? padding.bottom
                  : "calc(env(safe-area-inset-bottom) / 2 + 1rem)",
                paddingLeft: padding?.left ? padding.left : "1rem",
                borderTopLeftRadius: "0.75rem",
                borderTopRightRadius: "0.75rem",
                justifyContent: "space-between",
              }),
              ...(type === "full" && {
                height: "100%",
                justifyContent: "space-between",
              }),
            }}
          >
            {cloneElement(component, { handleModalClose: hide })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const useModal = ({
  component,
  backdrop = true,
  type = "center",
  padding,
  swiper,
}: HooksProps) => {
  const [visible, setVisible] = useState(false);

  const throttledHandleVisible = useRef(
    throttle((value) => setVisible(value), 450, { leading: true })
  );
  const show = () => {
    throttledHandleVisible.current(true);
  };
  const hide = () => throttledHandleVisible.current(false);

  return {
    visible,
    show,
    hide,
    Modal: Modal({
      visible,
      show,
      hide,
      component,
      backdrop,
      type,
      padding,
      swiper,
    }),
  };
};

export default useModal;
