export function buildOpenGraph(title:string, description:string, url:string){
  return {
    title,
    description,
    openGraph: { title, description, url }
  }
}
