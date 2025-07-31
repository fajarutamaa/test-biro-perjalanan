export const responseTrips = (trips: any[]) => {
    return trips.map((trip) => ({
        id: Number(trip.id),
        destination_id: Number(trip.destination_id),
        trip_status: Number(trip.trip_status),
        user_id: trip.user_id,
        created_by: trip.created_by,
        schedule_at: new Date(trip.schedule_at).toISOString().split('T')[0],
    }))
}
