import {
	AppsOutline,
	GridOutline,
	HomeOutline,
	LogOutOutline,
	NewspaperOutline,
	NotificationsOutline,
	PeopleOutline,
	PieChartOutline,
} from "react-ionicons";

const Sidebar = () => {
	const navLinks = [
		{
			title: "Home",
			icon: (
				<HomeOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Boards",
			icon: (
				<AppsOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: true,
		},
		{
			title: "Projects",
			icon: (
				<GridOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Analytics",
			icon: (
				<PieChartOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Workflows",
			icon: (
				<PeopleOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Notifications",
			icon: (
				<NotificationsOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Newsletter",
			icon: (
				<NewspaperOutline
					color="#ffff"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
	];
	return (
		<div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
			<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#000]">
				<span className="text-white font-semibold text-2xl md:block hidden">Task Manager</span>
				<span className="text-white font-semibold text-2xl md:hidden block">A.S.</span>
			</div>
			<div className="w-full h-[calc(100vh-70px)] border-none flex flex-col md:items-start items-center gap-2  bg-[#040401] py-5 md:px-3 px-3 relative">
				{navLinks.map((link) => {
					return (
						<div
							key={link.title}
							className={`text-[#ffff] flex items-center gap-2 w-full rounded-lg hover:bg-[#0f0f0f] px-2 py-3 cursor-pointer ${
								link.active ? "bg-[#0f0f0f]" : "bg-transparent"
							}`}
						>
							{link.icon}
							<span className="font-medium text-[15px] md:block hidden">{link.title}</span>
						</div>
					);
				})}
				<div className="text-white flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-[#0f0f0f]  px-2 py-3 cursor-pointer bg-transparent">
					<LogOutOutline color={"#ffff"} />
					<span className="font-medium text-[15px] md:block hidden">Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;