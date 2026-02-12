import Navbar from "@/components/Navbar";
import { useAuth } from "@/lib/auth";
import { mockRooms, mockPosts } from "@/lib/mockData";
import { User, MessageCircle, Heart, Calendar } from "lucide-react";
import RoomCard from "@/components/RoomCard";

export default function UserProfile() {
  const { userEmail } = useAuth();
  const joinedRooms = mockRooms.slice(0, 4);
  const userPostCount = mockPosts.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 py-10">
        {/* Profile Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User size={36} />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">Tarun Adithya</h1>
              <p className="text-sm text-muted-foreground">{userEmail}</p>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MessageCircle size={14} /> {userPostCount} posts</span>
                <span className="inline-flex items-center gap-1"><Heart size={14} /> {joinedRooms.length} rooms</span>
                <span className="inline-flex items-center gap-1"><Calendar size={14} /> Joined Feb 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {[
            { label: "Posts Shared", value: userPostCount, icon: "📝" },
            { label: "Rooms Joined", value: joinedRooms.length, icon: "🏠" },
            { label: "Replies Given", value: 12, icon: "💬" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
              <span className="mb-1 block text-2xl">{stat.icon}</span>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Joined Rooms */}
        <h2 className="mb-4 font-display text-xl font-bold text-foreground">Your Rooms</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {joinedRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}
