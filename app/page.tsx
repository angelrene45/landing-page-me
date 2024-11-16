'use client'
/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Briefcase, GraduationCap, Mail, Linkedin, ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Projects from "@/components/ui/Projects";


export default function Home() {


  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener)
      })
    }
  }, [])

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          {/* Nombre visible solo en pantallas medianas y grandes */}
          <Link className="mr-4 flex items-center space-x-2 hidden md:flex" href="/">
            <span className="font-bold">&nbsp; &nbsp; &nbsp; Ángel René Herrera Calzada</span>
          </Link>
          {/* Botón de menú visible solo en pantallas pequeñas */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          {/* Menú de navegación siempre horizontal */}
          <nav className={`flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">
              About
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">
              Skills
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">
              Experience
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#education">
              Education
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
              Projects
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Image
                  src="/profile.jpg"
                  alt="Profile picture of Ángel René Herrera Calzada"
                  width={250}
                  height={250}
                  className="rounded-full mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ángel René Herrera Calzada
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  ICT Engineer | Python Developer | Data Engineer
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Committed to professional growth and development in diverse technology environments.
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#skills">View Skills</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Python</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Backend Development</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>FastAPI</li>
                    <li>Django</li>
                    <li>Flask</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Data Engineering</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Snowflake</li>
                    <li>PostgreSQL</li>
                    <li>ETL Processes</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">DevOps & Tools</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Docker</li>
                    <li>CI/CD Pipelines</li>
                    <li>Git</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Geographic Information Systems</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>QGIS</li>
                    <li>PostGIS</li>
                    <li>Geospatial Analysis</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Other Skills</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>API Design</li>
                    <li>Data Visualization</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Professional Experience</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <Briefcase className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Python Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Tata Consultancy Services (Morgan Stanley Client)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Apr 2022 - Present</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New York, United States · Hybrid</p>
                  <p className="mt-2">Data Engineer and Python Developer Specializing in ELT, CI/CD, and Observability</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Designed, developed, and maintained a custom Python library for data ingestion and transformations in Snowflake, supporting data extraction from various sources (Sybase, DB2, IBM-MQ, WEBAPIS), file-based data ingestion, and pushing data to different database targets.</li>
                    <li>Integrated observability with OpenTelemetry for tracing, logging, and metrics, providing detailed information for resource usage, data loading, statuses, and transformations.</li>
                    <li>Implemented CI/CD pipelines using GitHub and Jenkins for streamlined deployment, with all code published in MSPypi.</li>
                    <li>Ensured code quality and security using Snyk and SonarQube.</li>
                    <li>Developed comprehensive tests using pytest and documented the library using Sphinx.</li>
                    <li>Followed Software Development Life Cycle (SDLC) best practices for structured and efficient development processes.</li>
                    <li>Utilized tools such as Git, Bitbucket, GitHub, Jira, Jenkins, and Informatica to support project needs.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Briefcase className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">INEGI (National Institute of Statistics and Geography)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Aguascalientes, Mexico · Hybrid</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Conducted geospatial analysis using QGIS and PostGIS</li>
                    <li>Developed web applications for data visualization and analysis</li>
                    <li>Collaborated on projects involving large-scale data processing</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Briefcase className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">PHP Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Various Roles</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Developed and maintained web applications using PHP and MySQL</li>
                    <li>Implemented front-end designs using HTML, CSS, and JavaScript</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Education</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <GraduationCap className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Bachelor's Degree in Information and Communications Technology</h3>
                <p className="text-gray-500 dark:text-gray-400">Instituto Tecnológico de Aguascalientes</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Graduated: 2019</p>
              </div>
            </div>
          </div>
        </section>

        <div id="projects">
          <Projects title="Key Projects" jsonPath="/projects.json" />
          <Projects title="Hackathons" jsonPath="/hackathons.json" />
        </div>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-6 h-6" />
                <a href="mailto:Ar.herrera0@gmail.com" className="text-blue-600 hover:underline">
                  Ar.herrera0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-6 h-6" />
                <a
                  href="https://www.linkedin.com/in/%C3%A1ngel-ren%C3%A9-herrera-calzada-b75816167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Ángel René Herrera Calzada. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#experience">
            Experience
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#education">
            Education
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}