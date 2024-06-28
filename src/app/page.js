import { ProgrammeCard } from "@/components/ProgrammeCard"
import { connect } from "@/utilities/connect";

export default async function Home() {
  const db = connect()
  const programmes = (await db.query(`SELECT * FROM programmes`)).rows

  return (
    
  <div className="flex flex-wrap">

    {programmes.map( (programmes) => {

    return(
      <div key={programmes.programme_id}>
        
        <ProgrammeCard programmeData={programmes} />
      </div>
    )})}
    
  </div>
  );
}
