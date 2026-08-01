import Image from 'next/image';

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {images.map((src, i) => (
        <div key={`${src}-${i}`} className="group relative h-72 w-full overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
          <Image src={src} alt={`gallery-${i}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  );
}
