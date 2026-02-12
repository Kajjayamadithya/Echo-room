import Navbar from "@/components/Navbar";
import MoodChart from "@/components/MoodChart";
import EmotionBadge from "@/components/EmotionBadge";
import { mockRooms, mockPosts, mockMoodData } from "@/lib/mockData";
import { Users, MessageCircle, AlertTriangle, Shield, Flag, Bot } from "lucide-react";

export default function AdminDashboard() {
  const totalPosts = mockPosts.length;
  const flaggedPosts = mockPosts.filter((p) => p.flaggedNoReply).length;
  const toxicPosts = mockPosts.filter((p) => p.flaggedToxic).length;
  const aiReplies = mockPosts.reduce((acc, p) => acc + p.replies.filter((r) => r.isAI).length, 0);

  const stats = [
    { label: "Total Rooms", value: mockRooms.length, icon: Users, color: "text-primary" },
    { label: "Total Posts", value: totalPosts, icon: MessageCircle, color: "text-primary" },
    { label: "Flagged (No Reply)", value: flaggedPosts, icon: AlertTriangle, color: "text-accent" },
    { label: "Toxic Flagged", value: toxicPosts, icon: Flag, color: "text-destructive" },
    { label: "AI Replies", value: aiReplies, icon: Bot, color: "text-primary" },
    { label: "Active Members", value: 1367, icon: Shield, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Monitor community health and AI moderation</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-5 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon size={28} className={stat.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Mood Overview */}
        <div className="mb-10 glass-card rounded-xl p-6">
          <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Platform-Wide Mood Trends</h2>
          <MoodChart data={mockMoodData["default"]} />
        </div>

        {/* Room Overview */}
        <div className="mb-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Room Overview</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Room</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Members</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Posts</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Top Emotion</th>
                </tr>
              </thead>
              <tbody>
                {mockRooms.map((room) => (
                  <tr key={room.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {room.emoji} {room.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{room.memberCount}</td>
                    <td className="px-4 py-3 text-muted-foreground">{room.postCount}</td>
                    <td className="px-4 py-3"><EmotionBadge emotion={room.topEmotion} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Flagged Posts */}
        <div>
          <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Flagged Posts (No Replies)</h2>
          <div className="space-y-3">
            {mockPosts.filter((p) => p.flaggedNoReply).map((post) => (
              <div key={post.id} className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{post.authorAlias}</span>
                    <EmotionBadge emotion={post.emotion} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">
                    <AlertTriangle size={12} /> Needs attention
                  </span>
                </div>
                <p className="text-sm text-foreground">{post.content}</p>
              </div>
            ))}
            {mockPosts.filter((p) => p.flaggedNoReply).length === 0 && (
              <p className="py-8 text-center text-muted-foreground">No flagged posts — community is healthy! 🌿</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
