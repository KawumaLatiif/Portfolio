import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shanon082', label: 'GitHub' },
    // { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:shanonsimon082@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="container-responsive section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8" />
              <span className="text-2xl font-bold">Latif Kawuma</span>
            </div>
            <p className="text-primary-200">
              Full Stack Developer crafting digital experiences with modern technologies.
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
          <p>© {new Date().getFullYear()} Latif Kawuma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;