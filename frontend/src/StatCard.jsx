
function StatCard(props) {
  const Icon = props.icon;

  return (

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex min-h-[140px] stats">

      <div className="w-1.5 bg-red-600"></div>
      <div className="stat p-6">
        <div className="stat-figure absolute top-2 right-2">
          <Icon className="size-20 text-gray-300" />
        </div>
        <div className="stat-title text-gray-500 font-medium text-lg">
          {props.title}
        </div>
        <div className="stat-value text-4xl font-black">
          {props.value}
        </div>
      </div>
    </div>
  );
}

export default StatCard;