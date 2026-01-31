import React from "react";
import { useModalStore } from "../stores/useModalStore";
import { easeOut, motion, scale } from "motion/react";

export default function ColumnCard({
  task,
  completedCount,
  totalCount,
  column,
  index,
}) {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  return (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: "6px" }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: "0px",
        transition: { duration: 0.3, delay: 0.1 * index, ease: easeOut },
      }}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3 },
      }}
      onClick={() =>
        modalOpen("VIEW__TASK", {
          columnId: column,
          task: task,
          index: index,
        })
      }
    >
      {task.title}
      <span className="subtasks">
        ({completedCount} of {totalCount} subtasks completed )
      </span>
    </motion.li>
  );
}
