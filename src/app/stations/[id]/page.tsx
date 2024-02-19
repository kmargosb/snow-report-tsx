'use client'

import { Stations } from "@/app/page";
import { useEffect, useState } from "react";


const Page = ({ params }: { params: { id: string } }) => {

    const [stationData, setStationData] = useState<Stations | null>(null)

    useEffect(() => {
        console.log('render station list')
        const getData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/stations/${params.id}`);
                const data = await response.json()
                setStationData(data)
            } catch (error) {
                console.error(error);
            }
        };
        getData();
        console.log('unmount station list')

    }, []);

    console.log(stationData)

    return (
        <>
            {stationData?.country}
        </>
    )
}

export default Page