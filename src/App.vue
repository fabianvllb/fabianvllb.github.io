<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";

const isBachelorCoursesVisible = ref(false);
const isMasterCoursesVisible = ref(false);

const languages = [
  { name: "Python", hot: true },
  { name: "JavaScript", hot: true },
  { name: "C++", hot: true },
  { name: "C#", hot: true },
  { name: "Java", hot: true },
  { name: "C", hot: true },
  { name: "Go", hot: false },
  { name: "Objective-C", hot: false },
  { name: "SQL", hot: true },
  { name: "Kotlin", hot: false },
  { name: "R", hot: false },
  { name: "Perl", hot: false },
  { name: "PHP", hot: false },
  { name: "Ada", hot: false },
  { name: "Common Lisp", hot: false },
  { name: "Prolog", hot: false },
];

const tools = [
  { name: "Unity", hot: true },
  { name: "Unreal Engine", hot: true },
  { name: "Git", hot: true },
  { name: "Docker", hot: true },
  { name: "Terraform", hot: false },
  { name: "Visual Studio Code", hot: false },
  { name: "Visual Studio", hot: false },
  { name: "MS Project", hot: false },
  { name: "Jira", hot: false },
  { name: "Taiga", hot: false },
  { name: "Jenkins", hot: false },
];

const professionalProjects = [
  {
    category: "AI & Machine Learning",
    items: [
      {
        name: "AI Chatbot with RAG",
        org: "Factorial",
        desc: "Intelligent chatbot powered by a retrieval-augmented generation (RAG) system, including ingestion pipelines, filtering, and data transformations.",
        tech: ["Python", "LangChain", "ElasticSearch", "Azure", "Docker"],
      },
      {
        name: "AI Micro-services",
        org: "Factorial",
        desc: "Intelligent micro-services for automated data summarization and content generation, shipped with CI/CD pipelines, metrics capture, and visualization dashboards.",
        tech: ["Python", "AWS", "Azure", "Docker"],
      },
      {
        name: "XAI Facial Recognition Evaluation",
        org: "IDENTY",
        desc: "System to evaluate facial recognition CNN models using Model Explainability (XAI) techniques, identifying training biases and undesired learning patterns. Accompanied by a scientific whitepaper.",
        tech: ["Python", "TensorFlow", "Pandas"],
      },
    ],
  },
  {
    category: "Data Engineering",
    items: [
      {
        name: "Data Engineering Pipelines",
        org: "Factorial",
        desc: "Large-scale data cleaning, processing, and restoration workflows ensuring data quality and consistency across distributed systems.",
        tech: ["Python", "SQL", "AWS", "Terraform"],
      },
    ],
  },
  {
    category: "Backend & Integration",
    items: [
      {
        name: "Workflow Automations & Integrations",
        org: "Factorial",
        desc: "Complex workflow automations and custom integrations to synchronize data between internal storage systems and external services.",
        tech: ["Python", "Slack API", "HubSpot API", "Docker"],
      },
      {
        name: "City Route Finder",
        org: "BISITE",
        desc: "Full-stack web application for Salamanca's public transport system, computing and displaying shortest routes between any two city locations.",
        tech: ["React", "Node", "Express", "MongoDB", "PostgreSQL"],
      },
    ],
  },
  {
    category: "Testing & QA",
    items: [
      {
        name: "Web SDK Automated Test Suite",
        org: "IDENTY",
        desc: "200+ automated tests for proprietary web SDKs covering UI rendering, data flows, and edge cases. CI/CD pipelines configured for automated deployment.",
        tech: ["JavaScript", "TypeScript", "Docker", "Bitbucket"],
      },
      {
        name: "Telecom Web Test Automation",
        org: "NTT Data",
        desc: "100+ unit tests for Orange and Vodafone websites, covering data transfer, UI rendering, and navigation with full backend API integration.",
        tech: ["Java", "Selenium", "Jenkins", "Jira"],
      },
    ],
  },
];

const personalProjects = [
  {
    category: "Web Apps",
    items: [
      {
        name: "IRPF Tax Calculator",
        desc: "Web app to calculate Spanish personal income tax (IRPF) declarations. Includes a FIFO engine to compute capital gains and losses from long-term investments, stock trading, and cryptocurrency trading across multiple platforms.",
        tech: ["Python", "Flask"],
      },
      {
        name: "2Code",
        desc: "Web app for solving programming exercises with multi-language compile & test at a remote server.",
        tech: ["React", "Node", "PostgreSQL"],
      },
      {
        name: "Virtual Ledgers",
        desc: "Shortest path algorithms rendered over interactive city maps.",
        tech: ["React", "Leaflet", "Node", "PostGIS"],
      },
      {
        name: "Personal Webpage",
        desc: "This website.",
        tech: ["Vue", "Tailwind CSS"],
      },
    ],
  },
  {
    category: "Videogames",
    items: [
      {
        name: "Pirate Bomb",
        desc: "2D pirate-themed game.",
        tech: ["Unity", "C#"],
      },
      {
        name: "Pokemon Catch",
        desc: "Two-player 2D arcade game for Windows and macOS.",
        tech: ["C# + WPF", "Objective-C", "Cocoa"],
      },
      {
        name: "Meteorite Run",
        desc: "3D game.",
        tech: ["Unreal Engine 4"],
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        name: "City Tour Planner",
        desc: "Java agents-based simulator for creating and managing tourism routes.",
        tech: ["Java"],
      },
      {
        name: "Spotify Clone",
        desc: "Console-based music library manager.",
        tech: ["Java"],
      },
    ],
  },
];
</script>

<template>
  <Navbar />
  <main class="max-w-5xl mx-auto px-6 py-10 space-y-12">
    <!-- About -->
    <section class="space-y-4">
      <h1 class="text-3xl font-bold tracking-tight">Welcome! I'm Fabian.</h1>
      <p class="text-[#9ca3af]">
        AI Software Engineer ·
        <span class="text-white">📍 Barcelona, Spain</span>
      </p>
      <p class="leading-relaxed text-[#d1d5db] text-justify">
        I'm a software engineer specialized in AI and data science currently
        working as an AI Software Engineer at Factorial, where I design and ship
        AI-driven systems — from RAG-powered chatbots and LLM micro-services to
        MLOps pipelines and large-scale data engineering workflows. I hold a
        Master's Degree in Computer Science from the Polytechnic University of
        Madrid and a Bachelor's from the University of Salamanca. Before
        pivoting into applied AI, I built a strong foundation in full-stack web
        development (React, Vue, Node, Next.js) and quality assurance
        automation. Outside of work I enjoy game development, DevOps, and
        picking up new languages — both programming and human ones. 😊
      </p>
    </section>

    <hr class="border-[#474747]" />

    <!-- Education -->
    <section id="education" class="space-y-4">
      <h2 class="text-xl font-semibold flex items-center gap-3">
        <span
          class="w-1 h-5 bg-blue-400 rounded-full inline-block shrink-0"
        ></span>
        Education
      </h2>
      <div class="space-y-3">
        <div
          class="flex items-center gap-5 bg-[#363636] rounded-lg p-4 border-l-4 border-[#9cc2ff]"
        >
          <div class="w-32 shrink-0 flex items-center justify-center">
            <img
              class="max-w-full max-h-14 object-contain"
              src="/images/upm_leyenda.png"
              alt="Polytechnic University of Madrid"
            />
          </div>
          <div>
            <p class="font-semibold">Master's Degree in Computer Science</p>
            <p class="text-[#9cc2ff] text-sm mt-0.5">
              Polytechnic University of Madrid · Spain
            </p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 bg-[#363636] rounded-lg p-4 border-l-4 border-[#ffa0a0]"
        >
          <div class="w-32 shrink-0 flex items-center justify-center">
            <img
              class="max-w-full max-h-14 object-contain"
              src="/images/logo-usal-white.png"
              alt="University of Salamanca"
            />
          </div>
          <div>
            <p class="font-semibold">Bachelor's Degree in Computer Science</p>
            <p class="text-[#ffa0a0] text-sm mt-0.5">
              University of Salamanca · Spain
            </p>
          </div>
        </div>
      </div>
    </section>

    <hr class="border-[#474747]" />

    <!-- Experience -->
    <section id="experience" class="space-y-4">
      <h2 class="text-xl font-semibold flex items-center gap-3">
        <span
          class="w-1 h-5 bg-blue-400 rounded-full inline-block shrink-0"
        ></span>
        Work Experience
      </h2>
      <div class="space-y-3">
        <div
          class="flex items-center gap-5 bg-[#363636] rounded-lg p-4 border-l-4 border-[#ff355e]"
        >
          <div class="w-32 shrink-0 flex items-center justify-center">
            <div
              class="w-12 h-12 rounded-lg bg-[#1a2e22] flex items-center justify-center text-[#ff355e] font-bold text-lg"
            >
              F
            </div>
          </div>
          <div>
            <p class="font-semibold">AI Software Engineer</p>
            <p class="text-[#ff355e] text-sm mt-0.5">
              Factorial · Apr 2025 – Present
            </p>
            <p class="text-[#6b7280] text-xs mt-0.5">📍 Barcelona, Spain</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 bg-[#363636] rounded-lg p-4 border-l-4 border-[#9cc2ff]"
        >
          <div class="w-32 shrink-0 flex items-center justify-center">
            <div
              class="w-12 h-12 rounded-lg bg-[#1a2333] flex items-center justify-center text-[#9cc2ff] font-bold text-lg"
            >
              I
            </div>
          </div>
          <div>
            <p class="font-semibold">Software Engineer</p>
            <p class="text-[#9cc2ff] text-sm mt-0.5">
              IDENTY Touchless ID · Feb 2024 – Dec 2024
            </p>
            <p class="text-[#6b7280] text-xs mt-0.5">📍 Madrid, Spain</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 bg-[#363636] rounded-lg p-4 border-l-4 border-[#ffd6a5]"
        >
          <div class="w-32 shrink-0 flex items-center justify-center">
            <div
              class="w-12 h-12 rounded-lg bg-[#2e2214] flex items-center justify-center text-[#ffd6a5] font-bold text-lg"
            >
              N
            </div>
          </div>
          <div>
            <p class="font-semibold">Software QA Engineer</p>
            <p class="text-[#ffd6a5] text-sm mt-0.5">
              NTT Data Europe & LATAM · Feb 2022 – Jun 2022
            </p>
            <p class="text-[#6b7280] text-xs mt-0.5">📍 Salamanca, Spain</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 bg-[#363636] rounded-lg p-4 border-l-4 border-[#ffa0a0]"
        >
          <div class="w-32 shrink-0 flex items-center justify-center">
            <div
              class="w-12 h-12 rounded-lg bg-[#1e1a2e] flex items-center justify-center text-[#ffa0a0] font-bold text-lg"
            >
              B
            </div>
          </div>
          <div>
            <p class="font-semibold">Software Engineer</p>
            <p class="text-[#ffa0a0] text-sm mt-0.5">
              BISITE Research Group · Feb 2021 – Jun 2021
            </p>
            <p class="text-[#6b7280] text-xs mt-0.5">📍 Salamanca, Spain</p>
          </div>
        </div>
      </div>
    </section>

    <hr class="border-[#474747]" />

    <!-- Coursework -->
    <section class="space-y-3">
      <h2 class="text-xl font-semibold flex items-center gap-3">
        <span
          class="w-1 h-5 bg-blue-400 rounded-full inline-block shrink-0"
        ></span>
        CS & Engineering Coursework
      </h2>
      <div class="rounded-lg border border-[#474747] overflow-hidden">
        <button
          @click="isBachelorCoursesVisible = !isBachelorCoursesVisible"
          class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#363636] transition-colors cursor-pointer"
        >
          <span class="font-medium">Bachelor's Degree Courses</span>
          <span class="text-[#9ca3af] text-xs">{{
            isBachelorCoursesVisible ? "▲ hide" : "▼ show"
          }}</span>
        </button>
        <ul
          v-if="isBachelorCoursesVisible"
          class="list-disc px-10 pb-4 pt-2 columns-2 gap-x-8 text-sm text-[#d1d5db] space-y-1"
        >
          <li>Programming I, II & III</li>
          <li>Advanced Programming</li>
          <li>Data Structures and Algorithms I & II</li>
          <li>Computer Structures I & II</li>
          <li>Computer Architecture</li>
          <li>Operating Systems I & II</li>
          <li>Computer Networks I & II</li>
          <li>Systems Administration</li>
          <li>Computer Systems Security</li>
          <li>Information Theory & Encryption</li>
          <li>Database Design</li>
          <li>Database Systems</li>
          <li>Graphical Interfaces Design</li>
          <li>Human-Computer Interaction</li>
          <li>Software Engineering I & II</li>
          <li>Software Project Management</li>
          <li>Intelligent Systems</li>
          <li>Distributed Systems</li>
          <li>Digital Animation</li>
          <li>Modeling and Simulation of Systems</li>
        </ul>
      </div>
      <div class="rounded-lg border border-[#474747] overflow-hidden">
        <button
          @click="isMasterCoursesVisible = !isMasterCoursesVisible"
          class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#363636] transition-colors cursor-pointer"
        >
          <span class="font-medium">Master's Degree Courses</span>
          <span class="text-[#9ca3af] text-xs">{{
            isMasterCoursesVisible ? "▲ hide" : "▼ show"
          }}</span>
        </button>
        <ul
          v-if="isMasterCoursesVisible"
          class="list-disc px-10 pb-4 pt-2 columns-2 gap-x-8 text-sm text-[#d1d5db] space-y-1"
        >
          <li>Data Processes</li>
          <li>Advanced Intelligent Systems</li>
          <li>Intelligent Data Analysis</li>
          <li>Interactive Systems</li>
          <li>Embedded and Ubiquitous Systems</li>
          <li>Advanced Concepts of Software Engineering</li>
          <li>Emerging Technologies for Business</li>
          <li>Strategic Planning</li>
          <li>Project Management</li>
          <li>Quality Assurance & Information Security</li>
          <li>Computer Graphics</li>
          <li>Design & Security of Computer Networks</li>
          <li>Advanced Operating Systems</li>
          <li>Scientific Computing</li>
        </ul>
      </div>
    </section>

    <hr class="border-[#474747]" />

    <!-- Projects -->
    <section id="projects" class="space-y-8">
      <h2 class="text-xl font-semibold flex items-center gap-3">
        <span
          class="w-1 h-5 bg-blue-400 rounded-full inline-block shrink-0"
        ></span>
        Projects
      </h2>

      <!-- Professional Projects -->
      <div class="space-y-6">
        <p
          class="text-sm font-semibold text-white border-b border-[#474747] pb-2"
        >
          Professional
        </p>
        <div
          v-for="group in professionalProjects"
          :key="group.category"
          class="space-y-3"
        >
          <p
            class="text-xs text-[#9ca3af] uppercase tracking-widest font-semibold"
          >
            {{ group.category }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="project in group.items"
              :key="project.name"
              class="bg-[#363636] rounded-lg p-4 space-y-2 border border-[#474747] flex flex-col"
            >
              <div>
                <p class="font-semibold">{{ project.name }}</p>
                <p class="text-xs text-[#6b7280] mt-0.5">{{ project.org }}</p>
              </div>
              <p class="text-sm text-[#9ca3af] grow">{{ project.desc }}</p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span v-for="t in project.tech" :key="t" class="tech-badge">{{
                  t
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Projects -->
      <div class="space-y-6">
        <p
          class="text-sm font-semibold text-white border-b border-[#474747] pb-2"
        >
          Personal
        </p>
        <div
          v-for="group in personalProjects"
          :key="group.category"
          class="space-y-3"
        >
          <p
            class="text-xs text-[#9ca3af] uppercase tracking-widest font-semibold"
          >
            {{ group.category }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="project in group.items"
              :key="project.name"
              class="bg-[#363636] rounded-lg p-4 space-y-2 border border-[#474747] flex flex-col"
            >
              <p class="font-semibold">{{ project.name }}</p>
              <p class="text-sm text-[#9ca3af] grow">{{ project.desc }}</p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span v-for="t in project.tech" :key="t" class="tech-badge">{{
                  t
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="border-[#474747]" />

    <!-- Skills -->
    <section id="skills" class="space-y-6">
      <h2 class="text-xl font-semibold flex items-center gap-3">
        <span
          class="w-1 h-5 bg-blue-400 rounded-full inline-block shrink-0"
        ></span>
        Skills
      </h2>

      <div class="space-y-6">
        <div>
          <p
            class="text-xs text-[#9ca3af] uppercase tracking-widest font-semibold mb-3"
          >
            Programming Languages
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="lang in languages"
              :key="lang.name"
              :class="
                lang.hot
                  ? 'bg-[#1e3a5f] text-[#9cc2ff] border-[#3b6fa0]'
                  : 'bg-[#363636] text-[#d1d5db] border-[#474747]'
              "
              class="px-3 py-1 rounded-full border text-sm"
            >
              {{ lang.name }}<span v-if="lang.hot" class="ml-1">🔥</span>
            </span>
          </div>
        </div>

        <div>
          <p
            class="text-xs text-[#9ca3af] uppercase tracking-widest font-semibold mb-3"
          >
            Tools & Software
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in tools"
              :key="tool.name"
              :class="
                tool.hot
                  ? 'bg-[#1e3a5f] text-[#9cc2ff] border-[#3b6fa0]'
                  : 'bg-[#363636] text-[#d1d5db] border-[#474747]'
              "
              class="px-3 py-1 rounded-full border text-sm"
            >
              {{ tool.name }}<span v-if="tool.hot" class="ml-1">🔥</span>
            </span>
          </div>
        </div>

        <div>
          <p
            class="text-xs text-[#9ca3af] uppercase tracking-widest font-semibold mb-3"
          >
            Languages
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="skill-badge">Spanish — Native</span>
            <span class="skill-badge">French — Fluent (C1)</span>
            <span class="skill-badge">English — Fluent (C1)</span>
            <span class="skill-badge">Portuguese — Intermediate (B1)</span>
            <span class="skill-badge">Catalan — Intermediate (B1)</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#474747] mt-12">
    <div
      class="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b7280]"
    >
      <p>© 2026 Fabian Villalobos</p>
      <div class="flex gap-5">
        <a
          href="https://github.com/fabianvllb"
          target="_blank"
          class="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <font-awesome-icon icon="fa-brands fa-github" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/fabian-villalobos/"
          target="_blank"
          class="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference "tailwindcss";
.tech-badge {
  @apply text-xs bg-[#2c2c2c] text-[#9cc2ff] border border-[#474747] px-2 py-0.5 rounded-full;
}
.skill-badge {
  @apply px-3 py-1 rounded-full border text-sm bg-[#363636] text-[#d1d5db] border-[#474747];
}
</style>
