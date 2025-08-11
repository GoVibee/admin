const bookings = [
    { customer: 'Clara Bennett', venue: 'The Golden Spoon', date: '2024-07-26', time: '7:00 PM', status: 'Confirmed' },
    { customer: 'Owen Carter', venue: 'The Velvet Lounge', date: '2024-07-26', time: '9:00 PM', status: 'Pending' },
    { customer: 'Isabella Hayes', venue: 'The Cozy Corner', date: '2024-07-27', time: '10:00 AM', status: 'Confirmed' },
    { customer: 'Noah Thompson', venue: 'The Neon Lights', date: '2024-07-27', time: '11:00 PM', status: 'Cancelled' },
    { customer: 'Ava Mitchell', venue: 'The Daily Grind', date: '2024-07-28', time: '8:00 AM', status: 'Confirmed' },
];

const statusStyles: { [key: string]: string } = {
    Confirmed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancelled: 'bg-red-100 text-red-700',
};

export default function RecentBookings() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm font-plus">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Bookings</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-sm text-gray-500 border-b">
                            <th className="py-3 px-4 font-normal">Customer</th>
                            <th className="py-3 px-4 font-normal">Venue</th>
                            <th className="py-3 px-4 font-normal">Date</th>
                            <th className="py-3 px-4 font-normal">Time</th>
                            <th className="py-3 px-4 font-normal">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className="border-b last:border-none">
                                <td className="py-4 px-4 text-gray-700 font-medium">{booking.customer}</td>
                                <td className="py-4 px-4 text-gray-600">{booking.venue}</td>
                                <td className="py-4 px-4 text-gray-600">{booking.date}</td>
                                <td className="py-4 px-4 text-gray-600">{booking.time}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[booking.status]}`}>
                                        {booking.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}