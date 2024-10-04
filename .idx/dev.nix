{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    
  
 "castrogusttavo.symbols"
 "dbaeumer.vscode-eslint"
 "esbenp.prettier-vscode"
 "bradlc.vscode-tailwindcss"
 "ecmel.vscode-html-css"
 "formulahendry.auto-rename-tag"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}