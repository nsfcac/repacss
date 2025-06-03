import img_control from "./assets/rmt_ctrl.png";
import img_schedule from "./assets/schedule.png";
import img_checkpoint from "./assets/checkpoint.png";

export const innovationsSection = {
  title: "Latest Innovations",
  subheading1_1: "Discover Our Cutting-edge",
  subheading1_2:
    " HPC Data Center and AI Infrastructure Management Technologies",
  innovations: [
    {
      title: "Remote Data Center Management",
      description:
        "Effective management of data centers powered by variable energy necessitates advanced remote monitoring and control systems. REPACSS is developing sophisticated tools that enable real-time oversight and intervention, ensuring optimal performance, swift issue resolution, and seamless adaptation to the variable energy availability.",
      visual: img_control,
    },
    {
      title: "Workflow Scheduling Integration",
      description:
        "Aligning computational workloads with fluctuating energy availability is critical for efficiency. REPACSS is creating intelligent scheduling algorithms that synchronize scientific computing tasks with energy production forecasts. This integration enhances resource utilization, minimizes downtime, and leverages periods of peak energy generation.",
      visual: img_schedule,
    },
    {
      title: "Checkpointing and Restore Techniques",
      description:
        "To safeguard ongoing computations against potential energy disruptions, REPACSS is implementing advanced checkpointing and restore methods. These techniques allow scientific applications to save their current state periodically, facilitating rapid recovery and continuity in the event of power variability, thereby ensuring data integrity and computational reliability.",
      visual: img_checkpoint,
    },
  ],
  visual: "innovations-section-image.jpg",
};
