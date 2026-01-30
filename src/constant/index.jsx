/* ================= Digestive ================= */
export function DigestiveIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 8C18 8 14 8 14 12V14C14 18 18 20 18 24C18 28 14 30 14 34V36C14 40 18 40 18 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 8C30 8 34 8 34 12V14C34 18 30 20 30 24C30 28 34 30 34 34V36C34 40 30 40 30 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 16H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 24H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 32H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= Immune ================= */
export function ImmuneIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 6L38 12V24C38 34 31 40 24 42C17 40 10 34 10 24V12L24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 24H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= Cardiovascular ================= */
export function CardiovascularIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 38C24 38 10 28 10 18C10 12 14 8 20 8C23 8 24 10 24 10C24 10 25 8 28 8C34 8 38 12 38 18C38 28 24 38 24 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 22H20L22 18L24 26L26 20L28 22H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ================= Muscular ================= */
export function MuscularIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {[16, 24, 32].map((y) => (
        <g key={y}>
          <path
            d={`M12 ${y}C12 ${y} 14 ${y + 4} 18 ${y + 4}C22 ${y + 4} 24 ${y} 24 ${y}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d={`M24 ${y}C24 ${y} 26 ${y + 4} 30 ${y + 4}C34 ${y + 4} 36 ${y} 36 ${y}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path
        d="M18 12V36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 12V36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 12V36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= Skeletal ================= */
export function SkeletalIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 12C16 12 18 16 20 18C22 20 24 20 24 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 20C24 20 26 20 28 18C30 16 32 12 32 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 36C16 36 18 32 20 30C22 28 24 28 24 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 28C24 28 26 28 28 30C30 32 32 36 32 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18V30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 18V30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="36" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="36" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ================= Integumentary ================= */
export function IntegumentaryIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 16C12 14 16 14 24 14C32 14 36 14 40 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 24C12 22 16 22 24 22C32 22 36 22 40 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 32C12 30 16 30 24 30C32 30 36 30 40 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
// ===================================
export function NervousIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="20" r="3" fill="currentColor" />

      <path
        d="M16 20L8 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20L8 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20L8 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M32 20L40 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 20L40 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 20L40 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M20 12L24 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 12L28 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28L20 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28L28 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle cx="8" cy="16" r="1.5" fill="currentColor" />
      <circle cx="8" cy="24" r="1.5" fill="currentColor" />
      <circle cx="8" cy="28" r="1.5" fill="currentColor" />
      <circle cx="40" cy="16" r="1.5" fill="currentColor" />
      <circle cx="40" cy="24" r="1.5" fill="currentColor" />
      <circle cx="40" cy="28" r="1.5" fill="currentColor" />
      <circle cx="24" cy="8" r="1.5" fill="currentColor" />
      <circle cx="20" cy="36" r="1.5" fill="currentColor" />
      <circle cx="28" cy="36" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function EndocrineIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />

      <path
        d="M24 8V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 30V40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 24H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 24H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function UrinaryIcon({ className = "w-[50px] h-[50px]" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 12C10 12 8 16 8 22C8 28 10 32 14 32C16 32 18 30 18 26C18 22 16 20 16 18C16 16 18 14 18 14C18 14 16 12 14 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 12C38 12 40 16 40 22C40 28 38 32 34 32C32 32 30 30 30 26C30 22 32 20 32 18C32 16 30 14 30 14C30 14 32 12 34 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 26V34C18 36 20 38 24 38C28 38 30 36 30 34V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 38V42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
