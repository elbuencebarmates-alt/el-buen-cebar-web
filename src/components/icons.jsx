const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function MateIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4v5a4 4 0 0 1-4 4H8v-9Z" />
      <path d="M8 15H6.5A2.5 2.5 0 0 1 4 12.5v0A2.5 2.5 0 0 1 6.5 10H8" />
      <path d="M13 6c.5-1 .3-2-.5-2.8" />
      <path d="M17 15.5 20 18" strokeLinecap="round" />
    </svg>
  );
}

export function BombillaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 19 18 6" />
      <path d="M15 4l5 5" />
      <circle cx="6.5" cy="17.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M9 15c-1-1-1-3 0-4" />
    </svg>
  );
}

export function CanastaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 10h16l-1.4 8.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 10Z" />
      <path d="M2 10h20" />
      <path d="M8 10c0-3.5 1.8-6 4-6s4 2.5 4 6" />
    </svg>
  );
}

export function TermoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="8" y="2" width="5" height="4" rx="1" />
      <path d="M7 6h7l1.5 3.5A4 4 0 0 1 16 11v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8c0-.6.1-1.2.4-1.7L7 6Z" />
      <path d="M7 13h9" />
    </svg>
  );
}

export function YerbaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21c0-6 2-9 7-12-3 1-6 1-8-1 4 0 5-2 5-5-3 4-9 4-10 10-.6 3 1 6 6 8Z" />
    </svg>
  );
}

export function AccesorioIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M4 12h16" />
    </svg>
  );
}

export function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <path d="M3 4h2l2.2 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 8H6" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MinusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
    </svg>
  );
}

export function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export const CATEGORY_ICONS = {
  mates: MateIcon,
  bombillas: BombillaIcon,
  canastas: CanastaIcon,
  termos: TermoIcon,
  yerba: YerbaIcon,
  accesorios: AccesorioIcon,
};
