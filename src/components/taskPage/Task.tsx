import { TaskList } from "../TrailPage/TaskList";
import { TaskCard } from "./TaskCard";
import { body } from "@/lib/constants/content";

export const Task = () => {
  return (
    <div className="w-full h-full flex flex-col md:px-20 py-5 gap-3">
      {body.map((e) => {
        return(
          <p className="text-blue font-extrabold md:text-3xl text-2xl md:text-start text-center h-[6%] px-2">
          {e.gigatitle}
        </p>
        );
      })}
      <div className="w-full md:h-[94%] bg-neutralbg flex md:gap-3 flex md:flex-row flex-col">
        <TaskCard />
        <TaskList />
      </div>
    </div>
  );
};
