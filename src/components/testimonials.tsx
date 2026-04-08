"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, MessageCircle, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { textStaggerContainer, staggerBlurChild } from "@/lib/animations";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Bonnie%E6%8A%93%E9%BE%8D%E7%AD%8B%E3%80%81%E9%A1%B1%E5%85%A7%E6%94%BE%E9%AC%86%E6%8C%89%E6%91%A9%E3%80%81%E8%80%B3%E7%87%AD%EF%BC%88%E7%9A%86%E6%8E%A1%E9%A0%90%E7%B4%84%E5%88%B6%EF%BC%89/@25.0461579,121.5183913,17z/data=!4m8!3m7!1s0x6e81e38369644f53:0x44a9bc42443ad9ac!8m2!3d25.0461579!4d121.5183913!9m1!1b1!16s%2Fg%2F11k3k4kcnl";

// All 100 review screenshots (for lightbox navigation)
const allReviewImages = Array.from({ length: 100 }, (_, i) => ({
  src: `/reviews/review-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `客戶好評截圖 ${i + 1}`,
}));

// Hand-picked 9 images with similar aspect ratios (~0.83-0.87) for balanced grid
// Row 1: 05, 18, 42  (ratio ~0.85)
// Row 2: 46, 54, 67  (ratio ~0.83-0.85)
// Row 3: 69, 74, 96  (ratio ~0.85-0.87)
const featuredIndices = [4, 17, 41, 45, 53, 66, 68, 73, 95]; // 0-based
const featuredImages = featuredIndices.map((i) => allReviewImages[i]);

const INITIAL_DESKTOP = 9;
const INITIAL_MOBILE = 6;

// Google Maps 真實評論（4.8 星 / 61 則評論）
const googleReviews = [
  { name: "KK Chang", stars: 5, text: "忙碌工作壓力大，來體驗正統的按摩，痛，但有感覺，很棒👍", date: "3 個月前" },
  { name: "Alx Chiu", stars: 5, text: "老師非常的專業，全程衛生，力道到位，已經持續前來超過一年，讓人切身體驗到重要部位也和其他肌群一樣，需要放鬆保養，且放鬆後的效果顯著，明顯活力許多。", date: "1 年前" },
  { name: "Michael 詹", stars: 5, text: "按摩環境令人放鬆，配合播放的音樂，還有 Bonnie 本人專業的手法以及詳細的解說，也會很親切的聊天，按完之後回家睡一覺，隔天早上起床就感受到精力充沛的成果了，真的是一試成主顧。", date: "2 年前" },
  { name: "herba Sun", stars: 5, text: "很棒的體驗，過程很放鬆，保養後隔天早上狀態很有感，唯一問題是太難約了！", date: "1 年前" },
  { name: "Alan Chen", stars: 5, text: "龍筋保養以前要在泰國才體驗的到，在台灣鐵定是要推薦 Bonnie，初次按完後的感想，真的是通體舒暢，感覺身體煥然一新，按摩過程中，力道也按的剛好。", date: "2 年前" },
  { name: "陳柏翰", stars: 5, text: "美貌與實力兼具，按壓時的疼痛與酸爽，結束後真的非常放鬆，甚至會睡著，而且可以天馬行空的聊著不同的事情，非常有趣，有性格不做作。", date: "2 年前" },
  { name: "CH Kuo", stars: 5, text: "第二次找芳療師服務，態度很親切、技術很專業、感覺很好，快找芳療師預約吧！", date: "3 年前" },
  { name: "Greg", stars: 5, text: "手法純正，環境舒服乾淨，完全不會讓人感到緊張不愉快。", date: "2 年前" },
  { name: "Vivio", stars: 5, text: "按完回去休息過後明顯有感，感覺舒暢許多，謝謝老師的專業按摩！", date: "1 年前" },
  { name: "吳 drew", stars: 5, text: "把身體的疲勞和姿勢造成鼠蹊部的緊繃緩解，有好的血液循環才會有更好的精神狀態，非常推薦大家來體驗！", date: "3 年前" },
  { name: "Tark Wu", stars: 5, text: "超棒！很推！老師也會調整力道不會死推，過程舒適無比！！！", date: "2 年前" },
  { name: "Fgdk", stars: 5, text: "親切好聊，會很細心的觀察、詢問要不要調整力道，頭部按完精神都變好。", date: "3 年前" },
  { name: "王冠揚", stars: 5, text: "按摩師專業，按得很舒服，會時時關心客人力道是否適當，又漂亮好聊天，真的是很推薦。", date: "3 年前" },
  { name: "鄭祐昇", stars: 5, text: "很放鬆的過程，很棒的體驗，會想再次光臨。", date: "1 年前" },
  { name: "賴庚晨", stars: 5, text: "第一次體驗感受很棒，老師很厲害，值得推薦👍", date: "1 年前" },
];

// Split reviews into 3 rows for marquee
const row1 = googleReviews.slice(0, 5);
const row2 = googleReviews.slice(5, 10);
const row3 = googleReviews.slice(10, 15);

/* ── Marquee Row ── */
function MarqueeRow({
  reviews,
  direction,
  speed = 30,
}: {
  reviews: (typeof googleReviews);
  direction: "left" | "right";
  speed?: number;
}) {
  // Double the items for seamless loop
  const items = [...reviews, ...reviews];
  const isLeft = direction === "left";

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#665744] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#665744] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${isLeft ? "left" : "right"} ${speed}s linear infinite`,
        }}
      >
        {items.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-80 flex-shrink-0"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/40 text-xs">{r.date}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                {r.name[0]}
              </div>
              <span className="font-medium text-sm text-white">{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof allReviewImages;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="關閉"
      >
        <X size={22} />
      </button>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10">
        {index + 1} / {images.length}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="上一張"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="下一張"
      >
        <ChevronRight size={22} />
      </button>

      <motion.img
        key={images[index].src}
        src={images[index].src}
        alt={images[index].alt}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

// Pre-computed aspect ratios (height/width) for all 100 images
const imageRatios = [1.378,1.078,0.639,0.885,0.853,0.58,0.974,0.621,1.115,1.107,1.282,0.583,0.452,0.948,1.354,1.32,0.51,0.851,0.781,0.777,0.697,0.67,0.5,0.461,0.615,0.633,0.4,0.346,0.48,0.312,0.545,0.755,1.069,0.747,0.819,1.137,0.98,0.736,1.561,0.805,1.301,0.868,1.08,0.803,0.727,0.85,1.174,0.676,0.694,0.881,1.08,0.768,1.223,0.827,0.621,0.956,0.508,0.589,0.717,0.76,0.878,0.592,1.385,1.383,0.785,1.03,0.85,0.692,0.874,0.481,1.457,0.893,1.209,0.86,1.136,1.442,0.881,0.525,0.812,0.597,1.076,0.894,0.553,0.753,0.803,0.539,0.576,0.751,0.593,1.259,0.539,0.771,0.661,0.611,0.638,0.847,0.496,1.282,0.624,1.11];

/* ── Balanced Masonry Grid ── */
function MasonryGrid({
  images,
  colCount,
  onImageClick,
}: {
  images: typeof allReviewImages;
  colCount: number;
  onImageClick: (globalIndex: number) => void;
}) {
  // Distribute images to shortest column based on actual aspect ratios
  const { columns, indexMap } = useMemo(() => {
    const cols: (typeof allReviewImages)[] = Array.from({ length: colCount }, () => []);
    const map: number[][] = Array.from({ length: colCount }, () => []);
    const heights = Array.from({ length: colCount }, () => 0);

    images.forEach((img, i) => {
      // Find shortest column
      const shortestCol = heights.indexOf(Math.min(...heights));
      cols[shortestCol].push(img);
      map[shortestCol].push(i);
      // Get ratio from filename index (review-XX.jpg -> XX-1)
      const match = img.src.match(/review-(\d+)/);
      const idx = match ? parseInt(match[1], 10) - 1 : 0;
      const ratio = imageRatios[idx] ?? 1;
      heights[shortestCol] += ratio;
    });
    return { columns: cols, indexMap: map };
  }, [images, colCount]);

  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}
    >
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-3">
          {col.map((img, imgIdx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: imgIdx * 0.03 }}
              className="rounded-xl overflow-hidden border border-white/15 hover:border-white/30 transition-colors cursor-pointer"
              onClick={() => onImageClick(indexMap[colIdx][imgIdx])}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Main ── */
export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const initialCount = isMobile ? INITIAL_MOBILE : INITIAL_DESKTOP;
  const visibleImages = showAll
    ? allReviewImages
    : featuredImages.slice(0, initialCount);

  // Map visible image index to allReviewImages index for lightbox
  const visibleToGlobal = useCallback(
    (visIdx: number) => {
      if (showAll) return visIdx;
      return featuredIndices[visIdx];
    },
    [showAll]
  );

  const openLightbox = useCallback(
    (i: number) => setLightboxIndex(visibleToGlobal(i)),
    [visibleToGlobal]
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + allReviewImages.length) % allReviewImages.length : null
      ),
    []
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % allReviewImages.length : null
      ),
    []
  );

  return (
    <>
      <section id="testimonials" className="py-12 sm:py-24 bg-[#665744] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            variants={textStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={staggerBlurChild} className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Testimonials</motion.p>
            <motion.h2 variants={staggerBlurChild} className="font-display text-3xl sm:text-4xl font-bold mb-4">客戶真實好評</motion.h2>
            <motion.div variants={staggerBlurChild} className="flex items-center justify-center gap-3 mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.8</span>
              <span className="text-white/60 text-sm">/ 61 則 Google 評論</span>
            </motion.div>
            <motion.p variants={staggerBlurChild} className="text-white/60 max-w-2xl mx-auto">
              來自 Google Maps 與 LINE 的真實客戶回饋
            </motion.p>
          </motion.div>
        </div>

        {/* Google Reviews Marquee - full width */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white/80 font-medium text-sm">
                Google 評論精選
              </span>
              <ExternalLink size={14} className="text-white/40" />
            </a>
          </div>

          <div className="space-y-4">
            <MarqueeRow reviews={row1} direction="right" speed={100} />
            <MarqueeRow reviews={row2} direction="left" speed={110} />
            <MarqueeRow reviews={row3} direction="right" speed={95} />
          </div>
        </div>

        {/* LINE Screenshot masonry */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle size={18} className="text-accent" />
              <span className="text-accent font-medium text-sm">
                LINE 真實對話截圖（共 {allReviewImages.length} 則）
              </span>
            </div>

            <div className="relative">
              <MasonryGrid
                images={visibleImages}
                colCount={isMobile ? 2 : 3}
                onImageClick={openLightbox}
              />

              {!showAll && (
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#665744] to-transparent pointer-events-none" />
              )}
            </div>

            {!showAll && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <ChevronDown size={16} />
                  查看全部 {allReviewImages.length} 則好評
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={allReviewImages}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
