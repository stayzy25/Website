import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  ArrowLeftIcon, 
  SearchIcon, 
  FilterIcon, 
  HeartIcon, 
  MapPinIcon,
  BedIcon,
  BathIcon,
  WifiIcon,
  CarIcon,
  CheckCircleIcon,
  CreditCardIcon
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StudentFlowProps {
  onBack: () => void;
}

type StudentStep = 'register' | 'search' | 'listings' | 'booking' | 'confirmation';

export function StudentFlow({ onBack }: StudentFlowProps) {
  const [currentStep, setCurrentStep] = useState<StudentStep>('register');
  
  // Registration form state
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    university: '',
    studentId: ''
  });

  // Search filters state
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    maxPrice: '',
    duration: 'Academic Year',
    amenities: [] as string[]
  });

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    moveInDate: '',
    duration: 'Academic Year (10 months)',
    message: ''
  });

  const mockListings = [
    {
      id: 1,
      title: "Modern Studio Near University",
      location: "Downtown Campus Area",
      price: 800,
      duration: "Academic Year",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      amenities: ["WiFi", "Furnished", "Parking"],
      rating: 4.8,
      host: "Sarah Johnson",
      verified: true
    },
    {
      id: 2,
      title: "Shared House with 3 Bedrooms",
      location: "Student Quarter",
      price: 550,
      duration: "Semester",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      amenities: ["WiFi", "Kitchen", "Garden"],
      rating: 4.6,
      host: "Mike Chen",
      verified: true
    },
    {
      id: 3,
      title: "Cozy Apartment with Study Room",
      location: "Library District",
      price: 700,
      duration: "Monthly",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      amenities: ["WiFi", "Study Room", "Laundry"],
      rating: 4.9,
      host: "Emma Wilson",
      verified: true
    }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 'register':
        return (
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-center">Create Your Student Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Full Name</label>
                  <Input 
                    placeholder="Enter your full name"
                    value={registrationForm.fullName}
                    onChange={(e) => setRegistrationForm({...registrationForm, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="student@university.edu"
                    value={registrationForm.email}
                    onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">University</label>
                  <Input 
                    placeholder="Your university name"
                    value={registrationForm.university}
                    onChange={(e) => setRegistrationForm({...registrationForm, university: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Student ID</label>
                  <Input 
                    placeholder="Student identification number"
                    value={registrationForm.studentId}
                    onChange={(e) => setRegistrationForm({...registrationForm, studentId: e.target.value})}
                  />
                </div>
                <Button className="w-full" onClick={() => setCurrentStep('search')}>
                  Create Profile & Continue
                </Button>
              </div>
            </Card>
          </div>
        );

      case 'search':
        return (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-center">Find Your Perfect Accommodation</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2">Location</label>
                  <Input 
                    placeholder="City or university area"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Max Budget (monthly)</label>
                  <Input 
                    placeholder="$800"
                    value={searchFilters.maxPrice}
                    onChange={(e) => setSearchFilters({...searchFilters, maxPrice: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Duration</label>
                  <select 
                    className="w-full border rounded-md px-3 py-2 bg-input-background"
                    value={searchFilters.duration}
                    onChange={(e) => setSearchFilters({...searchFilters, duration: e.target.value})}
                  >
                    <option>Academic Year</option>
                    <option>Semester</option>
                    <option>Monthly</option>
                    <option>Summer</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">Amenities</label>
                  <div className="flex gap-2 flex-wrap">
                    {['WiFi', 'Furnished', 'Parking', 'Kitchen', 'Laundry'].map(amenity => (
                      <Badge 
                        key={amenity}
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => {
                          const newAmenities = searchFilters.amenities.includes(amenity)
                            ? searchFilters.amenities.filter(a => a !== amenity)
                            : [...searchFilters.amenities, amenity];
                          setSearchFilters({...searchFilters, amenities: newAmenities});
                        }}
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full" onClick={() => setCurrentStep('listings')}>
                <SearchIcon className="mr-2 h-4 w-4" />
                Search Accommodations
              </Button>
            </Card>
          </div>
        );

      case 'listings':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Available Accommodations</h2>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockListings.map(listing => (
                <Card key={listing.id} className="overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback 
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <HeartIcon className="h-4 w-4" />
                    </Button>
                    {listing.verified && (
                      <Badge className="absolute top-2 left-2 bg-green-600">
                        <CheckCircleIcon className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="mb-2">{listing.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {listing.location}
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg">${listing.price}/month</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-1">★</span>
                        <span className="text-sm">{listing.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {listing.amenities.map(amenity => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-3">
                      Host: {listing.host}
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={() => setCurrentStep('booking')}
                    >
                      Book Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'booking':
        return (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-center">Booking Request</h2>
              
              <div className="bg-muted/30 p-4 rounded-lg mb-6">
                <h3 className="mb-2">Selected Property</h3>
                <p>Modern Studio Near University</p>
                <p className="text-muted-foreground">Downtown Campus Area • $800/month</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Move-in Date</label>
                    <Input 
                      type="date"
                      value={bookingForm.moveInDate}
                      onChange={(e) => setBookingForm({...bookingForm, moveInDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Stay Duration</label>
                    <select 
                      className="w-full border rounded-md px-3 py-2 bg-input-background"
                      value={bookingForm.duration}
                      onChange={(e) => setBookingForm({...bookingForm, duration: e.target.value})}
                    >
                      <option>Academic Year (10 months)</option>
                      <option>Semester (5 months)</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Additional Message</label>
                  <textarea 
                    className="w-full border rounded-md px-3 py-2 bg-input-background h-24"
                    placeholder="Tell the host about yourself..."
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Monthly Rent:</span>
                  <span>$800</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Security Deposit:</span>
                  <span>$800</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Platform Fee:</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between font-medium text-lg border-t pt-2">
                  <span>Total Due Today:</span>
                  <span>$1,650</span>
                </div>
              </div>
              
              <Button className="w-full" onClick={() => setCurrentStep('confirmation')}>
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Submit Booking Request
              </Button>
            </Card>
          </div>
        );

      case 'confirmation':
        return (
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8">
              <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl mb-4">Booking Request Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Your booking request has been sent to the host. You'll receive a confirmation email once they respond.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-lg mb-6 text-left">
                <h3 className="mb-2">Next Steps:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Host will review your profile</li>
                  <li>• You'll receive a response within 24 hours</li>
                  <li>• Payment will be processed upon acceptance</li>
                  <li>• Move-in instructions will be provided</li>
                </ul>
              </div>
              
              <Button className="w-full" onClick={onBack}>
                Return to Home
              </Button>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl">Stayzy</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Student Journey
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4">
            {[
              { key: 'register', label: 'Register' },
              { key: 'search', label: 'Search' },
              { key: 'listings', label: 'Browse' },
              { key: 'booking', label: 'Book' },
              { key: 'confirmation', label: 'Confirm' }
            ].map((step, index) => (
              <div key={step.key} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === step.key ? 'bg-primary text-primary-foreground' :
                  ['register', 'search', 'listings', 'booking', 'confirmation'].indexOf(currentStep) > index ? 'bg-green-600 text-white' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {['register', 'search', 'listings', 'booking', 'confirmation'].indexOf(currentStep) > index ? '✓' : index + 1}
                </div>
                <span className={`ml-2 text-sm ${currentStep === step.key ? '' : 'text-muted-foreground'}`}>
                  {step.label}
                </span>
                {index < 4 && <div className="w-8 h-px bg-border mx-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {renderStepContent()}
      </div>
    </div>
  );
}