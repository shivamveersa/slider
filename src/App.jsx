import Sidebar from "./Sidebar";
import "./index.css";

export default function App() {
	return (
		<div className="w-full h-screen grid grid-cols-[max-content_auto] bg-black">
			<Sidebar />
			<div className="bg-red-500">Main Content</div>
		</div>
	);
}
