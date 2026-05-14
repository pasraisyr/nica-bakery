import { SiInstagram, SiTiktok, SiThreads } from 'react-icons/si';
import { Cake } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <Cake size={36} color="var(--primary)" style={{ marginRight: '15px' }} />
          Classic Craving by Nisajamal
        </div>
        
        <div className="social-links">
          <a href="https://instagram.com/nicaaakhall" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram: @nicaaakhall">
            <SiInstagram size={20} />
            <span>@nicaaakhall</span>
          </a>
          <a href="https://tiktok.com/@nicaaajml" target="_blank" rel="noopener noreferrer" className="social-link" title="TikTok: @nicaaajml">
            <SiTiktok size={20} />
            <span>@nicaaajml</span>
          </a>
          <a href="https://threads.net/@nicaaakhall" target="_blank" rel="noopener noreferrer" className="social-link" title="Threads: @nicaaakhall">
            <SiThreads size={20} />
            <span>@nicaaakhall</span>
          </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Pasraisydollah. All rights reserved. <br />
          Powered by Wesitex
        </p>
      </div>
    </footer>
  );
};

export default Footer;
