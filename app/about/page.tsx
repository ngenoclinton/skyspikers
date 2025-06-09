import Image from "next/image"
import Link from "next/link"
import { Users, Target, Heart, Award, Clock, MapPin } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Passion",
      description: "We live and breathe volleyball, bringing infectious enthusiasm to every training session.",
    },
    {
      icon: <Users className="w-8 h-8 text-sky-500" />,
      title: "Community",
      description: "Building lasting friendships and a supportive volleyball family that extends beyond the court.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Excellence",
      description: "Striving for continuous improvement in technique, strategy, and personal development.",
    },
    {
      icon: <Award className="w-8 h-8 text-sky-500" />,
      title: "Integrity",
      description: "Teaching respect, sportsmanship, and ethical behavior both on and off the volleyball court.",
    },
  ]

  const stats = [
    { number: "200+", label: "Players Trained" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Tournaments Won" },
    { number: "98%", label: "Improvement Rate" },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Academy Founded",
      description:
        "SkySpikers Volleyball Academy was established with a vision to develop volleyball talent in London.",
    },
    {
      year: "2020",
      title: "Youth Programs Launch",
      description: "Introduced specialized youth development programs for ages 8-14.",
    },
    {
      year: "2021",
      title: "Competitive Success",
      description: "Our teams started winning regional tournaments and gaining recognition.",
    },
    {
      year: "2022",
      title: "Facility Expansion",
      description: "Expanded to include state-of-the-art training facilities and equipment.",
    },
    {
      year: "2023",
      title: "Community Growth",
      description: "Reached 200+ active players and established partnerships with local schools.",
    },
  ]
const playerImages = [
    "https://img.freepik.com/free-photo/black-white-portrait-athlete-competing-paralympics-championship-games_23-2151492687.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/monochrome-portrait-athlete-competing-paralympic-games-championship_23-2151492787.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492393.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/girls-preparing-volleyball-field_23-2149451039.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

     {player1:"https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492388.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"},
     {player2:"https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492401.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"},
    {player3:"https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492344.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"},{},{},{},{},{},{},{},{},{},{},
    "https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492400.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/girl-playing-volleyball_23-2149450950.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/girl-posing-with-volley-ball_23-2149450980.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492351.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740", 
    
    "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492362.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
    {},{},{},{},{},{},{},{},{},{},{},{},{},
    "https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492403.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
   
    {
        training1: "https://img.freepik.com/free-photo/people-playing-game-volleyball_52683-87453.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"        
    },
    {
        training2:"https://img.freepik.com/free-photo/girls-playing-volleyball_23-2149450964.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
    }, 
    {
        training3recept1:"https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492351.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
    },
    {trainingRecept2:"https://img.freepik.com/free-photo/volleyball-players-having-match_23-2149492368.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"},
    {trainingBlock:"https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492369.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"},
    {trainingServe:"https://img.freepik.com/free-photo/young-woman-as-volleyball-player_23-2149492366.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"}, 
    {teamConverse: "https://img.freepik.com/free-photo/girls-training-volleyball-field_23-2149450955.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"}, 
    "https://img.freepik.com/free-photo/man-two-women-posing-together-with-volleyball_23-2148662695.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492369.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",

    "https://img.freepik.com/free-photo/girls-training-volleyball-field_23-2149450956.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
    {groupWarmup1:"https://img.freepik.com/free-photo/volleyball-players-having-match_23-2149492338.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"},
    {warmup2:"https://img.freepik.com/free-photo/volleyball-players-having-match_23-2149492334.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"}
]
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
                About <span className="text-sky-300">SkySpikers</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                We&rsquo;re more than just a volleyball academy—we&rsquo;re a community dedicated to developing champions both on
                and off the court.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs" className="btn-primary">
                  Our Programs
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Join Us Today
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/girls-preparing-volleyball-field_23-2149451042.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
                  alt="SkySpikers team photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide exceptional volleyball training that develops not just athletic skills, but character,
                teamwork, and a lifelong passion for the sport. We believe every player has the potential to excel when
                given the right guidance, support, and opportunities.
              </p>
              <p className="text-gray-600">
                Through innovative training methods and a supportive community environment, we help players of all
                levels reach their full potential while building confidence and lasting friendships.
              </p>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become London&rsquo;s premier volleyball academy, recognized for developing well-rounded athletes who
                embody the values of sportsmanship, dedication, and excellence. We envision a future where our players
                become leaders in their communities.
              </p>
              <p className="text-gray-600">
                We aim to create a volleyball ecosystem that nurtures talent from grassroots to elite levels, fostering
                a love for the game that lasts a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at SkySpikers Volleyball Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg card-hover">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to volleyball excellence and community building.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading volleyball academy in London.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-sky-500">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">World-Class Facilities</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our state-of-the-art training facilities provide the perfect environment for volleyball development.
                From professional-grade courts to modern equipment, we ensure our players have everything they need to
                excel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Professional volleyball courts with regulation nets</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Modern strength and conditioning equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Video analysis technology for technique improvement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Comfortable changing rooms and social areas</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://img.freepik.com/free-photo/indoors-tennis-court_1385-1396.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
                alt="Volleyball court"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://img.freepik.com/free-photo/close-up-sport-environment-with-volleyball_23-2151891102.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
                alt="Training equipment"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://img.freepik.com/free-photo/close-up-sport-environment-with-volleyball_23-2151891099.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
                alt="Team meeting room"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://img.freepik.com/free-photo/orange-balls-inflatables_1163-118.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740"
                alt="Fitness area"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Visit Our Academy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of London, our academy is easily accessible and provides a welcoming environment for
              all volleyball enthusiasts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-sky-500 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">London Sports Centre</div>
                    <div className="text-gray-600">123 Volleyball Street, London, SW1A 1AA</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Training Hours</div>
                    <div className="text-gray-600">Monday - Friday: 4:00 PM - 9:00 PM</div>
                    <div className="text-gray-600">Saturday - Sunday: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Getting Here</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>By Tube:</strong> Nearest stations are Westminster (5 min walk) and Victoria (8 min walk)
                </p>
                <p>
                  <strong>By Bus:</strong> Routes 11, 24, 148, and 211 stop nearby
                </p>
                <p>
                  <strong>By Car:</strong> Limited parking available, public car parks within 200m
                </p>
                <p>
                  <strong>By Bike:</strong> Secure bike storage available on-site
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover what makes SkySpikers special. Come visit us, meet our coaches, and see our facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule a Visit
            </Link>
            <Link href="/programs" className="btn-secondary text-lg px-8 py-4">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
