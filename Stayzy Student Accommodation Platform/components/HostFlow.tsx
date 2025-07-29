import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  ArrowLeftIcon, 
  PlusIcon, 
  HomeIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  CreditCardIcon,
  StarIcon,
  MessageSquareIcon,
  UploadIcon
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HostFlowProps {
  onBack: () => void;
}

type HostStep = 'register' | 'list-property' | 'verification' | 'manage-bookings' | 'reviews';

export function HostFlow({ onBack }: HostFlowProps) {
  const [currentStep, setCurrentStep] = useState<HostStep>('register');

  // Registration form state
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  // Property listing form state
  const [propertyForm, setPropertyForm] = useState({
    title: '',
    type: 'Studio Apartment',
    rent: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    description: '',
    amenities: [] as string[]
  });

  // Review form state
  const [reviewForm, setReviewForm] = useState({
    overallRating: 5,
    cleanlinessRating: 5,
    communicationRating: 5,
    hostAgain: 'yes',
    writtenReview: ''
  });

  const mockBookings = [
    {
      id: 1,
      student: "Alex Thompson",
      property: "Modern Studio Near University",
      moveIn: "Sept 1, 2024",
      duration: "Academic Year",
      amount: "$8,000",
      status: "pending",
      studentRating: 4.8,
      studentReviews: 12
    },
    {
      id: 2,
      student: "Maria Garcia",
      property: "Modern Studio Near University",
      moveIn: "Aug 15, 2024",
      duration: "Semester",
      amount: "$4,000",
      status: "confirmed",
      studentRating: 4.9,
      studentReviews: 8
    },
    {
      id: 3,
      student: "John Kim",
      property: "Modern Studio Near University",
      moveIn: "July 1, 2024",
      duration: "Summer",
      amount: "$2,400",
      status: "completed",
      studentRating: 4.7,
      studentReviews: 15
    }
  ];

  const toggleAmenity = (amenity: string) => {
    const newAmenities = propertyForm.amenities.includes(amenity)
      ? propertyForm.amenities.filter(a => a !== amenity)
      : [...propertyForm.amenities, amenity];
    setPropertyForm({...propertyForm, amenities: newAmenities});
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'register':
        return (
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-center">Create Your Host Profile</h2>
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
                    placeholder="host@email.com"
                    value={registrationForm.email}
                    onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Phone Number</label>
                  <Input 
                    placeholder="Your contact number"
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Address</label>
                  <Input 
                    placeholder="Your address"
                    value={registrationForm.address}
                    onChange={(e) => setRegistrationForm({...registrationForm, address: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Government ID</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload government-issued ID</p>
                  </div>
                </div>
                <Button className="w-full" onClick={() => setCurrentStep('list-property')}>
                  Create Profile & Continue
                </Button>
              </div>
            </Card>
          </div>
        );

      case 'list-property':
        return (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-center">List Your Property</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Property Title</label>
                  <Input 
                    placeholder="e.g. Modern Studio Near University"
                    value={propertyForm.title}
                    onChange={(e) => setPropertyForm({...propertyForm, title: e.target.value})}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Property Type</label>
                    <select 
                      className="w-full border rounded-md px-3 py-2 bg-input-background"
                      value={propertyForm.type}
                      onChange={(e) => setPropertyForm({...propertyForm, type: e.target.value})}
                    >
                      <option>Studio Apartment</option>
                      <option>1 Bedroom Apartment</option>
                      <option>Shared House</option>
                      <option>Private Room</option>
                      <option>Dorm Room</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Monthly Rent ($)</label>
                    <Input 
                      placeholder="800"
                      value={propertyForm.rent}
                      onChange={(e) => setPropertyForm({...propertyForm, rent: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Address</label>
                  <Input 
                    placeholder="Property address"
                    value={propertyForm.address}
                    onChange={(e) => setPropertyForm({...propertyForm, address: e.target.value})}
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2">Bedrooms</label>
                    <Input 
                      placeholder="1"
                      value={propertyForm.bedrooms}
                      onChange={(e) => setPropertyForm({...propertyForm, bedrooms: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Bathrooms</label>
                    <Input 
                      placeholder="1"
                      value={propertyForm.bathrooms}
                      onChange={(e) => setPropertyForm({...propertyForm, bathrooms: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Square Feet</label>
                    <Input 
                      placeholder="500"
                      value={propertyForm.squareFeet}
                      onChange={(e) => setPropertyForm({...propertyForm, squareFeet: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Amenities</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['WiFi', 'Furnished', 'Parking', 'Kitchen', 'Laundry', 'A/C', 'Heating', 'Study Room'].map(amenity => (
                      <label key={amenity} className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          className="rounded"
                          checked={propertyForm.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                        />
                        <span className="text-sm">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Property Description</label>
                  <textarea 
                    className="w-full border rounded-md px-3 py-2 bg-input-background h-24"
                    placeholder="Describe your property, neighborhood, and what makes it special for students..."
                    value={propertyForm.description}
                    onChange={(e) => setPropertyForm({...propertyForm, description: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Property Photos</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">Upload property photos</p>
                    <p className="text-sm text-muted-foreground">Min 5 photos, max 20. High quality images get more bookings!</p>
                  </div>
                </div>
                
                <Button className="w-full" onClick={() => setCurrentStep('verification')}>
                  Submit Property for Verification
                </Button>
              </div>
            </Card>
          </div>
        );

      case 'verification':
        return (
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8">
              <ClockIcon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl mb-4">Verification in Progress</h2>
              <p className="text-muted-foreground mb-6">
                Our team is reviewing your property and documents. This typically takes 24-48 hours.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-lg mb-6 text-left">
                <h3 className="mb-2">Verification Checklist:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-600" />
                    <span>Identity verification completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-600" />
                    <span>Property photos uploaded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-orange-500" />
                    <span>Property details review pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-orange-500" />
                    <span>Legal compliance check pending</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                Once verified, your property will go live and you can start receiving booking requests!
              </p>
              
              <Button className="w-full" onClick={() => setCurrentStep('manage-bookings')}>
                Simulate: Property Approved
              </Button>
            </Card>
          </div>
        );

      case 'manage-bookings':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Manage Bookings</h2>
              <div className="flex gap-2">
                <Badge variant="outline">3 Properties Listed</Badge>
                <Badge className="bg-green-600">Active</Badge>
              </div>
            </div>
            
            <div className="grid gap-6">
              {mockBookings.map(booking => (
                <Card key={booking.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <UserIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">{booking.student}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{booking.studentRating} ({booking.studentReviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge 
                      className={
                        booking.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }
                    >
                      {booking.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Property:</span>
                      <p>{booking.property}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Move-in:</span>
                      <p>{booking.moveIn}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p>{booking.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Amount:</span>
                      <p className="font-medium">{booking.amount}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {booking.status === 'pending' && (
                      <>
                        <Button size="sm">Accept Booking</Button>
                        <Button size="sm" variant="outline">Decline</Button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <>
                        <Button size="sm" variant="outline">
                          <MessageSquareIcon className="mr-2 h-4 w-4" />
                          Message Student
                        </Button>
                        <Button size="sm" variant="outline">View Details</Button>
                      </>
                    )}
                    {booking.status === 'completed' && (
                      <Button size="sm" variant="outline" onClick={() => setCurrentStep('reviews')}>
                        Leave Review
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 mt-6">
              <h3 className="mb-4">Earnings Summary</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="text-2xl font-medium">$14,400</p>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">$1,200</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">18</p>
                  <p className="text-sm text-muted-foreground">Total Bookings</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">4.8</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'reviews':
        return (
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-center">Leave Review for John Kim</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Overall Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <StarIcon 
                        key={star} 
                        className={`h-8 w-8 cursor-pointer ${
                          star <= reviewForm.overallRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setReviewForm({...reviewForm, overallRating: star})}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Cleanliness</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <StarIcon 
                        key={star} 
                        className={`h-6 w-6 cursor-pointer ${
                          star <= reviewForm.cleanlinessRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setReviewForm({...reviewForm, cleanlinessRating: star})}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Communication</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <StarIcon 
                        key={star} 
                        className={`h-6 w-6 cursor-pointer ${
                          star <= reviewForm.communicationRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setReviewForm({...reviewForm, communicationRating: star})}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Would you host again?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="host-again" 
                        value="yes"
                        checked={reviewForm.hostAgain === 'yes'}
                        onChange={(e) => setReviewForm({...reviewForm, hostAgain: e.target.value})}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="host-again" 
                        value="no"
                        checked={reviewForm.hostAgain === 'no'}
                        onChange={(e) => setReviewForm({...reviewForm, hostAgain: e.target.value})}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2">Written Review</label>
                  <textarea 
                    className="w-full border rounded-md px-3 py-2 bg-input-background h-24"
                    placeholder="Share your experience hosting this student..."
                    value={reviewForm.writtenReview}
                    onChange={(e) => setReviewForm({...reviewForm, writtenReview: e.target.value})}
                  />
                </div>
                
                <Button className="w-full">
                  Submit Review
                </Button>
              </div>
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
            Host Dashboard
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-6">
            {[
              { key: 'register', label: 'Profile' },
              { key: 'list-property', label: 'List Property' },
              { key: 'verification', label: 'Verification' },
              { key: 'manage-bookings', label: 'Bookings' },
              { key: 'reviews', label: 'Reviews' }
            ].map((step) => (
              <button
                key={step.key}
                onClick={() => setCurrentStep(step.key as HostStep)}
                className={`text-sm py-2 px-1 border-b-2 transition-colors ${
                  currentStep === step.key 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {step.label}
              </button>
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