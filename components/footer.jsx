import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "../components/contact-form"

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <div className="text-logo text-3xl mb-4">
                <span className="text-sky-400">Sky</span>
                <span className="text-orange-400">Spikers</span>
              </div>
              <p className="text-gray-300 text-lg">Play with Heart. Train with Purpose.</p>
            </div>

            <h3 className="text-2xl font-display font-bold mb-6 text-sky-400">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sky-400" />
                <span className="text-gray-300">info@skyspikers.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sky-400" />
                <span className="text-gray-300">+44 7123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-sky-400" />
                <span className="text-gray-300">London Sports Centre, London, UK</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkySpikers Volleyball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
