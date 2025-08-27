import { useEffect, useRef } from 'react';
import './FeatureCard.css';
import type { Feature } from '../../interfaces';

interface Props {
  feature: Feature;
}

export function FeatureCard({ feature }: Props) {
  const iconContainer = useRef<HTMLDivElement>(null);
  const { icon, title, description, iconColor } = feature;

  useEffect(() => {
    if (!iconContainer.current) return;

    iconContainer.current.innerHTML = icon;
  }, [iconContainer, icon]);

  return (
    <>
      <article className="shadow-3 p-5 text-center bg-card border-card min-h-full">
        <div
          ref={iconContainer}
          className={
            'border-circle p-4 inline-flex justify-content-center align-items-center mb-1' +
            ` ${iconColor}`
          }
        >
        </div>
        <div className="text-900 font-medium text-2xl mb-4">{title}</div>
        <div className="text-700 mb-4 line-height-3"> {description}</div>
      </article>
    </>
  );
}
