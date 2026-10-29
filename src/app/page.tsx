"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Eye, EyeOff, Copy, Check, Send, Loader2, User, Users, MessageSquare, ArrowLeft, Download } from "lucide-react";

const IS_DEV = process.env.NODE_ENV === "development";

const BG_IMAGE = "https://imglinkv-3.vercel.app/api/images/cmsac9m9ab5dyc1i3/file";
const LEAF_IMAGE = "https://imglinkv-3.vercel.app/api/images/cmsabzmato2b3b4l0/file";
const WEDDING_DATE = new Date("2029-05-24T09:00:00+07:00");
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Kp.+Tipar+Peuntas+RT+044%2FRW+009,+Cibolang+Kaler,+Cisaat,+Sukabumi+43152";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 },
});

function Slide1({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-white/40" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <motion.p
          className="tracking-[0.35em] text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(0.75rem, 2.5vw, 1rem)" }}
          {...fadeUp(0.3)}
        >
          THE WEDDING OF
        </motion.p>
        <motion.img
          src={LEAF_IMAGE}
          alt="Leaf Ornament"
          className="h-auto w-[7.65rem] object-contain sm:w-[10.2rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="leading-tight text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(2.4rem, 10vw, 4.5rem)" }}
          {...fadeUp(0.9)}
        >
          Tama &amp; Septi
        </motion.h1>
        <motion.p
          className="tracking-[0.2em] text-amber-900/90"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.8vw, 1.15rem)" }}
          {...fadeUp(1.2)}
        >
          01 Desember 2026
        </motion.p>
        <motion.button
          onClick={onNext}
          className="mt-10 flex flex-col items-center gap-1.5 text-amber-900/80 transition-colors hover:text-amber-900 active:scale-95"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileTap={{ scale: 0.95 }}
        >
          <span
            className="tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.65rem, 2vw, 0.85rem)" }}
          >
            Buka Undangan
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}

function CountdownTimer({ target }: { target: Date }) {
  const calcTimeLeft = useCallback(() => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [target]);

  const [time, setTime] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [calcTimeLeft]);

  const units = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-lg bg-amber-900/10 text-amber-900 sm:h-16 sm:w-16"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.2rem, 4vw, 1.8rem)" }}
          >
            {String(u.value).padStart(2, "0")}
          </div>
          <span
            className="mt-1 text-amber-900/60"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.6rem, 1.8vw, 0.75rem)" }}
          >
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const GALLERY_IMAGES = [
  "https://imglinkv-3.vercel.app/api/images/cmvu0r65sqe9efc27/file",
  "https://imglinkv-3.vercel.app/api/images/cmvu0r54t8gyk3tq2/file",
  "https://imglinkv-3.vercel.app/api/images/cmvu0r41xirpxkrnf/file",
  "https://imglinkv-3.vercel.app/api/images/cmvu0r2wd1bne5amr/file",
  "https://imglinkv-3.vercel.app/api/images/cmvu0r1norr59hbxd/file",
];
const YOUTUBE_ID = "tGv7CUutzqU";

function GallerySection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <motion.div
      className="mt-20 mb-10 w-full max-w-lg"
      {...fadeUp(1.5)}
    >
      <div className="rounded-lg bg-white/90 px-6 py-5 text-center shadow-sm backdrop-blur-sm">
        <p
          className="tracking-[0.35em] text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
        >
          OUR GALLERY
        </p>
      </div>

      <div className="mt-5 overflow-hidden rounded-lg bg-amber-100">
        <img
          src={GALLERY_IMAGES[activeIdx]}
          alt={`Gallery ${activeIdx + 1}`}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={"overflow-hidden rounded-md border-2 transition-all " + (i === activeIdx ? "border-amber-900 opacity-100" : "border-transparent opacity-60 hover:opacity-90")}
          >
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="h-auto w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
          title="Wedding Video"
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

function Slide2({ onPrev }: { onPrev: () => void }) {
  return (
    <motion.div
      className="relative min-h-screen w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 flex min-h-full flex-col items-center px-4 py-10 sm:px-6">
        <motion.div
          className="w-full max-w-lg rounded-lg bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm sm:px-10"
          {...fadeUp(0.2)}
        >
          <p
            className="text-amber-900"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(1.3rem, 4vw, 1.8rem)", lineHeight: 2.2 }}
            dir="rtl"
          >
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </p>
          <div className="my-5 h-px w-12 bg-amber-900/20 mx-auto" />
          <p
            className="text-amber-900"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(1rem, 3vw, 1.25rem)" }}
          >
            Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>
          <p
            className="mt-4 text-amber-900/80"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.5vw, 1rem)", lineHeight: 1.8 }}
          >
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala, insyaaAllah kami akan menyelenggarakan acara pernikahan:
          </p>
        </motion.div>

        <div className="mt-10 grid w-full max-w-lg grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            className="flex flex-col items-center rounded-lg bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm"
            {...fadeUp(0.5)}
          >
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-amber-900/20 bg-amber-100">
              <img
                src="https://imglinkv-3.vercel.app/api/images/cmvu0r0czppjl1mkm/file"
                alt="Tama"
                className="h-full w-full object-cover object-[50%_28%]"
              />
            </div>
            <h3
              className="mt-4 text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.6rem, 5vw, 2.2rem)" }}
            >
              Tama
            </h3>
            <p
              className="mt-1 text-amber-900/70"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)", lineHeight: 1.6 }}
            >
              Putra dari
              <br />
              Bapak ... &amp; Ibu ...
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-lg bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm"
            {...fadeUp(0.7)}
          >
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-amber-900/20 bg-amber-100">
              <img
                src="https://imglinkv-3.vercel.app/api/images/cmvu0qyoeg5f0zpba/file"
                alt="Septi"
                className="h-full w-full object-cover object-[50%_25%]"
              />
            </div>
            <h3
              className="mt-4 text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.6rem, 5vw, 2.2rem)" }}
            >
              Septi
            </h3>
            <p
              className="mt-1 text-amber-900/70"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)", lineHeight: 1.6 }}
            >
              Putri dari
              <br />
              Bapak ... &amp; Ibu ...
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 w-full max-w-lg"
          {...fadeUp(0.9)}
        >
          <p
            className="text-center tracking-[0.35em] text-amber-900"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
          >
            SAVE THE DATE
          </p>

          <motion.div
            className="mt-6 rounded-lg bg-white/90 px-6 py-8 shadow-sm backdrop-blur-sm sm:px-10"
            {...fadeUp(1.1)}
          >
            <h3
              className="text-center text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.2rem, 4vw, 1.6rem)" }}
            >
              Akad Nikah
            </h3>
            <div className="my-4 h-px w-8 bg-amber-900/20 mx-auto" />
            <p
              className="text-center text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
            >
              Sabtu, 24 Mei 2029
            </p>
            <p
              className="mt-1 text-center text-amber-900/80"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.2vw, 1rem)" }}
            >
              09:00 - 10:00 WIB
            </p>
            <div className="mt-3 flex items-start justify-center gap-2 text-amber-900/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <p
                className="text-center"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.78rem, 2vw, 0.9rem)", lineHeight: 1.6 }}
              >
                Rumah Mempelai Wanita
                <br />
                Kp. Tipar Peuntas RT 044/RW 009, Cibolang Kaler, Cisaat, Sukabumi 43152
              </p>
            </div>
            <div className="mt-4 text-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/30 px-5 py-2 text-amber-900 transition-all hover:bg-amber-900/10"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)" }}
              >
                <MapPin className="h-3.5 w-3.5" />
                Lihat Lokasi
              </a>
            </div>

            <div className="my-8 h-px bg-amber-900/10" />

            <h3
              className="text-center text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.2rem, 4vw, 1.6rem)" }}
            >
              Resepsi
            </h3>
            <div className="my-4 h-px w-8 bg-amber-900/20 mx-auto" />
            <p
              className="text-center text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
            >
              Sabtu, 24 Mei 2029
            </p>
            <p
              className="mt-1 text-center text-amber-900/80"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.2vw, 1rem)" }}
            >
              10:30 - Selesai WIB
            </p>
            <div className="mt-3 flex items-start justify-center gap-2 text-amber-900/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <p
                className="text-center"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.78rem, 2vw, 0.9rem)", lineHeight: 1.6 }}
              >
                Rumah Mempelai Wanita
                <br />
                Kp. Tipar Peuntas RT 044/RW 009, Cibolang Kaler, Cisaat, Sukabumi 43152
              </p>
            </div>
            <div className="mt-4 text-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/30 px-5 py-2 text-amber-900 transition-all hover:bg-amber-900/10"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)" }}
              >
                <MapPin className="h-3.5 w-3.5" />
                Lihat Lokasi
              </a>
            </div>
          </motion.div>

          <motion.div className="mt-10 mb-10" {...fadeUp(1.3)}>
            <p
              className="mb-4 text-center text-amber-900/60"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.7rem, 2vw, 0.85rem)" }}
            >
              Menuju hari bahagia
            </p>
            <CountdownTimer target={WEDDING_DATE} />
          </motion.div>

          <GallerySection />
          <GiftSection />
          <RsvpSection />
          <ClosingSection />
        </motion.div>
      </div>
    </motion.div>
  );
}

function RsvpSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [guests, setGuests] = useState(1);
  const [wishes, setWishes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [wishesList, setWishesList] = useState<{ name: string; wishes: string }[]>([]);

  useEffect(() => {
    fetch("/api/rsvp")
      .then((r) => r.json())
      .then((res) => {
        if (res.data) {
          setWishesList(res.data.filter((e: { wishes: string | null }) => e.wishes));
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !attending) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attending, guests, wishes }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        if (wishes.trim()) {
          setWishesList((prev) => [{ name, wishes }, ...prev]);
        }
      }
    } catch {
      alert("Gagal mengirim RSVP. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    fontFamily: "var(--font-cormorant)",
    fontWeight: 400 as const,
    fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
  };

  return (
    <motion.div
      className="mt-20 mb-10 w-full max-w-lg"
      {...fadeUp(1.9)}
    >
      <div className="rounded-lg bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm sm:px-10">
        <p
          className="tracking-[0.35em] text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
        >
          RSVP
        </p>
        <div className="my-5 h-px w-12 bg-amber-900/20 mx-auto" />
        <p
          className="text-amber-900/80"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.5vw, 1rem)", lineHeight: 1.8 }}
        >
          Konfirmasi kehadiran Anda
        </p>
      </div>

      {submitted ? (
        <motion.div
          className="mt-5 rounded-lg bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
            <Check className="h-7 w-7 text-green-600" />
          </div>
          <p
            className="text-amber-900"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.2rem, 4vw, 1.5rem)" }}
          >
            Terima Kasih!
          </p>
          <p
            className="mt-2 text-amber-900/70"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.5vw, 1rem)", lineHeight: 1.7 }}
          >
            Konfirmasi kehadiran Anda telah kami terima.
          </p>
          <button
            onClick={() => { setSubmitted(false); setName(""); setAttending(""); setGuests(1); setWishes(""); }}
            className="mt-4 text-amber-900/60 underline transition-colors hover:text-amber-900"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)" }}
          >
            Kirim lagi
          </button>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-4 rounded-lg bg-white/90 px-6 py-6 shadow-sm backdrop-blur-sm sm:px-8"
        >
          <div>
            <label
              className="mb-1.5 block text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
            >
              Nama
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-900/40" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Masukkan nama Anda"
                className="w-full rounded-lg border border-amber-900/20 bg-white/70 py-2.5 pl-10 pr-4 text-amber-900 placeholder:text-amber-900/30 focus:border-amber-900/50 focus:outline-none focus:ring-1 focus:ring-amber-900/20"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label
              className="mb-1.5 block text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
            >
              Konfirmasi Kehadiran
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAttending("Hadir")}
                className={"rounded-lg border py-2.5 transition-all " + (attending === "Hadir" ? "border-amber-900 bg-amber-900 text-white" : "border-amber-900/20 bg-white/70 text-amber-900 hover:border-amber-900/40")}
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
              >
                Hadir
              </button>
              <button
                type="button"
                onClick={() => setAttending("Tidak Hadir")}
                className={"rounded-lg border py-2.5 transition-all " + (attending === "Tidak Hadir" ? "border-amber-900 bg-amber-900 text-white" : "border-amber-900/20 bg-white/70 text-amber-900 hover:border-amber-900/40")}
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
              >
                Tidak Hadir
              </button>
            </div>
          </div>

          {attending === "Hadir" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <label
                className="mb-1.5 block text-amber-900"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
              >
                Jumlah Tamu
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-900/40" />
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="w-full rounded-lg border border-amber-900/20 bg-white/70 py-2.5 pl-10 pr-4 text-amber-900 focus:border-amber-900/50 focus:outline-none focus:ring-1 focus:ring-amber-900/20"
                  style={inputStyle}
                />
              </div>
            </motion.div>
          )}

          <div>
            <label
              className="mb-1.5 block text-amber-900"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
            >
              Ucapan & Doa
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-amber-900/40" />
              <textarea
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                rows={3}
                placeholder="Tulis ucapan dan doa Anda..."
                className="w-full resize-none rounded-lg border border-amber-900/20 bg-white/70 py-2.5 pl-10 pr-4 text-amber-900 placeholder:text-amber-900/30 focus:border-amber-900/50 focus:outline-none focus:ring-1 focus:ring-amber-900/20"
                style={{ ...inputStyle, lineHeight: 1.6 }}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={!name.trim() || !attending || submitting}
            className={"flex w-full items-center justify-center gap-2 rounded-lg py-3 text-white transition-all " + (name.trim() && attending && !submitting ? "bg-amber-900 hover:bg-amber-800" : "bg-amber-900/40 cursor-not-allowed")}
            whileTap={name.trim() && attending ? { scale: 0.98 } : undefined}
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {submitting ? "Mengirim..." : "Kirim RSVP"}
          </motion.button>
        </form>
      )}

      {wishesList.length > 0 && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p
            className="mb-4 text-center tracking-[0.25em] text-amber-900"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)" }}
          >
            Ucapan & Doa
          </p>
          <div className="max-h-72 space-y-3 overflow-y-auto pr-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(120,53,15,0.2) transparent" }}>
            {wishesList.map((item, i) => (
              <div
                key={i}
                className="rounded-lg bg-white/90 px-5 py-4 shadow-sm backdrop-blur-sm"
              >
                <p
                  className="text-amber-900"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
                >
                  {item.name}
                </p>
                <p
                  className="mt-1.5 text-amber-900/70"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.82rem, 2.2vw, 0.95rem)", lineHeight: 1.7 }}
                >
                  {item.wishes}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function ClosingSection() {
  return (
    <motion.div
      className="mt-20 mb-4 w-full max-w-lg"
      {...fadeUp(2.1)}
    >
      <div className="rounded-lg bg-white/90 px-6 py-12 text-center shadow-sm backdrop-blur-sm sm:px-10">
        <p
          className="tracking-[0.35em] text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
        >
          Terima Kasih
        </p>
        <div className="my-5 h-px w-12 bg-amber-900/20 mx-auto" />
        <p
          className="text-amber-900/80"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1.8 }}
        >
          Kami yang berbahagia
        </p>
        <img
          src={LEAF_IMAGE}
          alt="Leaf Ornament"
          className="mx-auto mt-5 h-auto w-20 object-contain"
        />
        <p
          className="mt-5 text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.8rem, 6vw, 2.8rem)" }}
        >
          Tama &amp; Septi
        </p>
        <div className="my-5 h-px w-12 bg-amber-900/20 mx-auto" />
        <p
          className="text-amber-900/70"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.2vw, 1rem)" }}
        >
          Kedua Mempelai &amp; Keluarga Besar
        </p>
      </div>

      <p
        className="mt-8 pb-8 text-center text-amber-900/40"
        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.75rem, 2vw, 0.9rem)" }}
      >
        Made with ❤️ Tama &amp; Septi
      </p>
    </motion.div>
  );
}

function GiftSection() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="mt-20 mb-10 w-full max-w-lg"
      {...fadeUp(1.7)}
    >
      <div className="rounded-lg bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm sm:px-10">
        <p
          className="tracking-[0.35em] text-amber-900"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
        >
          Kirim Hadiah
        </p>
        <div className="my-5 h-px w-12 bg-amber-900/20 mx-auto" />
        <p
          className="text-amber-900/80"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.85rem, 2.5vw, 1rem)", lineHeight: 1.8 }}
        >
          Kehadiran dan doa restu anda merupakan karunia yang sangat berharga bagi kami, namun apabila memberi hadiah adalah ungkapan tanda kasih anda, anda dapat mengirimkan ke rekening berikut.
        </p>
        <p
          className="mt-4 text-amber-900/50"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)" }}
        >
          Jazakumullahu khayran
        </p>
      </div>

      <motion.button
        onClick={() => setShow(!show)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-900/30 bg-white/90 px-6 py-3 text-amber-900 backdrop-blur-sm transition-all hover:bg-white"
        whileTap={{ scale: 0.98 }}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        <span
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
        >
          {show ? "Sembunyikan No. Rekening" : "Lihat No. Rekening"}
        </span>
      </motion.button>

      {show && (
        <motion.div
          className="mt-3 space-y-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-lg bg-white/90 px-5 py-4 shadow-sm backdrop-blur-sm">
            <p
              className="text-amber-900/60"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.75rem, 2vw, 0.85rem)" }}
            >
              Bank Central Asia (BCA)
            </p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <p
                className="text-amber-900"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(1.1rem, 3vw, 1.3rem)", letterSpacing: "0.05em" }}
              >
                1234 5678 90
              </p>
              <button
                onClick={() => handleCopy("1234567890")}
                className="shrink-0 rounded-full p-2 text-amber-900/60 transition-colors hover:bg-amber-900/10 hover:text-amber-900"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p
              className="mt-1 text-amber-900/60"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(0.75rem, 2vw, 0.85rem)" }}
            >
              a.n. Tama
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

const TOTAL_SLIDES = 2;

export default function WeddingInvitation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const canScroll = currentSlide >= 1;

  useEffect(() => {
    document.body.style.overflow = canScroll ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [canScroll]);

  const slides = [
    <Slide1 key="slide1" onNext={goNext} />,
    <Slide2 key="slide2" onPrev={goPrev} />,
  ];

  return (
    <main className={"relative w-screen " + (canScroll ? "min-h-screen overflow-y-auto" : "h-screen overflow-hidden")}>
      <a
        href="https://template.memoraa-invitation.my.id/"
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-amber-900/20 bg-white/80 px-4 py-2 text-amber-900 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.75rem, 2vw, 0.9rem)" }}
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Template
      </a>
      <AnimatePresence mode="wait">{slides[currentSlide]}</AnimatePresence>
      {IS_DEV && (
        <a
          href="/api/download"
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-amber-900 px-4 py-2.5 text-white shadow-lg transition-all hover:bg-amber-800 hover:shadow-xl"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(0.75rem, 2vw, 0.9rem)" }}
        >
          <Download className="h-3.5 w-3.5" />
          Download
        </a>
      )}
    </main>
  );
}
