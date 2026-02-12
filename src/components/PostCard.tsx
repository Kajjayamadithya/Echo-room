import { Post } from "@/lib/mockData";
import EmotionBadge from "./EmotionBadge";
import { Clock, AlertTriangle, Bot, Flag } from "lucide-react";

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className={`glass-card rounded-xl p-5 ${post.flaggedToxic ? "border-destructive/30" : ""}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{post.authorAlias}</span>
          <EmotionBadge emotion={post.emotion} />
        </div>
        <div className="flex items-center gap-2">
          {post.flaggedNoReply && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">
              <AlertTriangle size={12} /> No replies
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={12} /> {timeAgo(post.timestamp)}
          </span>
        </div>
      </div>

      <p className="mb-4 text-foreground leading-relaxed">{post.content}</p>

      {post.replies.length > 0 && (
        <div className="space-y-3 border-t border-border pt-3">
          {post.replies.map((reply) => (
            <div key={reply.id} className={`rounded-lg p-3 ${reply.isAI ? "bg-primary/5 border border-primary/10" : "bg-muted/50"}`}>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-medium text-foreground">
                  {reply.authorAlias}
                </span>
                {reply.isAI && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    <Bot size={10} /> AI
                  </span>
                )}
                <span className="text-xs text-muted-foreground">{timeAgo(reply.timestamp)}</span>
                {reply.flaggedToxic && <Flag size={12} className="text-destructive" />}
              </div>
              <p className="text-sm text-foreground/90">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
