import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  HomeIcon, 
  UserCheckIcon, 
  SearchIcon, 
  StarIcon,
  ShieldCheckIcon,
  CreditCardIcon 
} from 'lucide-react';

interface LandingPageProps {
  onStudentPath: () => void;
  onHostPath: () => void;
}

export function LandingPage({ onStudentPath, onHostPath }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Stayzy</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onStudentPath}>
              Find Accommodation
            </Button>
            <Button onClick={onHostPath}>
              List Property
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl mb-6 max-w-4xl mx-auto leading-tight">
            Find Your Perfect Student Accommodation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connecting students with verified, affordable housing and property owners with reliable tenants.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="flex-1" onClick={onStudentPath}>
              <SearchIcon className="mr-2 h-5 w-5" />
              I'm a Student
            </Button>
            <Button size="lg" variant="outline" className="flex-1" onClick={onHostPath}>
              <HomeIcon className="mr-2 h-5 w-5" />
              I'm a Host
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl text-center mb-16">How Stayzy Works</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Student Journey */}
            <div>
              <h4 className="text-2xl mb-8 text-center">For Students</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h5>Register & Search</h5>
                    <p className="text-muted-foreground">Create your profile and search for accommodation with filters for price, location, and amenities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h5>View Verified Listings</h5>
                    <p className="text-muted-foreground">Browse through verified properties with detailed photos and host information.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h5>Book Securely</h5>
                    <p className="text-muted-foreground">Submit booking requests and pay securely through our platform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <div>
                    <h5>Move In & Review</h5>
                    <p className="text-muted-foreground">Enjoy your stay and leave reviews to help future students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Host Journey */}
            <div>
              <h4 className="text-2xl mb-8 text-center">For Property Owners</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h5>Register & List</h5>
                    <p className="text-muted-foreground">Create your host profile and submit your property for listing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h5>Get Verified</h5>
                    <p className="text-muted-foreground">Our team verifies your identity and property details for safety.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h5>Receive Bookings</h5>
                    <p className="text-muted-foreground">Review student profiles and accept booking requests.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <div>
                    <h5>Manage & Earn</h5>
                    <p className="text-muted-foreground">Host students and receive payments through our secure platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl text-center mb-16">Platform Features</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Verification System</h4>
              <p className="text-muted-foreground">All hosts and properties are verified for safety and authenticity.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <SearchIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Smart Matching</h4>
              <p className="text-muted-foreground">Advanced algorithms to match students with perfect accommodations.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <CreditCardIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Secure Payments</h4>
              <p className="text-muted-foreground">Safe and secure payment processing with buyer protection.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <StarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Two-Way Reviews</h4>
              <p className="text-muted-foreground">Both students and hosts can review each other for transparency.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <UserCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Profile Verification</h4>
              <p className="text-muted-foreground">Verified student and host profiles for added security.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <HomeIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Quality Listings</h4>
              <p className="text-muted-foreground">Curated, high-quality accommodation options for students.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of students and property owners who trust Stayzy for their accommodation needs.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="flex-1" onClick={onStudentPath}>
              Find Accommodation
            </Button>
            <Button size="lg" variant="outline" className="flex-1" onClick={onHostPath}>
              List Your Property
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HomeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl">Stayzy</span>
          </div>
          <p className="text-muted-foreground">
            Connecting students with perfect accommodation since 2024
          </p>
        </div>
      </footer>
    </div>
  );
}