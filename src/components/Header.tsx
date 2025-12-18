const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <span className="font-mono font-bold text-primary text-sm">BS</span>
          </div>
          <span className="font-mono font-semibold text-foreground tracking-tight">
            Brooker Systems
          </span>
        </a>
        
        <a 
          href="mailto:hello@example.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;
