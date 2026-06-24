const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-3 font-semibold text-foreground tracking-tight hover:text-primary transition-colors">
          <img src="/brooker-mark.png" alt="" className="h-8 w-8 rounded-md object-contain bg-white/95 p-0.5" />
          <span>Brooker Systems</span>
        </a>
        <nav className="hidden items-center gap-6 font-mono text-xs text-muted-foreground sm:flex">
          <a href="#work" className="transition-colors hover:text-primary">Work</a>
          <a href="#capabilities" className="transition-colors hover:text-primary">Capabilities</a>
          <a href="#process" className="transition-colors hover:text-primary">Process</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
