import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const ProjectsSchema = new mongoose.Schema(
  {
    prj_name: { type: String, required: true },
    prj_class: { type: String, required: true },
    prj_type: { type: String, required: true, unique: true },
    prj_progress: { type: Number, required: true, min: 0, max: 100, default: 0 },
    prj_image: { type: String, required: true },
  },
//   {
//     "prj_name": "Website Revamp",
//     "prj_class": "IT",
//     "prj_type": "Frontend",
//     "prj_progress": 75,
//     "prj_image": "/uploads/project1.png"
//   }
  
  { timestamps: true }
);

// 🔢 Auto-increment prj_id field
ProjectsSchema.plugin(AutoIncrement, { inc_field: "prj_id" });

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);

export default Projects;
