// Tipos globais para o projeto

declare global {
  // Extensões de módulos
  declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
  }

  declare module '*.png' {
    const content: string
    export default content
  }

  declare module '*.jpg' {
    const content: string
    export default content
  }

  declare module '*.jpeg' {
    const content: string
    export default content
  }

  declare module '*.gif' {
    const content: string
    export default content
  }

  declare module '*.webp' {
    const content: string
    export default content
  }

  // Variáveis de ambiente
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_SITE_URL: string
      RESEND_API_KEY: string
      GOOGLE_ANALYTICS_ID: string
    }
  }

  // Extensões de APIs nativas
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }

  // Tipos de utilitários
  type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
  }

  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

  type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

  type NonNullableFields<T, K extends keyof T> = T & {
    [P in K]: NonNullable<T[P]>
  }

  // Tipos de componentes
  type ComponentProps<T extends React.ComponentType<any>> = T extends React.ComponentType<infer P> ? P : never

  type ReactRef<T> = React.Ref<T> | React.RefObject<T> | React.MutableRefObject<T>

  // Tipos de eventos
  type EventHandler<T = Event> = (event: T) => void

  type MouseEventHandler = EventHandler<React.MouseEvent>
  type KeyboardEventHandler = EventHandler<React.KeyboardEvent>
  type FocusEventHandler = EventHandler<React.FocusEvent>
  type ChangeEventHandler = EventHandler<React.ChangeEvent>

  // Tipos de API
  type ApiResponse<T = any> = {
    success: boolean
    data?: T
    error?: string
    message?: string
  }

  type PaginatedResponse<T> = {
    data: T[]
    total: number
    page: number
    limit: number
    totalPages: number
  }

  // Tipos de formulários
  type FormField = {
    value: string
    error?: string
    touched: boolean
  }

  type FormState<T> = {
    [K in keyof T]: FormField
  }

  // Tipos de animação
  type AnimationVariant = 'fade' | 'slide' | 'scale' | 'rotate' | 'custom'

  type AnimationConfig = {
    duration?: number
    delay?: number
    ease?: string
    repeat?: number | boolean
  }

  // Tipos de tema
  type Theme = 'light' | 'dark' | 'system'

  type ColorScheme = {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    border: string
  }

  // Tipos de breakpoints
  type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>

  // Tipos de validação
  type ValidationRule = {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: any) => boolean | string
  }

  type ValidationSchema<T> = {
    [K in keyof T]?: ValidationRule
  }
}

export {} 