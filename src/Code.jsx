import React from "react";
import {
  Dumbbell,
  Users,
  Calendar,
  Activity,
  CreditCard,
  AlertCircle,
  Search,
  ChevronRight,
  Settings,
  Bell,
  LogOut,
  LayoutDashboard,
  BookOpen,
  Briefcase,
  BarChart3,
  MessageSquare,
  KeySquare,
  Package,
  Shield,
  User
} from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { motion } from "framer-motion";

// Simple shadcn-like card primitives
export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl ${className}`}>
      {children}
    </div>
  );
}
export function CardHeader({ className = "", children }) {
  return <div className={`p-5 border-b border-zinc-800 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-zinc-100 text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

const kpi = [
  { label: "Active Members", value: 1287, delta: "+4.2%", icon: Users },
  { label: "Monthly Revenue", value: "$82,430", delta: "+6.8%", icon: CreditCard },
  { label: "Avg. Attendance", value: "72%", delta: "+2.1%", icon: Activity },
  { label: "New Signups", value: 156, delta: "+12", icon: Dumbbell },
];

const attendanceTrend = [
  { day: "Mon", rate: 65 },
  { day: "Tue", rate: 72 },
  { day: "Wed", rate: 70 },
  { day: "Thu", rate: 68 },
  { day: "Fri", rate: 75 },
  { day: "Sat", rate: 84 },
  { day: "Sun", rate: 58 },
];

const revenueBars = [
  { month: "Jan", revenue: 54000 },
  { month: "Feb", revenue: 59000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 72000 },
  { month: "May", revenue: 78000 },
  { month: "Jun", revenue: 82430 },
];

const membershipPie = [
  { name: "Monthly", value: 43 },
  { name: "Quarterly", value: 22 },
  { name: "Yearly", value: 27 },
  { name: "Corporate", value: 8 },
];

const equipmentUtil = [
  { name: "Utilization", value: 78, fill: "#6366f1" },
  { name: "Idle", value: 22, fill: "#27272a" },
];

const recentMembers = [
  { name: "Ayesha Khan", plan: "Yearly", joined: "12 Sep", status: "Active" },
  { name: "Rohit Mehra", plan: "Monthly", joined: "18 Sep", status: "Payment due" },
  { name: "Sara Dsouza", plan: "Quarterly", joined: "22 Sep", status: "Active" },
  { name: "Arjun Gupta", plan: "Corporate", joined: "25 Sep", status: "Active" },
];

export default function Code() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-200">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/50 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <Dumbbell className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-semibold tracking-tight">IronPulse Admin</span>
          <div className="ml-auto hidden md:flex items-center gap-2">
            <div className="relative">
              <input
                className="w-72 rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search members, classes, invoices"
              />
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
            </div>
            <button className="relative p-2 rounded-xl hover:bg-zinc-900">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-rose-500 rounded-full" />
            </button>
            <button className="p-2 rounded-xl hover:bg-zinc-900">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-xl hover:bg-zinc-900">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="xl:col-span-3 space-y-6">
          {/* Admin Profile */}
          <Card>
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-zinc-800 grid place-items-center">
                <User className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="min-w-0">
                <div className="text-sm text-zinc-400">Logged in as</div>
                <div className="font-semibold truncate">Aarav Sharma</div>
                <div className="text-xs text-zinc-500">Super Admin</div>
              </div>
              <button className="ml-auto text-xs px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-indigo-500">View</button>
            </CardContent>
          </Card>

          {/* Sidebar Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {[
                { label: "Management", icon: LayoutDashboard },
                { label: "Workout & Diet Plans", icon: Dumbbell },
                { label: "Gym Blog", icon: BookOpen },
                { label: "Services", icon: Briefcase },
                { label: "Reports & Analytics", icon: BarChart3 },
                { label: "Notifications & Communication", icon: MessageSquare },
                { label: "Authentication", icon: KeySquare },
                { label: "Product", icon: Package },
                { label: "Security", icon: Shield },
                { label: "Settings", icon: Settings },
              ].map((item, idx) => (
                <button
                  key={item.label}
                  className="group w-full flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
                >
                  <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400" />
                  <span className="text-sm truncate text-left">{item.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100" />
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {[
                { label: "Add Member", icon: Users },
                { label: "New Class", icon: Calendar },
                { label: "Bill Now", icon: CreditCard },
                { label: "Alert", icon: AlertCircle },
              ].map((a) => (
                <button
                  key={a.label}
                  className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3 hover:border-indigo-500 hover:bg-zinc-900/70 transition"
                >
                  <a.icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400" />
                  <span className="text-sm">{a.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition" />
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Today’s Classes */}
          <Card>
            <CardHeader>
              <CardTitle>Today’s Classes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "HIIT Burn", time: "07:00 AM", coach: "Maya" },
                { title: "Strength 101", time: "09:30 AM", coach: "Arjun" },
                { title: "Spin Power", time: "06:00 PM", coach: "Zoya" },
              ].map((c) => (
                <div key={c.title} className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  <div className="text-sm">
                    <div className="font-medium">{c.title}</div>
                    <div className="text-zinc-400">{c.time} • Coach {c.coach}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>

        {/* Main content */}
        <section className="xl:col-span-9 space-y-6">
          {/* KPI Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpi.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-zinc-800">
                        <item.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="ml-auto text-xs text-emerald-400 font-medium">{item.delta}</div>
                    </div>
                    <div className="mt-4 text-2xl font-bold tracking-tight text-zinc-100">{item.value}</div>
                    <div className="text-xs text-zinc-400 mt-1">{item.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Attendance Trend</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceTrend} margin={{ left: 0, right: 12, top: 8, bottom: 0 }}>
                    <XAxis dataKey="day" stroke="#71717a" tickLine={false} axisLine={{ stroke: "#3f3f46" }} />
                    <YAxis stroke="#71717a" tickLine={false} axisLine={{ stroke: "#3f3f46" }} />
                    <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #27272a", borderRadius: 12 }} />
                    <Legend />
                    <Line type="monotone" dataKey="rate" stroke="#818cf8" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equipment Utilization</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart innerRadius="60%" outerRadius="100%" data={equipmentUtil} startAngle={90} endAngle={-270}>
                    <RadialBar minAngle={15} background clockWise dataKey="value" />
                    <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #27272a", borderRadius: 12 }} />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="text-center mt-2 text-sm text-zinc-400">Last 7 days</div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue + Membership */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueBars}>
                    <XAxis dataKey="month" stroke="#71717a" tickLine={false} axisLine={{ stroke: "#3f3f46" }} />
                    <YAxis stroke="#71717a" tickLine={false} axisLine={{ stroke: "#3f3f46" }} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                    <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #27272a", borderRadius: 12 }} />
                    <Bar dataKey="revenue" radius={[10, 10, 6, 6]} fill="#22d3ee" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Membership Mix</CardTitle>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={membershipPie} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={4}>
                      {membershipPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={["#a78bfa", "#22d3ee", "#34d399", "#f472b6"][index % 4]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #27272a", borderRadius: 12 }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Members */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Members</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-400">
                    <th className="py-2 font-medium">Name</th>
                    <th className="py-2 font-medium">Plan</th>
                    <th className="py-2 font-medium">Joined</th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium" />
                  </tr>
                </thead>
                <tbody>
                  {recentMembers.map((m) => (
                    <tr key={m.name} className="border-t border-zinc-800 hover:bg-zinc-900/40">
                      <td className="py-3">{m.name}</td>
                      <td className="py-3">{m.plan}</td>
                      <td className="py-3">{m.joined}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-lg text-xs ${
                            m.status === "Active"
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                              : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          {m.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <button className="text-indigo-400 hover:text-indigo-300 text-xs">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 py-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} IronPulse. All rights reserved.
      </footer>
    </div>
  );
}
