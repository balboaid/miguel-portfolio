export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      
      {/* Background estilo 9z */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-80" />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-10 blur-3xl rounded-full top-[-100px]" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Miguel Fredman Nwafor
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Creative Technologist and High End Digital Builder
        </p>

        <button className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600 transition">
          View Work
        </button>
      </div>
    </section>
  );
}