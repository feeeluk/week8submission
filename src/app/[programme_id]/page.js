import { connect } from "@/utilities/connect";
import Image from "next/image";
import Link from "next/link";
//import { LikeButton } from "@/components/LikeButton";

export default async function ProgrammePage({params}){
    const db = connect()
    const programmeInfo = (await db.query(`SELECT *
                                    FROM programmes
                                    WHERE programme_id = $1`, [params.programme_id])).rows[0]

    const programmeEpisodes = (await db.query(`SELECT seasons.season_id AS sn_id, seasons.season_name AS sn_name, episodes.episode_id AS e_id, episodes.episode_name AS e_name, episodes.episode_image AS e_image
                                        FROM programmes
                                        JOIN seasons ON programmes.programme_id = seasons.programme_id
                                        JOIN episodes ON seasons.season_id = episodes.season_id
                                        WHERE programmes.programme_id = $1
                                        GROUP BY sn_id, sn_name, e_id, e_name, e_image
                                        ORDER BY sn_id, e_id`, [params.programme_id])).rows

    return(
        <>
            <div>
                <h1>Name: {programmeInfo.programme_name}</h1>
                <h1>Description: {programmeInfo.programme_description}</h1>
                <Image height={400} width={250} src={programmeInfo.programme_image} />
                {/* <LikeButton /> */}
            </div>

            <div>Episodes:
                {programmeEpisodes.map((episode) => {
                    return(
                            <Link href={`/${programmeInfo.programme_id}/${episode.e_id}`} key={episode.e_name}>
                                <div>
                                    <Image height={100} width={150} src={episode.e_image} key={episode.e_name} />
                                    <h1 key={episode.e_name}>{episode.sn_name} : {episode.e_name}</h1>
                                </div>
                            </Link>
                    )
                })}
            </div>
        </>
    )
}