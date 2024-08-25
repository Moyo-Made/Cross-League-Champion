interface NavLink {
	href: string;
	label: string;
}
const navLinks: NavLink[] = [
	{ href: "/", label: "Home" },
	{ href: "/create-your-team", label: "Create Team" },
	{ href: "/my-teams", label: "My Teams" },
	{ href: "/leaderboards", label: "Leaderboards" },
	{ href: "/community", label: "Community" },
	{ href: "/blog", label: "Blog" },
];

export default navLinks;
