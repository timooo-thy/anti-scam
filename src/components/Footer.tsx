export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background py-10 text-center text-sm md:text-base">
      <p>© {year} SG Anti-Scam AI. All rights reserved.</p>
    </footer>
  );
}
