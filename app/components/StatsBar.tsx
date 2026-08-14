const stats = [
  { value: 'Daily', label: 'Arc ecosystem updates' },
  { value: 'Live', label: 'Stablecoin FX rates' },
  { value: 'Top', label: 'Arc projects tracked' },
  { value: 'Free', label: 'Always free to use' },
]

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:flex md:justify-center gap-8 md:gap-16 px-8 py-6 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-xl font-medium" style={{ color: '#E3C896' }}>{stat.value}</div>
          <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}