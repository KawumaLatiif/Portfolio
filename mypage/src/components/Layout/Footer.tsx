import { Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:kawumalatiif5@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="container-responsive section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8" />
              <span className="text-2xl font-bold">Kawuma Latiif</span>
            </div>
            <p className="text-primary-200">
              Electronics and Computer Engineer working across software, networks and data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bg-primary-800 p-3 rounded-full hover:bg-primary-700 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300">
          <p>© {new Date().getFullYear()} Kawuma Latiif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;