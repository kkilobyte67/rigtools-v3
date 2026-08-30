{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20       # Ensures standard stable Node.js runtime
    pkgs.nodePackages.npm # Provides package management
  ];

  shellHook = ''
    echo "=== Development Environment Initialized ==="
    echo "Node version: $(node -v)"
    echo "NPM version:  $(npm -v)"
  '';
}
