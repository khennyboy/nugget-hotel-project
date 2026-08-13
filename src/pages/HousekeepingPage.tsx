import AdminSidebar from "../component/AdminSidebar";
import AdminTopbar from "../component/AdminTopbar";
import KeyTag from "../component/KeyTag";
import { housekeepingTasks } from "../mock/data";

const navItems = [
  { label: "My tasks", active: true },
  { label: "Room status" },
];

export default function HousekeepingPage() {
  const completedCount = housekeepingTasks.filter((t) => t.done).length;

  return (
    <div className="flex min-h-screen bg-sand">
      <AdminSidebar navItems={navItems} role="Housekeeping" name="Hauwa Sani" branch="Birnin Kebbi · Morning shift" />
      <div className="flex-1 px-9 py-7 min-w-0">
        <AdminTopbar title="Today's cleaning list" subtitle={`${completedCount} of ${housekeepingTasks.length} tasks complete`} />

        <div className="flex flex-col gap-2.5">
          {housekeepingTasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3.5 bg-white border border-line rounded-[10px] px-4 py-3">
              {/* PATCH /housekeeping-tasks/:id { done: true } */}
              <button
                className={`w-5 h-5 rounded-[5px] border-[1.5px] flex-shrink-0 ${task.done ? "bg-teal border-teal" : "border-line"}`}
              />
              <div className="font-mono font-semibold text-[13.5px] w-[70px]">{task.room}</div>
              <div className="flex-1 text-[13px]">
                {task.title}
                <div className="text-[11.5px] text-textMute mt-0.5">{task.detail}</div>
              </div>
              <KeyTag variant={task.done ? "approved" : "pending"}>{task.done ? "done" : "pending"}</KeyTag>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
