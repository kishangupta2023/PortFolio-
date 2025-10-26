const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gradient-hero border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Kishan Gupta. Built with React, TypeScript & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
