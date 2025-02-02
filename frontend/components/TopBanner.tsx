import { AlertTriangle } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-yellow-600 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <span className="font-medium text-sm sm:text-base text-black">
            Trying{" "}
            <a
              target="blank"
              href="https://aptos.dev/en/build/create-aptos-dapp/templates/boilerplate"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Aptos
            </a>
            {" "}on IDX Google.
          </span>
        </div>
        <div className="ml-4 flex-shrink-0"></div>
      </div>
    </div>
  );
}
