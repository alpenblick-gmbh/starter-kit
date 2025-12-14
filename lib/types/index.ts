// Basis-Types fuer das Projekt
// Erweitere diese Datei mit projekt-spezifischen Types

export type User = {
  id: string
  email: string
  created_at: string
}

// Beispiel fuer API-Response Types
export type ApiResponse<T> = {
  data: T | null
  error: string | null
}
