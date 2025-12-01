export default function Wrapper({
  image,
  children,
  className = "",
}: {
  image?: string;

  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className="bg-cover bg-center  bg-fixed min-h-screen w-full"
      style={{ backgroundImage: `url(${image ? image : "/bg.jpg"})` }}
    >
      <div className="bg-black/80  min-h-screen w-full">
        <div className={`  ${className} py-6 md:pt-30 flex flex-col gap-6`}>
          {children}
        </div>
      </div>
    </main>
  );
}
