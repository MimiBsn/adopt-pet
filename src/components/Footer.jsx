const Footer = () => {
  const [bottomPosition, setBottomPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.getElementById("footer").offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollY >= documentHeight - footerHeight) {
        setBottomPosition(0);
      } else {
        setBottomPosition(-footerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer id="footer" className="footer" style={{ bottom: bottomPosition }}>
      {/* Footer content goes here */}
    </footer>
  );
};

export default Footer;
