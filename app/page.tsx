"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  Zap, 
  Brain, 
  Target, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Star,
  Users,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// Testimonial data
const testimonials = [
  { name: "Sarah Chen", company: "TechCorp", quote: "InzAutomation transformed our analytics workflow completely.", avatar: "SC" },
  { name: "Michael Rodriguez", company: "DataFlow", quote: "The AI insights are incredibly accurate and actionable.", avatar: "MR" },
  { name: "Emily Johnson", company: "CloudScale", quote: "Our sales increased by 300% after implementing this platform.", avatar: "EJ" },
  { name: "David Kim", company: "InnovateLab", quote: "The automation features save us hours every day.", avatar: "DK" },
  { name: "Lisa Wang", company: "FutureTech", quote: "Best analytics platform we've ever used.", avatar: "LW" },
  { name: "James Wilson", company: "NextGen", quote: "The AI predictions are spot-on every time.", avatar: "JW" },
  { name: "Anna Martinez", company: "ScaleUp", quote: "Incredible ROI from day one.", avatar: "AM" },
  { name: "Robert Taylor", company: "DataDriven", quote: "The interface is intuitive and powerful.", avatar: "RT" },
  { name: "Jennifer Lee", company: "AI Solutions", quote: "Revolutionary approach to business analytics.", avatar: "JL" },
  { name: "Christopher Brown", company: "SmartBiz", quote: "Game-changing platform for our business.", avatar: "CB" },
];

// Features data
const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your website performance with AI-powered analytics that predict trends and identify opportunities."
  },
  {
    icon: Brain,
    title: "AI-Driven Insights",
    description: "Leverage machine learning to understand customer behavior and optimize your sales funnel automatically."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Set up intelligent automation that responds to user behavior and maximizes conversion rates."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify high-value prospects and personalize experiences based on AI analysis of user data."
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Continuously optimize your campaigns and strategies based on real-time performance data."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and advanced data protection measures."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">InzAutomation</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Become AI Ready
              </Button>
              <Button size="sm">
                Join Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end">
        {/* Unicorn.studio Interactive Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          {/* Unicorn Studio Interactive Background */}
          <div 
            className="absolute inset-0 w-full h-full" 
            id="unicorn-studio-background"
            data-us-project="Vm8Ht7pkattzHr4Pqgjb" 
            style={{width: '100%', height: '100%'}}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
              Automate your workflow.
              <br />
              <span className="text-primary">Become AI Ready</span>
            </h1>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Try it out
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">See what our customers are saying</p>
          </div>

          {/* Top Row - Moving Left */}
          <div className="flex space-x-6 animate-marquee-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="min-w-[300px] flex-shrink-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-sm">"{testimonial.quote}"</p>
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="flex space-x-6 animate-marquee-right mt-8">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
              <Card key={index} className="min-w-[300px] flex-shrink-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-sm">"{testimonial.quote}"</p>
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
            <p className="text-xl text-muted-foreground">Everything you need to automate and optimize your workflow</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder - left side */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Analytics Dashboard</p>
                  <p className="text-muted-foreground">Interactive visualization of your data</p>
                </div>
              </div>
            </div>

            {/* Features list - right side */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <CardHeader>
                <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Learn About AI Workflows</CardTitle>
                <CardDescription className="text-lg">
                  Discover how artificial intelligence can transform your business processes and drive growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardHeader>
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Become AI Automated</CardTitle>
                <CardDescription className="text-lg">
                  Start your journey towards full automation with our comprehensive AI solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="outline" className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">InzAutomation</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Leading the future of AI-driven business automation. We help companies transform their workflows with intelligent solutions.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline">AI-Powered</Badge>
                <Badge variant="outline">Enterprise Ready</Badge>
                <Badge variant="outline">24/7 Support</Badge>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">hello@inzautomation.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
                <a href="#testimonials" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
                <a href="#pricing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 InzAutomation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
