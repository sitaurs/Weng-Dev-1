import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe, Linkedin, Calendar, Award, Briefcase, GraduateCap, Star, Edit3, Plus, ExternalLink } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock data - dalam implementasi nyata, ini akan diambil dari API
  const profileData = {
    name: 'Alexandria Putri',
    title: 'Product Designer',
    location: 'Jakarta, Indonesia',
    email: 'alex@example.com',
    phone: '+62 812 3456 7890',
    website: 'https://alexandria.dev',
    linkedin: 'https://linkedin.com/in/alexandria-putri',
    joinDate: 'Bergabung Maret 2023',
    bio: 'Product Designer dengan 4+ tahun pengalaman di fintech dan edtech. Passionate tentang menciptakan pengalaman digital yang bermakna dan user-centered. Suka berkolaborasi dengan tim lintas fungsi untuk menghadirkan solusi inovatif.',
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'Figma', level: 90 },
      { name: 'Design Systems', level: 85 },
      { name: 'User Research', level: 80 },
      { name: 'Prototyping', level: 88 },
      { name: 'Usability Testing', level: 75 }
    ],
    experience: [
      {
        title: 'Senior Product Designer',
        company: 'FinPay Indonesia',
        period: '2021 - Sekarang',
        description: 'Memimpin desain produk untuk aplikasi fintech dengan 2M+ pengguna aktif. Meningkatkan conversion rate sebesar 35% melalui redesign user onboarding.',
        achievements: ['Redesign complete user journey', 'Meningkatkan user retention 40%', 'Membangun design system dari nol']
      },
      {
        title: 'Product Designer',
        company: 'EduWave',
        period: '2019 - 2021',
        description: 'Merancang pengalaman pembelajaran digital untuk platform edtech. Berkolaborasi dengan tim product dan engineering untuk menghadirkan fitur-fitur inovatif.',
        achievements: ['Desain 15+ fitur pembelajaran', 'User satisfaction score 4.8/5', 'Kolaborasi dengan 3 tim product']
      }
    ],
    education: [
      {
        degree: 'S1 Desain Komunikasi Visual',
        school: 'Universitas Nusantara',
        period: '2015 - 2019',
        description: 'Fokus pada digital design dan user experience. Thesis tentang "Pengaruh Micro-interactions terhadap User Engagement".'
      }
    ],
    certifications: [
      { name: 'Google UX Design Certificate', issuer: 'Google', year: '2023' },
      { name: 'Certified Usability Analyst', issuer: 'HFI', year: '2022' },
      { name: 'Design Thinking Certification', issuer: 'IDEO', year: '2021' }
    ],
    portfolio: [
      {
        title: 'FinPay Mobile App Redesign',
        description: 'Complete redesign of mobile banking app with focus on accessibility and user experience',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        tags: ['Mobile Design', 'Fintech', 'UX Research']
      },
      {
        title: 'EduWave Learning Platform',
        description: 'Design system and user interface for online learning platform',
        image: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        tags: ['Web Design', 'Design System', 'EdTech']
      },
      {
        title: 'Smart City Dashboard',
        description: 'Data visualization dashboard for smart city management system',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        tags: ['Dashboard', 'Data Viz', 'B2B']
      }
    ],
    stats: {
      projectsCompleted: 47,
      yearsExperience: 4,
      clientsSatisfied: 23,
      awardsWon: 3
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Profile */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                AP
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                  <p className="text-xl text-purple-600 font-semibold mb-2">{profileData.title}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={18} className="mr-2" />
                    {profileData.location}
                  </div>
                  <p className="text-sm text-gray-500">{profileData.joinDate}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Edit3 size={18} />
                  Edit Profil
                </button>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{profileData.bio}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail size={16} />
                  {profileData.email}
                </a>
                <a href={`tel:${profileData.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Phone size={16} />
                  {profileData.phone}
                </a>
                <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Globe size={16} />
                  Website
                  <ExternalLink size={14} />
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin size={16} />
                  LinkedIn
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Proyek Selesai', value: profileData.stats.projectsCompleted, icon: Briefcase },
            { label: 'Tahun Pengalaman', value: profileData.stats.yearsExperience, icon: Calendar },
            { label: 'Klien Puas', value: profileData.stats.clientsSatisfied, icon: Star },
            { label: 'Penghargaan', value: profileData.stats.awardsWon, icon: Award }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-purple-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Briefcase size={24} className="text-purple-600" />
                  Pengalaman Kerja
                </h2>
                <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  <Plus size={18} />
                  Tambah
                </button>
              </div>
              
              <div className="space-y-6">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-purple-200 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                    <p className="text-gray-700 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <GraduateCap size={24} className="text-purple-600" />
                  Pendidikan
                </h2>
                <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  <Plus size={18} />
                  Tambah
                </button>
              </div>
              
              <div className="space-y-4">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-purple-600 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Portfolio</h2>
                <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  <Plus size={18} />
                  Tambah
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {profileData.portfolio.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Keahlian</h2>
                <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  <Plus size={18} />
                  Tambah
                </button>
              </div>
              
              <div className="space-y-4">
                {profileData.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Award size={24} className="text-purple-600" />
                  Sertifikasi
                </h2>
                <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  <Plus size={18} />
                  Tambah
                </button>
              </div>
              
              <div className="space-y-4">
                {profileData.certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-200 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-purple-600 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;