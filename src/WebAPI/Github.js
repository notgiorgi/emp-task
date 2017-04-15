import axios from 'axios'

export const GithubAPIURL = 'https://api.github.com/'

export const respository = {
  search(query) {
    return axios.get(`${GithubAPIURL}search/repositories?q=${query}`)
  },
}

export const user = {}

export default {
  respository,
  user,
}
