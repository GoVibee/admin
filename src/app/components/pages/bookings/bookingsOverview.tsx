export default function BookingsOverviewChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm font-plus">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Bookings Overview</h3>
          <p className="text-sm text-gray-500">Last 30 Days</p>
        </div>
        <p className="text-green-500 font-semibold text-lg">+15%</p>
      </div>
      <div className="h-60">
        <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0,100 C50,50 100,120 150,90 S250,30 300,80 S400,130 450,100 L500,110"
            stroke="#3B0A45"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0,150 L0,100 C50,50 100,120 150,90 S250,30 300,80 S400,130 450,100 L500,110 L500,150 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}