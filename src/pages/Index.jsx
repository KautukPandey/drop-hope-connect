
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Target, Globe, TrendingUp, Calendar, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const stats = [
    { icon: Heart, label: "Lives Impacted", value: "50,000+" },
    { icon: Users, label: "Active NGOs", value: "250+" },
    { icon: Target, label: "Success Rate", value: "94%" },
    { icon: Globe, label: "Countries", value: "15" },
  ];

  const featuredCampaigns = [
    {
      id: 1,
      title: "Clean Water for Rural Communities",
      organization: "WaterHope Foundation",
      description: "Providing clean, safe drinking water to underserved rural communities through sustainable well construction.",
      raised: 75000,
      goal: 100000,
      donors: 342,
      daysLeft: 12,
      image: "https://images.unsplash.com/photo-1594736797933-d0b22e3bb93b?w=500&h=300&fit=crop",
      category: "Water & Sanitation",
      rating: 4.8
    },
    {
      id: 2,
      title: "Education for Every Child",
      organization: "Global Education Alliance",
      description: "Building schools and providing educational resources to ensure every child has access to quality education.",
      raised: 45000,
      goal: 80000,
      donors: 198,
      daysLeft: 25,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop",
      category: "Education",
      rating: 4.9
    },
    {
      id: 3,
      title: "Emergency Food Relief",
      organization: "Hunger Relief Network",
      description: "Providing immediate food assistance to families affected by natural disasters and economic hardship.",
      raised: 32000,
      goal: 50000,
      donors: 156,
      daysLeft: 8,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
      category: "Food Security",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Heart className="text-white" size={32} />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Every Drop of Hope
            <span className="text-blue-600"> Matters</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect your generosity with verified NGOs making real impact. 
            Together, we're creating ripples of change that transform communities worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              <Link to="/donate">Start Giving Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/campaigns">Explore Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <stat.icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            We believe in the power of collective action. DropHope bridges the gap between 
            generous hearts and meaningful causes, ensuring every donation creates maximum impact 
            through transparency, trust, and technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-blue-100">Track every donation and see real impact through detailed reporting</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-blue-100">Connect with like-minded donors and verified NGOs worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-blue-100">Every donation is optimized for maximum social impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
            <p className="text-xl text-gray-600">
              Discover urgent causes that need your support right now
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {campaign.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{campaign.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {campaign.daysLeft} days left
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{campaign.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-2">{campaign.organization}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{campaign.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Raised: ${campaign.raised.toLocaleString()}</span>
                        <span>Goal: ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {campaign.donors} donors
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {Math.round((campaign.raised / campaign.goal) * 100)}% funded
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Donate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of donors who are already creating positive change in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
