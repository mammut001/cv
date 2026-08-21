import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.paytonpei.top"),
  title: `${RESUME_DATA.name} — Software Engineer`,
  description: RESUME_DATA.summary,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${RESUME_DATA.name} — Software Engineer`,
    description: RESUME_DATA.summary,
    url: "https://cv.paytonpei.top",
    siteName: `${RESUME_DATA.name} — CV`,
    type: "profile",
    images: [RESUME_DATA.avatarUrl],
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} — Software Engineer`,
    description: RESUME_DATA.about,
    images: [RESUME_DATA.avatarUrl],
  },
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-4xl space-y-10 bg-white print:max-w-2xl print:space-y-4">
        <header className="flex items-start justify-between gap-6 border-b border-muted pb-7 print:border-0 print:pb-0">
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight print:text-2xl">
              {RESUME_DATA.name}
            </h1>
            <p className="max-w-2xl text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>

            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`} aria-label="Email">
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}

              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <a key={social.name} href={social.url}>
                  <span className="underline">{social.url.replace("https://", "")}</span>
                </a>
              ))}
            </div>
          </div>

          <Avatar className="size-20 shrink-0 md:size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </header>

        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="max-w-3xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section className="scroll-mb-16">
          <div className="space-y-1">
            <h2 className="text-xl font-bold">Selected Projects</h2>
            <p className="font-mono text-xs text-muted-foreground print:hidden">
              Recent work across local AI systems, native apps, and developer tooling.
            </p>
          </div>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={project.link.href}
              />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={`${work.company}-${work.start}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-x-4 text-base">
                  <div className="space-y-1">
                    <h3 className="inline-flex flex-wrap items-center gap-x-2 font-semibold leading-none">
                      <a
                        className="hover:underline"
                        href={work.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {work.company}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <h4 className="font-mono text-sm leading-none print:text-[12px]">
                      {work.title}
                    </h4>
                  </div>
                  <div className="shrink-0 text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 text-xs leading-relaxed print:text-[10px]">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={`${education.school}-${education.start}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-x-4 text-base">
                  <div className="space-y-1">
                    <h3 className="font-semibold leading-none">{education.school}</h3>
                    <p className="font-mono text-sm text-muted-foreground print:text-[12px]">
                      {education.degree}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {RESUME_DATA.skills.map((skill) => (
              <Badge className="print:text-[10px]" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "GitHub Portfolio",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
