import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

const ROTATION_RANGE = 12;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const PERSPECTIVE = '1500px';

interface TiltShineCardProps {
  /** If provided, shows an image instead of a map */
  imageSrc?: string;
  imageAlt?: string;
  /** Google Maps query string (used when imageSrc is not set)  */
  mapsQuery?: string;
  title?: string;
  height?: string; // tailwind height class e.g. "h-64 md:h-80"
  className?: string;
}

export const TiltShineCard = ({
  imageSrc,
  imageAlt = 'Bild',
  mapsQuery = 'Robert-Bloch-Stra%C3%9Fe%2021%2C%2063322%20R%C3%B6dermark%2C%20Deutschland',
  title = 'Manuela Weber Immobilien – Rödermark',
  height = 'h-64 md:h-80',
  className = '',
}: TiltShineCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.3, 0, 0.3]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rX = ((e.clientY - rect.top) / rect.height - 0.5) * -ROTATION_RANGE;
    const rY = ((e.clientX - rect.left) / rect.width - 0.5) * ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: PERSPECTIVE }} className={`w-full ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
      >
        <div className={`relative w-full ${height}`}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <iframe
              title={title}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            />
          )}
        </div>
        {/* Sheen overlay */}
        <motion.div
          style={{ opacity: sheenOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/30 to-white/20 pointer-events-none"
        />
      </motion.div>
    </div>
  );
};