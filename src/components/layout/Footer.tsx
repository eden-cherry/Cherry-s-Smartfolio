import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo_footer.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className=" flex items-center font-serif text-lg font-semibold hover:opacity-80 transition-opacity">
          <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 transform filter transition duration-200 ease-out
                         group-hover:rotate-6 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-150 group-hover:hue-rotate-15 blue-500"
            />
            Cherry's Smartfolio
          </Link>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ezecherry_42?igsh=MXcxZjBwNWQxNHN0eQ=="
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors hover:scale-110 transform duration-200"
              aria-label="instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/chidinma-eze-055316184/"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1b5yTu8fcH/"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors hover:scale-110 transform duration-200"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
