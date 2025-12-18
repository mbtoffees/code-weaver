const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center h-16 px-4">
        <a href="/" className="font-mono font-semibold text-foreground tracking-tight hover:text-primary transition-colors">
          Brooker Systems
        </a>
      </div>
    </header>
  );
};

export default Header;
