import { IoSettingsOutline } from "react-icons/io5";

import { SideBarItem } from "./SideBarItem";

export function Sidebar() {
	return (
		<div className="max-w-2xl mx-auto">
			<aside aria-label="Sidebar" className="w-64">
				<div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2">
						<SideBarItem icon="home" route="/dashboard" title="Dashboard" />
						<SideBarItem icon="users" route="/fav" title="お気に入り" />
						<SideBarItem icon="folder" route="/projects" title="Projects" />
						<SideBarItem icon="calendar" route="/calendar" title="Calendar" />
						<SideBarItem
							icon={<IoSettingsOutline />}
							route="/設定"
							title="設定"
						/>
					</ul>
				</div>
			</aside>
		</div>
	);
}
