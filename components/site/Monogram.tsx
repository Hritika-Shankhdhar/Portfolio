// "H" brand mark - a block letter with a notch.
export default function Monogram({ size = 40, className = "", color = "var(--yellow)" }: { size?: number; className?: string; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
            <g fill={color}>
                <path d="M8 8h14v18h20V8h14v48H42V38H22v18H8z" />
                <circle cx="32" cy="16" r="5" />
            </g>
        </svg>
    );
}
