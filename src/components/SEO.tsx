import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Nikhil Bhadauriya | Python Full Stack Developer",
  description = "Python Full Stack Developer specializing in React, Node.js, Django, FastAPI, PostgreSQL, MERN Stack, SaaS Development and Modern Web Applications.",
  image = "/favicon.svg",
  url = "https://nikhilbhadauriya.com",
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta Tags Helper
    const setMetaTag = (attr: string, value: string, content: string) => {
      let element = document.head.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', description);

    // Open Graph / Facebook
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:site_name', "Nikhil Bhadauriya Portfolio");

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 3. JSON-LD Structured Data
    let scriptElement = document.getElementById('jsonld-seo') as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'jsonld-seo';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nikhil Bhadauriya",
      "jobTitle": "Python Full-Stack Developer & SaaS Builder",
      "url": url,
      "sameAs": [
        "https://github.com/nikhilbhadauriya", // Fallback or updated standard profiles
        "https://linkedin.com/in/nikhilbhadauriya",
        "https://x.com/nikhilbhadauriya"
      ],
      "description": description,
      "knowsAbout": [
        "Python",
        "Django",
        "FastAPI",
        "Flask",
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "DevOps",
        "SaaS Development"
      ]
    };

    scriptElement.textContent = JSON.stringify(structuredData);

    return () => {
      // Clean up JSON-LD script if SEO unmounts (optional but good practice)
      // We can leave it as it persists state
    };
  }, [title, description, image, url]);

  return null; // This component works strictly through side effects
}
