import Image from 'next/image';

export default function GalleryGrid({images}:{images:string[]}){
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {images.map((src,i)=> (
        <div key={i} className="relative h-40 w-full overflow-hidden rounded-md">
          <Image src={src} alt={`gallery-${i}`} fill className="object-cover hover:scale-105 transition-transform" />
        </div>
      ))}
    </div>
  )
}
