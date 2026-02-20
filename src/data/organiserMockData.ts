export interface DashboardStat {
  label: string;
  value: string | number;
  change: string;
  icon: string;
}

export const dashboardStats: DashboardStat[] = [
  { label: "Total Hackathons", value: 12, change: "+3 this month", icon: "trophy" },
  { label: "Active Now", value: 3, change: "2 ending soon", icon: "zap" },
  { label: "Total Participants", value: 2450, change: "+180 this week", icon: "users" },
  { label: "Submissions", value: 342, change: "+28 today", icon: "file-text" },
];

export const participationTrend = [
  { month: "Aug", participants: 180, teams: 45 },
  { month: "Sep", participants: 320, teams: 80 },
  { month: "Oct", participants: 250, teams: 62 },
  { month: "Nov", participants: 410, teams: 103 },
  { month: "Dec", participants: 380, teams: 95 },
  { month: "Jan", participants: 520, teams: 130 },
  { month: "Feb", participants: 490, teams: 122 },
];

export const domainDistribution = [
  { name: "AI/ML", value: 35 },
  { name: "Web3", value: 20 },
  { name: "HealthTech", value: 18 },
  { name: "FinTech", value: 15 },
  { name: "IoT", value: 12 },
];

export interface OrgHackathon {
  id: string;
  title: string;
  status: "draft" | "open" | "ongoing" | "completed";
  participants: number;
  teams: number;
  startDate: string;
  endDate: string;
}

export const orgHackathons: OrgHackathon[] = [
  { id: "1", title: "AI Innovation Challenge", status: "open", participants: 342, teams: 86, startDate: "2026-03-15", endDate: "2026-03-17" },
  { id: "2", title: "Web3 Builder Sprint", status: "ongoing", participants: 560, teams: 140, startDate: "2026-02-20", endDate: "2026-02-22" },
  { id: "3", title: "HealthTech Innovators", status: "draft", participants: 0, teams: 0, startDate: "2026-05-10", endDate: "2026-05-12" },
  { id: "4", title: "FinTech Disrupt 2025", status: "completed", participants: 890, teams: 223, startDate: "2025-12-01", endDate: "2025-12-03" },
];