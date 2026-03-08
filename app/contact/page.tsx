import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6">
      <div className="max-w-lg w-full bg-black/70 backdrop-blur rounded-2xl shadow-xl p-10 text-center space-y-8 ">
        <h1 className="text-4xl font-bold text-gray-200">Get in Touch</h1>

        <p className="text-gray-400">Interested in working together?</p>

        <div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-gray-100 transition">
            <Mail className="text-blue-600" size={22} />
            <a
              href="mailto:megokruto@gmail.com"
              className="text-gray-300 font-medium"
            >
              megokruto@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-gray-100 transition">
            <Phone className="text-blue-600" size={22} />
            <a href="tel:+316275800000" className="text-gray-300 font-medium">
              +31 6 27 58 000000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
