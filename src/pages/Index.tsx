
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  const featuredCampaigns = [
    {
      id: 1,
      title: "Winter Clothing Drive",
      organization: "Hope Foundation",
      description: "Help provide warm clothing for homeless individuals this winter season.",
      target: "500 items",
      collected: "342 items",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "clothing",
      urgency: "high"
    },
    {
      id: 2,
      title: "Food for Families",
      organization: "Community Kitchen",
      description: "Supporting local families with nutritious meals and groceries.",
      target: "1000 meals",
      collected: "756 meals",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
      category: "food",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Books for Education",
      organization: "Learn Together NGO",
      description: "Building libraries in rural schools to enhance children's education.",
      target: "2000 books",
      collected: "1234 books",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400",
      category: "education",
      urgency: "low"
    }
  ];

  const stats = [
    { icon: Heart, label: "Total Donations", value: "25,000+" },
    { icon: Users, label: "Active NGOs", value: "150+" },
    { icon: BookOpen, label: "Lives Impacted", value: "50,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Drop Hope, Spread
            <span className="text-blue-600"> Kindness</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect your generosity with those in need. Donate food, clothes, books, and more 
            directly to verified NGOs and communities across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/donate">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Donating
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Join as NGO
              </Button>
            </Link>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-blue-400" size={32} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            At DropHope, we believe that every act of kindness creates a ripple effect. 
            Our platform makes it simple and secure for generous individuals to connect 
            with verified NGOs and communities, ensuring your donations reach those who 
            need them most. Together, we're building a more compassionate world.
          </p>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Campaigns
            </h2>
            <p className="text-xl text-gray-600">
              Join these urgent campaigns and make an immediate impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
                    campaign.urgency === 'high' ? 'bg-red-500 text-white' :
                    campaign.urgency === 'medium' ? 'bg-yellow-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {campaign.urgency.toUpperCase()}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-blue-600 mb-3">{campaign.organization}</p>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{campaign.collected} / {campaign.target}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(parseInt(campaign.collected) / parseInt(campaign.target)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/campaigns">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
