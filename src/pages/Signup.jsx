
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, User, Users, Building, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const Signup = () => {
  const [userType, setUserType] = useState("user");
  const [formData, setFormData] = useState({
    // Common fields
    email: "",
    password: "",
    confirmPassword: "",
    
    // Individual user fields
    firstName: "",
    lastName: "",
    phone: "",
    
    // NGO fields
    orgName: "",
    regNumber: "",
    description: "",
    address: "",
    website: "",
    contactPerson: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    console.log("Signup attempt:", { userType, ...formData });
    // TODO: Implement signup logic with Supabase
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      <div className="flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Heart className="text-white" size={24} />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Join DropHope
            </CardTitle>
            <p className="text-gray-600">Start your journey of making a difference</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* User Type Selection */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={userType === "user" ? "default" : "outline"}
                onClick={() => setUserType("user")}
                className="flex items-center space-x-2"
              >
                <User size={16} />
                <span>Individual</span>
              </Button>
              <Button
                type="button"
                variant={userType === "ngo" ? "default" : "outline"}
                onClick={() => setUserType("ngo")}
                className="flex items-center space-x-2"
              >
                <Users size={16} />
                <span>NGO</span>
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {userType === "user" ? (
                // Individual User Form
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </>
              ) : (
                // NGO Form
                <>
                  <div>
                    <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Name
                    </label>
                    <Input
                      id="orgName"
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleInputChange}
                      placeholder="Name of your NGO"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Registration Number
                      </label>
                      <Input
                        id="regNumber"
                        name="regNumber"
                        value={formData.regNumber}
                        onChange={handleInputChange}
                        placeholder="Official registration number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person
                      </label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Primary contact name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Description
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Brief description of your organization's mission and activities"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Complete address of your organization"
                      rows={2}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website (Optional)
                    </label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://your-ngo-website.com"
                    />
                  </div>
                </>
              )}

              {/* Common Fields */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Create {userType === "user" ? "Individual" : "NGO"} Account
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
