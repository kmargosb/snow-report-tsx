export const dynamic = 'force-dynamic';
import { STATION_DB } from './stations';

export const GET = async (request: Request) => {
    return Response.json(STATION_DB);
};
