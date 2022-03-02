import { useState } from "react";
import { Link } from "react-router-dom";
import { Sort } from "src/generated/generates";
import { useProjectsList } from "src/utils/project";
import CreateProject from "./CreateProject";

const ProjectsList = () => {
  const [sort, setSort] = useState<Sort>(Sort.Desc);
  const { projects, isLoading, status } = useProjectsList(sort);

  return (
    <div>
      <h2>جميع المشاريع</h2>
      <CreateProject />
      {isLoading ? <p>Loading....</p> : null}
      <div className="mt-8">
        <div>
          <button onClick={() => setSort(Sort.Asc)} className="ml-2">
            ACS
          </button>
          <button onClick={() => setSort(Sort.Desc)}>DESC</button>
        </div>
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <div>
              <h2>{project.nameAr}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
