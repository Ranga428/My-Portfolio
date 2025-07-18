export default function SampleDetails({ 
  params 
  }: { 
    params: { 
      sample_id: string 
      project_id: string
    } }
) {
  return (
    <div>
      <h1>Sample Details</h1>
      <p>Here you can find more information about our sample {params.sample_id} from project {params.project_id}.</p>
    </div>
  );
}
