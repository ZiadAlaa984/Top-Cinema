export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex Content-Wrapper my-6  justify-center items-center">
      <h4 className="text-md capitalize">
        All rights reserved © Ziad Alaa - {currentYear}
      </h4>
    </div>
  );
}
