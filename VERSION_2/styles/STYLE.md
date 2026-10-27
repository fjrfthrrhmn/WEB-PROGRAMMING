```
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9946 0.0026 286.3519);
  --foreground: oklch(0.1615 0.0105 285.1663);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.1615 0.0105 285.1663);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.1615 0.0105 285.1663);
  --primary: oklch(0.5828 0.2188 258.8797);
  --primary-foreground: oklch(0.9670 0.0029 264.5419);
  --secondary: oklch(0.9518 0.0231 277.9569);
  --secondary-foreground: oklch(0.4446 0.0983 268.5283);
  --muted: oklch(0.9601 0.0093 286.2229);
  --muted-foreground: oklch(0.5052 0.0379 284.9640);
  --accent: oklch(0.9712 0.0136 258.3446);
  --accent-foreground: oklch(0.6081 0.2114 266.2130);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(0.9842 0.0034 247.8575);
  --border: oklch(0.9163 0.0162 286.0759);
  --input: oklch(0.9163 0.0162 286.0759);
  --ring: oklch(0.5565 0.2430 261.9529);
  --chart-1: oklch(0.5553 0.2554 283.4559);
  --chart-2: oklch(0.6037 0.2141 267.5162);
  --chart-3: oklch(0.7495 0.1297 210.9704);
  --chart-4: oklch(0.8023 0.1492 175.5763);
  --chart-5: oklch(0.6945 0.1422 167.0638);
  --sidebar: oklch(0.9946 0.0026 286.3519);
  --sidebar-foreground: oklch(0.1615 0.0105 285.1663);
  --sidebar-primary: oklch(0.5828 0.2188 258.8797);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9634 0.0175 279.0619);
  --sidebar-accent-foreground: oklch(0.6256 0.2009 264.0684);
  --sidebar-border: oklch(0.9163 0.0162 286.0759);
  --sidebar-ring: oklch(0.5828 0.2188 258.8797);
  --font-sans: Geist, ui-sans-serif, sans-serif, system-ui;
  --font-serif: Lora, ui-serif, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 1.4rem;
  --shadow-x: 0px;
  --shadow-y: 4px;
  --shadow-blur: 15px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.15;
  --shadow-color: #000000;
  --shadow-2xs: 0px 4px 15px 0px hsl(0 0% 0% / 0.07);
  --shadow-xs: 0px 4px 15px 0px hsl(0 0% 0% / 0.07);
  --shadow-sm: 0px 4px 15px 0px hsl(0 0% 0% / 0.15), 0px 1px 2px -1px hsl(0 0% 0% / 0.15);
  --shadow: 0px 4px 15px 0px hsl(0 0% 0% / 0.15), 0px 1px 2px -1px hsl(0 0% 0% / 0.15);
  --shadow-md: 0px 4px 15px 0px hsl(0 0% 0% / 0.15), 0px 2px 4px -1px hsl(0 0% 0% / 0.15);
  --shadow-lg: 0px 4px 15px 0px hsl(0 0% 0% / 0.15), 0px 4px 6px -1px hsl(0 0% 0% / 0.15);
  --shadow-xl: 0px 4px 15px 0px hsl(0 0% 0% / 0.15), 0px 8px 10px -1px hsl(0 0% 0% / 0.15);
  --shadow-2xl: 0px 4px 15px 0px hsl(0 0% 0% / 0.38);
  --tracking-normal: -0.01em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.1440 0.0028 247.0906);
  --foreground: oklch(0.9643 0.0083 271.3283);
  --card: oklch(0.1809 0.0052 248.1162);
  --card-foreground: oklch(0.9643 0.0083 271.3283);
  --popover: oklch(0.1899 0.0051 248.0992);
  --popover-foreground: oklch(0.9643 0.0083 271.3283);
  --primary: oklch(0.5828 0.2188 258.8797);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.2673 0.0433 266.5444);
  --secondary-foreground: oklch(0.8818 0.0577 274.3908);
  --muted: oklch(0.2303 0.0125 264.2926);
  --muted-foreground: oklch(0.7364 0.0183 248.0773);
  --accent: oklch(0.3071 0.0440 265.8618);
  --accent-foreground: oklch(0.8761 0.0629 250.7253);
  --destructive: oklch(0.5260 0.2086 27.2595);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.2258 0.0025 247.9355);
  --input: oklch(0.2989 0.0165 275.4735);
  --ring: oklch(0.7034 0.1543 265.1217);
  --chart-1: oklch(0.6231 0.1880 259.8145);
  --chart-2: oklch(0.6268 0.2325 303.9004);
  --chart-3: oklch(0.5854 0.2041 277.1173);
  --chart-4: oklch(0.6056 0.2189 292.7172);
  --chart-5: oklch(0.7845 0.1325 181.9120);
  --sidebar: oklch(0.1809 0.0052 248.1162);
  --sidebar-foreground: oklch(0.9197 0.0040 286.3202);
  --sidebar-primary: oklch(0.6610 0.1822 256.5730);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.2753 0.0392 259.3583);
  --sidebar-accent-foreground: oklch(0.8877 0.0543 270.3821);
  --sidebar-border: oklch(0.2793 0.0034 228.9134);
  --sidebar-ring: oklch(0.7429 0.1344 255.6155);
  --font-sans: Geist, ui-sans-serif, sans-serif, system-ui;
  --font-serif: Lora, ui-serif, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 1.4rem;
  --shadow-x: 0px;
  --shadow-y: 10px;
  --shadow-blur: 25px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.15;
  --shadow-color: #000000;
  --shadow-2xs: 0px 10px 25px 0px hsl(0 0% 0% / 0.07);
  --shadow-xs: 0px 10px 25px 0px hsl(0 0% 0% / 0.07);
  --shadow-sm: 0px 10px 25px 0px hsl(0 0% 0% / 0.15), 0px 1px 2px -1px hsl(0 0% 0% / 0.15);
  --shadow: 0px 10px 25px 0px hsl(0 0% 0% / 0.15), 0px 1px 2px -1px hsl(0 0% 0% / 0.15);
  --shadow-md: 0px 10px 25px 0px hsl(0 0% 0% / 0.15), 0px 2px 4px -1px hsl(0 0% 0% / 0.15);
  --shadow-lg: 0px 10px 25px 0px hsl(0 0% 0% / 0.15), 0px 4px 6px -1px hsl(0 0% 0% / 0.15);
  --shadow-xl: 0px 10px 25px 0px hsl(0 0% 0% / 0.15), 0px 8px 10px -1px hsl(0 0% 0% / 0.15);
  --shadow-2xl: 0px 10px 25px 0px hsl(0 0% 0% / 0.38);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    letter-spacing: var(--tracking-normal);
  }
}

```