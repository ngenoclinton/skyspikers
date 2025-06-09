import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Trophy, Target, Star, Play } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-sky-500" />,
      title: "Expert Coaching",
      description: "Learn from certified volleyball coaches with years of competitive experience.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      title: "Competitive Training",
      description: "Develop skills through structured drills and competitive gameplay.",
    },
    {
      icon: <Target className="w-8 h-8 text-sky-500" />,
      title: "Skill Development",
      description: "Focus on fundamentals, technique, and advanced volleyball strategies.",
    },
  ]

  const programs = [
    {
      title: "Youth Development",
      age: "Ages 8-14",
      description: "Building fundamental skills and love for the game in a fun, supportive environment.",
      image: "https://img.freepik.com/free-photo/man-two-women-posing-together-with-volleyball_23-2148662695.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "From £25/session",
    },
    {
      title: "Competitive Training",
      age: "Ages 15+",
      description: "Advanced training for players looking to compete at higher levels.",
      image: "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492349.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "From £35/session",
    },
    {
      title: "Adult Recreation",
      age: "18+ All Levels",
      description: "Stay active and improve your volleyball skills in a relaxed setting.",
      image: "https://img.freepik.com/free-photo/details-ball-sport_23-2151869828.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "From £20/session",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "My daughter has grown so much in confidence and skill since joining SkySpikers. The coaches are amazing!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Adult Player",
      content: "Great training sessions that have really improved my game. The community here is fantastic.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Youth Player",
      content: "I love coming to practice! The coaches make learning fun and I've made so many friends.",
      rating: 5,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://img.freepik.com/free-photo/front-view-new-football-with-copy-space_23-2148796922.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740" alt="Volleyball players in action" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-sky-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-sky-300">Sky</span>
              <span className="text-orange-400">Spikers</span>
              <br />
              <span className="text-3xl md:text-5xl font-semibold">Volleyball Academy</span>
            </h1>
            <p className="text-xl md:text-2xl  text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Whether you're a beginner or an advanced athlete, we provide coaching that hones your skills, builds your
              strategic game play, and helps you achieve your volleyball goals.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/programs" className="btn-primary text-lg px-8 py-4">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
              </Link>
            </div> */}
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white volleyball-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">Why Choose SkySpikers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to developing not just better volleyball players, but confident, disciplined individuals
              who excel both on and off the court.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-200 rounded-full">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginners to advanced players, we have programs designed to meet you where you are and take you where
              you want to go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="h-48 relative">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {program.age}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-sky-500">{program.price}</span>
                    <Link
                      href="/programs"
                      className="text-sky-500 hover:text-sky-600 font-semibold flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Play with Heart. <br />
                <span className="text-sky-400">Train with Purpose.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                At SkySpikers, we believe volleyball is more than just a sport—it's a way to build character, create
                lasting friendships, and develop life skills that extend far beyond the court.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400 mb-2">200+</div>
                  <div className="text-gray-300">Players Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/girls-preparing-volleyball-field_23-2149451039.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
                  alt="Volleyball training session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <Play className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it—hear from the players and families who make SkySpikers special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding sand-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Ready to Spike Your Skills?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Join the SkySpikers family today and discover what it means to play with heart and train with purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </Link>
            <Link href="/academy" className="btn-secondary text-lg px-8 py-4">
              View Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
