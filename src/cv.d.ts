export interface CV {
  basics: Basics
  work: Array<Work>
  volunteer: Array<Volunteer>
  education: Array<Education>
  awards: Array<Awards>
  certificates: Array<Certificates>
  publications: Array<Publications>
  skills: Array<Skills>
  languages: Array<Languages>
  projects: Array<Projects>
}

interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  highlights: Highlight
}

type DateStr = `${string}-${string}-${string}`

interface Skills {
  soft: Array<SoftSkills>
  hard: Array<HardSkills>
}

interface SoftSkills {
  name: string
}

interface HardSkills {
  name: string
  level: LevelHardSkills
}

type LevelHardSkills = 'beginner' | 'intermediate' | 'advanced' | 'master'

interface Awards {
  title: string
  url: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string,
  logo: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: DateStr
  endDate: DateStr
  score: string
}

interface Languages {
  language: string
  fluency: Fluency
}

type Fluency = 'Native' | 'Advanced' | 'Intermediate' | 'Beginner'

interface Projects {
  name: string
  status: Status
  description: string
  highlights: Highlight
  url?: string
  github?: string
}

type Status = 'online' | 'offline' | 'wip' | 'abandoned'

type Highlight = Array<String>
