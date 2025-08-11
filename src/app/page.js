/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/assets/hero-image.png";
import {
  FileInput,
  Palette,
  ShieldCheck,
  Badge,
  Check,
  Gem,
  Zap,
  Shield,
  Database,
  Users,
  ScanEye
} from "lucide-react";
import { features, steps } from "@/enums";
import TestimonialSection from "@/components/system/testimonial-section";

export default function Home() {
  return (
    <>
      <section className="relative pt-10 xl:pt-14">
        <div className="mx-auto container w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
            <h1 className="text-indigo-950 dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text">
              Professional ID Cards in <span className="bg-indigo-50 dark:bg-zinc-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 px-3">60 Seconds</span>
            </h1>
            <p className="mt-10 text-zinc-700 dark:text-zinc-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
              Generate secure student IDs, employee badges, and membership cards with built-in QR verification.
              No design skills needed – just upload, customize, and print.
            </p>
            <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
              <Link href="/auth/sign-up" className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-white hover:before:bg-indigo-800 before:bg-indigo-600 hover:before:scale-105">
                <span className="relative">
                  Create Free Account
                </span>
              </Link>
              <Link href="/#demo" className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-zinc-100 dark:before:bg-zinc-900 text-indigo-600 dark:text-white hover:before:scale-105">
                <span className="relative">
                  See Live Demo
                </span>
              </Link>
            </div>
            <div className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
              Trusted by 500+ schools and businesses worldwide
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 justify-center items-center relative max-w-3xl mx-auto lg:max-w-none">
            <Image src={HeroImg} alt="Hero Image" width={500} height={500} className="invert dark:invert-0" placeholder="blur" quality={100} />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col gap-5">
            <div className="space-y-4 max-w-xl">
              <span className="rounded-lg bg-indigo-50 dark:bg-zinc-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-indigo-800 dark:text-zinc-100">
                Enterprise-Grade
              </span>
              <h1 className="text-3xl font-semibold text-indigo-950 dark:text-zinc-200 md:text-4xl xl:text-5xl leading-tight">
                Professional ID solutions for <span className="text-indigo-700">modern institutions</span>
              </h1>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              Streamline your identification system with powerful features designed for schools and businesses
            </p>
          </div>

          <div className="mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
            <div className="lg:w-[55%] lg:items-center grid sm:grid-cols-2">
              {features.map(feature => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </div>

            <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
              <h2 className="text-4xl font-semibold text-zinc-900 dark:text-white">
                Focus on what matters - we handle the IDs
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 max-w-md">
                SKLBadge eliminates the hassle of manual ID creation with automated workflows,
                security features, and compliance-ready templates that save hours of administrative work.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="bg-indigo-700 hover:bg-indigo-800 transition-colors text-white rounded-full px-6 h-12 flex items-center"
                >
                  Request Demo
                </Link>
                <Link
                  href="/features"
                  className="border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-full px-6 h-12 flex items-center"
                >
                  All Features
                </Link>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Palette className="w-5 h-5 text-indigo-700" />
                  <span className="text-zinc-700 dark:text-zinc-300">100+ customizable templates</span>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-indigo-700" />
                  <span className="text-zinc-700 dark:text-zinc-300">FIPS-201 compliant security</span>
                </div>
                <div className="flex items-center gap-4">
                  <FileInput className="w-5 h-5 text-indigo-700" />
                  <span className="text-zinc-700 dark:text-zinc-300">Print-ready PDF exports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32" id="how-it-works">
        <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-col justify-center text-center mx-auto md:max-w-2xl space-y-5">
              <span className="rounded-lg bg-indigo-100 dark:bg-zinc-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-indigo-800 dark:text-zinc-100">
                Simple Process
              </span>
              <h1 className="text-3xl font-semibold text-indigo-950 dark:text-zinc-200 md:text-4xl xl:text-5xl leading-tight">
                Create professional IDs in <span className="text-indigo-600">3 easy steps</span>
              </h1>
              <p className="text-zinc-700 dark:text-zinc-300 max-w-lg mx-auto">
                SKLBadge streamlines ID card creation with an intuitive workflow that saves hours of administrative work.
              </p>
            </div>
            <div className="grid divide-y divide-zinc-300/60 dark:divide-zinc-800/30 gap-12 children:py-5 first:pt-0 last:pb-0">
              {steps.map(step => (
                <StepItem key={step.id} {...step} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="pricing">
        <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col space-y-10">
            <div className="flex gap-10 flex-col items-center">
              <div className="text-center max-w-2xl">
                <h2 className="text-3xl font-semibold text-indigo-950 dark:text-zinc-200 md:text-4xl xl:text-5xl leading-tight">
                  Simple, <span className="text-indigo-600">Transparent Pricing</span>
                </h2>
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                  Choose the perfect plan for your institution's needs
                </p>
              </div>
              <div className="min-w-max flex justify-center md:justify-end">
                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg shadow-zinc-200/40 dark:shadow-none flex items-center relative p-1">
                  <button className="text-white flex items-center h-9 w-max px-4 rounded-lg bg-indigo-900 dark:bg-indigo-950">
                    Monthly
                  </button>
                  <button className="text-zinc-700 dark:text-zinc-300 flex items-center h-9 w-max px-4">
                    Yearly <span className="ml-2 text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-2 py-0.5 rounded-full">20% off (calculated at checkout)</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto">
              {/* Starter Plan */}
              <div className="rounded-lg border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-6 sm:p-10 space-y-6">
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="w-5 h-5 text-indigo-600" />
                    <h2 className="font-semibold text-2xl text-zinc-900 dark:text-white">
                      Starter
                    </h2>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Perfect for small schools and startups
                  </p>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-100 dark:before:bg-zinc-900" />
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                    $19
                  </p>
                  <span className="text-zinc-700 dark:text-zinc-300">per month</span>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-100 dark:before:bg-zinc-900" />
                <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    Up to 100 IDs/month
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    Basic templates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    Email support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    PDF exports
                  </li>
                </ul>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-100 dark:before:bg-zinc-900" />
                <div className="flex justify-center">
                  <Link href="/sign-up" className="outline-none w-max flex items-center mx-auto h-11 px-5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-indigo-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="rounded-lg relative border border-zinc-100 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900 p-6 sm:p-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-zinc-200 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Most Popular
                </div>
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Gem className="w-5 h-5 text-indigo-600" />
                      <h2 className="font-semibold text-2xl text-zinc-900 dark:text-white">
                        Professional
                      </h2>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      For growing schools and businesses
                    </p>
                  </div>
                  <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-200 dark:before:bg-zinc-800" />
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                      $49
                    </p>
                    <span className="text-zinc-700 dark:text-zinc-300">per month</span>
                  </div>
                  <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-200 dark:before:bg-zinc-800" />
                  <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600" />
                      Unlimited IDs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600" />
                      Advanced templates
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600" />
                      QR verification
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600" />
                      Bulk imports
                    </li>
                  </ul>
                  <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-200 dark:before:bg-zinc-800" />
                  <div className="flex justify-center">
                    <Link href="/sign-up" className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-indigo-900 dark:bg-indigo-950 text-white hover:bg-indigo-800 dark:hover:bg-indigo-900 transition-colors">
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="rounded-lg border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-6 sm:p-10 space-y-6">
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-600" />
                    <h2 className="font-semibold text-2xl text-zinc-900 dark:text-white">
                      Enterprise
                    </h2>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Custom solutions for large organizations
                  </p>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-100 dark:before:bg-zinc-900" />
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                    Custom
                  </p>
                  <span className="text-zinc-700 dark:text-zinc-300">volume pricing</span>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-100 dark:before:bg-zinc-900" />
                <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    API access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    White-labeling
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    Dedicated manager
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    SIS/HR integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    On-premise options
                  </li>
                </ul>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-zinc-100 dark:before:bg-zinc-900" />
                <div className="flex justify-center">
                  <Link href="/contact" className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-indigo-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </>
  );
}

const FeatureItem = ({ title, description, icon, id }) => {
  return (
    <div className={
      `space-y-4 
      ${id === 1 ? "sm:pr-4 pb-4 border-b border-r border-indigo-200/10"
        : id === 2 ? "pt-4 sm:pt-0 sm:pl-4 pb-4 border-b border-indigo-200/10"
          : id === 3 ? "sm:pr-4 pt-4 border-t border-r border-indigo-200/10" : "sm:pl-4 pt-4"}
      `}
    >
      <span className="p-2 rounded-md bg-indigo-50 text-indigo-700 dark:bg-zinc-900 dark:text-indigo-500 flex w-max">
        {icon}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-zinc-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
    </div>
  )
}

const StepItem = ({ id, title, description, advantages, icon, image }) => {
  return (
    <div className={`flex flex-col md:items-center gap-10 lg:gap-14 ${id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-12 space-y-8">
        <div className="space-y-6">
          <span className="p-2 rounded-md bg-indigo-100 text-indigo-700 dark:bg-zinc-900 dark:text-indigo-500 flex w-max">
            {icon}
          </span>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            {description}
          </p>
        </div>
        <ul role="list" className="space-y-5 children:flex children:items-start children:gap-4 children:text-zinc-600 dark:children:text-zinc-400">
          {advantages.map(advantage => (
            <li key={advantage.id} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-indigo-600 dark:fill-indigo-500">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {advantage.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900 from-zinc-50 to-zinc-100 p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1900}
          height={800}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  )
}