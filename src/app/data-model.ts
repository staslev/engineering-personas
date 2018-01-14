export class Question {
  id: number;
  text: string;
  options: Answer[]
  selectedScore: Score;
}

export class Answer {
  label: string;
  score: Score;
}

export class Score {
  firstResponder: number;
  consultant: number;
  academic: number;
  craftsman: number;
  humanitarian: number;
}

export class Persona {
  constructor(theName: String, theDesc: string) { this.name = theName; this.desc = theDesc;}
  desc: String;
  name: String;
}

export class FirstResponder extends Persona {
 constructor() {
        super('First-Responder',
        "Your are primarily motivated by the energy and attention focused on a specific problem." +
        "\nYou excel at diving into a problem unprompted, and you learn by pushing boundaries." +
        "\nYou will often find first responders well positioned as SREs or managing operational incidents." +
        "\nWorking on projects that have long lifecycles will bore you, which eventually manifests as a lack of motivation.");
    }
}

export class Consultant extends Persona {
 constructor() {
        super('Consultant',
        "You are primarily motivated by the satisfaction of customer requirements." +
        "\nYou like to understand a problem and connect the dots from the current state of the world to a solution." +
        "\nConsultants are well placed in consultancies and teams that interact with stakeholders on a regular basis." +
        "\nYou are frustrated by projects without clear success criteria.");
    }
}

export class Academic extends Persona {
 constructor() {
        super('Academic',
        "You are primarily motivated by the exploration and development of ideas." +
        "\nIdiosyncrasies present a wide spectrum of what one would consider an interesting idea:" +
        "\neverything from actual academic literature to informally accrued observations over one's career." +
         "\nTo academics, the concept is often more important than the code that instantiates it." +
         "\nAcademics are a wonderful fit both on teams that don't have strong delivery goals (R&D)" +
         " and teams that are working in cutting edge arenas where best practices aren't yet defined or widely known." +
         " As the name implies, many Academics have PhDs and higher degrees, and are found in academia.");
    }
}


export class Craftsman extends Persona {
 constructor() {
        super('Craftsman',
        "You are primarily motivated by the feeling of achievement as you increase your experience and hone their skill." +
         "\nHow code is written is often more important to them than the purpose of the program." +
         "\nCraftspeople often champion specific practices like TDD, pair programming, or even agile/scrum methodologies." +
         "\nMentorship, pairing, and some evangelism often come easily to craftspeople, as it reinforces and celebrates their skill development." +
         "\nPromoting a hack for the sake of expediency feels like a loss to them.");
    }
}

export class Humanitarian extends Persona {
 constructor() {
        super('Humanitarian',
        "You are primarily motivated by the impact that your work has on a community with which you identify." +
         "\nThis could be a programming community, a company, or the industry in which you work." +
         "\nOn small scales this manifests as mentorship; on larger scales," +
         " you can often find humanitarian speaking at or even organizing conferences and events." +
         "\nOrganizational norms, company culture, and communication is a component of job satisfaction " +
         "for Humanitarians, and the mission of the organization or the value supplied by the product are" +
         " often more important to them than the code that they specifically work on." +
         "\nHumanitarians find sterile work conditions heavily focused on performance metrics " +
         "(lines of code shipped, cumulative point velocity, bugs squashed, etc.) deeply unsatisfying.");
    }
}
