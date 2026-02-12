import { Emotion, EMOTION_ICONS, EMOTION_LABELS } from "@/lib/mockData";

export default function EmotionBadge({ emotion, size = "sm" }: { emotion: Emotion; size?: "sm" | "md" }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium emotion-badge-${emotion} ${size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"}`}>
      {EMOTION_ICONS[emotion]} {EMOTION_LABELS[emotion]}
    </span>
  );
}
