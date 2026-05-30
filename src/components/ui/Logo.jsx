import logo from '../../assets/healtng-logo.svg';

export function Logo({ className = "h-10 w-auto" }) {
  return (
    <img 
      src={logo} 
      alt="Healtng Logo" 
      className={className} 
    />
  );
}