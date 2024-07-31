
export interface HasName {
    name: string
}

export interface HasID {
    id: string
}

export type Domain = HasName & HasID