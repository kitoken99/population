/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APIKEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}