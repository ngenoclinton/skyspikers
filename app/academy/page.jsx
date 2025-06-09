"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Play,
  Users,
  Trophy,
  Target,
  Heart,
  Star,
  Calendar,
} from "lucide-react";

export default function AcademyPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const galleryImages = [
    {
      src: "https://img.freepik.com/premium-photo/female-high-school-volleyball-team-have-team-talk-from-coach_1339860-1040.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Volleyball training session",
      caption: "Spike technique training with Coach Sarah",
      category: "training",
    },
    {
      src: "https://img.freepik.com/premium-photo/high-school-volleyball-match-gymnasium_1218270-4773.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Team practice",
      caption: "Team coordination and strategy practice",
      category: "team",
    },
    {
      src: "https://img.freepik.com/free-photo/volleyball-with-female-player-ball_23-2150995410.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Serving practice",
      caption: "Perfecting serve technique and accuracy",
      category: "skills",
    },
    {
      src: "https://img.freepik.com/premium-photo/fitness-sports-netball-match-by-women-outdoor-court-training-workout-practice-exercise-students-girl-team-with-ball-competition-speed-performance-while-active-field_590464-159510.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Youth training",
      caption: "Youth development program in action",
      category: "youth",
    },
    {
      src: "https://img.freepik.com/free-photo/volleyball-players-having-match_23-2149492377.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Individual coaching",
      caption: "One-on-one skill development session",
      category: "training",
    },
    {
      src: "https://img.freepik.com/premium-photo/focused-biracial-female-basketball-players-listening-male-coach-gym-sport-activity-togetherness-lifestyle-unaltered_13339-340514.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Team celebration",
      caption: "Celebrating tournament victory",
      category: "team",
    },
    {
      src: "https://img.freepik.com/premium-photo/high-school-volleyball-match-gymnasium_1218270-5450.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Blocking drills",
      caption: "Advanced blocking and defense techniques",
      category: "skills",
    },
    {
      src: "https://img.freepik.com/free-photo/young-volleyball-man-player-court_23-2149492372.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      caption: "Volleyball-specific fitness training",
      category: "training",
    },
    {
      src: "https://img.freepik.com/premium-photo/focused-biracial-female-basketball-players-listening-male-coach-gym-sport-activity-togetherness-lifestyle-unaltered_13339-340515.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Game situation",
      caption: "Competitive scrimmage with coaching feedback",
      category: "team",
    },
    {
      src: "https://img.freepik.com/premium-photo/beach-volleyball-team-game-plan-conversation-advice-with-coach-competition-strategy-fitness-outdoor-sports-player-motivation-support-training-objective-with-team-manager_590464-219639.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Young players",
      caption: "Building fundamentals with young athletes",
      category: "youth",
    },
    {
      src: "https://img.freepik.com/premium-photo/netball-sports-team-woman-jump-ball-practice-playing-game-court-challenge-high-school-match-fitness-teamwork-group-workout-tournament-player-action-exercise-training_590464-222950.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Setting practice",
      caption: "Precision setting and ball control",
      category: "skills",
    },
    {
      src: "https://img.freepik.com/free-photo/girls-preparing-volleyball-field_23-2149451039.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      alt: "Team huddle",
      caption: "Strategic planning and team building",
      category: "team",
    },
  ];

  const filteredImages = activeCategory
    ? galleryImages.filter((image) => image.category === activeCategory)
    : galleryImages;

  const videos = [
    {
      id: "video1",
      thumbnail:
        "https://videocdn.cdnpk.net/videos/dba59f07-cee5-4960-9cad-92e50189851c/horizontal/previews/clear/small.mp4?token=exp=1749465648~hmac=c51349df935f32b262cbec395120ec0040d8999c3320b971a679cfff9105d89c",
      title: "Serving Fundamentals",
      description: "Master the basics of volleyball serving technique",
      duration: "6:24",
      category: "Skills",
    },
    {
      id: "video2",
      thumbnail:
        "https://videocdn.cdnpk.net/videos/4959dcb0-7db1-4120-b6fb-f8547d888f30/horizontal/previews/clear/small.mp4?token=exp=1749465648~hmac=745ad1c9433e92860cc9cc2fc6945e88bbb733e6be04b4a118de3e21a0eef6be",
      title: "Spiking Masterclass",
      description: "Advanced attacking techniques with Coach Mike",
      duration: "9:15",
      category: "Skills",
    },
    {
      id: "video3",
      thumbnail:
        "https://videocdn.cdnpk.net/videos/847aca78-3b24-4387-bb53-041c813efcb3/horizontal/previews/clear/small.mp4?token=exp=1749465648~hmac=385d452f1b4440ffbb6d73d54b3de16bb5cb3f500c27989817fcbb29c8d7fd21",
      title: "Defensive Positioning",
      description: "Key strategies for effective court defense",
      duration: "7:42",
      category: "Strategy",
    },
    {
      id: "video4",
      thumbnail:
        "https://videocdn.cdnpk.net/videos/9678295c-e46f-4093-ab84-ddb9774f8564/horizontal/previews/clear/small.mp4?token=exp=1749465648~hmac=baff85da1b292ec8004b07768c3ea99fd00ccab543f5568c2cba7d0cf2b8182b",
      title: "Match Highlights",
      description: "Recent tournament highlights and analysis",
      duration: "5:30",
      category: "Games",
    },
    {
      id: "video5",
      thumbnail:
        "https://videocdn.cdnpk.net/videos/3814ace1-9d41-4c88-ad57-8a39dcecf93d/horizontal/previews/clear/small.mp4?token=exp=1749465862~hmac=281e9aa20a0fd814f2cae69addc6a4e19e8dd3fb7963e2f7afe60c76ca65dcb3",
      title: "Team Communication",
      description: "Building chemistry and on-court communication",
      duration: "8:18",
      category: "Team",
    },
    {
      id: "video6",
      thumbnail:
        "https://videocdn.cdnpk.net/videos/5e1d2a61-a7fe-4ecb-bb5c-5fb6ddfeb48d/horizontal/previews/clear/small.mp4?token=exp=1749465862~hmac=5ab0e0f5c997c33b3bff69ed151c684d6421fbcf0e4a79137d33c26e210f8944",
      title: "Conditioning Drills",
      description: "Volleyball-specific fitness and agility training",
      duration: "7:05",
      category: "Fitness",
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "200+ Players Trained",
      description:
        "Successfully developed skills for over 200 volleyball players",
    },
    {
      icon: <Target className="w-8 h-8 text-sky-500" />,
      title: "98% Improvement Rate",
      description: "Players show measurable improvement within 2 months",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Community Focused",
      description: "Building a strong volleyball community in London",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion Driven",
      description: "Coaches who genuinely care about player development",
    },
  ];

  const categories = [
    { id: null, name: "All" },
    { id: "training", name: "Training" },
    { id: "skills", name: "Skills" },
    { id: "team", name: "Team" },
    { id: "youth", name: "Youth" },
  ];

  const upcomingEvents = [
    {
      date: "Mar 15",
      title: "Youth Tournament",
      description: "Regional youth volleyball competition",
      type: "Competition",
    },
    {
      date: "Mar 22",
      title: "Skills Workshop",
      description: "Advanced spiking techniques masterclass",
      type: "Training",
    },
    {
      date: "Apr 5",
      title: "Open Day",
      description: "Try our programs with free taster sessions",
      type: "Event",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6 text-white">
              The <span className="text-sky-300">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-200 leading-relaxed">
              Welcome to the heart of SkySpikers. Our academy is where
              volleyball dreams take flight, skills are perfected, and champions
              are made. Explore our world-class facilities, training programs,
              and the community that makes us special.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl card-hover"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-gray-900">
                  {achievement.title}
                </h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these exciting opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </div>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Videos Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-full mb-12 bg-gray-300 max-w-md mx-auto">
              <TabsTrigger
                value="gallery"
                className="text-lg py-3 data-[state=active]:bg-sky-500 data-[state=active]:text-gray-700"
              >
                Photo Gallery
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="text-lg py-3 data-[state=active]:bg-sky-500 data-[state=active]:text-gray-700"
              >
                Training Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gallery">
              <div className="text-center mb-12">
                <div className="flex justify-center space-x-2 mb-4">
                  <Star className="w-6 h-6 text-orange-500 fill-current" />
                  <Star className="w-6 h-6 text-orange-500 fill-current" />
                  <Star className="w-6 h-6 text-orange-500 fill-current" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">
                  Passionate, Dedicated
                  <br />
                  <span className="text-sky-500">Athletes</span>
                </h2>
                <Link
                  href="https://instagram.com/skyspikers_volleyball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-sky-500 px-6 py-3 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 rounded-lg font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  @skyspikers_volleyball
                </Link>
              </div>

              {/* <div className="flex justify-center flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id || "all"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                      activeCategory === category.id
                        ? "bg-sky-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div> */}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-xl group
                  inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-100 transition-opacity
                  "
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt || "Image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        {/* <p className="text-white text-sm font-medium">{image.caption}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              {activeVideo ? (
                <div className="mb-12">
                  <div className="aspect-video relative bg-black rounded-xl overflow-hidden">
                    <video
                      src={videos.find((v) => v.id === activeVideo)?.thumbnail}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                    {/* <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
                      <span className="text-white text-sm">
                        Duration:{" "}
                        {videos.find((v) => v.id === activeVideo)?.duration}
                      </span>
                    </div> */}
                  </div>
                  <p className="text-white text-xl mt-4">
                    {videos.find((v) => v.id === activeVideo)?.title}
                  </p>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="mt-4 btn-primary"
                  >
                    ← Back to videos
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
                    >
                      <div
                        className="aspect-video relative group cursor-pointer"
                        onClick={() => setActiveVideo(video.id)}
                      >
                        <video
                          src={video.thumbnail}
                          className="w-full h-full object-cover"
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                          <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play size={30} className="text-white ml-1" />
                          </div>
                        </div>
                        {/* <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
                          <span className="text-white text-sm">
                            {video.duration}
                          </span>
                        </div> */}
                        <div className="absolute top-2 left-2 bg-sky-500 px-2 py-1 rounded">
                          <span className="text-white text-xs font-bold">
                            {video.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        {/* <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                          {video.title}
                        </h3> */}
                        {/* <p className="text-gray-600">{video.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academy Philosophy */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-8 text-sky-400">
              Our Academy Philosophy
            </h2>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              At SkySpikers Academy, we believe in developing the complete
              athlete. Our approach combines technical skill development,
              tactical understanding, physical conditioning, and mental
              resilience to create well-rounded volleyball players who excel
              both on and off the court.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-sky-400">
                  Learn
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Master fundamental skills and advanced techniques through
                  structured, progressive training methods.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-orange-400">
                  Apply
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Put skills into practice through game situations, competitive
                  matches, and real-world scenarios.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-sky-400">
                  Excel
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Develop character, leadership, and life skills that extend far
                  beyond the volleyball court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Ready to Join Our Academy?
            </h2>
            <p className="text-xl text-navy-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards volleyball excellence and become part
              of the SkySpikers family. Your journey to greatness starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs" className="btn-primary text-lg px-8 py-4">
                View Our Programs
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
