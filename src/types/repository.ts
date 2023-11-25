export type Repository = {
  search: Search
}

export type Search = {
  repositoryCount: number
  repos: RepoElement[]
  pageInfo: PageInfo
}

export type PageInfo = {
  endCursor: string
  hasNextPage: boolean
  startCursor: string
}

export type RepoElement = {
  repo: RepoInfo
}

export type RepoInfo = {
  description: string
  forkCount: number
  id: string
  name: string
  stargazerCount: number
  url: string
}
