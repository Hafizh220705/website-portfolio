export default function Footer() {
  const links = [
    { href: "https://github.com/Hafizh220705", icon: "mdi:github", label: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/hafizhfadhlm/", icon: "mdi:linkedin", label: "LinkedIn", external: true },
    { href: "https://instagram.com/hafizhfadhlm", icon: "mdi:instagram", label: "Instagram", external: true },
    { href: "mailto:hafizhfadhl22@gmail.com", icon: "mdi:email-outline", label: "Email", external: false },
  ];

  return (
    <footer className="mt-24 py-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
      <div className="flex items-center gap-2">
        <span className="font-medium text-neutral-400">Hafizh Fadhl Muhammad</span>
        <span>&copy; 2026</span>
      </div>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
          >
            {/* @ts-expect-error iconify web component */}
            <iconify-icon icon={link.icon} width="16" height="16" class="opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}