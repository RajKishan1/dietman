export default function RenderHTML({ HTMLContent }: { HTMLContent: string }) {
  return (
    <div
      className="h-[100%] w-full flex items-center justify-center bg-green-300 text-black"
      dangerouslySetInnerHTML={{ __html: HTMLContent }}
    />
  );
}
