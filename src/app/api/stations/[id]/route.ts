import { STATION_DB } from "../stations";

export const GET = async ( request: Request, { params }: { params: { id: string }} ) => {
    
    const station = STATION_DB.find((item) => item.id === params.id);

    console.log(station);
    if (!station) {
        return Response.json({ message: 'station not found' });
    }

    return Response.json(station);
};
