export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex  py-6 justify-center items-center">
      <h4 className="text-md capitalize">
        All rights reserved ©{" "}
        <a target="_blank" href="https://portfolio-amrm.vercel.app/">
          Ziad Alaa
        </a>{" "}
        - {currentYear}
      </h4>
    </div>
  );
}
