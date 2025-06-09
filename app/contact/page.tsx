import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import ContactForm  from "../../components/contact-form"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-sky-500" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+44 7123 456 789",
      action: "tel:+447123456789",
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "info@skyspikers.com",
      action: "mailto:info@skyspikers.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-sky-500" />,
      title: "WhatsApp",
      description: "Quick questions and updates",
      contact: "+44 7123 456 789",
      action: "https://wa.me/447123456789",
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: "Book a Visit",
      description: "Schedule a facility tour",
      contact: "Online Booking",
      action: "#booking",
    },
  ]

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer:
        "We offer programs for all ages, from youth development (8-14 years) to adult recreation (18+). Our competitive and elite programs are available for players 15 and older.",
    },
    {
      question: "Do I need prior volleyball experience?",
      answer:
        "Not at all! We welcome complete beginners as well as experienced players. Our coaches will assess your skill level and place you in the appropriate program.",
    },
    {
      question: "What should I bring to my first session?",
      answer:
        "Just bring comfortable athletic clothing, indoor sports shoes, and a water bottle. We provide all volleyball equipment including balls and nets.",
    },
    {
      question: "How do I register for a program?",
      answer:
        "You can register by filling out our contact form, calling us directly, or visiting our facility. We'll help you choose the right program and get you started.",
    },
    {
      question: "Do you offer trial sessions?",
      answer:
        "Yes! We offer trial sessions for new players to experience our training before committing to a full program. Contact us to schedule your trial.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept various payment methods including bank transfer, card payments, and monthly direct debit. We also offer family discounts and payment plans.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              Get In <span className="text-sky-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to start your volleyball journey? We're here to help you find the perfect program and answer any
              questions you might have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're committed to responding quickly and helping you get
              started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl card-hover">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  className="text-sky-500 hover:text-sky-600 font-semibold transition-colors"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-white">
              <h2 className="text-4xl font-display font-bold mb-8">Visit Our Academy</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Come see our world-class facilities and meet our coaching team. We'd love to show you around and help
                you find the perfect volleyball program.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-sky-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">London Sports Centre</p>
                    <p className="text-gray-300">123 Volleyball Street, London, SW1A 1AA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Training Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 4:00 PM - 9:00 PM</p>
                    <p className="text-gray-300">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-sky-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+44 7123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@skyspikers.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3">Getting Here</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>By Tube:</strong> Westminster (5 min walk), Victoria (8 min walk)
                  </p>
                  <p>
                    <strong>By Bus:</strong> Routes 11, 24, 148, 211
                  </p>
                  <p>
                    <strong>By Car:</strong> Limited parking available, public car parks nearby
                  </p>
                  <p>
                    <strong>By Bike:</strong> Secure bike storage on-site
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <ContactForm /> */}
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs, facilities, and enrollment process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your question here?</p>
            <a href="mailto:info@skyspikers.com" className="btn-primary inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Ask Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of London with excellent transport links</p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-sky-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive map would be embedded here</p>
                <p className="text-gray-500">London Sports Centre, SW1A 1AA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Don't wait to begin your volleyball journey. Contact us today to schedule a visit, ask questions, or enroll
            in one of our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447123456789" className="btn-primary text-lg px-8 py-4">
              Call Now
            </a>
            <a href="mailto:info@skyspikers.com" className="btn-secondary text-lg px-8 py-4">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
