import Image from "next/image"
import Link from "next/link"
import { Users, Clock, Trophy, Target, Star, CheckCircle } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Youth Development",
      age: "Ages 8-14",
      level: "Beginner to Intermediate",
      description:
        "Our youth program focuses on building fundamental volleyball skills in a fun, supportive environment. Players learn proper technique, teamwork, and develop a love for the game.",
      image: "https://img.freepik.com/free-photo/boy-playing-volleyball-court_1157-49874.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "£25",
      duration: "90 minutes",
      schedule: "Tuesdays & Thursdays 4:30-6:00 PM",
      features: [
        "Fundamental skills development",
        "Age-appropriate training methods",
        "Focus on fun and participation",
        "Character building activities",
        "Small group instruction",
        "Progress tracking and feedback",
      ],
      color: "sky",
    },
    {
      title: "Competitive Training",
      age: "Ages 15+",
      level: "Intermediate to Advanced",
      description:
        "Designed for serious players looking to compete at higher levels. This program emphasizes advanced techniques, strategic play, and intensive skill development.",
      image: "https://img.freepik.com/free-photo/black-white-portrait-athlete-participating-olympic-championship-sports_23-2151500612.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "£35",
      duration: "2 hours",
      schedule: "Mondays, Wednesdays & Fridays 6:00-8:00 PM",
      features: [
        "Advanced technique training",
        "Tactical strategy development",
        "Competitive match preparation",
        "Video analysis sessions",
        "Strength and conditioning",
        "Tournament opportunities",
      ],
      color: "orange",
    },
    {
      title: "Adult Recreation",
      age: "18+ All Levels",
      level: "Beginner to Advanced",
      description:
        "Perfect for adults looking to stay active, learn volleyball, or improve existing skills in a relaxed, social environment. Great for fitness and making new friends.",
      image: "https://img.freepik.com/free-photo/smiley-shirtless-male-volleyball-player-beach-holding-ball_23-2148662710.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "£20",
      duration: "90 minutes",
      schedule: "Saturdays 10:00-11:30 AM & Sundays 2:00-3:30 PM",
      features: [
        "Flexible skill levels welcome",
        "Social and friendly atmosphere",
        "Fitness-focused training",
        "Stress relief and fun",
        "Team building activities",
        "Drop-in sessions available",
      ],
      color: "gray",
    },
    {
      title: "Elite Performance",
      age: "Ages 16+",
      level: "Advanced/Elite",
      description:
        "Our most intensive program for elite players aiming for university scholarships, professional opportunities, or national team selection.",
      image: "https://img.freepik.com/free-photo/female-professional-volleyball-players-action-3d-stadium_654080-1089.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      price: "£50",
      duration: "2.5 hours",
      schedule: "Monday-Friday 7:00-9:30 PM",
      features: [
        "Elite-level coaching",
        "Personalized training plans",
        "Mental performance coaching",
        "Nutrition guidance",
        "College recruitment support",
        "Professional pathway development",
      ],
      color: "sky",
    },
  ]

  const specialPrograms = [
    {
      title: "Private Coaching",
      description: "One-on-one sessions tailored to individual needs and goals.",
      price: "From £60/hour",
      icon: <Target className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Team Training",
      description: "Custom programs for existing teams looking to improve together.",
      price: "Custom pricing",
      icon: <Users className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Holiday Camps",
      description: "Intensive multi-day camps during school holidays.",
      price: "From £150/week",
      icon: <Trophy className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Skills Clinics",
      description: "Specialized workshops focusing on specific volleyball skills.",
      price: "From £30/session",
      icon: <Star className="w-8 h-8 text-orange-500" />,
    },
  ]

  const benefits = [
    "Expert coaching from certified professionals",
    "Progressive skill development programs",
    "State-of-the-art training facilities",
    "Small class sizes for personalized attention",
    "Regular progress assessments",
    "Competitive opportunities and tournaments",
    "Character development and life skills",
    "Supportive community environment",
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              Our <span className="text-sky-300">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              From beginners taking their first steps to elite athletes pursuing excellence, we have volleyball programs
              designed to meet every player&rsquo;s needs and aspirations.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Find Your Program
            </Link>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Core Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of volleyball programs, each designed to develop specific skills and
              cater to different age groups and experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="h-64 relative">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.age}
                    </span>
                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.level}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-sky-500 mr-2" />
                      <span className="text-gray-700">{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-sky-500">{program.price}</span>
                      <span className="text-gray-500 ml-1">/session</span>
                    </div>
                    <div className="text-gray-600">{program.schedule}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary w-full text-center">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Specialized Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional training options to complement your volleyball development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="text-lg font-bold text-sky-500 mb-4">{program.price}</div>
                <Link href="/contact" className="text-sky-500 hover:text-sky-600 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Why Choose SkySpikers?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our programs are designed to provide comprehensive volleyball development that goes beyond just
                technical skills. We focus on building confident, well-rounded individuals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Volleyball training session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Program Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with flexible payment options to make volleyball training accessible to everyone.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-sky-500 mb-2">£20-25</div>
                  <div className="text-gray-600">Youth & Adult Rec</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">£35</div>
                  <div className="text-gray-600">Competitive Training</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-500 mb-2">£50</div>
                  <div className="text-gray-600">Elite Performance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">£60+</div>
                  <div className="text-gray-600">Private Coaching</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Monthly packages available</strong> - Save up to 15% with our monthly membership options
                </p>
                <p className="text-gray-600">
                  <strong>Family discounts</strong> - 10% off for siblings enrolled in multiple programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join hundreds of players who have discovered their potential at SkySpikers. Your volleyball adventure starts
            here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Enroll Today
            </Link>
            <Link href="/academy" className="btn-secondary text-lg px-8 py-4">
              Visit Our Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
