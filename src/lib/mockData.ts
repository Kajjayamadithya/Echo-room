export type Emotion = "sad" | "anxious" | "hopeful" | "angry" | "neutral";

export interface Post {
  id: string;
  roomId: string;
  content: string;
  emotion: Emotion;
  timestamp: string;
  anonymous: boolean;
  authorAlias: string;
  replies: Reply[];
  flaggedNoReply: boolean;
  flaggedToxic: boolean;
}

export interface Reply {
  id: string;
  content: string;
  authorAlias: string;
  timestamp: string;
  isAI: boolean;
  flaggedToxic: boolean;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  emoji: string;
  memberCount: number;
  postCount: number;
  topEmotion: Emotion;
  createdBy: string;
}

export interface MoodDataPoint {
  day: string;
  sad: number;
  anxious: number;
  hopeful: number;
  angry: number;
}

export interface User {
  email: string;
  name: string;
  joinedRooms: string[];
  postCount: number;
  avatar: string;
}

export const EMOTION_LABELS: Record<Emotion, string> = {
  sad: "Sad",
  anxious: "Anxious",
  hopeful: "Hopeful",
  angry: "Angry",
  neutral: "Neutral",
};

export const EMOTION_ICONS: Record<Emotion, string> = {
  sad: "😢",
  anxious: "😰",
  hopeful: "🌱",
  angry: "😤",
  neutral: "😐",
};

export const mockRooms: Room[] = [
  { id: "1", name: "Exam Stress", description: "A safe space to share your academic pressures and find support from others going through the same.", emoji: "📚", memberCount: 234, postCount: 892, topEmotion: "anxious", createdBy: "admin" },
  { id: "2", name: "Breakups & Heartache", description: "Healing together. Share your story, listen to others, and know you're not alone.", emoji: "💔", memberCount: 189, postCount: 654, topEmotion: "sad", createdBy: "admin" },
  { id: "3", name: "Loneliness", description: "Sometimes just knowing someone hears you makes all the difference.", emoji: "🌙", memberCount: 312, postCount: 1023, topEmotion: "sad", createdBy: "admin" },
  { id: "4", name: "Career Anxiety", description: "Job hunting, interviews, career changes — let's talk about the stress.", emoji: "💼", memberCount: 156, postCount: 445, topEmotion: "anxious", createdBy: "admin" },
  { id: "5", name: "Gratitude Circle", description: "Share what you're grateful for today. Small wins matter.", emoji: "🌻", memberCount: 278, postCount: 1201, topEmotion: "hopeful", createdBy: "admin" },
  { id: "6", name: "Family Struggles", description: "Navigating difficult family dynamics with empathy and understanding.", emoji: "🏠", memberCount: 198, postCount: 567, topEmotion: "angry", createdBy: "admin" },
];

export const mockPosts: Post[] = [
  {
    id: "p1", roomId: "1", content: "I have 3 finals next week and I can barely breathe. I haven't slept properly in days. Does anyone else feel like they're drowning?",
    emotion: "anxious", timestamp: "2025-02-12T10:30:00Z", anonymous: true, authorAlias: "Anonymous Owl",
    replies: [
      { id: "r1", content: "You're not alone in this. I'm going through the same thing. Try the Pomodoro technique — it helped me manage my panic.", authorAlias: "Kind Stranger", timestamp: "2025-02-12T11:00:00Z", isAI: false, flaggedToxic: false },
      { id: "r2", content: "It sounds like you're carrying a lot right now. Remember that your worth isn't defined by exam scores. Take it one hour at a time. 💚", authorAlias: "EchoBot", timestamp: "2025-02-12T11:05:00Z", isAI: true, flaggedToxic: false },
    ],
    flaggedNoReply: false, flaggedToxic: false,
  },
  {
    id: "p2", roomId: "1", content: "Just failed my midterm. I studied so hard but my mind went blank. I feel like such a failure.",
    emotion: "sad", timestamp: "2025-02-11T15:20:00Z", anonymous: true, authorAlias: "Anonymous Fox",
    replies: [
      { id: "r3", content: "One exam doesn't define you. I failed calc twice and still graduated. Keep going.", authorAlias: "Wise Panda", timestamp: "2025-02-11T16:00:00Z", isAI: false, flaggedToxic: false },
    ],
    flaggedNoReply: false, flaggedToxic: false,
  },
  {
    id: "p3", roomId: "1", content: "I just want to scream. Why does the education system feel so broken?",
    emotion: "angry", timestamp: "2025-02-10T20:15:00Z", anonymous: true, authorAlias: "Anonymous Bear",
    replies: [],
    flaggedNoReply: true, flaggedToxic: false,
  },
  {
    id: "p4", roomId: "2", content: "It's been 3 months since they left and I still reach for my phone to text them every morning. When does it stop hurting?",
    emotion: "sad", timestamp: "2025-02-12T08:00:00Z", anonymous: true, authorAlias: "Anonymous Butterfly",
    replies: [
      { id: "r4", content: "Time is your friend here, even though it doesn't feel like it. The fact that you're reaching out shows strength.", authorAlias: "EchoBot", timestamp: "2025-02-12T08:10:00Z", isAI: true, flaggedToxic: false },
    ],
    flaggedNoReply: false, flaggedToxic: false,
  },
  {
    id: "p5", roomId: "3", content: "I moved to a new city for work and I don't know a single person. Weekends are the hardest.",
    emotion: "sad", timestamp: "2025-02-11T19:00:00Z", anonymous: true, authorAlias: "Anonymous Cloud",
    replies: [
      { id: "r5", content: "Have you tried local meetup groups? I was in the same boat last year. It gets better, I promise.", authorAlias: "Friendly Spark", timestamp: "2025-02-11T19:45:00Z", isAI: false, flaggedToxic: false },
    ],
    flaggedNoReply: false, flaggedToxic: false,
  },
  {
    id: "p6", roomId: "5", content: "Today a stranger held the door open for me and smiled. Small thing, but it made my whole day.",
    emotion: "hopeful", timestamp: "2025-02-12T12:00:00Z", anonymous: false, authorAlias: "SunnyDay",
    replies: [
      { id: "r6", content: "These little moments are everything! 🌟", authorAlias: "HappyLeaf", timestamp: "2025-02-12T12:30:00Z", isAI: false, flaggedToxic: false },
    ],
    flaggedNoReply: false, flaggedToxic: false,
  },
];

export const mockMoodData: Record<string, MoodDataPoint[]> = {
  "1": [
    { day: "Mon", sad: 15, anxious: 45, hopeful: 10, angry: 20 },
    { day: "Tue", sad: 20, anxious: 50, hopeful: 8, angry: 15 },
    { day: "Wed", sad: 18, anxious: 40, hopeful: 15, angry: 18 },
    { day: "Thu", sad: 12, anxious: 55, hopeful: 12, angry: 10 },
    { day: "Fri", sad: 25, anxious: 35, hopeful: 20, angry: 8 },
    { day: "Sat", sad: 10, anxious: 20, hopeful: 30, angry: 5 },
    { day: "Sun", sad: 8, anxious: 25, hopeful: 35, angry: 6 },
  ],
  "2": [
    { day: "Mon", sad: 50, anxious: 15, hopeful: 10, angry: 12 },
    { day: "Tue", sad: 45, anxious: 18, hopeful: 15, angry: 10 },
    { day: "Wed", sad: 40, anxious: 12, hopeful: 20, angry: 8 },
    { day: "Thu", sad: 38, anxious: 10, hopeful: 25, angry: 6 },
    { day: "Fri", sad: 42, anxious: 14, hopeful: 18, angry: 9 },
    { day: "Sat", sad: 35, anxious: 8, hopeful: 30, angry: 5 },
    { day: "Sun", sad: 30, anxious: 10, hopeful: 35, angry: 4 },
  ],
  default: [
    { day: "Mon", sad: 20, anxious: 25, hopeful: 25, angry: 15 },
    { day: "Tue", sad: 22, anxious: 28, hopeful: 20, angry: 12 },
    { day: "Wed", sad: 18, anxious: 22, hopeful: 30, angry: 10 },
    { day: "Thu", sad: 15, anxious: 20, hopeful: 35, angry: 8 },
    { day: "Fri", sad: 20, anxious: 18, hopeful: 28, angry: 12 },
    { day: "Sat", sad: 12, anxious: 15, hopeful: 40, angry: 6 },
    { day: "Sun", sad: 10, anxious: 12, hopeful: 45, angry: 5 },
  ],
};

export const ANIMAL_ALIASES = [
  "Owl", "Fox", "Bear", "Butterfly", "Cloud", "Deer", "Eagle", "Fawn",
  "Giraffe", "Hawk", "Iris", "Jay", "Koala", "Lynx", "Moth", "Newt",
];

export function getRandomAlias(): string {
  const animal = ANIMAL_ALIASES[Math.floor(Math.random() * ANIMAL_ALIASES.length)];
  return `Anonymous ${animal}`;
}

export function classifyEmotion(text: string): Emotion {
  const lower = text.toLowerCase();
  if (/fail|cry|miss|hurt|lost|alone|gone|sad|pain|tear/.test(lower)) return "sad";
  if (/stress|anxious|panic|worry|scared|nervous|overwhelm|breath/.test(lower)) return "anxious";
  if (/angry|hate|furious|scream|broken|unfair|rage/.test(lower)) return "angry";
  if (/hope|grateful|thank|happy|joy|smile|better|bright|good/.test(lower)) return "hopeful";
  return "neutral";
}

export function isToxic(text: string): boolean {
  const toxicWords = /stupid|idiot|loser|dumb|shut up|worthless|pathetic/i;
  return toxicWords.test(text);
}

export function generateAIReply(emotion: Emotion): string {
  const replies: Record<Emotion, string[]> = {
    sad: [
      "It's okay to feel this way. Your feelings are valid, and brighter days are ahead. 💙",
      "Grief and sadness take time. Be gentle with yourself today.",
    ],
    anxious: [
      "Take a deep breath. You've overcome challenges before, and you will again. 🌿",
      "Anxiety often lies to us about the future. Focus on this moment — you're safe right now.",
    ],
    hopeful: [
      "What a beautiful perspective! Your positivity can inspire others here. 🌱",
      "Moments like these remind us why life is worth celebrating. Thank you for sharing! ✨",
    ],
    angry: [
      "Your frustration is understandable. It's healthy to express it in a safe space like this. 🫂",
      "Anger often signals that something important to you needs attention. What matters most here?",
    ],
    neutral: [
      "Thank you for sharing. Sometimes just putting thoughts into words helps. 💚",
      "This community is here for you, whatever you're feeling.",
    ],
  };
  const arr = replies[emotion];
  return arr[Math.floor(Math.random() * arr.length)];
}
