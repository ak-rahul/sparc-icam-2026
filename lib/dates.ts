export interface ConferenceEvent {
    event: string;
    dateStr: string;
    date: Date;
    description: string;
}

export const conferenceEvents: ConferenceEvent[] = [
    {
        event: "Abstract Submission Starts",
        dateStr: "February 03, 2026",
        date: new Date("2026-02-03T00:00:00"),
        description: "Portal opens for abstract and full paper submissions.",
    },
    {
        event: "Abstract Submission Ends",
        dateStr: "February 23, 2026",
        date: new Date("2026-02-23T23:59:59"),
        description: "Deadline for submitting broad abstracts and papers.",
    },
    {
        event: "Registration Deadline",
        dateStr: "February 25, 2026",
        date: new Date("2026-02-25T23:59:59"),
        description: "Last date to register for the conference.",
    },
    {
        event: "Notification of Acceptance",
        dateStr: "February 28, 2026",
        date: new Date("2026-02-28T23:59:59"),
        description: "Authors will be notified of review results.",
    },
    {
        event: "Conference Dates",
        dateStr: "March 05-06, 2026",
        date: new Date("2026-03-05T09:00:00"), // Main event start
        description: "The main event at CUSAT.",
    }
];

export function getCurrentPhaseConfig() {
    const now = new Date();

    // Default to waiting for the conference
    let currentPhaseTitle = "Awaiting Conference";
    let phaseStart = conferenceEvents[3].date; // Notification date
    let phaseEnd = conferenceEvents[4].date; // Conference starts
    let nextDeadlineTitle = "Until the conference begins";
    let statusText = "Open";

    if (now < conferenceEvents[0].date) {
        currentPhaseTitle = "Abstract Submission";
        phaseStart = new Date("2026-01-01T00:00:00"); // Arbitrary past date for progress
        phaseEnd = conferenceEvents[0].date;
        nextDeadlineTitle = "Until abstract submission opens";
        statusText = "Upcoming";
    } else if (now <= conferenceEvents[1].date) {
        currentPhaseTitle = "Abstract Submission";
        phaseStart = conferenceEvents[0].date;
        phaseEnd = conferenceEvents[1].date;
        nextDeadlineTitle = "Until abstract submission ends";
        statusText = "Open Now";
    } else if (now <= conferenceEvents[2].date) {
        currentPhaseTitle = "Registration";
        phaseStart = conferenceEvents[1].date;
        phaseEnd = conferenceEvents[2].date;
        nextDeadlineTitle = "Until registration closes";
        statusText = "Open Now";
    } else if (now <= conferenceEvents[3].date) {
        currentPhaseTitle = "Review Phase";
        phaseStart = conferenceEvents[2].date;
        phaseEnd = conferenceEvents[3].date;
        nextDeadlineTitle = "Until acceptance notifications";
        statusText = "In Progress";
    }

    const totalDuration = phaseEnd.getTime() - phaseStart.getTime();
    const elapsed = now.getTime() - phaseStart.getTime();
    let progressPercent = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));

    return {
        currentPhaseTitle,
        phaseStart,
        phaseEnd,
        nextDeadlineTitle,
        statusText,
        progressPercent,
        targetDate: conferenceEvents[4].date
    };
}
