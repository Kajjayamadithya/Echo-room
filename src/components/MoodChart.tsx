import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { MoodDataPoint } from "@/lib/mockData";

export default function MoodChart({ data }: { data: MoodDataPoint[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="hopeful" stackId="1" stroke="hsl(var(--emotion-hopeful))" fill="hsl(var(--emotion-hopeful) / 0.4)" />
          <Area type="monotone" dataKey="sad" stackId="1" stroke="hsl(var(--emotion-sad))" fill="hsl(var(--emotion-sad) / 0.4)" />
          <Area type="monotone" dataKey="anxious" stackId="1" stroke="hsl(var(--emotion-anxious))" fill="hsl(var(--emotion-anxious) / 0.4)" />
          <Area type="monotone" dataKey="angry" stackId="1" stroke="hsl(var(--emotion-angry))" fill="hsl(var(--emotion-angry) / 0.4)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
