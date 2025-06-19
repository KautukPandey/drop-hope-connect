
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedUrgency, setSelectedUrgency] = useState("all");

  const campaigns = [
    {
      id: 1,
      title: "Winter Clothing Drive",
      organization: "Hope Foundation",
      description: "Help provide warm clothing for homeless individuals this winter season.",
      target: "500 items",
      collected: "342 items",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "clothing",
      urgency: "high",
      location: "Delhi",
      daysLeft: 12
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
      urgency: "medium",
      location: "Mumbai",
      daysLeft: 25
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
      urgency: "low",
      location: "Bangalore",
      daysLeft: 45
    },
    {
      id: 4,
      title: "Medical Equipment Drive",
      organization: "Health First Foundation",
      description: "Collecting medical supplies for rural healthcare centers.",
      target: "100 kits",
      collected: "67 kits",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
      category: "medical",
      urgency: "high",
      location: "Chennai",
      daysLeft: 8
    },
    {
      id: 5,
      title: "School Supplies Collection",
      organization: "Education for All",
      description: "Providing essential school supplies to underprivileged children.",
      target: "500 sets",
      collected: "289 sets",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400",
      category: "education",
      urgency: "medium",
      location: "Kolkata",
      daysLeft: 20
    },
    {
      id: 6,
      title: "Elder Care Essentials",
      organization: "Senior Support Network",
      description: "Supporting elderly community members with daily essentials.",
      target: "200 care packages",
      collected: "134 packages",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "eldercare",
      urgency: "low",
      location: "Pune",
      daysLeft: 30
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || campaign.category === selectedCategory;
    const matchesUrgency = selectedUrgency === "all" || campaign.urgency === selectedUrgency;
    
    return matchesSearch && matchesCategory && matchesUrgency;
  });

  const getProgressPercentage = (collected: string, target: string) => {
    const collectedNum = parseInt(collected);
    const targetNum = parseInt(target);
    return Math.round((collectedNum / targetNum) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Active Campaigns
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover meaningful ways to make a difference. Join these campaigns and help create positive change in communities across the country.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search campaigns or organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="eldercare">Elder Care</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedUrgency} onValueChange={setSelectedUrgency}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Urgency</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {filteredCampaigns.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={campaign.image} 
                      alt={campaign.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      campaign.urgency === 'high' ? 'bg-red-500 text-white' :
                      campaign.urgency === 'medium' ? 'bg-yellow-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {campaign.urgency.toUpperCase()}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {campaign.location}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                        {campaign.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {campaign.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Users size={14} className="mr-1" />
                      {campaign.organization}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {campaign.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{getProgressPercentage(campaign.collected, campaign.target)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${getProgressPercentage(campaign.collected, campaign.target)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{campaign.collected}</span>
                        <span>{campaign.target}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                      <Heart size={16} className="mr-2" />
                      Donate Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Campaigns;
