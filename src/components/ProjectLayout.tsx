import { Link, Outlet, useParams } from "react-router-dom";
import { useProjectLinks } from "src/utils/links";

const ProjectLayout = () => {
  const projectLinks = useProjectLinks();

  return (
    <div>
      <div>
        <ul className="flex gap-8 bg-gray-400 p-2">
          {projectLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default ProjectLayout;
