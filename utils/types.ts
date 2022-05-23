export interface WebSite {
    id: number,
    name: string,
    url: string,
    enabled: boolean
}

export interface WebSiteList {
    head: {
        time: string
    },
    sites: WebSite[]
}