import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dong Payton Pei",
  initials: "DP",
  location: "Ottawa, ON",
  locationLink: "https://www.google.com/maps/place/Ottawa,+ON",
  about: "Software engineer building local-first AI systems, native apps, and developer tools.",
  summary:
    "Software engineer focused on local-first AI systems, developer tooling, and production mobile applications. Former Nokia and Ford co-op developer/tester and current Master of Engineering student at the University of Ottawa, with hands-on experience across Rust/Tauri, TypeScript/React, Python, SwiftUI, Kotlin/Jetpack Compose, LLM tool calling, and cloud integrations.",
  avatarUrl: "https://avatars.githubusercontent.com/u/141458085?v=4",
  personalWebsiteUrl: "https://github.com/mammut001",
  contact: {
    email: "paytonpei01@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mammut001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pd110/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Ottawa",
      degree: "Master of Engineering in Systems Engineering",
      start: "2024",
      end: "Present",
    },
    {
      school: "Carleton University",
      degree: "Bachelor of Computer Science",
      start: "2017",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Nokia Canada",
      link: "https://www.nokia.com",
      badges: ["Co-op"],
      title: "Software Tester Co-op",
      start: "Aug 2020",
      end: "Aug 2021",
      description:
        "Maintained and extended JavaScript/XML automated test suites for telecommunications software, improving regression coverage, robustness, and maintainability. Authored system architecture and data-flow documentation in Confluence to support debugging and cross-team knowledge transfer.",
    },
    {
      company: "Ford Motor Canada",
      link: "https://www.ford.ca",
      badges: ["Co-op"],
      title: "Software Developer Co-op",
      start: "Apr 2020",
      end: "Aug 2020",
      description:
        "Developed C++11 unit tests with GoogleTest for automotive software components and integrated automated test execution into Jenkins CI pipelines within an Agile development workflow.",
    },
  ],
  skills: [
    "Rust",
    "TypeScript",
    "React / Next.js",
    "Tauri",
    "Python",
    "Swift / SwiftUI",
    "Kotlin / Jetpack Compose",
    "C++",
    "Node.js",
    "SQLite",
    "LLM Tool Calling",
    "CDP Browser Automation",
    "Docker",
    "Playwright",
    "StoreKit / WatchConnectivity",
  ],
  projects: [
    {
      title: "Pipi-Shrimp Agent",
      techStack: ["Rust", "Tauri", "React", "TypeScript", "SQLite"],
      description:
        "Local-first AI desktop agent with multi-provider LLMs, local tool execution, CDP browser automation, visual workflows, project memory, context compression, and multi-agent orchestration.",
      link: {
        label: "GitHub",
        href: "https://github.com/mammut001/pipi-shrimp-agent",
      },
    },
    {
      title: "Conveyor",
      techStack: ["Python", "Codex", "SQLite", "Telegram", "Feishu"],
      description:
        "Self-hosted phone-to-Codex control plane for a private VPS, with isolated Git worktrees, persistent job queues, diff/apply/discard controls, auditability, and optional Mac execution nodes.",
      link: {
        label: "GitHub",
        href: "https://github.com/mammut001/Conveyor",
      },
    },
    {
      title: "Cool Down Pro",
      techStack: ["Swift", "XPC", "SMJobBless", "IOKit", "macOS"],
      description:
        "Native macOS thermal and fan-control utility with SMC access, sensor fusion, hysteresis, asymmetric EWMA filtering, cooldown logic, and a notarized DMG distribution pipeline.",
      link: {
        label: "GitHub",
        href: "https://github.com/mammut001/cool-down-your-mac",
      },
    },
    {
      title: "Focus Mint",
      techStack: ["SwiftUI", "watchOS", "WidgetKit", "StoreKit 2"],
      description:
        "Shipped productivity app for iPhone, iPad, and Apple Watch with focus sessions, earnings tracking, analytics, widgets, Live Activities, monetization, and WatchConnectivity sync.",
      link: {
        label: "App Store",
        href: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
      },
    },
    {
      title: "阅笺 / Yuejian",
      techStack: ["Kotlin", "Jetpack Compose", "Material 3", "Android"],
      description:
        "Local-first, ad-free TXT/EPUB reader for Android with large-file performance, TTS highlighting, search, bookmarks, reading analytics, backup/restore, and accessibility support.",
      link: {
        label: "GitHub",
        href: "https://github.com/mammut001/BiqugeStudio",
      },
    },
    {
      title: "Resume Generator",
      techStack: ["React", "TypeScript", "Node.js", "Typst", "Playwright"],
      description:
        "Full-stack resume workspace for importing, editing, AI-assisted tailoring, and Typst-backed PDF/SVG export, with a production Node backend and automated testing.",
      link: {
        label: "Live",
        href: "https://resume-tailor.paytonpei.top",
      },
    },
  ],
} as const;
