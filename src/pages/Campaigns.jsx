
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Star,
  TrendingUp,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const campaigns = [
    {
      id: 1,
      title: "Clean Water for Rural Communities",
      organization: "WaterHope Foundation",
      description: "Providing clean, safe drinking water to underserved rural communities through sustainable well construction and water purification systems.",
      raised: 75000,
      goal: 100000,
      donors: 342,
      daysLeft: 12,
      image: "https://images.unsplash.com/photo-1594736797933-d0b22e3bb93b?w=500&h=300&fit=crop",
      category: "Water & Sanitation",
      location: "Kenya, East Africa",
      rating: 4.8,
      verified: true,
      urgent: true
    },
    {
      id: 2,
      title: "Education for Every Child",
      organization: "Global Education Alliance",
      description: "Building schools and providing educational resources to ensure every child has access to quality education regardless of their economic background.",
      raised: 45000,
      goal: 80000,
      donors: 198,
      daysLeft: 25,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop",
      category: "Education",
      location: "Guatemala, Central America",
      rating: 4.9,
      verified: true,
      urgent: false
    },
    {
      id: 3,
      title: "Emergency Food Relief",
      organization: "Hunger Relief Network",
      description: "Providing immediate food assistance to families affected by natural disasters and economic hardship in vulnerable communities.",
      raised: 32000,
      goal: 50000,
      donors: 156,
      daysLeft: 8,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
      category: "Food Security",
      location: "Bangladesh, South Asia",
      rating: 4.7,
      verified: true,
      urgent: true
    },
    {
      id: 4,
      title: "Medical Care for Remote Villages",
      organization: "Health Frontier Initiative",
      description: "Establishing mobile health clinics and training local healthcare workers to serve remote communities with limited medical access.",
      raised: 18500,
      goal: 65000,
      donors: 89,
      daysLeft: 45,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      category: "Healthcare",
      location: "Peru, South America",
      rating: 4.6,
      verified: true,
      urgent: false
    },
    {
      id: 5,
      title: "Disaster Relief Housing",
      organization: "Shelter Now Foundation",
      description: "Building temporary and permanent housing solutions for families displaced by recent earthquakes and natural disasters.",
      raised: 92000,
      goal: 120000,
      donors: 423,
      daysLeft: 18,
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959a?w=500&h=300&fit=crop",
      category: "Disaster Relief",
      location: "Turkey, Middle East",
      rating: 4.8,
      verified: true,
      urgent: true
    },
    {
      id: 6,
      title: "Environmental Conservation Project",
      organization: "Green Earth Collective",
      description: "Protecting endangered forests and wildlife through community-based conservation programs and sustainable development initiatives.",
      raised: 28000,
      goal: 75000,
      donors: 167,
      daysLeft: 32,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      category: "Environment",
      location: "Brazil, Amazon Region",
      rating: 4.5,
      verified: true,
      urgent: false
    }
  ];

  const categories = [
    "All Categories",
    "Water & Sanitation",
    "Education",
    "Food Security",
    "Healthcare",
    "Disaster Relief",
    "Environment"
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           campaign.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case "urgent":
        return b.urgent - a.urgent || a.daysLeft - b.daysLeft;
      case "funded":
        return (b.raised / b.goal) - (a.raised / a.goal);
      case "goal":
        return b.goal - a.goal;
      default:
        return b.id - a.id; // Most recent first
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Active Campaigns</h1>
          <p className="text-xl text-gray-600">
            Discover meaningful causes and make a direct impact on communities worldwide.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search campaigns, organizations, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="urgent">Most Urgent</SelectItem>
                  <SelectItem value="funded">Best Funded</SelectItem>
                  <SelectItem value="goal">Highest Goal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{sortedCampaigns.length}</div>
              <div className="text-sm text-gray-600">Active Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {sortedCampaigns.filter(c => c.urgent).length}
              </div>
              <div className="text-sm text-gray-600">Urgent Needs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                ${sortedCampaigns.reduce((sum, c) => sum + c.raised, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Raised</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {sortedCampaigns.reduce((sum, c) => sum + c.donors, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Donors</div>
            </div>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600 text-white">
                    {campaign.category}
                  </Badge>
                  {campaign.urgent && (
                    <Badge variant="destructive" className="flex items-center gap-1">
                      <Clock size={12} />
                      Urgent
                    </Badge>
                  )}
                </div>
                {campaign.verified && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      ✓ Verified
                    </Badge>
                  </div>
                )}
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
                
                <CardTitle className="text-xl mb-2 line-clamp-2">{campaign.title}</CardTitle>
                <p className="text-gray-600 text-sm mb-2 font-medium">{campaign.organization}</p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {campaign.location}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{campaign.description}</p>
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
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Donate Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedCampaigns.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or removing some filters.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Campaigns;
