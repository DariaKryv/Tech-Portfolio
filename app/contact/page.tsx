import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex mt-8 items-center justify-center  min-h-[40vh]">
      <div className="w-full bg-black/10 border-gray-300 backdrop-blur rounded-2xl shadow-xl p-10 text-center space-y-8 ">
        <h1 className="text-4xl font-bold text-gray-200 leading-none m-2">
          MEGOKRUTO
        </h1>
        <div className="text-xs font-light text-gray-200 leading-none -mt-1">
          DEV STUDIO
        </div>

        <div>
          <div className="flex items-center justify-center gap-4 p-2 rounded-xl hover:bg-gray-200/15 transition">
            <Mail className="text-pink-600" size={22} />
            <a
              href="mailto:megokruto@gmail.com"
              className="text-gray-300 font-medium"
            >
              megokruto@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 p-2 rounded-xl hover:bg-gray-200/15 transition">
            <Phone className="text-pink-600" size={22} />
            <a href="tel:+316275800000" className="text-gray-300 font-medium">
              +31 6 27 58 69 65
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
