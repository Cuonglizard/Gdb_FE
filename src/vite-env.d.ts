/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    initial_data: {
      csrf_token: string;
      gdbpid: number;
      gdb_command: string;
      gdbgui_version: string;
      using_windows: boolean;
      [key: string]: any;
    };
  }
}

export {};
