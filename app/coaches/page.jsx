import Image from "next/image"
import Link from "next/link"
import { Award, Users, Target, Heart, Star, Mail, Linkedin } from "lucide-react"

export default function CoachesPage() {
  const headCoaches = [
    {
      name: "Sarah Mitchell",
      position: "Head Coach & Academy Director",
      bio: "Sarah brings over 15 years of volleyball experience, having played professionally in Europe before transitioning to coaching. She holds a Level 4 Volleyball England coaching qualification and has led teams to multiple regional championships. Sarah's passion for developing young talent and her innovative training methods have made her one of London's most respected volleyball coaches.",
      image: "https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492400.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      qualifications: [
        "Level 4 Volleyball England Coach",
        "Former Professional Player (Italy, Germany)",
        "Sports Science Degree - Loughborough University",
        "Youth Development Specialist",
      ],
      specialties: ["Technical Development", "Youth Coaching", "Team Strategy"],
      achievements: ["5x Regional Championship Winner", "Coach of the Year 2022", "200+ Players Developed"],
      email: "sarah@skyspikers.com",
      linkedin: "#",
    },
    {
      name: "Marcus Thompson",
      position: "Performance Coach",
      bio: "Marcus specializes in high-performance volleyball training and has worked with several national youth teams. His background in sports psychology and strength conditioning brings a unique approach to player development. Marcus focuses on the mental aspects of the game while building physical capabilities that translate to on-court success.",
      image: "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492396.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      qualifications: [
        "Level 3 Volleyball England Coach",
        "Sports Psychology Masters",
        "Strength & Conditioning Certified",
        "Mental Performance Coach",
      ],
      specialties: ["Performance Psychology", "Strength Training", "Elite Development"],
      achievements: ["National Youth Team Coach", "Performance Coach of the Year", "Elite Pathway Developer"],
      email: "marcus@skyspikers.com",
      linkedin: "#",
    },
  ]

  const assistantCoaches = [
    {
      name: "Emma Rodriguez",
      position: "Youth Development Coach",
      specialties: ["Fundamental Skills", "Youth Engagement", "Fun-based Learning"],
      image: "https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492388.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      bio: "Emma specializes in making volleyball fun and accessible for young players while building strong fundamentals.",
    },
    {
      name: "James Wilson",
      position: "Technical Skills Coach",
      specialties: ["Serving Technique", "Attacking Skills", "Video Analysis"],
      image: "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492393.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740 ",
      bio: "James focuses on perfecting technical skills through detailed analysis and progressive training methods.",
    },
    {
      name: "Lisa Chen",
      position: "Competitive Team Coach",
      specialties: ["Game Strategy", "Team Dynamics", "Competition Preparation"],
      image: "https://img.freepik.com/free-photo/front-view-smiley-female-volleyball-player-beach-posing-with-ball_23-2148662720.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      bio: "Lisa prepares our competitive teams for tournaments and develops winning strategies and team cohesion.",
    },
    {
      name: "David Kumar",
      position: "Adult Programs Coach",
      specialties: ["Adult Learning", "Fitness Integration", "Social Volleyball"],
      image: "https://img.freepik.com/free-photo/shirtless-male-volleyball-player-holding-ball-with-finger_23-2148662627.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      bio: "David creates engaging programs for adult players, focusing on fitness, skill development, and enjoyment.",
    },
  ]

  const philosophy = [
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Player-Centered Approach",
      description:
        "Every player is unique. We tailor our coaching methods to individual learning styles and goals, ensuring each athlete reaches their full potential.",
    },
    {
      icon: <Target className="w-8 h-8 text-sky-500" />,
      title: "Technical Excellence",
      description:
        "We focus on building solid fundamentals and advanced techniques through progressive, scientifically-backed training methods.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Team Development",
      description:
        "Volleyball is a team sport. We emphasize communication, cooperation, and collective growth both on and off the court.",
    },
    {
      icon: <Award className="w-8 h-8 text-sky-500" />,
      title: "Character Building",
      description:
        "We develop not just better volleyball players, but better people through sportsmanship, discipline, and leadership training.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              Meet Our <span className="text-sky-300">Coaches</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our world-class coaching team brings together decades of playing and coaching experience to help you
              achieve your volleyball goals.
            </p>
            <div className="flex justify-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Head Coaches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our head coaches bring elite-level experience and passion for developing volleyball talent at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {headCoaches.map((coach, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full relative">
                      <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{coach.name}</h3>
                    <p className="text-sky-500 font-semibold mb-4">{coach.position}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{coach.bio}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Qualifications:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {coach.qualifications.map((qual, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></div>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {coach.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center">
                            <Award className="w-4 h-4 text-orange-500 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={`mailto:${coach.email}`}
                        className="flex items-center text-sky-500 hover:text-sky-600"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        Contact
                      </a>
                      <a href={coach.linkedin} className="flex items-center text-skyblue-500 hover:text-skyblue-600">
                        <Linkedin className="w-4 h-4 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistant Coaches */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Coaching Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated coaching staff ensures every player receives personalized attention and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistantCoaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="h-64 relative">
                  <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{coach.name}</h3>
                  <p className="text-skyblue-500 font-semibold mb-3">{coach.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{coach.bio}</p>
                  <div className="space-y-2">
                    {coach.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium mr-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Our Coaching Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At SkySpikers, we believe in developing the complete athlete through a holistic approach that combines
              technical skill, mental strength, and character development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Training Methodology</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our coaches use proven training methods that combine traditional volleyball fundamentals with modern
                sports science and technology to maximize player development.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-skyblue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Assessment & Goal Setting</h3>
                    <p className="text-gray-600">
                      We start by evaluating each player's current abilities and establishing clear, achievable goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Progressive Skill Development</h3>
                    <p className="text-gray-600">
                      Skills are taught in a logical progression, building complexity as players master fundamentals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-skyblue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Game Application</h3>
                    <p className="text-gray-600">
                      Skills are practiced in game-like situations to ensure transfer to competitive play.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Continuous Feedback</h3>
                    <p className="text-gray-600">
                      Regular assessment and feedback help players understand their progress and areas for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Coaching methodology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Join Our Coaching Team</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Are you a passionate volleyball coach looking to make a difference? We're always looking for dedicated
              professionals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Apply Now
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
