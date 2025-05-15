'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-600">SoftSell</h2>
            <p className="mt-2 text-sm">
              Sell your unused software licenses securely and get paid fast. Simple, safe, and smart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-indigo-600">How It Works</a></li>
              <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
              <li><a href="#faq" className="hover:text-indigo-600">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-indigo-600">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.6a10 10 0 01-2.9.8A5.1 5.1 0 0023.3 3a10.1 10.1 0 01-3.2 1.3 5.1 5.1 0 00-8.7 4.6A14.4 14.4 0 013 3.2a5.1 5.1 0 001.6 6.8A5 5 0 012 9v.1a5.1 5.1 0 004.1 5 5.2 5.2 0 01-2.3.1 5.1 5.1 0 004.7 3.5A10.2 10.2 0 012 19.5 14.4 14.4 0 009.6 22c11.6 0 18-9.6 18-18v-.8A12.7 12.7 0 0024 4.6z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.4 20.4h-3.6V14c0-1.5-.5-2.5-1.7-2.5-.9 0-1.4.6-1.6 1.2-.1.3-.1.6-.1.9v6.8H9.8s.1-11 0-12.1h3.6v1.7c.5-.8 1.4-2 3.4-2 2.5 0 4.3 1.7 4.3 5.4v7zM5.4 7.3a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm1.8 13.1H3.6V8.3h3.6v12.1zM22.2 0H1.8A1.8 1.8 0 000 1.8v20.4A1.8 1.8 0 001.8 24h20.4A1.8 1.8 0 0024 22.2V1.8A1.8 1.8 0 0022.2 0z" /></svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-indigo-600">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6 1.4 1.6 1.4 1 .1 2-.8 2.5-1.2-.6-.1-1.2-.2-1.8-.6-1.5-.8-2.1-2.6-2.1-4.3 0-.9.3-1.7.8-2.4-.1-.2-.4-1 .1-2.1 0 0 .6-.2 2.2.9a7.3 7.3 0 014 0c1.6-1.1 2.2-.9 2.2-.9.5 1.1.2 1.9.1 2.1.5.7.8 1.5.8 2.4 0 1.7-.6 3.5-2.1 4.3-.6.3-1.2.5-1.8.6.5.4 1.3 1.2 2.6 1.2v2c0 .3.2.6.8.5A12 12 0 0012 .3z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-sm text-center">
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
