/**
 * The home page's sections, in reading order. The sidebar's wire, the section
 * headings and the mobile menu all read from this list, so a section's number
 * and name can never disagree between the map and the territory.
 */
export const sections = [
  { id: "selected", title: "Selected" },
  { id: "research", title: "Research" },
  { id: "publications", title: "Publications" },
  { id: "talks", title: "Talks" },
  { id: "media", title: "Media" },
  { id: "experience", title: "Experience" },
  { id: "awards", title: "Awards & Programs" },
  { id: "contact", title: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function sectionNumber(id: SectionId): string {
  return String(sections.findIndex((s) => s.id === id)).padStart(2, "0");
}

export function sectionTitle(id: SectionId): string {
  return sections.find((s) => s.id === id)!.title;
}
