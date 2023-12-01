import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex h-[100dvh] items-center justify-center p-16">
      <Image alt="Logo" height={400} width={400} src="/podlasiak.svg" />
    </div>
  );
};
export default LoadingPage;
