import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const { progress } = useProgress(); // three.js 模型加载进度
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // 动态提示语
  const messages = [
    "Loading creativity...",
    "Brewing your experience...",
    "Almost there...",
  ];
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // 页面所有静态资源加载完成
    const handleLoad = () => {
      setSiteLoaded(true);
    };
    window.addEventListener("load", handleLoad);

    // 循环切换提示语
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 2500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

  // 综合进度
  const totalProgress = siteLoaded ? 100 : progress;

  // 当进度达到 100 时，触发淡出动画
  useEffect(() => {
    if (totalProgress === 100) {
      const timer = setTimeout(() => setFadeOut(true), 800);
      return () => clearTimeout(timer);
    }
  }, [totalProgress]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 1.1 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center 
        bg-gradient-to-br from-gray-50 via-white to-gray-100 z-50"
    >
      {/* 圆圈 + Logo/名字 */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
        
      </div>

      {/* 百分比 */}
      <motion.p
        className="text-gray-900 mt-6 text-lg font-bold tracking-wider"
        key={totalProgress}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.floor(totalProgress)}%
      </motion.p>

      {/* 进度条 */}
      <div className="w-64 h-3 bg-gray-200 mt-4 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-black-500 to-gray-500"
          initial={{ width: 0 }}
          animate={{ width: `${totalProgress}%` }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>

      {/* 动态提示语 - 淡入淡出 */}
      <div className="mt-4 h-6 flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-gray-600 italic"
          >
            {messages[msgIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
