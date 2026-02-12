import { Link } from "react-router-dom";
import { Room } from "@/lib/mockData";
import EmotionBadge from "./EmotionBadge";
import { Users, MessageCircle } from "lucide-react";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link to={`/room/${room.id}`} className="group block">
      <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="mb-3 flex items-start justify-between">
          <span className="text-3xl">{room.emoji}</span>
          <EmotionBadge emotion={room.topEmotion} />
        </div>
        <h3 className="mb-1 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {room.name}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{room.description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Users size={14} /> {room.memberCount}</span>
          <span className="inline-flex items-center gap-1"><MessageCircle size={14} /> {room.postCount} posts</span>
        </div>
      </div>
    </Link>
  );
}
