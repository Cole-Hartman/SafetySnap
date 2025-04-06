import Link from "next/link";
import worker1 from "../public/demo2.png";
import worker2 from "../public/demo3.png";
import Image from "next/image";
import {
  Camera,
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-sm">
                Construction Safety Made Simple
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Spot OSHA Violations{" "}
                <span className="text-amber-500">
                  Before They Become Problems
                </span>
              </h1>
              <p className="text-lg text-slate-600">
                SafetySnap uses AI to instantly analyze construction site photos
                and identify potential OSHA violations, keeping your team safe
                and compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-6 rounded-lg text-lg"
                >
                  <Link href="/dashboard">
                    Start Scanning <Camera className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-600 hover:bg-amber-50 h-12 px-6 rounded-lg text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={worker1}
                alt="Construction worker using SafetySnap"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-500/90 to-amber-500/0 p-4">
                <div className="flex items-center gap-2 text-white"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-amber-500 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white">98%</div>
                <div className="text-white/80 mt-2">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white">3s</div>
                <div className="text-white/80 mt-2">Average Scan Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-white/80 mt-2">Violations Detected</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white">1,200+</div>
                <div className="text-white/80 mt-2">
                  OSHA Violations Tracked
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How SafetySnap Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple three-step process makes workplace safety
                  assessment quick and effective.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              {[
                {
                  step: "1",
                  title: "Snap a Photo",
                  description:
                    "Take a picture of your workplace environment using our mobile app.",
                },
                {
                  step: "2",
                  title: "AI Analysis",
                  description:
                    "Our AI analyzes the image against OSHA and state safety regulations.",
                },
                {
                  step: "3",
                  title: "Get Recommendations",
                  description:
                    "Receive a detailed safety ticket with actionable recommendations.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Key Features
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                SafetySnap combines cutting-edge AI with practical safety
                knowledge to keep your construction site compliant
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to make your construction site safer?
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Join the construction teams already using SafetySnap to
                  prevent accidents and ensure OSHA compliance.
                </p>
                <Button className="bg-white text-amber-600 hover:bg-amber-50 h-12 px-8 rounded-lg text-lg">
                  Get Started Today
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image
                  src={worker2}
                  alt="Construction worker using SafetySnap"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const features = [
  {
    icon: <AlertTriangle className="h-6 w-6 text-amber-600" />,
    title: "Real-time OSHA Violation Detection",
    description:
      "Instantly identify potential safety hazards and OSHA violations with our advanced AI analysis.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-amber-600" />,
    title: "Detailed Compliance Reports",
    description:
      "Generate comprehensive reports with specific OSHA regulations and recommended corrective actions.",
  },
  {
    icon: <Camera className="h-6 w-6 text-amber-600" />,
    title: "Photo Documentation",
    description:
      "Maintain a visual record of safety conditions and improvements over time.",
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-amber-600" />,
    title: "Actionable Insights",
    description:
      "Get clear, practical steps to address safety concerns and maintain compliance.",
  },
  {
    icon: <Shield className="h-6 w-6 text-amber-600" />,
    title: "Preventative Safety Measures",
    description:
      "Identify potential issues before they lead to accidents or citations.",
  },
  {
    icon: <Camera className="h-6 w-6 text-amber-600" />,
    title: "Works Offline",
    description:
      "Take photos on-site even without internet connection, and sync when back online.",
  },
];
