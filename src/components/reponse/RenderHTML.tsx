export default function RenderHTML({ HTMLContent }: { HTMLContent: string }) {
  return (
    <div
      className="h-[100%] w-full flex items-center justify-center bg-[linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)] text-black"
      dangerouslySetInnerHTML={{ __html: HTMLContent }}
    />
  );
}
