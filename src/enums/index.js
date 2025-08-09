import { 
  BadgeCheck, 
  QrCode, 
  Users, 
  Database,
  UploadCloud,
  LayoutTemplate,
  Printer,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Student ID Generation",
    description: "Create compliant student IDs with photos, enrollment status, and automatic expiry dates",
    icon: <BadgeCheck className="w-6 h-6" />
  },
  {
    id: 2,
    title: "QR Verification",
    description: "Built-in scanning system to validate card authenticity in real-time",
    icon: <QrCode className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Corporate Badges",
    description: "Professional employee credentials with roles, departments, and access levels",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Bulk Import",
    description: "Generate 1000+ IDs simultaneously via CSV/Excel upload or API integration",
    icon: <Database className="w-6 h-6" />
  }
]

export const steps = [
  {
    id: 1,
    title: "Upload Your Data",
    icon: <UploadCloud className="w-5 h-5" />,
    description: "Import your student or employee lists via CSV/Excel, or connect directly to your SIS/HR system for automatic synchronization.",
    advantages: [
      { id: 1, text: "Bulk import thousands of records at once" },
      { id: 2, text: "Automatic data validation to prevent errors" },
      { id: 3, text: "API integration with popular platforms" }
    ],
    image: "/images/data-upload.png"
  },
  {
    id: 2,
    title: "Design Professional Cards",
    icon: <LayoutTemplate className="w-5 h-5" />,
    description: "Use our drag-and-drop editor to create compliant ID templates that match your institution's branding.",
    advantages: [
      { id: 1, text: "100+ pre-approved templates for compliance" },
      { id: 2, text: "Custom fields for roles, departments, access levels" },
      { id: 3, text: "Real-time preview of all designs" }
    ],
    image: "/images/design-interface.png"
  },
  {
    id: 3,
    title: "Generate & Distribute",
    icon: <Printer className="w-5 h-5" />,
    description: "Print high-quality PVC cards or share digital versions instantly via email, SMS, or mobile wallet.",
    advantages: [
      { id: 1, text: "Print-ready PDFs with crop marks" },
      { id: 2, text: "Digital passes for Apple Wallet/Google Pay" },
      { id: 3, text: "Automated distribution workflows" }
    ],
    image: "/images/id-card-output.png"
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Registrar, Stanford University",
    quote: "SKLBadge reduced our ID processing time from 2 weeks to 1 day. The QR verification has been game-changing for campus security.",
    image: "/images/sarah-chen.png"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "HR Director, TechCorp",
    quote: "Our corporate onboarding now includes professional badges on day one. The HR team saves 20+ hours weekly with bulk generation.",
    image: "/images/michael-rodriguez.png"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Superintendent, Metro Schools",
    quote: "Even our non-tech staff can design perfect student IDs. The template library meets all state requirements effortlessly.",
    image: "/images/james-wilson.png"
  }
];