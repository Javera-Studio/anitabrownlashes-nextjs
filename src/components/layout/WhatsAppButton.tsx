import { business } from "@/lib/data/business";

export function WhatsAppButton() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Auf WhatsApp schreiben"
      className="fixed bottom-5 right-5 z-40 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-orchid text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:bg-orchid-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid motion-reduce:transition-none motion-reduce:hover:scale-100 md:bottom-7 md:right-7 md:h-[60px] md:w-[60px]"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" aria-hidden>
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.66 4.523 1.804 6.383L4 29l7.83-1.756A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-2.02 0-3.9-.59-5.48-1.6l-.393-.246-4.646 1.043 1.02-4.53-.256-.412A9.68 9.68 0 0 1 6.25 15c0-5.376 4.377-9.75 9.754-9.75 5.375 0 9.746 4.374 9.746 9.75s-4.371 9.75-9.746 9.75Zm5.36-7.31c-.294-.148-1.738-.858-2.008-.956-.27-.098-.467-.148-.663.148-.196.295-.76.956-.933 1.152-.172.196-.343.221-.637.074-.294-.148-1.242-.457-2.366-1.457-.875-.78-1.466-1.744-1.638-2.038-.172-.295-.018-.454.13-.6.134-.133.294-.344.44-.516.148-.172.196-.295.294-.491.098-.196.05-.369-.024-.517-.074-.148-.663-1.596-.909-2.187-.24-.575-.484-.497-.663-.507l-.564-.01c-.196 0-.516.074-.786.369-.27.295-1.03 1.006-1.03 2.454 0 1.447 1.055 2.846 1.202 3.043.148.196 2.077 3.17 5.033 4.444.703.304 1.252.485 1.68.62.706.225 1.348.193 1.856.117.566-.084 1.738-.71 1.983-1.396.245-.687.245-1.276.172-1.397-.074-.123-.27-.197-.564-.344Z" />
      </svg>
    </a>
  );
}
