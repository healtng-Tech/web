export function GradientBlob({ color, size = "md", blur = "md", opacity = 50, className = "" }) {
  // Mapeo de tamaños
  const sizes = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[600px] h-[600px]",
    xl: "w-[800px] h-[800px]",
  };

  // Mapeo de blurs
  const blurs = {
    sm: "blur-xl",
    md: "blur-2xl",
    lg: "blur-3xl",
    xl: "blur-[120px]",
    "2xl": "blur-[150px]",
  };

  return (
    <div
      className={[
        "absolute rounded-full mix-blend-multiply filter",
        sizes[size],
        blurs[blur],
        color, // Aquí Tailwind usa tus variables --color-blob-... definidas en el tema
        className,
      ].join(' ')}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    />
  );
}