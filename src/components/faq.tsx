"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";
import { textStaggerContainer, staggerBlurChild } from "@/lib/animations";

const faqs = [
  {
    q: "抓龍筋是什麼？",
    a: "以專業手法按摩大腿、鼠蹊部、會陰部等部位，促進血液循環。這是專門促進男性私密處血流的專業保健純按摩。",
  },
  {
    q: "誰適合抓龍筋？",
    a: "適合每一位希望自己私密處血流通暢的男性，尤其久坐、肌肉緊繃、下肢血循差的人更適合。",
  },
  {
    q: "抓龍筋會痛嗎？",
    a: "按摩過程都可以調整力道，過程也不是越痛越好！Bonnie 會隨時確認你的感受，調整到最適合的力道。",
  },
  {
    q: "按摩過程勃起怎麼辦？",
    a: "勃起為正常生理反應，沒有勃起也很正常，所以不用太擔心哦！",
  },
  {
    q: "抓龍筋會射精嗎？",
    a: "不會。這是專門促進男性私密處血流的專業保健純按摩，故不會導致射精，請放心。",
  },
  {
    q: "抓龍筋有什麼效果？",
    a: "常見反饋有：大腿變鬆不緊繃、尿尿或射精更順暢、按完後晨勃回來了、整體循環改善等。效果因人而異。",
  },
  {
    q: "有什麼副作用嗎？",
    a: "按摩後的副作用會因人而異，不是每個人都會有。例如：大腿痠痛（類似鐵腿）、大腿瘀青出痧等，都是正常現象。",
  },
  {
    q: "建議多久做一次？",
    a: "建議每個月按一次保持血流暢通。但主要還是建議您生活作息要正常，多喝水，勿太勞累才是最主要的。",
  },
  {
    q: "哪些人不適合做抓龍筋？",
    a: "以下狀況不建議進行此按摩：心臟病無規則服藥者、肝腎肺疾病無規則服藥者、高血壓糖尿病無規則服藥者、半年內大腿至腹部區手術、大面積的皮膚潰瘍、發燒 38 度以上、關節腫痛或骨折、皮膚脆弱摩擦易破皮者。按摩前請先評估自身身體狀況再進行預約。",
  },
];

const beforeNotes = [
  "因按摩後建議禁慾，前一天可先自行清空",
  "按摩前請您先沐浴",
  "當天著輕便衣物前來即可",
  "按摩過程會按到肚子，當天請勿吃太飽前來",
];

const afterNotes = [
  "按摩後 1～2 天禁慾禁酒",
  "避免劇烈運動",
  "讓身體充分放鬆吸收按摩效果",
  "多喝水，促進放鬆與血液循環",
];

const bookingRules = [
  "皆預約制，一律使用預約系統預約",
  "系統內以信用卡支付方式收取五百元定金",
  "按摩當天支付尾款（現金、轉帳匯款）",
  "取消或改期須三天前告知，否則將沒收定金",
  "當天遲到 15 分鐘視同取消，定金不退還",
  "每月 23 號 12:00 公告班表即可預約下個月",
  "預約人數眾多，建議準時前來預約",
];


function AccordionItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-base pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-muted flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-4"
        >
          <p className="text-muted text-base leading-relaxed">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={textStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.p variants={staggerBlurChild} className="text-primary font-medium text-sm tracking-widest uppercase mb-3">FAQ</motion.p>
          <motion.h2 variants={staggerBlurChild} className="font-display text-3xl sm:text-4xl font-bold mb-4">常見問與答</motion.h2>
          <motion.p variants={staggerBlurChild} className="text-muted max-w-2xl mx-auto">
            第一次體驗前，先了解這些常見問題，讓你更安心
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle size={18} className="text-primary" />
              <h3 className="font-display font-bold text-lg">常見問題</h3>
            </div>
            <div className="bg-card rounded-2xl border border-border px-6">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
              ))}
            </div>
          </motion.div>

          {/* Right: Notes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList size={18} className="text-primary" />
              <h3 className="font-display font-bold text-lg">注意事項與預約須知</h3>
            </div>

            {/* Before */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                <ClipboardList size={16} className="text-accent" />
                按摩前準備
              </h4>
              <ul className="space-y-2">
                {beforeNotes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                <ClipboardList size={16} className="text-primary" />
                按摩後注意
              </h4>
              <ul className="space-y-2">
                {afterNotes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking rules */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                <AlertTriangle size={16} className="text-accent" />
                預約須知
              </h4>
              <ol className="space-y-2">
                {bookingRules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="font-bold text-foreground/60 flex-shrink-0">
                      {i + 1}.
                    </span>
                    {r}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
