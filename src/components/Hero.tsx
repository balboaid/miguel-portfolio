export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src="/logo.png" 
          alt="Logo Miguel" 
          className="h-10 w-auto select-none"
        />
      </div>

      {/* Menu */}
      <nav className="flex gap-6 text-sm tracking-wide">
        <Link to="home" smooth className="cursor-pointer hover:text-purple-400">Home</Link>
        <Link to="about" smooth className="cursor-pointer hover:text-purple-400">About</Link>
        <Link to="projects" smooth className="cursor-pointer hover:text-purple-400">Projects</Link>
        <Link to="contact" smooth className="cursor-pointer hover:text-purple-400">Contact</Link>
      </nav>
    </header>
  );
}