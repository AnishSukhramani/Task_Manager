import {
	SearchOutline,
} from "react-ionicons";

const Navbar = () => {
	return (
		<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-center pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-none bg-[#000000]">
			{/* <div className="flex items-center gap-3 cursor-pointer">
				<PersonCircle
					color="#ffff"
					width={"28px"}
					height={"28px"}
				/>
				<span className="text-white font-semibold md:text-lg text-sm whitespace-nowrap">
					Board Name
				</span>
				<ChevronDown
					color="#ffff"
					width={"16px"}
					height={"16px"}
				/>
			</div> */}
			<div className="md:w-[800px] w-[130px] bg-[#0f0f0f] rounded-lg px-3 py-[10px] flex items-center gap-2">
				<SearchOutline color={"#999"} />
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-[#0f0f0f] outline-none text-[15px]"
					color="white"
				/>
			</div>
			{/* <div className="md:flex hidden items-center gap-4">
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<ShareSocialOutline color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<SettingsOutline color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<NotificationsOutline color={"#444"} />
				</div>
			</div> */}
		</div>
	);
};

export default Navbar;
