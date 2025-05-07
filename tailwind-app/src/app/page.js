import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-rose-700 bg-pink-50 text-center">Home</h1>
      <p className="text-stone-800">Welcome to my homepage!</p>
    </div>
  );
}