export default function ProjectsDetails({ 
  params 
  }: { 
    params: { project_id: string } }
) {
  return (
    <div>
      <h1>Project Details</h1>
      <p>Here you can find more information about our {params.project_id} project.</p>
    </div>
  );
}
